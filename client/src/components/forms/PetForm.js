import React, { useState } from "react";

import { ADD_PET } from "../../utils/mutations";
import { useMutation } from '@apollo/client';
import Auth from "../../utils/auth";



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

    const [addPet, {error}] = useMutation(ADD_PET);

    // state for the fileinput
    const [fileInputState, setFileInputState] = useState('');
    // state for file converted to base64
    const [previewSource, setPreviewSource] = useState();

    const fileInputChange = (e) => {
        // targets the chosen file
        const file = e.target.files[0];

        if (!file) {
            setFileInputState({});
        }
        convertFile(file);
    };

    const convertFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        }
    };

    const newPet = {
        name: name,
        age: age,
        medication: medication,
        gender: gender,
        image: previewSource
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        console.log(newPet);

        const authData = Auth.getProfile();

        const _id = authData.data._id;

        try {
            const { data } = await addPet({
                variables: { _id, input: newPet }
            });

            if (!data) {
                console.log(error)
            };

            console.log({data});
        } catch (err) {
            console.log(err);
        }

    }

    return(
        <div className="container">
            <h1>New Pet</h1>
            <br />
            <form>
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
                    onClick={handleFormSubmit}
                ></input>
            </form>
        </div>
    )
}