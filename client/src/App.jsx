import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"



import DonorDashboard from './pages/DonorDashboard';


import HospitalDashboard from './pages/HospitalDashboard';

import OrganTracking from './pages/OrganTracking';

import RecipientDashboard from './pages/RecipientDashboard';

const App =() => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/donordashboard" element={<DonorDashboard />} />
          <Route path="/HospitalDashboard" element={<HospitalDashboard />} />
          <Route path="/OrganTracking" element={<OrganTracking />} />
          <Route path="/recipientdashboard" element={<RecipientDashboard />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App