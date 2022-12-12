import React from 'react';
import logo from '../../assets/pup.png';
import { Link } from 'react-router-dom';
import Login from '../pages/Login'

export default function Home() {

  return (
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
      <a href="#login">
      <button type="button" className="btn btn-danger loginBtn">Login</button>
      </a>
    </div>
  );
}
