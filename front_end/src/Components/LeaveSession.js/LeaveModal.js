import React from 'react'
import LeaveForm from './LeaveForm'

const LeaveModal = () => {
  return (
    <div>
       <div>
    
    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Leave Now
    </button>
    
    
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Are you sure you would like to leave this session?</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <LeaveForm />
          </div>
          <div className="modal-footer">
            <button type="submit" className="btn btn-warning" data-bs-dismiss="modal">Yes, leave</button>
            <button type="submit" className="btn btn-danger">No</button>
          </div>
        </div>
      </div>
    </div>
        </div>
    </div>
  )
}

export default LeaveModal