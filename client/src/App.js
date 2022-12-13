import React from "react";
import DaycareContainer from "./components/DaycareContainer";

import Modal from 'react-modal';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// Bind modal to your appElement
Modal.setAppElement('#root')

const App = () => {
    return(
        <>
        <Router>
            <DaycareContainer/>
        </Router>
        </>
        
    )

}

export default App;