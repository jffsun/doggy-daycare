import React from 'react';
import { Link } from 'react-router-dom';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PetForm from '../forms/PetForm';
import PetRoutes from '../../routes/PetRoutes';
import Card from '../Card';
import pets from '../../pets.json';

export default function Pets() {
  return (
    <>
    <div className="container">
      <h1>Pets</h1>
      <br />
      <button type="button" class="btn btn-danger"><Link to='/form'>Add Pet</Link></button>
      <br />
      <div>
        {pets.map((pet) => 
        <Card name={pet.name} age={pet.age} gender={pet.gender} image={pet.image} medication={pet.medication} />
        )}
      </div>
    </div>

      <Routes>
        <Route path="/form" element={<PetRoutes/>}/>
      </Routes>

    </>
  );
}

