import React, { useState } from 'react';
import dayjs from 'dayjs';

const SessionsTable = ({ sessions }) => {
    const [showJoinSession, setShowJoinSession] = useState(false)
    const handleShowJoinSession = (id, title) => {
        setShowJoinSession(true)
        console.log({ id: id, title: title, show: showJoinSession })
    }
  return (
    <>
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
                    <td>{dayjs(session.session_date).format("YYYY-MM-DD")}</td>
                    <td>{session.session_link}</td>
                    <td>
                        <a href={`/sessions/${session._id}/people`} className='btn btn-info btn-sm'><i className="bi bi-people-fill"></i></a>
                    </td>
                    <td>
                        <a href='' onClick={() => handleShowJoinSession(session._id, session.title)} className='btn btn-success btn-sm' data-bs-toggle="modal" data-bs-target="#joinSession"><i className="bi bi-box-arrow-in-left"></i></a>
                    </td>
                    <td>
                        <a href='' className='btn btn-danger btn-sm'><i className="bi bi-box-arrow-in-right"></i></a>
                    </td>
                </tr>
            })}
        </tbody>
    </table>
    </>
  )
}

export default SessionsTable