'use client'
import '../app/globals.css'
import React, { useEffect } from 'react'
import { getBills , saveBills } from '@/functions/localstorage'
import './component.css'

const ShowBill = () => {
    const [bills, setBills] = React.useState([]);
React.useEffect(() => {
    setBills(getBills());
},[])

const deleteBills = (index) => {
    const updatedBills = bills.filter((_, i) => i !== index);
    setBills(updatedBills);
    saveBills(updatedBills);
    location.reload()
}
  return (
    <div className=" w-full h-screen overflow-auto flex justify-center">
        <div className='showBillData  h-auto'>
            {bills.length === 0 ? (
            <p>No bills added</p>
            ) : (
            bills.map((bill, index) => (
            <div key={index} className='showTrip m-2 p-2'>
                <div className=" h-[50px] flex justify-between text-2xl">
                    <p>{bill.billName}</p>
                    <p>${bill.amount}</p> 
                </div>
                <div className="w-full h-[42px] flex">
                    <div className="w-3/4 flex p-3 "></div>
                    <div className="w-1/4 p-3 flex justify-end items-center">
                        <button type="button" className='w-[20px] h-[20px] bg-transparent text-red-600 text-xl cursor-pointer' onClick={() => deleteBills(index)}>Del</button>
                    </div>
                </div>
            </div>
                ))
            )}
        </div>
    </div>
  )
}
export default ShowBill