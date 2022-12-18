import React, {useState} from 'react';
import AddServiceModal from '../AddServiceModal';

import bone from '../../assets/bone.png';
import scissor from '../../assets/scissors.png';
import board from '../../assets/zzz.png';
import ball from '../../assets/ball.png';

export default function Services() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="container">
      <h1>Services</h1>
      <br />

        <section>

          {/* onClick: opens Modal */}
          <button onClick={() => setModalOpen(true)} type="button" className="btn btn-danger ">Book Service</button>
          <br />
          <br />
          <div className="srvCard">
            <div className="srvIcon">
              <img src={bone} alt="bone"></img>
            </div>
            <div className="srvTitle">
            DAYCARE
            </div>
            <div className="srvText">
            Book Half Day or Full Day
            </div>
            <div className="srvPrice">
            $20 / $38
          </div>
          </div>

          {/* Render 'AddServiceModal' component */}
          <AddServiceModal isOpen={modalOpen} onClose={() => setModalOpen(false)}/>
          {/* <AddServiceModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onEventAdded={event => onEventAdded(event)}/> */}
        </section>

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
          <div className="srvPrice">
            $50
          </div>
        </div>

        <div className="srvCard">
          <div className="srvIcon">
            <img src={scissor} alt="groom"></img>
          </div>
          <div className="srvTitle">
          GROOM
          </div>
          <div className="srvText">
          Book grooming services
          </div>
          <div className="srvPrice">
            $Varies
          </div>
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
          <div className="srvPrice">
            $40
          </div>
        </div>

        {/* <button onClick={() => setModalOpen(true)}>Add Event</button> */}
    </div>
  );
}
