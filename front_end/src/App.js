import React, { useContext } from 'react'
import './App.css';
import Login from './components/login.components.js';



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TimeSlots from "./Maincomponents/TimeSlots";
import NewTimeSlot from './Maincomponents/NewTimeSlot';
import SlotDetail from './Maincomponents/SlotDetail';
import RegistrationForm from './Maincomponents/RegistrationForm';
import Sessions from './components/sessions/Sessions';
import AuthContext from './context/AuthContext';
import SessionParticipants from './components/sessions/SessionParticipants';

import Wrapper from './wrapper/Wrapper';
import Authenticate from './components/auth/Authenticate.js';


function App() {
  const token = useContext(AuthContext)
  console.log(token)
  return (
    <>
    {token ? (
      <Wrapper>
      <Router>
        <Routes>
          <Route path="/" exact element={<TimeSlots />} />
          <Route path="/slots/:id" element={<SlotDetail />} />
          <Route path="/newslot" exact element={<NewTimeSlot />} />
          <Route path='/register' element={<RegistrationForm />} />

          <Route path='/sessions' element={<Sessions />} />
          <Route path='/sessions/:id/people' element={<SessionParticipants />} />
        </Routes>
      </Router>    
    </Wrapper>
    ) : (<Authenticate />)}
    </>
  );
}

export default App;

