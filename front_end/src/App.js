
import React from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TimeSlots from "./components/TimeSlots";
import NewTimeSlot from './components/NewTimeSlot';
import SlotDetail from './components/SlotDetail';
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <div className="App">
      
  
      <Router>
        <Routes>
          <Route path="/" exact element={<TimeSlots />} />
          <Route path="/slots/:id" element={<SlotDetail />} />
          <Route path="/newslot" exact element={<NewTimeSlot />} />
          <Route path='/register' element={<RegistrationForm />} />

        </Routes>
      </Router>

    </div>
  );
}


export default App;
