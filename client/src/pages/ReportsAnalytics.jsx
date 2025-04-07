// // src/pages/ReportingAnalytics.jsx
// import React, { useEffect, useState } from "react";
// import { Line, Pie } from "react-chartjs-2";
// import "chart.js/auto";
// import axios from "axios";

// const ReportingAnalytics = () => {
//   const [reportData, setReportData] = useState({
//     labels: [],
//     datasets: [
//       {
//         label: "Organ Transplants Over Time",
//         data: [],
//         borderColor: "#4CAF50",
//         backgroundColor: "rgba(76, 175, 80, 0.2)",
//       },
//     ],
//   });

//   const [organDistribution, setOrganDistribution] = useState({
//     labels: [],
//     datasets: [
//       {
//         label: "Organ Type Distribution",
//         data: [],
//         backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#9966FF"],
//       },
//     ],
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("/api/reports/analytics", {
//           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//         });
//         const data = response.data;
//         setReportData({
//           labels: data.months,
//           datasets: [
//             {
//               label: "Organ Transplants Over Time",
//               data: data.transplantCounts,
//               borderColor: "#4CAF50",
//               backgroundColor: "rgba(76, 175, 80, 0.2)",
//             },
//           ],
//         });
//         setOrganDistribution({
//           labels: data.organTypes,
//           datasets: [
//             {
//               label: "Organ Type Distribution",
//               data: data.organCounts,
//               backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#9966FF"],
//             },
//           ],
//         });
//       } catch (error) {
//         console.error("Error fetching analytics data", error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Reporting & Analytics</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="bg-white p-4 shadow-md rounded-lg">
//           <h3 className="text-lg font-semibold">Organ Transplants Over Time</h3>
//           <Line data={reportData} />
//         </div>
//         <div className="bg-white p-4 shadow-md rounded-lg">
//           <h3 className="text-lg font-semibold">Organ Type Distribution</h3>
//           <Pie data={organDistribution} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReportingAnalytics;

// src/pages/ReportingAnalytics.jsx
import React from "react";
import { Line, Pie } from "react-chartjs-2";
import "chart.js/auto";
import { motion } from "framer-motion";

const ReportingAnalytics = () => {
  const reportData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Organ Transplants Over Time",
        data: [12, 19, 10, 25, 16, 20],
        borderColor: "#10B981",
        backgroundColor: "rgba(16, 185, 129, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const organDistribution = {
    labels: ["Kidney", "Liver", "Heart", "Lung", "Pancreas"],
    datasets: [
      {
        label: "Organ Type Distribution",
        data: [45, 25, 15, 10, 5],
        backgroundColor: [
          "#6366f1", // Indigo
          "#22c55e", // Green
          "#f59e0b", // Amber
          "#ef4444", // Red
          "#3b82f6", // Blue
        ],
        hoverOffset: 10,
      },
    ],
  };

  return (
    <motion.div
      className="p-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2 rounded-xl shadow mb-6 inline-block">
        Reporting & Analytics
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-xl font-semibold text-green-600 mb-4">
            Organ Transplants Over Time
          </h3>
          <Line data={reportData} />
        </motion.div>

        <motion.div
          className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-xl font-semibold text-blue-600 mb-4">
            Organ Type Distribution
          </h3>
          <Pie data={organDistribution} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ReportingAnalytics;
