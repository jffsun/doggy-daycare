// Rendering a specific part of an applications UI
import React from 'react';

// Destructure props 'currentPage' and 'handlePageChange' passed into Navigation() 
export default function Navigation({ currentPage, handlePageChange}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> 
    <span className="navbar-brand">PUP | DOGGY DAYCARE</span>
    <div className="nav-right">
    <ul className="navbar-nav mr-auto">
    <li className="nav-item">
      <a
        href="#home"
        onClick={() => handlePageChange('Home')}
        // Check to see if the currentPage is `Home`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
        className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
      >
        HOME
      </a>
    </li>
    <li className="nav-item">
      <a
        href="#pets"
        onClick={() => handlePageChange('Pets')}
        // Check to see if the currentPage is `projects`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal navigation-link
        className={currentPage === 'Pets' ? 'nav-link active' : 'nav-link'}
      >
        PETS
      </a>
    </li>
    <li className="nav-item">
      <a
        href="#bookings"
        onClick={() => handlePageChange('Bookings')}
        // Check to see if the currentPage is `Bookings`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal navigation-link
        className={currentPage === 'Bookings' ? 'nav-link active' : 'nav-link'}
      >
        BOOKINGS
      </a>
    </li>
    <li className="nav-item">
      <a
        href="#services"
        onClick={() => handlePageChange('Services')}
        // Check to see if the currentPage is `Services`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal navigation-link
        className={currentPage === 'Services' ? 'nav-link active' : 'nav-link'}
      >
        SERVICES
      </a>
    </li>
    <li className="nav-item">
      <a
        href="#cart"
        onClick={() => handlePageChange('Cart')}
        // Check to see if the currentPage is `Cart`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal navigation-link
        className={currentPage === 'Cart' ? 'nav-link active' : 'nav-link'}
      >
        CART
      </a>
    </li>
    <li className="nav-item">
      <a
        href="#login"
        onClick={() => handlePageChange('Login')}
        // Check to see if the currentPage is `Cart`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal navigation-link
        className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
      >
        LOG IN 
      </a>
    </li>
    <li className="nav-item">
      <a
        href="#calendar"
        onClick={() => handlePageChange('Calendar')}
        // Check to see if the currentPage is `Cart`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal navigation-link
        className={currentPage === 'Calendar' ? 'nav-link active' : 'nav-link'}
      >
        CALENDAR
      </a>
    </li>
  </ul>
  </div>
  </nav>
  );
};