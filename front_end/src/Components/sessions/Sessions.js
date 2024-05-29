import React, { useContext, useEffect, useState } from 'react';
import SessionsTable from './SessionsTable';
import { BASE_URL } from '../../utils/configs';

import AuthContext from '../../context/AuthContext';

const Sessions = () => {
  const [sessions, setSessions] = useState([]);
  const token = useContext(AuthContext);

  useEffect(() => {
    const getBookings = async() => {
      const response = await fetch(`${BASE_URL}/bookings`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token
        }
      })
      const data = await response.json()
      console.log(data.records)
      setSessions(data.records)
    }
    getBookings()
  }, [0])

  return (
    <div className='row ml-2'>
      <div className='col-3'></div>
      <div className='col-sm-12 col-md-12 col-lg-10'>
        <SessionsTable sessions={sessions} />
        </div>
    </div>
  )
}

export default Sessions