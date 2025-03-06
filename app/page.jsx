"use client"
import React from 'react';
import '../components/component.css';
import './globalsFont.css';
import AddBills from '../components/AddBill';
import ShowBill from '@/components/showBill';
import AddPeople from '@/components/AddPeople';
import ShowTotals from '@/components/showPayTotal';
// import { useBill , useAddPeople , useShowTotal } from '../components/context' // Wait for implement


export default function Home() {
  // const { isVisible } = useBill()
  // const { isAddPeopleVisible } = useAddPeople()
  // const { isShowTotalVisible } = useShowTotal()

  const [bills, setBills] = React.useState([]);
  const [peopleList, setPeopleList] = React.useState([])

  return (
    <div>
      <div className={`container z-0 max-w-full h-[90vh] flex flex-col items-center p-2 `}>
        <div className="centerScreen">
          <AddBills bills={bills} setBills={setBills} />
          <AddPeople peopleList={peopleList} setPeopleList={setPeopleList} />
          <ShowTotals />
        </div>

        <ShowBill bills={bills} setBills={setBills} peopleList={peopleList} />
      </div>
    </div>
  );
}
