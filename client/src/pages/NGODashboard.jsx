// src/pages/ngo/Dashboard.jsx
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import axios from "axios";

const NGODashboard = () => {
  const [awarenessData, setAwarenessData] = useState({
    labels: [],
    datasets: [
      {
        label: "Awareness Campaigns Conducted",
        data: [],
        backgroundColor: "#4CAF50",
      },
    ],
  });
  const [financialSupport, setFinancialSupport] = useState(0);
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/ngo/dashboard", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        const data = response.data;
        setAwarenessData({
          labels: data.months,
          datasets: [
            {
              label: "Awareness Campaigns Conducted",
              data: data.campaigns,
              backgroundColor: "#4CAF50",
            },
          ],
        });
        setFinancialSupport(data.financialSupport);
        setCampaigns(data.campaignList);
      } catch (error) {
        console.error("Error fetching NGO data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">NGO Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-lg font-semibold">Awareness Campaign Statistics</h3>
          <Bar data={awarenessData} />
        </div>
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-lg font-semibold">Financial Support Provided</h3>
          <p className="mt-2 text-green-600">Total Support: ${financialSupport}</p>
        </div>
      </div>
      <div className="bg-white p-4 shadow-md rounded-lg mt-6">
        <h3 className="text-lg font-semibold">Recent Campaigns</h3>
        <table className="w-full mt-4 border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Date</th>
              <th className="border p-2">Campaign Name</th>
              <th className="border p-2">Impact</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign, index) => (
              <tr key={index}>
                <td className="border p-2">{campaign.date}</td>
                <td className="border p-2">{campaign.name}</td>
                <td className="border p-2 text-blue-600">{campaign.impact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NGODashboard;