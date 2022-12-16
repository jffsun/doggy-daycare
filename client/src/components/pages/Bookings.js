import React from 'react';
import Calendar from '../Calendar'
import { GET_SERVICES } from  '../../utils/queries'
import { useQuery } from '@apollo/client';


export default function Bookings() {

  // get all scheduled services
  const { loading, data } = useQuery(GET_SERVICES);

  console.log(data);

  // const serviceData = data?.services || {}

  return (
    <div className="container">
      <h1>Bookings</h1>
      <Calendar />
    </div>
  );
}