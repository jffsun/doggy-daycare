import React, {useState} from 'react';
import Modal from 'react-modal';

import Auth from '../utils/auth';
import { GET_ME } from '../utils/queries';
import { useQuery } from '@apollo/client';
import { ADD_SERVICE } from '../utils/mutations';
import { useMutation } from '@apollo/client';

// Datepicker react package
import Datetime from 'react-datetime';

import Dropdown from 'react-bootstrap/Dropdown';

export default function ({isOpen, onClose, onEventAdded}) {

  // use state for the title of the service
  const [title, setTitle] = useState("");
  // handler to target the value of titleon the service form
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  // use state for the petId for the service
  const [petId, setPetId] = useState(null);
  // handler to target the value of the petId selected in the service form
  const handlePetId = (e) => {
    setPetId(e.target.value);
  };

  // use state for the date for the service
  const [date, setDate] = useState(new Date());
  // handler to target the value of the date inputted in service form
  const handleDate = (e) => {
    setDate(e.target.value);
  };

  // variable to use the GET_ME query
  const { loading, data } = useQuery(GET_ME);

  console.log(data);

  // if user is not found within the data return an empty object
  const userData = data?.me || {}

  // variable to use the ADD_SERVICE mutation
  const [addService, { error }] = useMutation(ADD_SERVICE);

  // TO DO: Dropdown with react bootstrap 
  function petDropdown() {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Select your pet:
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {userData?.pets?.map}
            <Dropdown.Item href="#/action-1">Raven</Dropdown.Item>
            <Dropdown.Item href="#/action-2">AXL</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Moon</Dropdown.Item>

        </Dropdown.Menu>
      </Dropdown>
    );
  }

  // object containing the service data to pass into the database
  const newService = {
    title: title,
    petId: petId,
    date: date 
  }

  const onSubmit = async (event) => {
    event.preventDefault();

    // try/catch for using the ADD_SERVICE mutation
    try {

    } catch (err) {
      console.log(err);
    }


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
          {/* When the input is changed, the state of title is updated */}
          <input placeholder="Service Title" value={title} onChange={handleTitle}/>
        </div>

        <div>
          <label>Date</label>
          {/* Set the state of date to the date the user selects */}
          <Datetime value={date} onChange={handleDate} />     
        </div>

        <button>Schedule</button>
      </form>
    </Modal>
  )
}