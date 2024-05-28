import React, { useEffect, useState } from 'react'
// import data from './data'
import TimeSlotTable from './TimeSlotTable'
import { time_slots_data } from './time_slots_data'

const BASE_URL = 'https://appointments-booking-api.onrender.com'

const TimeSlots = () => {
  const [slots, setSlots] = useState([])

  useEffect(() => {
    const getSlots = async() => {
      const response = await fetch(`${BASE_URL}/slots`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY1NDUzYzgyZjQ0MzdlODc5YzE3MjUxIiwiZW1haWwiOiJwYXVsbmRhbWJvQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoicGF1bG5kYW1ibyIsImZpcnN0X25hbWUiOiJQYXVsIiwibGFzdF9uYW1lIjoiTmRhbWJvIiwicGhvbmVfbnVtYmVyIjoiKzI1NDc0NTQ5MTA5MyJ9LCJpYXQiOjE3MTY4ODE0NzAsImV4cCI6MTcxNjg4NTA3MH0.GN_63rOWtQ7xbvA_YF47QR7r1s7RKT1OvWG--gmBLI4"
        }
      })
      const data = await response.json()
      setSlots(data.records)
    }
    getSlots()
  })

  return (
   <div>
    
    <div className="row">
      <div className="col-3"></div>
      <div className="col-6 mt-5">
        <TimeSlotTable timeSlots={slots} />
      </div>
    </div>
    <div className="text-center">
        <a href="/newslot" class="my-button">Fill in</a>
    </div>
      

   </div>
  )
}

export default TimeSlots
