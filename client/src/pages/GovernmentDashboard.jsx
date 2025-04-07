// // src/pages/government/Dashboard.jsx
// import React, { useEffect, useState } from "react";
// import { Bar } from "react-chartjs-2";
// import "chart.js/auto";
// import axios from "axios";

// const GovernmentDashboard = () => {
//   const [policyData, setPolicyData] = useState({
//     labels: [],
//     datasets: [
//       {
//         label: "Policy Compliance Rate",
//         data: [],
//         backgroundColor: "#4CAF50",
//       },
//     ],
//   });
//   const [regulations, setRegulations] = useState([]);
//   const [reports, setReports] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("/api/government/dashboard", {
//           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//         });
//         const data = response.data;
//         setPolicyData({
//           labels: data.policyLabels,
//           datasets: [
//             {
//               label: "Policy Compliance Rate",
//               data: data.policyCompliance,
//               backgroundColor: "#4CAF50",
//             },
//           ],
//         });
//         setRegulations(data.regulations);
//         setReports(data.reports);
//       } catch (error) {
//         console.error("Error fetching government data", error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Government Dashboard</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="bg-white p-4 shadow-md rounded-lg">
//           <h3 className="text-lg font-semibold">Policy Compliance Analytics</h3>
//           <Bar data={policyData} />
//         </div>
//         <div className="bg-white p-4 shadow-md rounded-lg">
//           <h3 className="text-lg font-semibold">Regulations Overview</h3>
//           <ul className="mt-2">
//             {regulations.map((reg, index) => (
//               <li key={index} className="text-blue-600">{reg}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       <div className="bg-white p-4 shadow-md rounded-lg mt-6">
//         <h3 className="text-lg font-semibold">Compliance Reports</h3>
//         <table className="w-full mt-4 border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border p-2">Report ID</th>
//               <th className="border p-2">Date</th>
//               <th className="border p-2">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {reports.map((report, index) => (
//               <tr key={index}>
//                 <td className="border p-2">{report.id}</td>
//                 <td className="border p-2">{report.date}</td>
//                 <td className={`border p-2 ${report.status === "Compliant" ? "text-green-600" : "text-red-600"}`}>
//                   {report.status}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default GovernmentDashboard;

// // src/pages/government/Dashboard.jsx
// import React from "react";
// import { Bar } from "react-chartjs-2";
// import "chart.js/auto";
// import { motion } from "framer-motion";
// import { Landmark } from "lucide-react";

// const GovernmentDashboard = () => {
//   // Hardcoded dummy data
//   const policyData = {
//     labels: ["Education", "Health", "Transport", "Energy", "Defense"],
//     datasets: [
//       {
//         label: "Policy Compliance Rate",
//         data: [85, 70, 60, 90, 75],
//         backgroundColor: "#4CAF50",
//       },
//     ],
//   };

//   const regulations = [
//     "Data Privacy Act 2020",
//     "Clean Energy Mandate",
//     "National Education Standards",
//     "Cybersecurity Compliance Act",
//     "Public Health Safety Guidelines",
//   ];

//   const reports = [
//     { id: "RPT-001", date: "2025-04-01", status: "Compliant" },
//     { id: "RPT-002", date: "2025-04-02", status: "Non-Compliant" },
//     { id: "RPT-003", date: "2025-04-03", status: "Compliant" },
//     { id: "RPT-004", date: "2025-04-04", status: "Compliant" },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 animate-gradient relative py-16 px-6">
//       {/* Animated floating blobs */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
//         {[...Array(3)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-30"
//             animate={{ x: [0, 100, 0], y: [0, 100, 0], scale: [1, 1.2, 1] }}
//             transition={{ duration: 14 + i * 2, repeat: Infinity, ease: "easeInOut" }}
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               backgroundColor: ['#60A5FA', '#818CF8', '#E879F9'][i % 3],
//               width: '250px',
//               height: '250px',
//             }}
//           />
//         ))}
//       </div>

