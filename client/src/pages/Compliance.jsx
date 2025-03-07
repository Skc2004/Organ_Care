// src/pages/Compliance.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const CompliancePage = () => {
  const [complianceData, setComplianceData] = useState([]);

  useEffect(() => {
    const fetchComplianceData = async () => {
      try {
        const response = await axios.get("/api/compliance", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setComplianceData(response.data);
      } catch (error) {
        console.error("Error fetching compliance data", error);
      }
    };
    fetchComplianceData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Compliance and Regulations</h2>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <h3 className="text-lg font-semibold">Regulatory Guidelines</h3>
        <ul className="list-disc pl-5 mt-2">
          {complianceData.map((item, index) => (
            <li key={index} className="mb-2">{item.guideline}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CompliancePage;
