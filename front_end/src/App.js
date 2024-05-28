import React from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TimeSlots from "./components/TimeSlots";
import NewTimeSlot from './components/NewTimeSlot';

function App() {
  return (
    <div className="App">
      
  
      <Router>
        <Routes>
          <Route path="/" exact element={<TimeSlots />} />
          <Route path="/newslot" exact element={<NewTimeSlot />} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
