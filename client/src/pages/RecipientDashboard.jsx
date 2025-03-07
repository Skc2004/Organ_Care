// src/pages/recipient/Dashboard.jsx
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import axios from "axios";

const RecipientDashboard = () => {
  const [organRequestData, setOrganRequestData] = useState({
    labels: [],
    datasets: [
      {
        label: "Organ Requests",
        data: [],
        borderColor: "#FF5733",
        fill: false,
      },
    ],
  });
  const [priorityLevel, setPriorityLevel] = useState(0);
  const [requestHistory, setRequestHistory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/recipient/dashboard", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        const data = response.data;
        setOrganRequestData({
          labels: data.months,
          datasets: [
            {
              label: "Organ Requests",
              data: data.requests,
              borderColor: "#FF5733",
              fill: false,
            },
          ],
        });
        setPriorityLevel(data.priorityLevel);
        setRequestHistory(data.history);
      } catch (error) {
        console.error("Error fetching recipient data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Recipient Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-lg font-semibold">Organ Request Statistics</h3>
          <Line data={organRequestData} />
        </div>
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-lg font-semibold">Priority Level</h3>
          <p className="mt-2 text-blue-600">Current Priority Level: {priorityLevel}</p>
        </div>
      </div>
      <div className="bg-white p-4 shadow-md rounded-lg mt-6">
        <h3 className="text-lg font-semibold">Request History</h3>
        <table className="w-full mt-4 border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Date</th>
              <th className="border p-2">Organ Needed</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {requestHistory.map((request, index) => (
              <tr key={index}>
                <td className="border p-2">{request.date}</td>
                <td className="border p-2">{request.organ}</td>
                <td className={`border p-2 ${request.status === "Fulfilled" ? "text-green-600" : "text-yellow-600"}`}>
                  {request.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecipientDashboard;
