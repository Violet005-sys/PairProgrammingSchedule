import React from 'react'

const SessionParticipants = () => {
    const people = [
        {
            id: 1,
            name: "John Doe",
            email: "johndoe@gmail.com",
            phone_number: "0745366372"
        },
        {
            id: 2,
            name: "Jane Doe",
            email: "janedoe@gmail.com",
            phone_number: "074567898992"
        },
        {
            id: 3,
            name: "John Smith",
            email: "johnsmith@gmail.com",
            phone_number: "074567282999"
        }
    ]
  return (
    <div className='row m-2'>
        <h5 className='text-center'>Participants</h5>
        <table className='table'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {people.map((person, index) => {
                    return <tr key={person.id}>
                        <td>{index + 1}</td>
                        <td>{person.name}</td>
                        <td>{person.phone_number}</td>
                        <td>{person.email}</td>
                        <td>
                            <a href='' className='btn btn-danger btn-sm'><i class="bi bi-person-x"></i></a>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}

export default SessionParticipants