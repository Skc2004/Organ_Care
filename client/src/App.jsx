import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import AdminDashboard from './pages/AdminDashboard';
import AwarenessCampaign from './pages/AwarenessCampaign';
import CompliancePage from './pages/Compliance';
import DonorDashboard from './pages/DonorDashboard';
import FAQ from './pages/FAQ';
import GovernmentDashboard from './pages/GovernmentDashboard';
import HospitalDashboard from './pages/HospitalDashboard';
import NGODashboard from './pages/NGODashboard';
import OrganTracking from './pages/OrganTracking';

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
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/GovernmentDashboard" element={<GovernmentDashboard />} />
          <Route path="/HospitalDashboard" element={<HospitalDashboard />} />
          <Route path="/NGODashboard" element={<NGODashboard />} />
          <Route path="/OrganTracking" element={<OrganTracking />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App