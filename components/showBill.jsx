'use client'
import '../app/globals.css'
import React, { useEffect } from 'react'
import { getBills, saveBills, getPeople } from '@/functions/localstorage'
import './component.css'

const ShowBill = ({ bills, setBills, peopleList }) => {
    // const [bills, setBills] = React.useState([]);
    const [peoples, setPeoples] = React.useState([])
    React.useEffect(() => {
        const fetchedBills = getBills().map(bill => ({
            ...bill,
            selectedPeople: bill.selectedPeople || []
        }));
        setBills(fetchedBills);
        setPeoples(getPeople())
    }, [peopleList])

    const deleteBills = (index) => {
        const updatedBills = bills.filter((_, i) => i !== index);
        setBills(updatedBills);
        saveBills(updatedBills);
    }
    const togglePerson = (billIndex, person) => {
        setBills(prevBills => {
            const updatedBills = prevBills.map((bill, i) => {
                if (i === billIndex) {
                    const selectedPeople = bill.selectedPeople || [];
                    const isSelected = selectedPeople.includes(person);
                    const updatedPeople = isSelected
                        ? selectedPeople.filter(p => p !== person)
                        : [...selectedPeople, person];
                    return { ...bill, selectedPeople: updatedPeople };
                }
                return bill;
            });

            saveBills(updatedBills);
            return updatedBills;
        });
    };
    return (
        <div className=" w-full h-screen overflow-auto flex justify-center">
            <div className='showBillData  h-auto w-full'>
                {bills.length === 0 ? (
                    <p>No bills added</p>
                ) : (
                    bills.map((bill, index) => (
                        <div key={index} className='showTrip m-2 p-2'>
                            <div className=" h-[50px] flex justify-between text-2xl">
                                <p>{bill.billName}</p>
                                <p>{bill.amount} ฿</p>
                            </div>
                            <div className="w-full h-[70px] flex">
                                <div className="w-3/4 h-full  flex p-3 items-center overflow-x-auto">
                                    {peoples.map((name) => (
                                        <div key={name} className="showPeople w-8 h-full ml-3 justify-center items-center">
                                            <input type="checkbox"
                                                name={name}
                                                checked={(bill.selectedPeople || []).includes(name)} // Got TypeError: Cannot read properties of undefined (reading 'includes')
                                                onChange={() => togglePerson(index, name)} />

                                            <div className="text-sm">{name}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="w-1/4 p-3 flex justify-end items-center">
                                    <button type="button" className='w-[20px] h-[20px] bg-transparent text-red-600 text-xl cursor-pointer' onClick={() => deleteBills(index)}><span className="material-symbols-outlined">delete</span></button>
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