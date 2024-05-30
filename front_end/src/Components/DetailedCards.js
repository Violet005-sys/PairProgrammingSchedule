import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BASE_URL, token } from '../utils/configs';
import DeleteModal from "./Deleting/DeleteModal";
import JoiningModal from "./Joining/JoiningModal";
import EditModal from "./Editing.js/EditModal";

const DetailedCards = () => {
    
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">People :</div>
        <div className="card-body">
          <h5 className="card-title">Topic: </h5>
          <p className="card-text">Description : </p>
          <div className="button_group d-flex justify-content-end">
            <button className="card- btn btn-warning btn-sm">

               <DeleteModal />
            <JoiningModal />
            <EditModal />
            </button>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedCards;
