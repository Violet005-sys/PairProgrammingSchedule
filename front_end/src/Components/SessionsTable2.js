import React from 'react'
import SessionCards from './SessionCards'
import BookingModal from './Booking/BookingModal'


const SessionsTable2 = () => {
  return (
    <div>
        <table className="table table-bordered table-hover my-5">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">3pm to 5pm</th>
      <th scope="col">8pm to 10pm</th>
      <th scope="col">7am to 9am</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Sunday</th>
      <td className="text-center"></td>
      <td className="text-center"></td>
      <td className="text-center"><SessionCards /></td>
    </tr>
    <tr>
      <th scope="row">Monday</th>
      <td className="text-center"><SessionCards /></td>
      <td className="text-center"><SessionCards /></td>
      
    </tr>
    <tr>
      <th scope="row">Tuesday</th>
      <td className="text-center"><SessionCards /></td>
      <td className="text-center"><SessionCards /></td>
      
    </tr>
    <tr>
      <th scope="row">Wednesday</th>
      <td className="text-center"><SessionCards /></td>
      <td className="text-center"><SessionCards /></td>
      
    </tr>
    <tr>
      <th scope="row">Thursday</th>
      <td className="text-center"><SessionCards /></td>
      <td className="text-center"><SessionCards /></td>
      
    </tr>
    <tr>
      <th scope="row">Friday</th>
      <td className="text-center"><SessionCards /></td>
      <td className="text-center"><SessionCards /></td>
      
    </tr>
    <tr>
      <th scope="row">Saturday</th>
      <td className="text-center"><SessionCards /></td>
      <td className="text-center"><SessionCards /></td>
    </tr>
    
  </tbody>
</table>
    </div>
  )
}

export default SessionsTable2