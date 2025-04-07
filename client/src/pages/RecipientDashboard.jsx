// // src/pages/recipient/Dashboard.jsx
// import React, { useEffect, useState } from "react";
// import { Line } from "react-chartjs-2";
// import "chart.js/auto";
// import axios from "axios";

// const RecipientDashboard = () => {
//   const [organRequestData, setOrganRequestData] = useState({
//     labels: [],
//     datasets: [
//       {
//         label: "Organ Requests",
//         data: [],
//         borderColor: "#FF5733",
//         fill: false,
//       },
//     ],
//   });
//   const [priorityLevel, setPriorityLevel] = useState(0);
//   const [requestHistory, setRequestHistory] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("/api/recipient/dashboard", {
//           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//         });
//         const data = response.data;
//         setOrganRequestData({
//           labels: data.months,
//           datasets: [
//             {
//               label: "Organ Requests",
//               data: data.requests,
//               borderColor: "#FF5733",
//               fill: false,
//             },
//           ],
//         });
//         setPriorityLevel(data.priorityLevel);
//         setRequestHistory(data.history);
//       } catch (error) {
//         console.error("Error fetching recipient data", error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Recipient Dashboard</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="bg-white p-4 shadow-md rounded-lg">
//           <h3 className="text-lg font-semibold">Organ Request Statistics</h3>
//           <Line data={organRequestData} />
//         </div>
//         <div className="bg-white p-4 shadow-md rounded-lg">
//           <h3 className="text-lg font-semibold">Priority Level</h3>
//           <p className="mt-2 text-blue-600">Current Priority Level: {priorityLevel}</p>
//         </div>
//       </div>
//       <div className="bg-white p-4 shadow-md rounded-lg mt-6">
//         <h3 className="text-lg font-semibold">Request History</h3>
//         <table className="w-full mt-4 border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border p-2">Date</th>
//               <th className="border p-2">Organ Needed</th>
//               <th className="border p-2">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {requestHistory.map((request, index) => (
//               <tr key={index}>
//                 <td className="border p-2">{request.date}</td>
//                 <td className="border p-2">{request.organ}</td>
//                 <td className={`border p-2 ${request.status === "Fulfilled" ? "text-green-600" : "text-yellow-600"}`}>
//                   {request.status}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default RecipientDashboard;

// src/pages/recipient/Dashboard.jsx
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { motion } from "framer-motion";

const RecipientDashboard = () => {
  const organRequestData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Organ Requests",
        data: [1, 3, 2, 4, 5],
        borderColor: "#6366f1",
        backgroundColor: "#c7d2fe",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const priorityLevel = 4;

  const requestHistory = [
    { date: "2024-12-15", organ: "Kidney", status: "Pending" },
    { date: "2025-01-22", organ: "Liver", status: "Fulfilled" },
    { date: "2025-03-10", organ: "Heart", status: "Pending" },
  ];

  const [newRequest, setNewRequest] = useState({ organ: "", reason: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setNewRequest({ ...newRequest, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call or add to local state
    console.log("New Request Submitted:", newRequest);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setNewRequest({ organ: "", reason: "" });
  };

  return (
    <motion.div
      className="p-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-500 to-indigo-600 text-white px-6 py-2 rounded-xl shadow mb-6 inline-block">
        Recipient Dashboard
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-5 border border-gray-200"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-xl font-semibold text-indigo-600 mb-4">
            Organ Request Statistics
          </h3>
          <Line data={organRequestData} />
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl shadow-xl p-5 border border-gray-200 flex flex-col justify-center"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-xl font-semibold text-indigo-600 mb-4">
            Priority Level
          </h3>
          <p className="text-4xl font-bold text-indigo-700">{priorityLevel}</p>
          <p className="text-gray-600 mt-2">
            Higher levels indicate greater urgency.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="bg-white rounded-2xl shadow-xl p-5 border border-gray-200 mt-8"
        whileHover={{ scale: 1.01 }}
      >
        <h3 className="text-xl font-semibold text-indigo-600 mb-4">
          Request History
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-700 border border-gray-200 rounded-xl overflow-hidden">
            <thead className="text-xs text-white uppercase bg-indigo-500">
              <tr>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Organ</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {requestHistory.map((entry, index) => (
                <tr
                  key={index}
                  className="bg-white border-t border-gray-200 hover:bg-indigo-50"
                >
                  <td className="px-4 py-3">{entry.date}</td>
                  <td className="px-4 py-3">{entry.organ}</td>
                  <td
                    className={`px-4 py-3 font-semibold ${
                      entry.status === "Fulfilled"
                        ? "text-green-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {entry.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      <motion.div
        className="bg-white rounded-2xl shadow-xl p-5 border border-gray-200 mt-10"
        whileHover={{ scale: 1.01 }}
      >
        <h3 className="text-xl font-semibold text-indigo-600 mb-4">
          Request a New Organ
        </h3>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Organ Type
            </label>
            <input
              type="text"
              name="organ"
              value={newRequest.organ}
              onChange={handleInputChange}
              placeholder="e.g. Kidney"
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Reason
            </label>
            <textarea
              name="reason"
              value={newRequest.reason}
              onChange={handleInputChange}
              placeholder="Explain your medical situation"
              rows={3}
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-600 text-white font-semibold px-6 py-2 rounded-xl hover:bg-indigo-700 transition"
          >
            Submit Request
          </button>
          {submitted && (
            <p className="text-green-600 mt-2 font-medium">
              Organ request submitted successfully!
            </p>
          )}
        </form>
      </motion.div>
    </motion.div>
  );
};

export default RecipientDashboard;

