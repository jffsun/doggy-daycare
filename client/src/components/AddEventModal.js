import React, {useState} from 'react';
import Modal from 'react-modal';

// Datepicker react package
import Datetime from 'react-datetime';

export default function ({isOpen, onClose, onEventAdded}) {

  // State variables for our modal
  const [title, setTitle] = useState("");
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());

  const onSubmit = (event) => {
    event.preventDefault();
  
    onEventAdded({
      title,
      start,
      end
    })
  
    onClose();
  }
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <form onSubmit={onSubmit}>
        
        {/* When the input is changed, the state of title is updated */}
        <input placeholder="Event Title" value={title} onChange={e => setTitle(e.target.value)}/>
     
        <div>
          <label>Start Date</label>
          {/* Set the state of start date to date the user selects */}
          <Datetime value={start} onChange={date => setStart(date)} />     
        </div>

        <div>
          <label>End Date</label>
          {/* Set the state of end date to date the user selects */}
          <Datetime value={end} onChange={date => setEnd(date)} />     
        </div>

        <button>Add Event</button>
      </form>
    </Modal>
  )
}