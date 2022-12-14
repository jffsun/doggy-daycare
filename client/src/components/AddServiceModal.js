import React, {useState} from 'react';
import Modal from 'react-modal';

// Datepicker react package
import Datetime from 'react-datetime';

import Dropdown from 'react-bootstrap/Dropdown';

export default function ({isOpen, onClose, onEventAdded}) {

  // State variables for our modal
  const [pet, setPet] = useState(null);
  const [date, setDate] = useState(new Date());

  // TO DO: Dropdown with react bootstrap 
  function petDropdown() {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Select your pet:
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Raven</Dropdown.Item>
          <Dropdown.Item href="#/action-2">AXL</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Moon</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }

  const onSubmit = (event) => {
    event.preventDefault();
    
    // TO DO: Submit the data the user inputted in the forms
    onEventAdded({
      pet,
      date
    })
    
    // Return if closed
    onClose();
  }
  return (
    // Modal first renders as open and will close if user chooses
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <form onSubmit={onSubmit}>

        {/* User selects which of their pets to be serviced from dropdown */}
        <div>
          <label>Pet</label>
          {/* TO DO: {petDropdown()} */}
        </div>

        <div>
          <label>Date</label>
          {/* Set the state of date to the date the user selects */}
          <Datetime value={date} onChange={date => setDate(date)} />     
        </div>

        <button>Schedule</button>
      </form>
    </Modal>
  )
}