'use client'
import React from "react"
import { useAddPeople } from "./context"
import { AddPeopleToList, getPeople } from "@/functions/localstorage"
import '../app/globals.css'

const AddPeople = ({ peopleList, setPeopleList }) => {
    const { isAddPeopleVisible, setIsAddPeopleVisible } = useAddPeople()
    const [newPeople, setNewPeople] = React.useState('')
    // const [peopleList, setPeopleList] = React.useState([])

    const AddPeoples = () => {
        if (!newPeople.trim()) {
            return alert("Please enter people name")
        }
        if (peopleList.includes(newPeople)) {
            alert("This name already exists!");
            return;
        }
        const updatePeople = [...(peopleList || []), newPeople];
        setPeopleList(updatePeople)
        AddPeopleToList(updatePeople)
        setNewPeople('');
    }

    const okButton = () => {
        setIsAddPeopleVisible(false)
        // location.reload()
    }
    const deletePeopleButton = (name) => {
        const updatePeople = peopleList.filter((_, i) => i !== name)
        setPeopleList(updatePeople)
        AddPeopleToList(updatePeople)
    }

    React.useEffect(() => {
        setPeopleList(getPeople())
    }, [])
    return (
        <div className="addPeopleContainer">
            <div className={`addPeople h-80 flex-col p-3 ${(isAddPeopleVisible) ? 'visible' : ''} z-4 absolute`}>
                <div className="w-full h-5 m-2">Add new people</div>
                <div className="w-full h-5 opacity-30 m-1"><p>Add new people in the list of this trip</p></div>
                <div className="showAddPeople w-full h-36 overflow-x-hidden overflow-y-auto">
                    {peopleList.length === 0 ? (
                        <div className="w-full h-full flex justify-center items-center opacity-50">
                            <p>People Name here!</p>
                        </div>
                    ) : (
                        peopleList.map((name, i) => (
                            <div key={i} className="w-full h-10 flex p-2 items-center justify-between mt-1">
                                <div className="text-xl ml-1 opacity-80">{name}</div>
                                <button onClick={() => deletePeopleButton(i)} type="button"><span className="material-symbols-outlined">delete</span></button>
                            </div>
                        ))
                    )
                    }
                </div>
                <div className="w-full h-10 flex justify-center">
                    <input value={newPeople}
                        placeholder="People Name..."
                        className="w-full p-2 h-10 mt-2 "
                        onChange={(e) => setNewPeople(e.target.value)} />
                </div>
                <div className="w-full h-16 flex justify-end text-blue-500 text-lg gap-5 mt-3">
                    <button type="button" onClick={AddPeoples}>ADD</button>
                    <button type="button" onClick={okButton}>OK</button>
                </div>
            </div>
        </div>
    )
}
export default AddPeople