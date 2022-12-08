import React, { useState } from 'react';

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

// Handles all state changes which dictates which page the user is viewing
export default function DaycareContainer() {

  // Set intial value of currentPage to Home 
  const [currentPage, setCurrentPage] = useState('Home');

  // Checks value of `currentPage` is and render the corresponding page component accordingly
  const renderPage = () => {

    // If stateVariable 'currentPage' equals Home
    if (currentPage === 'Home') {

      // Return the JSX of the Home page component
      return <Home />;
    }
    if (currentPage === 'Pets') {
      return <Pets />;
    }
    if (currentPage === 'Bookings') {
      return <Bookings />;
    }
    if (currentPage === 'Services') {
      return <Services />;
    }
    return <Cart />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="daycare-container">
      <h2>Doggy Daycare Header!!!!!!!!! WOOO!</h2>
      {/* TO DO: <Header /> */}
      {/* We are passing the currentPage from state and the function to update it */}
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      {/* TO DO: <Footer /> */}
    </div>
  );
};
