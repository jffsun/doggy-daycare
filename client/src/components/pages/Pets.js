import React, {useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import Upload from '../Upload';
import AddEventModal from '../AddEventModal';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PetForm from '../forms/PetForm';
import PetRoutes from '../../routes/PetRoutes';

export default function Pets() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
    
    <div className="container">
      <h1>Pets</h1>
      <br />
      <button type="button" class="btn btn-danger"><Link to='/form'>Add Pet</Link></button>
    </div>

      <Routes>
        <Route path="/form" element={<PetRoutes/>}/>
      </Routes>

    </>
  );
}

