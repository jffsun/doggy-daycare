import React from "react";
import DaycareContainer from "./components/DaycareContainer";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


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