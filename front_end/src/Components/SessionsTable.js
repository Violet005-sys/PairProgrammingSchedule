import React from 'react'
import SessionCards from './SessionCards'
import BookingModal from './Booking/BookingModal'

const SessionsTable = () => {
  return (
    <div>
        <table className="table table-bordered table-hover my-4">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Monday</th>
      <th scope="col">Tuesday</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">7pm to 9am</th>
      <td className="text-center">N/A</td>
      <td className="text-center"><SessionCards /></td>
      <td className="text-center"><SessionCards /></td>
      <td className="text-center"><SessionCards /></td>
      <td className="text-center"><SessionCards /></td>
      <td className="text-center"><SessionCards /></td>
      
    </tr>
    <tr>
      <th scope="row">3pm to 5pm</th>
      <td className="text-center"><SessionCards /></td>
      <td className="text-center"><SessionCards /></td>
      <td className="text-center"><SessionCards /></td>
      <td className="text-center"><SessionCards /></td>
      <td className="text-center"><SessionCards /></td>
      <td className="text-center"><SessionCards /></td>
      
    </tr>
    <tr>
      <th scope="row">8pm to 10pm</th>
      <td className="text-center"><SessionCards /></td>
      <td className="text-center"><SessionCards /></td>
      <td className="text-center"><SessionCards /></td>
      <td className="text-center"><SessionCards /></td>
      <td className="text-center"><SessionCards /></td>
      <td className="text-center"><SessionCards /></td>
      
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default SessionsTable