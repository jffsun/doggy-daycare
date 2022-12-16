import React, {useState, useRef} from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import { GET_SERVICES } from  '../../utils/queries'
import { useQuery } from '@apollo/client';

export default function Bookings() {
  const calendarRef = useRef(null)

  // get all scheduled services
  const { loading, data } = useQuery(GET_SERVICES);

  try {
    console.log(data);

    return (
      <div className="container">
        <h1>Bookings</h1>
        <div style={{position: "relative", zIndex: 0}}>
          <FullCalendar
            ref={calendarRef}
            events={data.services}
            plugins={[ dayGridPlugin ]}
            initialView="dayGridMonth"
            />
        </div>
      </div>
    )
  }
  catch {
    return (
      <h2>Error loading bookings. Try again.</h2>
    )
  }
}