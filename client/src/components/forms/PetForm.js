import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { ADD_PET } from "../../utils/mutations";
import { useMutation } from '@apollo/client';


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

    const [gender, setGender] = useState('')
    const handleGender = (event) => {
        setGender(event.target.value)
    }

    const [addPet, {error, data}] = useMutation(ADD_PET);

    // state for the fileinput
    const [fileInputState, setFileInputState] = useState('');
    // state for file converted to base64
    const [previewSource, setPreviewSource] = useState();
    // state for the file to be uploaded to the database
    const [selectedFile, setSelectedFile] = useState('');

    const fileInputChange = (e) => {
        // targets the chosen file
        const file = e.target.files[0];
        convertFile(file);
    };

    const convertFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        }
    };

    
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await addPet({
                variables: {name: name, age: age, gender: gender, medication: medication, image: previewSource}
            });
        } catch (err) {
            console.log(err);
        }
    }

    return(
        <div>
            <h1>New Pet</h1>
            <form onSubmit={handleFormSubmit}>
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
                    <input type='text' name="gender" value={gender} onChange={handleGender} required/>
                </label>
                
                <label>
                    Medication:
                    <input type='text' name="medication" value={medication} onChange={handleMedication}/>
                </label>

                <label>
                    <input type="file" name="image" onChange={fileInputChange}
                    value={fileInputState} className="form-input"/>
                </label>

                <input type='submit' value='Submit'/>
            </form>
        </div>
    )
}