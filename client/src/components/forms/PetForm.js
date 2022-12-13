import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


export default function PetForm(){

    const [name, setName] = useState('')
    const handleName = (event) =>{
        setName(event.target.value)
    }

    const [age, setAge] = useState('')
    const handleAge = (event) => {
        setAge(event.target.value)
    }


    const [medication, setMedication] = useState('')
    const handleMedication = (event) => {
        setMedication(event.target.value)
    }

    return(
        <div>
            <h1>New Pet</h1>
            <form>
                <label>
                    Name:
                    <input type='text' name="name" value={name} onChange={handleName} required/>
                </label>

                <label>
                    Age:
                    <input type='number' name="age" value={age} onChange={handleAge} required/>
                </label>

                <label>
                    Gender:
                    <select>
                        <option value='Male'>
                            Male
                        </option>
                        <option value='Female'>
                            Female
                        </option>
                        <option value='Other'>
                            Other
                        </option>
                    </select>
                </label>
                
                <label>
                    Medication:
                    <input type='text' name="medication" value={medication} onChange={handleMedication}/>
                </label>

                <input type='submit' value='Submit'/>
            </form>
        </div>
    )
}