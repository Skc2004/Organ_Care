// src/pages/government/Dashboard.jsx
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import axios from "axios";

const GovernmentDashboard = () => {
  const [policyData, setPolicyData] = useState({
    labels: [],
    datasets: [
      {
        label: "Policy Compliance Rate",
        data: [],
        backgroundColor: "#4CAF50",
      },
    ],
  });
  const [regulations, setRegulations] = useState([]);
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/government/dashboard", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        const data = response.data;
        setPolicyData({
          labels: data.policyLabels,
          datasets: [
            {
              label: "Policy Compliance Rate",
              data: data.policyCompliance,
              backgroundColor: "#4CAF50",
            },
          ],
        });
        setRegulations(data.regulations);
        setReports(data.reports);
      } catch (error) {
        console.error("Error fetching government data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Government Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-lg font-semibold">Policy Compliance Analytics</h3>
          <Bar data={policyData} />
        </div>
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-lg font-semibold">Regulations Overview</h3>
          <ul className="mt-2">
            {regulations.map((reg, index) => (
              <li key={index} className="text-blue-600">{reg}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-white p-4 shadow-md rounded-lg mt-6">
        <h3 className="text-lg font-semibold">Compliance Reports</h3>
        <table className="w-full mt-4 border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Report ID</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, index) => (
              <tr key={index}>
                <td className="border p-2">{report.id}</td>
                <td className="border p-2">{report.date}</td>
                <td className={`border p-2 ${report.status === "Compliant" ? "text-green-600" : "text-red-600"}`}>
                  {report.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GovernmentDashboard;