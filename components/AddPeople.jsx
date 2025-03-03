'use client'
import React from "react"
import { useAddPeople } from "./context"
import { AddPeopleToList } from "@/functions/localstorage"

const AddPeople = () => {
const { isAddPeopleVisible , setIsAddPeopleVisible } = useAddPeople()
const [peopleName , setPeopleName] = React.useState('')

const [peopleList , setPeopleList] = React.useState([])

const cancelButton = () => {
    setIsAddPeopleVisible(false)
}
const AddPeoples = () => {
    if (!peopleName.trim()){
        alert("Please enter people name")
    }
    AddPeopleToList(peopleList)
}
  return (
    <div className="addPeopleContainer">
        <div className={`addPeople h-80 flex-col p-3 ${isAddPeopleVisible ? 'visible' : ''}`}>
            <div className="w-full h-5 m-2">Add new people</div>
            <div className="w-full h-5 opacity-30 m-1"><p>Add new people in the list of this trip</p></div>
            <div className="showAddPeople w-full h-36 overflow-x-hidden overflow-y-auto"></div>
            <div className="w-full h-10 flex justify-center">
                <input value={peopleName} placeholder="People Name..." className="w-full p-2 h-10 mt-2 "/>
            </div>
            <div className="w-full h-16 flex justify-end text-blue-500 text-lg gap-5 mt-3">
                <button type="button" onClick={cancelButton}>CANCEL</button>
                <button type="button">ADD</button>
                <button type="button">OK</button>
            </div>
        </div>
    </div>
  )
}
export default AddPeople