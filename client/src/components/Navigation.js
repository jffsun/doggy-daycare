// Rendering a specific part of an applications UI
import React from 'react';

import { Link } from 'react-router-dom';


// Destructure props 'currentPage' and 'handlePageChange' passed into Navigation() 
export default function Navigation({ currentPage, handlePageChange}) {
  return (
    <>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark"> 
    <span className="navbar-brand mb-0">PUP | DOGGY DAYCARE</span>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse nav-right" id="collapsibleNavbar">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link
            to='/'
            onClick={() => handlePageChange('Home')}
            // Check to see if the currentPage is `Home`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >
            HOME
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to='/pets'
            onClick={() => handlePageChange('Pets')}
            // Check to see if the currentPage is `projects`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal navigation-link
            className={currentPage === 'Pets' ? 'nav-link active' : 'nav-link'}
          >
            PETS
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to='/bookings'
            onClick={() => handlePageChange('Bookings')}
            // Check to see if the currentPage is `Bookings`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal navigation-link
            className={currentPage === 'Bookings' ? 'nav-link active' : 'nav-link'}
          >
            BOOKINGS
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to='/services'
            onClick={() => handlePageChange('Services')}
            // Check to see if the currentPage is `Services`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal navigation-link
            className={currentPage === 'Services' ? 'nav-link active' : 'nav-link'}
          >
            SERVICES
          </Link>
        </li>
      </ul>
    </div>
  </nav>


  </>

  );
};