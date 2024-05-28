
import React from 'react';

function TimeSlotTable({ timeSlots }) {
    return (
        
        <table className="table table-md table-responsive table-bordered">
                <thead>
                    <th>Days</th>
                    <th>Start time</th>
                    <th>End time</th>
                </thead>
                
                <tbody>
                    {timeSlots.map((slot, index) => {  

                        return <tr key={index}>
                            <td>{index + 1}</td>
                            
                            <td>{slot.start_time}</td>
                            <td>{slot.end_time}</td>
                      </tr>
                    })}
                </tbody>
            </table>
            
    );
}

export default TimeSlotTable;
