// src/pages/ReportingAnalytics.jsx
import React, { useEffect, useState } from "react";
import { Line, Pie } from "react-chartjs-2";
import "chart.js/auto";
import axios from "axios";

const ReportingAnalytics = () => {
  const [reportData, setReportData] = useState({
    labels: [],
    datasets: [
      {
        label: "Organ Transplants Over Time",
        data: [],
        borderColor: "#4CAF50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
      },
    ],
  });

  const [organDistribution, setOrganDistribution] = useState({
    labels: [],
    datasets: [
      {
        label: "Organ Type Distribution",
        data: [],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#9966FF"],
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/reports/analytics", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        const data = response.data;
        setReportData({
          labels: data.months,
          datasets: [
            {
              label: "Organ Transplants Over Time",
              data: data.transplantCounts,
              borderColor: "#4CAF50",
              backgroundColor: "rgba(76, 175, 80, 0.2)",
            },
          ],
        });
        setOrganDistribution({
          labels: data.organTypes,
          datasets: [
            {
              label: "Organ Type Distribution",
              data: data.organCounts,
              backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#9966FF"],
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching analytics data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Reporting & Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-lg font-semibold">Organ Transplants Over Time</h3>
          <Line data={reportData} />
        </div>
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-lg font-semibold">Organ Type Distribution</h3>
          <Pie data={organDistribution} />
        </div>
      </div>
    </div>
  );
};

export default ReportingAnalytics;