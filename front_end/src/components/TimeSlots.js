import React from 'react'
// import data from './data'
import TimeSlotTable from './TimeSlotTable'
import { time_slots_data } from './time_slots_data'

const BASE_URL = 'https://appointments-booking-api.onrender.com/'

const TimeSlots = () => {
  return (
   <div>
    
    <div className="row">
      <div className="col-3"></div>
      <div className="col-6">
          <a href="/newslot" class="my-button">Fill in</a>
        <TimeSlotTable timeSlots={time_slots_data} />
      </div>
    </div>
   </div>
  )
}

export default TimeSlots
