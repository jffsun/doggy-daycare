import React from "react";
import DaycareContainer from "./components/DaycareContainer";
import Modal from 'react-modal';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from "./components/pages/Login";
import PetForm from "./components/forms/PetForm";
import Pets from "./components/pages/Pets";
// import { FormRoutes } from "./routes/PetRoutes";

// Bind modal to your appElement
Modal.setAppElement('#root')

const App = () => {
    return(
        <>
        <Router>
            <DaycareContainer/>
            <Routes>
                <Route path='/login' element={<Login/>}/>
            </Routes>
            <Routes>
                {/* <Route path="/pets" element={<Pets/>}/> */}
                <Route path="/pets/form" element={<PetForm/>}/>
            </Routes>

        </Router>
        </>
    )
}

export default App;