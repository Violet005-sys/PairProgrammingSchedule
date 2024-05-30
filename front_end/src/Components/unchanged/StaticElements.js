import React, {useState, useEffect} from "react";
import { BASE_URL, token } from "../../utils/configs";

const StaticComponent = () => {

  //const [session, setSession] = useState([]);
  const [meetingLink, setMeetingLink] = useState(null);
  //const [creator, setCreator] = useState({ People: ''});
 // const [timeSlot, setTimeSlot] = useState(null);

  useEffect(() => {
      const getItems = async() => {
          const response = await fetch(`${BASE_URL}/bookings`, {
              method: "GET",
              headers: {
                  "Content-Type": "application/json",
                  "Authorization": `${token}`
              }
          })

          const data = await response.json()
          console.log(data.records)
          //setSession(data);
          setMeetingLink(data.records.meeting_link);
          //setTimeSlot(data.description);
      }
      getItems()
  }, [])

  return (
    <div>
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
            value={meetingLink}
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
    </div>
  )
}

export default StaticComponent