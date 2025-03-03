"use client"

import React from 'react';
import './component.css';
import '../app/globalsFont.css'
import { useBill } from './context';
import { useAddPeople } from './context';

const TempMenuBottom = () => {

  const { setIsVisible } = useBill()
  const handleClick = () => {
    setIsVisible((prev) => !prev);
  };

  const { isAddPeopleVisible , setIsAddPeopleVisible } = useAddPeople()
  const setAddPeopleVisible = () => {
    setIsAddPeopleVisible((prev) => !prev)
    console.log(isAddPeopleVisible)
  }
  return (
    <div className="menu_bottom">
        <button type="button">
        <span className="material-symbols-outlined text-3xl" onClick={setAddPeopleVisible}>person_add</span>
        </button>
        
        <button className='bg-white w-14 h-14 rounded-full flex justify-center items-center absolute -top-5'>
          <span onClick={handleClick} className='material-symbols-outlined scale-150'>add_circle</span>
        </button>

        <button type='button'>
          <span className='material-symbols-outlined text-3xl'>functions</span>
        </button>
    </div>
  )
}
export default TempMenuBottom