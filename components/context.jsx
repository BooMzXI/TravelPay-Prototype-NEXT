"use client"

import React, { createContext, useContext } from "react"

    const Bill = createContext();
   
export const useBill = () => useContext(Bill);
    
export const BillProvider = ({ children }) => {
        const [isVisible, setIsVisible] = React.useState(false);
        return (
            <Bill.Provider value={{ isVisible, setIsVisible }}>
                {children}
            </Bill.Provider>
          )
    }


    const addPeople = createContext();

    export const useAddPeople = () => useContext(addPeople)

    export const AddPeopleProvider = ({ children }) => {
        const [isAddPeopleVisible, setIsAddPeopleVisible] = React.useState(false);
        return (
            <addPeople.Provider value={{isAddPeopleVisible , setIsAddPeopleVisible}}>
                {children}
            </addPeople.Provider>
        )
    }