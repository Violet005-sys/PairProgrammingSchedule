import React from "react";


const SessionCards = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">People :</div>
        <div className="card-body">
          <h5 className="card-title">Topic: </h5>
          <p className="card-text">Description : </p>
          <div className="button_group d-flex justify-content-center">
          <button className="card- btn btn-warning btn-sm"><i class="bi bi-arrow-up-right-square-fill"></i> View More</button>

          {
            /* <DeleteModal />
            <JoiningModal />
            <EditModal />*/
          }
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionCards;
