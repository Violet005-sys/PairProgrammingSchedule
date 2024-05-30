import React, { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import { BASE_URL, token } from '../../utils/configs';


const EditForm = () => {
  const [session, setSession] = useState([]);
  const [title, setTitle] = useState({ Title: ''});
  const [desc, setDesc] = useState({Description : ''});
  
  
  
  const { id } = useParams();

  useEffect(() => {
      const getItem = async() => {
          try {
              const response = await fetch(`${BASE_URL}/bookings/${id}`, {
                  method: "GET",
                  headers: {
                      "Content-Type": "application/json",
                      "Authorization": `${token}`
                  }
              });
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              const data = await response.json();
              setSession(data);
              setTitle(data.title);
              setDesc(data.description);
          } catch (error) {
              console.error('Failed to fetch the item:', error);
          }
      };
      getItem();
  }, [id]);

  const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
      const updatedItem = {
          session: session,
          title: title,
          description: desc
      }

      const updateItem = async(req, res) => {
          try {
              const response = await fetch(`${BASE_URL}/bookings/${id}`, {
                  method: "PUT",
                  headers: {
                      "Content-Type": "application/json",
                      "Authorization": `${token}`
                  },
                  body: JSON.stringify(updatedItem)
              })

              if(response.ok) {
                res.send({'success': 'Item successfully updated!'})
              } else {
                  alert("Something went wrong, item could not be updated!!")
              }
          } catch (error) {
              console.log({ error: error.message });
              alert(error.message)
          }
      }
      updateItem()

      console.log({ updatedItem });
  };

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
        <div className="form-floating mb-3">
          <input
            type="text"
            readOnly
            className="form-control-plaintext"
            id="floatingPlaintextInput"
            placeholder="user"
            value=""
          />
          <label htmlFor="floatingPlaintextInput">People</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            readOnly
            className="form-control-plaintext"
            id="floatingPlaintextInput"
            placeholder="user"
            value=""
          />
          <label htmlFor="floatingPlaintextInput">Meeting link</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="date"
            readOnly
            className="form-control-plaintext"
            id="floatingPlaintextInput"
            placeholder="user"
            value=""
          />
          <label htmlFor="floatingPlaintextInput">Time slot</label>
        </div>
        
        <button type="submit" className="btn btn-primary">Edit Your Session Now</button>
      </form>
    </div>
  )
}

export default EditForm