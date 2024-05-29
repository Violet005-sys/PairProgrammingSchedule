import React from "react";

const JoiningForm = () => {
  return (
    <div>
      <form>
        <div className="form-floating mb-3">
          <input
            type="text"
            readOnly
            value=""
            className="form-control"
            id="floatingInput"
            placeholder="Topic of the session"
          />
          <label htmlFor="floatingInput">Title</label>
        </div>
        <div className="form-floating">
          <textarea
            className="form-control"
            readonlyvalue=""
            placeholder="Brief Description of the topic"
            id="floatingTextarea"
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
        
      </form>
    </div>
  );
};

export default JoiningForm;