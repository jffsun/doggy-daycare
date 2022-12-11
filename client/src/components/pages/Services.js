import React from 'react';
import bone from '../../assets/bone.png';
import scissor from '../../assets/scissors.png';
import board from '../../assets/zzz.png';
import ball from '../../assets/ball.png';

export default function Services() {
  return (
    <div className="container">
      <h1>Services</h1>
      <br />
        <div className="srvCard">
          <div className="srvIcon">
            <img src={bone} alt="bone"></img>
          </div>
          <div className="srvTitle">
          DAYCARE
          </div>
          <div className="srvText">
          Choose between Full Day and Half Day
          </div>
          <button type="button" class="btn btn-danger srvBtn">Book Service</button>
        </div>

        <div className="srvCard">
          <div className="srvIcon">
            <img src={board} alt="board"></img>
          </div>
          <div className="srvTitle">
          BOARD
          </div>
          <div className="srvText">
          Book an overnight stay
          </div>
          <button type="button" class="btn btn-danger srvBtn">Book Service</button>
        </div>

        <div className="srvCard">
          <div className="srvIcon">
            <img src={scissor} alt="groom"></img>
          </div>
          <div className="srvTitle">
          GROOM
          </div>
          <div className="srvText">
          Book a variety of grooming services
          </div>
          <button type="button" class="btn btn-danger srvBtn">Book Service</button>
        </div>

        <div className="srvCard">
          <div className="srvIcon">
            <img src={ball} alt="train"></img>
          </div>
          <div className="srvTitle">
          TRAIN
          </div>
          <div className="srvText">
          Book a training class
          </div>
          <button type="button" class="btn btn-danger srvBtn">Book Service</button>
        </div>


    </div>
  );
}
