"use client"

import React from "react"
import { useBill } from "./context"
import '../app/globals.css'
import { getBills } from '@/functions/localstorage'
import './component.css'

const AddBills = ({ bills, setBills }) => {
  const { isVisible, setIsVisible } = useBill()
  const [billName, setBillName] = React.useState("");
  const [amount, setAmount] = React.useState("");

  const closeAddBills = () => {
    setIsVisible(false)
    setBillName('')
    setAmount('')
  }

  const saveBillsToLocalstorage = (bills) => {
    localStorage.setItem("bills", JSON.stringify(bills))
  }

  const handleAddButton = () => {
    if (!billName.trim() || !amount.trim()) {
      return alert("Please fill every input!")
    }
    const billsData = { billName, amount }
    const updatebill = [...bills, billsData]
    setBills(updatebill)
    saveBillsToLocalstorage(updatebill)

    setIsVisible(false)
    setBillName("")
    setAmount("")
    console.log("Already add")
  }
  React.useEffect(() => {
    setBills(getBills());
  }, [])

  return (
    <div className="billContainer">
      <div className={`bill h-72 ${(isVisible) ? 'visible' : ''} absolute z-6`}>
        <div className="flex-col text-xl p-3 m-3">
          <div className="w-full h-12">
            <h1>Add new bill</h1>
          </div>
          <div className="w-full h-12 opacity-60">
            <h4>Add a new bill to the list</h4>
          </div>
          <div className="w-full h-30">
            <input className="border-b-slate-400 w-full h-10 mb-3 p-2"
              placeholder="Bill Name"
              value={billName}
              onChange={(e) => setBillName(e.target.value)} />

            <input className="border-b-slate-400 w-full h-10 p-2"
              placeholder="Amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)} />
          </div>

          <div className="w-full h-10 flex items-center justify-end p-4 space-x-4">
            <button type="button" className="w-20 h-10 bg-transparent text-blue-500" onClick={closeAddBills}>CANCEL</button>
            <button type="button" className="w-20 h-10 bg-transparent text-blue-500" onClick={handleAddButton}>ADD</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AddBills