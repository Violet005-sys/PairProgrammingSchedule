import React from "react";


const SessionCards = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
        <div className="button_group d-flex justify-content-between">
          <span>People :</span>
        <i className="bi bi-arrow-up-right-square-fill"></i>
          {
            /* <DeleteModal />
            <JoiningModal />
            <EditModal />*/
          } 
          </div></div>
        <div className="card-body">
          
          <h5 className="card-title">Topic: </h5>
          <p className="card-text">Description : </p>
          
        </div>
      </div>
    </div>
  );
};

export default SessionCards;
