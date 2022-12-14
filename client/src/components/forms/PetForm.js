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
        <div className="container">
            <h1>New Pet</h1>
            <br />
            <form onSubmit={handleFormSubmit}>
                <div className="fileUpload">
                <label>
                    Add Photo
                    <input type="file" 
                    name="image" 
                    onChange={fileInputChange}
                    value={fileInputState} 
                    className="form-input"/>
                </label>
                </div>
            <br />
            <br />
                <input 
                    type='text' 
                    className="input" 
                    name="name" 
                    value={name} 
                    placeholder="Pet Name"
                    onChange={handleName} 
                    required>
                </input>
            <br />
                    <input type='number' 
                    className="input" 
                    name="age" 
                    value={age} 
                    placeholder="Age"
                    onChange={handleAge} 
                    required>
                </input>
            <br />
                    <input type='text' 
                    className="input" 
                    name="gender" 
                    value={gender} 
                    placeholder="Gender"
                    onChange={handleGender} 
                    required>
                </input>
            <br />   
                    <input 
                    type='text-box' 
                    className="input" 
                    name="medication" 
                    value={medication} 
                    placeholder="Medication"
                    onChange={handleMedication}>
                </input>
            <br />
            <br />

                <input
                    data-testid="submitButton"
                    type="submit"
                    className="Submit btn btn-danger"
                    value="Submit"
                    // onClick={handleFormSubmit}
                ></input>
            </form>
        </div>
    )
}