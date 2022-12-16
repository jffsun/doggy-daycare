import React, {useState, useRef} from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import { GET_SERVICES } from  '../../utils/queries'
import { useQuery } from '@apollo/client';


export default function Bookings() {
  const calendarRef = useRef(null)
  
  // get all scheduled services
  const { loading, data } = useQuery(GET_SERVICES);

  console.log(data);

  // const events = data.services;

  return (
    <div className="container">
      <h1>Bookings</h1>
      <div style={{position: "relative", zIndex: 0}}>
        <FullCalendar
          ref={calendarRef}
          events={data.services}
          plugins={[ dayGridPlugin ]}
          initialView="dayGridMonth"
          // eventAdd={event => handleEventAdd(event)}
          // dateSet={(date) => handleDatesSet(date)}
          />
      </div>

    </div>
  );
}