//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="relative z-10 max-w-6xl mx-auto"
//       >
//         <div className="mb-12 text-center">
//           <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full mb-4">
//             <Landmark className="w-5 h-5 mr-2" />
//             <span className="font-medium text-sm uppercase tracking-wide">Gov Panel</span>
//           </div>
//           <h1 className="text-4xl font-bold font-display text-gray-900 mb-2 heading-shadow">Government Dashboard</h1>
//           <p className="text-gray-600 text-lg font-light">Policy compliance and reporting overview</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-6 rounded-2xl shadow-xl">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4">Policy Compliance Analytics</h3>
//             <Bar data={policyData} />
//           </motion.div>

//           <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-6 rounded-2xl shadow-xl">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4">Regulations Overview</h3>
//             <ul className="space-y-2">
//               {regulations.map((reg, index) => (
//                 <li key={index} className="text-blue-600 font-medium">{reg}</li>
//               ))}
//             </ul>
//           </motion.div>
//         </div>

//         <motion.div
//           whileHover={{ scale: 1.01 }}
//           className="bg-white p-6 rounded-2xl shadow-xl mt-10"
//         >
//           <h3 className="text-xl font-semibold text-gray-800 mb-4">Compliance Reports</h3>
//           <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="p-3 text-left text-sm font-semibold text-gray-700">Report ID</th>
//                 <th className="p-3 text-left text-sm font-semibold text-gray-700">Date</th>
//                 <th className="p-3 text-left text-sm font-semibold text-gray-700">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {reports.map((report, index) => (
//                 <tr key={index} className="border-t">
//                   <td className="p-3 text-sm">{report.id}</td>
//                   <td className="p-3 text-sm">{report.date}</td>
//                   <td
//                     className={`p-3 text-sm font-medium ${
//                       report.status === "Compliant" ? "text-green-600" : "text-red-600"
//                     }`}
//                   >
//                     {report.status}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default GovernmentDashboard;


// // src/pages/government/Dashboard.jsx
// import React, { useState } from "react";
// import { Bar } from "react-chartjs-2";
// import "chart.js/auto";

// const GovernmentDashboard = () => {
//   const [policyData] = useState({
//     labels: ["Education", "Health", "Transport", "Energy", "Defense"],
//     datasets: [
//       {
//         label: "Policy Compliance Rate",
//         data: [85, 70, 60, 90, 75],
//         backgroundColor: "#4CAF50",
//       },
//     ],
//   });

//   const [regulations] = useState([
//     "Data Privacy Act 2020",
//     "Clean Energy Mandate",
//     "National Education Standards",
//     "Cybersecurity Compliance Act",
//     "Public Health Safety Guidelines",
//   ]);

//   const [reports] = useState([
//     { id: "RPT-001", date: "2025-04-01", status: "Compliant" },
//     { id: "RPT-002", date: "2025-04-02", status: "Non-Compliant" },
//     { id: "RPT-003", date: "2025-04-03", status: "Compliant" },
//     { id: "RPT-004", date: "2025-04-04", status: "Compliant" },
//   ]);

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <h2 className="text-2xl font-bold mb-4 text-slate-900">Government Dashboard</h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Policy Compliance Chart */}
//         <div className="bg-white p-6 shadow-md rounded-lg transform hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
//           <h3 className="text-lg font-semibold text-slate-900 mb-4">Policy Compliance Analytics</h3>
//           <Bar
//             data={policyData}
//             options={{
//               responsive: true,
//               plugins: {
//                 legend: { position: "top" },
//               },
//             }}
//           />
//         </div>

//         {/* Regulation List */}
//         <div className="bg-white p-6 shadow-md rounded-lg transform hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
//           <h3 className="text-lg font-semibold text-slate-900 mb-4">Regulations Overview</h3>
//           <ul className="list-disc list-inside text-slate-600 space-y-1">
//             {regulations.map((reg, index) => (
//               <li key={index}>{reg}</li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* Compliance Reports Table */}
//       <div className="bg-white p-6 shadow-md rounded-lg mt-6 transform hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
//         <h3 className="text-lg font-semibold text-slate-900 mb-4">Compliance Reports</h3>
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
//               <th className="p-3 text-left">Report ID</th>
//               <th className="p-3 text-left">Date</th>
//               <th className="p-3 text-left">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {reports.map((report, index) => (
//               <tr
//                 key={index}
//                 className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200"
//               >
//                 <td className="p-3 text-slate-700">{report.id}</td>
//                 <td className="p-3 text-slate-700">{report.date}</td>
//                 <td
//                   className={`p-3 font-medium ${
//                     report.status === "Compliant" ? "text-green-600" : "text-red-600"
//                   }`}
//                 >
//                   {report.status}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default GovernmentDashboard;


