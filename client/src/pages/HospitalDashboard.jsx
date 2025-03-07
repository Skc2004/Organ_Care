import React, { useEffect, useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import "chart.js/auto";
import axios from "axios";

const HospitalDashboard = () => {
  const [organAvailability, setOrganAvailability] = useState({
    labels: [],
    datasets: [
      {
        label: "Available Organs",
        data: [],
        backgroundColor: ["#4CAF50", "#FF9800", "#F44336", "#3F51B5"],
      },
    ],
  });
  const [transplantStats, setTransplantStats] = useState({
    labels: [],
    datasets: [
      {
        label: "Transplants Performed",
        data: [],
        backgroundColor: "#2196F3",
      },
    ],
  });
  const [hospitalInfo, setHospitalInfo] = useState({ name: "", location: "", contact: "" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/hospital/dashboard", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        const data = response.data;
        setHospitalInfo(data.hospitalInfo);
        setOrganAvailability({
          labels: data.organs.map((o) => o.type),
          datasets: [
            {
              label: "Available Organs",
              data: data.organs.map((o) => o.count),
              backgroundColor: ["#4CAF50", "#FF9800", "#F44336", "#3F51B5"],
            },
          ],
        });
        setTransplantStats({
          labels: data.transplants.map((t) => t.month),
          datasets: [
            {
              label: "Transplants Performed",
              data: data.transplants.map((t) => t.count),
              backgroundColor: "#2196F3",
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching hospital data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Hospital Dashboard</h2>
      <div className="bg-white p-4 shadow-md rounded-lg mb-6">
        <h3 className="text-lg font-semibold">Hospital Information</h3>
        <p><strong>Name:</strong> {hospitalInfo.name}</p>
        <p><strong>Location:</strong> {hospitalInfo.location}</p>
        <p><strong>Contact:</strong> {hospitalInfo.contact}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-lg font-semibold">Available Organs</h3>
          <Pie data={organAvailability} />
        </div>
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-lg font-semibold">Transplant Statistics</h3>
          <Bar data={transplantStats} />
        </div>
      </div>
    </div>
  );
};

export default HospitalDashboard;
