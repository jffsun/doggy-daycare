import React from 'react';
import { Link } from 'react-router-dom';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PetForm from '../forms/PetForm';
import PetRoutes from '../../routes/PetRoutes';

export default function Pets() {
  return (
    <>
    <div className="container">
      <h1>Pets</h1>
        <button className='petForm'>
          <Link to='/form'>Add Pet</Link>
        </button>
        <button>Show Pet</button>
      
    </div>

      <Routes>
        <Route path="/form" element={<PetRoutes/>}/>
      </Routes>

    </>
  );
}
