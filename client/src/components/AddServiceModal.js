import React, {useState} from 'react';
import Modal from 'react-modal';

import { GET_ME } from '../utils/queries';
import { useQuery } from '@apollo/client';
import { ADD_SERVICE } from '../utils/mutations';
import { useMutation } from '@apollo/client';

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
  const [chosenDate, setDate] = useState("MM/DD/YY HH:MM");
  const handleDate = (e) => {
    setDate(e.target.value);
  }

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

  function serviceDropdown() {
    return (
      <div>
        <select onChange={handleTitle} value={title}>
          <option>Choose Service</option>
          <option value="Daycare">Daycare</option>
          <option value="Board">Board</option>
          <option value="Groom">Groom</option>
          <option value="Train">Train</option>
        </select>
      </div>
    )
  }

  // parsing the chosen date into something fullcalendar can render on bookings page
  const fullDate = chosenDate.split("/")
  const time = chosenDate.split(" ")
  const year = chosenDate.split("")
  
  const parsedDate = `20${year[6]}${year[7]}-${fullDate[0]}-${fullDate[1]}T${time[1]}:00`

  const onSubmit = async (event) => {
    event.preventDefault();

    console.log(userData);
    console.log(data);
    console.log(title, parsedDate)
    
    // try/catch for using the ADD_SERVICE mutation
    try {
      const { data } = await addService({
        variables: { title: title, date: parsedDate }
      });

      console.log(data);
    } catch {
      console.log(error);
    }

    // Return if closed
    onClose();
  }

  const customStyle = {
    content: {
      width: '50%',
      marginLeft: '23%'
    },
  };

  if (loading) {
    return <h2>LOADING...</h2>
  }

  return (
    // Modal first renders as open and will close if user chooses
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyle} >
      <form onSubmit={onSubmit}>

        {/* User selects which of their pets to be serviced from dropdown */}
        <div>
          <label>Pet</label>
          {petDropdown()}
        </div>
      <br />
        <div>
          {/* When the input is changed, the state of title is updated */}
          <label>Service</label>
          {serviceDropdown()}
        </div>
      <br />
        <div>
          <label>Date</label>
          {/* Set the state of date to the date the user selects */}
          <input value={chosenDate} onChange={handleDate} placeholder="MM/DD/YY HR:MIN"></input>   
        </div>
      <br />
        <button className='btn btn-danger'>Schedule</button>
      </form>
    </Modal>
  )
}