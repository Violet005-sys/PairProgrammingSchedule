import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { token } from "../utils/configs";
import BookingModal from "../Components/Booking/BookingModal";

const BASE_URL = "https://appointments-booking-api.onrender.com";

const SlotDetail2 = () => {
  const { id } = useParams();
  const [slot, setSlot] = useState({});

  useEffect(() => {
    const getSlot = async () => {
      const response = await fetch(`${BASE_URL}/slots/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      const data = await response.json();
      setSlot(data.slot);
    };
    getSlot();
  }, [id]);

  console.log(slot);

  return (
    <div class="container">
      <div class="row">
        <div class="col-4"></div>
        <div class="col-4">
          <div class="card mt-5">
            <div class="card-header"><h5 class="card-title">Would you like to book this session?</h5></div>
            <div class="card-body">
              <h5>{slot.day_name}</h5>
              <p class="card-text">
                <p>Start: {slot.start_time}</p>
                <p>End: {slot.end_time}</p>
              </p>
              <BookingModal day_name={slot.day_name} />
            </div>
          </div>
        </div>
        <div class="col-4"></div>
      </div>
    </div>
  );
};

export default SlotDetail2;
