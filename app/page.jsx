"use client"
import React from 'react';
import '../components/component.css';
import './globalsFont.css';
import { useBill } from '@/components/context';
import AddBills from '../components/AddBill';
import ShowBill from '@/components/showBill';
import AddPeople from '@/components/AddPeople';



export default function Home() {
  
  
  return (
    <div>
      <div className="container max-w-full h-[90vh] flex flex-col items-center p-10">
        <div className="centerScreen">
          <AddBills />
          <AddPeople />
        </div>

        <ShowBill />
      </div>
    </div>
  );
}
