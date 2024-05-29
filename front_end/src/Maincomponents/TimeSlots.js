import React, { useEffect, useState } from 'react'
// import data from './data'
import TimeSlotTable from './TimeSlotTable'
import CreateSlot from './CreateSlot'
import { token } from '../utils/configs'

const BASE_URL = 'https://appointments-booking-api.onrender.com'

const TimeSlots2 = () => {
  const [slots, setSlots] = useState([])

  useEffect(() => {
    const getSlots = async() => {
      const response = await fetch(`${BASE_URL}/slots`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token
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

export default TimeSlots2
