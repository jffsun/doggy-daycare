import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Import components seen throughout application
import Header from './Header'
import Navigation from './Navigation';
import Footer from './Footer';

// Import our various pages
import Home from './pages/Home';
import Pets from './pages/Pets';
import Bookings from './pages/Bookings';
import Services from './pages/Services';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Calendar from './pages/Calendar';

// Forms

// Handles all state changes which dictates which page the user is viewing
export default function DaycareContainer() {

  // Set intial value of currentPage to Home 
  const [currentPage, setCurrentPage] = useState('Home');

  // Checks value of `currentPage` is and render the corresponding page component accordingly
  const renderPage = () => {

    // If stateVariable 'currentPage' equals Home
    if (currentPage === 'Home') {

      // Return the JSX of the Home page component
      return <Link to='/'></Link>;
    }
    if (currentPage === 'Pets') {
      return <Link to='/pets'></Link>;
    }
    if (currentPage === 'Bookings') {
      return <Link to='/bookings'></Link>;
    }
    if (currentPage === 'Services') {
      return <Link to='/services'></Link>;
    }
    if (currentPage === 'Cart') {
      return <Link to='/cart'></Link>;
    }
    if (currentPage === 'Calendar') {
      return <Calendar />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
    <div className="daycare-container">
      {/* We are passing the currentPage from state and the function to update it */}
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer />

    </div>

    </>
  );
};
