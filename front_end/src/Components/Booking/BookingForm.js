import React, {useState, useEffect} from "react";
import { BASE_URL, token } from "../../utils/configs";
import StaticComponent from "../unchanged/StaticElements";


const BookingForm = () => {
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  


  const handleSubmit = (e) => {
      e.preventDefault();
      const record = {
          title: title,
          description: desc
      }
      console.log(record)

      const createItem = async() => {
          try {
              const response = await fetch(`${BASE_URL}/bookings`, {
                  method: "POST",
                  headers: {
                      "Content-Type": "application/json",
                      "Authorization": `${token}`
                  },
                  body: JSON.stringify(record)
              })
              if(response.ok) {
                  window.location.reload()
              } else {
                  alert("Something Went Wrong!!")
              }
              
          } catch (error) {
              console.log(error.message)
          }
             
      }
      createItem()
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Brief Description of the topic"
            id="floatingTextarea"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <label htmlFor="floatingTextarea">Description</label>
        </div>
        <StaticComponent />
        
        <button type="submit" className="btn btn-primary">Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm;
