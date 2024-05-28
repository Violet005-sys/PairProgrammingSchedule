import React, { useState } from 'react'

const NewTimeSlot = () => {
        const [formData, setFormData] = useState({
            days: '', 
            start_time: '', 
            end_time: '', 
        });

    const handleSubmit = (event) => {
        event.preventDefault(); 

        console.log('Form Submitted:', formData); 

        setFormData({ days: '', start_time: '', end_time: '',});
    };


        const handleChange = (event) => {
            setFormData({ ...formData, [event.target.id]: event.target.value });
        }
  return (
    <div className="row">
          <div className="col-4"></div>
          <div className="col-4 mt-4">
              <h5 className="text-center">Time slots</h5>
              <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                      <label className="form-label">Days</label>
                      <select className="form-select" onChange={handleChange}>
                          <option value="">select</option>
                          <option value="monday">Monday</option>
                          <option value="tuesday">Tuesday</option>
                          <option value="wednesday">Wednesday</option>
                          <option value="thursday">Thursday</option>
                          <option value="friday">Friday</option>
                          <option value="saturday">Saturday</option>
                          <option value="sunday">Sunday</option>
                      </select>
                  </div>
                  <div className="mb-3">
                      <label className="form-label">Start time</label>
                      <select className="form-select" onChange={handleChange}>
                          <option value="">select</option>
                          <option value="7:00 AM">7:00 AM</option>
                          <option value="3:00 PM">3:00 PM</option>
                          <option value="8:00 PM">8:00 PM</option>
                      </select>
                  </div>
                  <div className="mb-3">
                      <label className="form-label">End time</label>
                      <select className="form-select" onChange={handleChange}>
                          <option value="">select</option>
                          <option value="9:00 AM">9:00 AM</option>
                          <option value="5:00 PM">5:00 PM</option>
                          <option value="10:00 PM">10:00 PM</option>
                      </select>
                  </div>
                  <div className="col-4"></div>


                  <div className="text-center">
                      <button type="submit" class="btn btn-primary">Submit</button>
                  </div>
              </form>
          </div>
    </div>
  )
}

export default NewTimeSlot
