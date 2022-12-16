import React from 'react';
import logo from '../../assets/pup.png';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

export default function Home({ loggedIn, setLoggedIn }) {

  return (
    <>
    <div className="container">
      <div>
        <center><img src={logo} className="logo" alt="pup_logo"></img></center>
      </div>

      <h2> About Us </h2>
      <br/>
      <p>
        Welcome to PUP Doggy Daycare! Established in 2022, our aim is to provide all around first class service for your furry family member. We have 
        employees on staff 24/7 to make sure all of your dog's needs are met. We offer a variety of services, from daycare to grooming
        at reasonable prices. We look forward to meeting you and your pets!
      </p>

    <br />
      {loggedIn ? (
      <button type="button" onClick={() => {
        setLoggedIn(!loggedIn)
        localStorage.removeItem('id_token');
        window.location.assign('/');
      }
      } className="btn btn-danger logoutBtn">Log Out</button>
      ) : (
      <button type="button" onClick={() => setLoggedIn(!loggedIn)} className="btn btn-danger loginBtn"><Link to='/login'>Log In</Link></button>
      )}
    </div>

    </>
  );
}
