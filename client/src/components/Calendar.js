import React, {useState, useRef} from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import AddEventModal from './AddEventModal';
import axios from 'axios';
import moment from 'moment';

// Render calendar component
export default function Calendar(services) {
  const [services, setServices] = useState()
  const calendarRef = useRef(null)
   
  const onEventAdded = event => {
    let calendarApi = calendarRef.current.getApi()
    calendarApi.addEvent({
      start: moment(event.start).toDate(),
      end: moment(event.end).toDate(),
      title: event.title
    })
  }

  async function handleEventAdd(data) {
    await axios.post("/api/calendar/create-event", data.event);
  }

  async function handleDatesSet(data) {
    const response = await axios.get("/api/calendar/get-events?start="+moment(data.start).toISOString()+"&end="+moment(data.end).toISOString())
    setServices(response.data);
  }

  return (
    <section>
      <button className='btn btn-danger' onClick={() => setModalOpen(true)}>Add Event</button>
      <div style={{position: "relative", zIndex: 0}}>
        <FullCalendar
          ref={calendarRef}
          events={services}
          plugins={[ dayGridPlugin ]}
          initialView="dayGridMonth"
          eventAdd={event => handleEventAdd(event)}
          dateSet={(date) => handleDatesSet(date)}
          />
      </div>
      <AddEventModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onEventAdded={event => onEventAdded(event)}/>
    </section>
  );
  }