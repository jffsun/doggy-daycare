// Rendering a specific part of an applications UI
import React from 'react';

// Destructure props 'currentPage' and 'handlePageChange' passed into Navigation() 
export default function Navigation({ currentPage, handlePageChange}) {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark"> 
    <span className="navbar-brand">PUP | DOGGY DAYCARE</span>
    <ul className="navbar-nav mr-auto">
    <li className="nav-item">
      <a
        href="#home"
        onClick={() => handlePageChange('Home')}
        // Check to see if the currentPage is `Home`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
        className={currentPage === 'Home' ? 'navigation-link active' : 'navigation-link'}
      >
        HOME
      </a>
    </li>
    <li className="nav-item">
      <a
        href="#pets"
        onClick={() => handlePageChange('Pets')}
        // Check to see if the currentPage is `projects`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal navigation-link
        className={currentPage === 'Pets' ? 'navigation-link active' : 'navigation-link'}
      >
        PETS
      </a>
    </li>
    <li className="nav-item">
      <a
        href="#bookings"
        onClick={() => handlePageChange('Bookings')}
        // Check to see if the currentPage is `Bookings`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal navigation-link
        className={currentPage === 'Bookings' ? 'navigation-link active' : 'navigation-link'}
      >
        BOOKINGS
      </a>
    </li>
    <li className="nav-item">
      <a
        href="#services"
        onClick={() => handlePageChange('Services')}
        // Check to see if the currentPage is `Services`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal navigation-link
        className={currentPage === 'Services' ? 'navigation-link active' : 'navigation-link'}
      >
        SERVICES
      </a>
    </li>
    <li className="nav-item">
      <a
        href="#cart"
        onClick={() => handlePageChange('Cart')}
        // Check to see if the currentPage is `Cart`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal navigation-link
        className={currentPage === 'Cart' ? 'navigation-link active' : 'navigation-link'}
      >
        CART
      </a>
    </li>
  </ul>
  </nav>
  );
};