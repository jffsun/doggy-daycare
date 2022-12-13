import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PetForm from "../components/forms/PetForm";

export default function PetRoutes() {
    return(
        <>
            <Routes>
                <Route path="/" element={<PetForm/>}/>
            </Routes>
        </>
    )
}