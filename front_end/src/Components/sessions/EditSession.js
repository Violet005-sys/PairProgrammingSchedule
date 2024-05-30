import React, { useState } from 'react';


const EditSession = () => {
    const [title, setTitle] = useState(null);
    const [sessionDate, setSessionDate] = useState(null);
    const [description, setDescription] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <div className="modal fade" id="editSession" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Session</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form onSubmit={handleSubmit} className="text-center">
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Topic of the session"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="floatingInput">Title</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="date"
            className="form-control"
            id="floatingInput"
            placeholder="Date of the session"
            value={sessionDate}
            onChange={(e) => setSessionDate(e.target.value)}
          />
          <label htmlFor="floatingInput">Session Date</label>
        </div>
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Brief Description of the topic"
            id="floatingTextarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <label htmlFor="floatingTextarea">Description</label>
        </div>
      </form>
      </div>
      <div className='text-center'>
            <button type="button" className="btn btn-secondary m-2" data-bs-dismiss="modal">No, Close</button>
            <button type="submit" className="btn btn-success">Yes, Edit</button>
            </div>
    </div>
  </div>
</div>
  )
}

export default EditSession