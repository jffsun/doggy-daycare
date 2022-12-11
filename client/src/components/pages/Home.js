import React from 'react';
import logo from '../../assets/pup.png'

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
    <br />

      <button type="button" class="btn btn-danger">Login</button>

    </div>
  );
}
