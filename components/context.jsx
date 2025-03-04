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

    const showTotal = createContext()
    export const useShowTotal = () => useContext(showTotal)
    export const ShowTotalProvider = ({ children }) => {
        const [isShowTotalVisible , setIsShowTotalVisible] = React.useState(false)
        return (
            <showTotal.Provider value={{isShowTotalVisible , setIsShowTotalVisible}}>
                {children}
            </showTotal.Provider>
        )
    }

    const visibleCheck = createContext()

    export const useVisibleCheck = () => useContext(visibleCheck)
    export const VisibleCheck = ({children}) => {
        const [isPanelVisible , setIsPanelVisible] = React.useState(false)
        return (
            <visibleCheck.Provider value={{isPanelVisible , setIsPanelVisible}}>
                {children}
            </visibleCheck.Provider>
        )
    }