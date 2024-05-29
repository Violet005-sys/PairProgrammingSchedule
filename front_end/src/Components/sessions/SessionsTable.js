import React from 'react'

const SessionsTable = ({ sessions }) => {
  return (
    <table className='table'>
        <thead>
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Created By.</th>
                <th>Date</th>
                <th>Link</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {sessions.map((session, index) => {
                return <tr key={session._id}>
                    <td>{index + 1}</td>
                    <td>{session.title}</td>
                    <td>{session.creator.first_name} {session.creator.last_name}</td>
                    <td>{session.session_date}</td>
                    <td>{session.session_link}</td>
                    <td>
                        <a href={`/sessions/${session._id}/people`} className='btn btn-info btn-sm'><i class="bi bi-people-fill"></i></a>
                    </td>
                    <td>
                        <a href='' className='btn btn-success btn-sm'><i class="bi bi-box-arrow-in-left"></i></a>
                    </td>
                    <td>
                        <a href='' className='btn btn-danger btn-sm'><i class="bi bi-box-arrow-in-right"></i></a>
                    </td>
                </tr>
            })}
        </tbody>
    </table>
  )
}

export default SessionsTable