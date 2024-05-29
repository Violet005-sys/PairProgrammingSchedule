import React from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TimeSlots from "./Maincomponents/TimeSlots";
import NewTimeSlot from './Maincomponents/NewTimeSlot';
import SlotDetail from './Maincomponents/SlotDetail';
//import RegistrationForm from './Maincomponents/RegistrationForm';

function App() {
  return (
    <div className="App">
      
  
      <Router>
        <Routes>
          <Route path="/" exact element={<TimeSlots />} />
          <Route path="/slots/:id" element={<SlotDetail />} />
          <Route path="/newslot" exact element={<NewTimeSlot />} />

        </Routes>
      </Router>

    </div>
  );
}


export default App;
