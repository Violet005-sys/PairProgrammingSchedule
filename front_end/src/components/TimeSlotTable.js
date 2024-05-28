
import React from 'react';

function TimeSlotTable({ timeSlots }) {
    return (
        
        <table className="table table-md table-responsive table-bordered">
                <thead>
                    <th>#</th>
                    <th>Day</th>
                    <th>Start time</th>
                    <th>End time</th>
                    <th></th>
                </thead>
                
                <tbody>
                    {timeSlots.map((slot, index) => {  

                        return <tr key={slot._id}>
                            <td>{index + 1}</td>
                            <td>{slot.day_name}</td>
                            <td>{slot.start_time}</td>
                            <td>{slot.end_time}</td>
                            <td>
                                <a href={`/slots/${slot._id}`} className='btn btn-info btn-sm'><i className="bi bi-eye"></i></a>
                            </td>
                      </tr>
                    })}
                </tbody>
            </table>
            
    );
}

export default TimeSlotTable;
