import React from 'react'
import EditForm from './EditForm'

const EditModal = () => {
  return (
    <div>
        <button
        type="button"
        className="btn btn-info"
        data-bs-toggle="modal"
        data-bs-target="#editModal"
      >
        <i className="bi bi-pencil-square"></i>
      </button>

      <div
        className="modal fade"
        id="editModal"
        tabIndex="-1"
        aria-labelledby="editModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="editModalLabel">
                Adjust your Session Now
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="editModal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
                <EditForm />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditModal