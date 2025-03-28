import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import AdminDashboard from './pages/AdminDashboard';
import AwarenessCampaign from './pages/AwarenessCampaign';
import CompliancePage from './pages/Compliance';
import DonorDashboard from './pages/DonorDashboard';

const App =() => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/awarenesscampaign" element={<AwarenessCampaign />} />
          <Route path="/compliance" element={<CompliancePage />} />
          <Route path="/donordashboard" element={<DonorDashboard />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App