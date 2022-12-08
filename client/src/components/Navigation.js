// Rendering a specific part of an applications UI
import React from 'react';

// Destructure props 'currentPage' and 'handlePageChange' passed into Navigation() 
export default function Navigation({ currentPage, handlePageChange}) {
  return (
    // Unordered list containing links to each portfolio page
    <ul className="nav-container">
    <li>
      <a
        href="#home"
        onClick={() => handlePageChange('Home')}
        // Check to see if the currentPage is `Home`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
        className={currentPage === 'Home' ? 'navigation-link active' : 'navigation-link'}
      >
        Home
      </a>
    </li>
    <li className="navigation-item">
      <a
        href="#pets"
        onClick={() => handlePageChange('Pets')}
        // Check to see if the currentPage is `projects`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal navigation-link
        className={currentPage === 'Pets' ? 'navigation-link active' : 'navigation-link'}
      >
        Pets
      </a>
    </li>
    <li className="navigation-item">
      <a
        href="#bookings"
        onClick={() => handlePageChange('Bookings')}
        // Check to see if the currentPage is `Bookings`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal navigation-link
        className={currentPage === 'Bookings' ? 'navigation-link active' : 'navigation-link'}
      >
        Bookings
      </a>
    </li>
    <li className="navigation-item">
      <a
        href="#services"
        onClick={() => handlePageChange('Services')}
        // Check to see if the currentPage is `Services`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal navigation-link
        className={currentPage === 'Services' ? 'navigation-link active' : 'navigation-link'}
      >
        Services
      </a>
    </li>
    <li className="navigation-item">
      <a
        href="#cart"
        onClick={() => handlePageChange('Cart')}
        // Check to see if the currentPage is `Cart`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal navigation-link
        className={currentPage === 'Cart' ? 'navigation-link active' : 'navigation-link'}
      >
        Cart
      </a>
    </li>
  </ul>
  );
};
