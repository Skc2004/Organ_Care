// src/pages/OrganTracking.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const OrganTracking = () => {
  const [organs, setOrgans] = useState([]);

  useEffect(() => {
    const fetchOrgans = async () => {
      try {
        const response = await axios.get("/api/organs", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setOrgans(response.data);
      } catch (error) {
        console.error("Error fetching organs", error);
      }
    };
    fetchOrgans();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Organ Tracking</h2>
      <table className="w-full mt-4 border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Organ ID</th>
            <th className="border p-2">Type</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Donor ID</th>
            <th className="border p-2">Recipient ID</th>
            <th className="border p-2">Transportation Details</th>
          </tr>
        </thead>
        <tbody>
          {organs.map((organ, index) => (
            <tr key={index}>
              <td className="border p-2">{organ.OrganID}</td>
              <td className="border p-2">{organ.Type}</td>
              <td className="border p-2 text-blue-600">{organ.Status}</td>
              <td className="border p-2">{organ.DonorID}</td>
              <td className="border p-2">{organ.RecipientID || "Not Allocated"}</td>
              <td className="border p-2">{organ.TransportationDetails || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrganTracking;