import React, {useState} from 'react';
import Modal from 'react-modal';

import { GET_ME } from '../utils/queries';
import { useQuery } from '@apollo/client';
import { ADD_SERVICE } from '../utils/mutations';
import { useMutation } from '@apollo/client';

// Datepicker react package
import DateTime from 'react-datetime';

export default function AddServiceModal({isOpen, onClose}) {

  // use state for the title of the service
  const [title, setTitle] = useState("");
  // handler to target the value of titleon the service form
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  // use state for the petId for the service
  const [formPetId, setPetId] = useState(null);
  // function to select the value of the dropdown
  const handlePetId = (e) => {
    setPetId(e.target.value);
  };

  // use state for the date for the service
  const [chosenDate, setDate] = useState(new Date());

  // variable to use the GET_ME query
  const { loading, data } = useQuery(GET_ME);

  // if user is not found within the data return an empty object
  const userData = data?.me || {}

  // variable to use the ADD_SERVICE mutation
  const [addService, { error }] = useMutation(ADD_SERVICE);

  // TO DO: Dropdown with react bootstrap 
  function petDropdown() {
    return (
      <div>
        <select onChange={handlePetId} value={formPetId}>
        <option>Choose Pet</option>
        {userData?.pets?.map((Pet) => {
          return (
            <option value={Pet?._id}>{Pet?.name}</option>
          )
        })}
        </select>
      </div>
    );
  }

  // objects containing the service data to pass into the database

  const serviceInput = {
    title: title,
    date: `${chosenDate._i}` 
  }

  const _id = formPetId


  const onSubmit = async (event) => {
    event.preventDefault();

    console.log(data);
    console.log(serviceInput, _id);
    
    // try/catch for using the ADD_SERVICE mutation
    try {
      const { data } = await addService({
        variables: { _id, serviceInput }
      });

      console.log(data);
    } catch {
      console.log(error);
    }

    // Return if closed
    onClose();
  }

  if (loading) {
    return <h2>LOADING...</h2>
  }
  return (
    // Modal first renders as open and will close if user chooses
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <form onSubmit={onSubmit}>

        {/* User selects which of their pets to be serviced from dropdown */}
        <div>
          <label>Pet</label>
          {petDropdown()}
        </div>

        <div>
          {/* When the input is changed, the state of title is updated */}
          <input placeholder="Service Title" value={title} onChange={handleTitle}/>
        </div>

        <div>
          <label>Date</label>
          {/* Set the state of date to the date the user selects */}
          <DateTime value={chosenDate} onChange={(date) => setDate(date)}/>     
        </div>

        <button>Schedule</button>
      </form>
    </Modal>
  )
}