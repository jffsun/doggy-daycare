import React from 'react';
import { Link } from 'react-router-dom';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// import PetRoutes from '../../routes/PetRoutes';

export default function Pets() {
  return (
    <>
    <div className="container">
      <h1>Pets</h1>
      <br />
      <button type="button" class="btn btn-danger"><Link to='/pets/form'>Add Pet</Link></button>
    </div>

    </>
  );
}