import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const GovernmentDashboard = () => {
  const [policyData, setPolicyData] = useState({
    labels: ["Health", "Education", "Transport", "Environment", "Defense"],
    datasets: [
      {
        label: "Policy Compliance Rate",
        data: [85, 78, 92, 70, 88],
        backgroundColor: "#4CAF50",
      },
    ],
  });

  const [regulations, setRegulations] = useState([
    "Healthcare Accessibility Act",
    "Clean Energy Regulation",
    "Education Modernization Bill",
  ]);

  const [reports, setReports] = useState([
    { id: "REP-001", date: "2024-12-01", status: "Compliant" },
    { id: "REP-002", date: "2024-12-10", status: "Non-Compliant" },
    { id: "REP-003", date: "2025-01-05", status: "Compliant" },
  ]);

  // Upload policy form state
  const [newPolicy, setNewPolicy] = useState({
    title: "",
    description: "",
    date: "",
    file: null,
  });

  const handleFormChange = (e) => {
    const { name, value, type, files } = e.target;
    setNewPolicy((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handlePolicyUpload = (e) => {
    e.preventDefault();
    console.log("Uploading policy:", newPolicy);
    alert("Policy uploaded successfully!");
    setNewPolicy({
      title: "",
      description: "",
      date: "",
      file: null,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-2xl font-bold mb-4 text-slate-900">Government Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Policy Compliance Analytics */}
        <div className="bg-white p-6 shadow-md rounded-lg transform hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Policy Compliance Analytics</h3>
          <Bar data={policyData} />
        </div>

        {/* Regulations Overview */}
        <div className="bg-white p-6 shadow-md rounded-lg transform hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Regulations Overview</h3>
          <ul className="list-disc list-inside text-slate-700">
            {regulations.map((reg, index) => (
              <li key={index}>{reg}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Compliance Reports */}
      <div className="bg-white p-6 shadow-md rounded-lg mt-6 transform hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Compliance Reports</h3>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
              <th className="p-3 text-left">Report ID</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200"
              >
                <td className="p-3 text-slate-700">{report.id}</td>
                <td className="p-3 text-slate-700">{report.date}</td>
                <td
                  className={`p-3 font-medium ${
                    report.status === "Compliant" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {report.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Upload New Policy */}
      <div className="bg-white p-6 shadow-md rounded-lg mt-6 transform hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Upload New Policy</h3>
        <form onSubmit={handlePolicyUpload}>
          <div className="space-y-4">
            {/* Policy Title */}
            <div>
              <label className="block text-sm font-medium text-slate-700">Policy Title</label>
              <input
                type="text"
                name="title"
                value={newPolicy.title}
                onChange={handleFormChange}
                className="mt-1 block w-full p-2 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter policy title"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-slate-700">Description</label>
              <textarea
                name="description"
                value={newPolicy.description}
                onChange={handleFormChange}
                rows="3"
                className="mt-1 block w-full p-2 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Brief policy description"
                required
              ></textarea>
            </div>

            {/* Effective Date */}
            <div>
              <label className="block text-sm font-medium text-slate-700">Effective Date</label>
              <input
                type="date"
                name="date"
                value={newPolicy.date}
                onChange={handleFormChange}
                className="mt-1 block w-full p-2 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-sm font-medium text-slate-700">Attach Policy Document (PDF)</label>
              <input
                type="file"
                name="file"
                accept=".pdf"
                onChange={handleFormChange}
                className="mt-1 block w-full text-slate-700"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-2 rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
              >
                Upload Policy
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GovernmentDashboard;
