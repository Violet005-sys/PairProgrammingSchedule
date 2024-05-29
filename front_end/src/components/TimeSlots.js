import React, { useEffect, useState } from 'react'
// import data from './data'
import TimeSlotTable from './TimeSlotTable'
import CreateSlot from './CreateSlot'

const BASE_URL = 'https://appointments-booking-api.onrender.com'

const TimeSlots = () => {
  const [slots, setSlots] = useState([])

  useEffect(() => {
    const getSlots = async() => {
      const response = await fetch(`${BASE_URL}/slots`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY1NDUzYzgyZjQ0MzdlODc5YzE3MjUxIiwiZW1haWwiOiJwYXVsbmRhbWJvQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoicGF1bG5kYW1ibyIsImZpcnN0X25hbWUiOiJQYXVsIiwibGFzdF9uYW1lIjoiTmRhbWJvIiwicGhvbmVfbnVtYmVyIjoiKzI1NDc0NTQ5MTA5MyJ9LCJpYXQiOjE3MTY4ODYzNDIsImV4cCI6MTcxNjg4OTk0Mn0.eEPatDSZa9KGmLC6tfCOZ968RsKzaQYrcb8PF0zY3LA"
        }
      })
      const data = await response.json()
      setSlots(data.records)
    }
    getSlots()
  }, [0])

  return (
   <div>
    <CreateSlot />
    <div className="row">
      <div className="col-3"></div>
      <div className="col-6 mt-5">
        <div className='text-end'>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createSlot">
  New Slot
</button>
        </div>
        
        <TimeSlotTable timeSlots={slots} />
      </div>
    </div>
  
   </div>
  )
}

export default TimeSlots
