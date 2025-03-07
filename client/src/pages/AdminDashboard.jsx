// src/pages/admin/Dashboard.jsx
import React, { useEffect, useState } from "react";
import { Line, Pie } from "react-chartjs-2";
import "chart.js/auto";
import axios from "axios";

const AdminDashboard = () => {
  const [userStats, setUserStats] = useState({
    labels: [],
    datasets: [
      {
        label: "User Registrations",
        data: [],
        borderColor: "#3b82f6",
        fill: false,
      },
    ],
  });
  const [organStats, setOrganStats] = useState({
    labels: ["Available", "Allocated", "Transplanted"],
    datasets: [
      {
        data: [0, 0, 0],
        backgroundColor: ["#4CAF50", "#FF9800", "#F44336"],
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/admin/dashboard", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        const data = response.data;
        setUserStats({
          labels: data.months,
          datasets: [
            {
              label: "User Registrations",
              data: data.registrations,
              borderColor: "#3b82f6",
              fill: false,
            },
          ],
        });
        setOrganStats({
          labels: ["Available", "Allocated", "Transplanted"],
          datasets: [
            {
              data: [data.available, data.allocated, data.transplanted],
              backgroundColor: ["#4CAF50", "#FF9800", "#F44336"],
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching admin data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-lg font-semibold">User Registration Statistics</h3>
          <Line data={userStats} />
        </div>
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-lg font-semibold">Organ Distribution</h3>
          <Pie data={organStats} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
