"use client"

import React from 'react';
import './component.css';
import '../app/globalsFont.css'
import { useBill } from './context';
import { useAddPeople } from './context';
import { useShowTotal } from './context'
import { useVisibleCheck } from './context';


const TempMenuBottom = () => {
  const { isPanelVisible , setIsPanelVisible } = useVisibleCheck()
  const { setIsVisible } = useBill()

  const handleClick = () => {
    setIsVisible((prev) => !prev);
    setIsPanelVisible((prev) => !prev);
  };

  const { isAddPeopleVisible , setIsAddPeopleVisible } = useAddPeople()
  const setAddPeopleVisible = () => {
    setIsAddPeopleVisible((prev) => !prev)
    setIsPanelVisible((prev) => !prev)
  }

  const { isShowTotalVisible , setIsShowTotalVisible } = useShowTotal()
  const setTotalVisible = () => {
    setIsShowTotalVisible((prev) => !prev)
    setIsPanelVisible((prev) => !prev)
  }
  return (
    <div className={`menu_bottom z-10`}>
        <button type="button">
        <span className="material-symbols-outlined text-3xl" onClick={setAddPeopleVisible}>person_add</span>
        </button>
        
        <button className='bg-white w-14 h-14 rounded-full flex justify-center items-center absolute -top-5'>
          <span onClick={handleClick} className='material-symbols-outlined scale-150'>add_circle</span>
        </button>

        <button type='button'>
          <span onClick={setTotalVisible} className='material-symbols-outlined text-3xl'>functions</span>
        </button>
    </div>
  )
}
export default TempMenuBottom