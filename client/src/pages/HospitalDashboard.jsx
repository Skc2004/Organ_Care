// import React, { useEffect, useState } from "react";
// import { Bar, Pie } from "react-chartjs-2";
// import "chart.js/auto";
// import axios from "axios";

// const HospitalDashboard = () => {
//   const [organAvailability, setOrganAvailability] = useState({
//     labels: [],
//     datasets: [
//       {
//         label: "Available Organs",
//         data: [],
//         backgroundColor: ["#4CAF50", "#FF9800", "#F44336", "#3F51B5"],
//       },
//     ],
//   });
//   const [transplantStats, setTransplantStats] = useState({
//     labels: [],
//     datasets: [
//       {
//         label: "Transplants Performed",
//         data: [],
//         backgroundColor: "#2196F3",
//       },
//     ],
//   });
//   const [hospitalInfo, setHospitalInfo] = useState({ name: "", location: "", contact: "" });

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("/api/hospital/dashboard", {
//           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//         });
//         const data = response.data;
//         setHospitalInfo(data.hospitalInfo);
//         setOrganAvailability({
//           labels: data.organs.map((o) => o.type),
//           datasets: [
//             {
//               label: "Available Organs",
//               data: data.organs.map((o) => o.count),
//               backgroundColor: ["#4CAF50", "#FF9800", "#F44336", "#3F51B5"],
//             },
//           ],
//         });
//         setTransplantStats({
//           labels: data.transplants.map((t) => t.month),
//           datasets: [
//             {
//               label: "Transplants Performed",
//               data: data.transplants.map((t) => t.count),
//               backgroundColor: "#2196F3",
//             },
//           ],
//         });
//       } catch (error) {
//         console.error("Error fetching hospital data", error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Hospital Dashboard</h2>
//       <div className="bg-white p-4 shadow-md rounded-lg mb-6">
//         <h3 className="text-lg font-semibold">Hospital Information</h3>
//         <p><strong>Name:</strong> {hospitalInfo.name}</p>
//         <p><strong>Location:</strong> {hospitalInfo.location}</p>
//         <p><strong>Contact:</strong> {hospitalInfo.contact}</p>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="bg-white p-4 shadow-md rounded-lg">
//           <h3 className="text-lg font-semibold">Available Organs</h3>
//           <Pie data={organAvailability} />
//         </div>
//         <div className="bg-white p-4 shadow-md rounded-lg">
//           <h3 className="text-lg font-semibold">Transplant Statistics</h3>
//           <Bar data={transplantStats} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HospitalDashboard;


import React, { useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import "chart.js/auto";

const HospitalDashboard = () => {
  // Hardcoded hospital info
  const [hospitalInfo] = useState({
    name: "Lifeline Hospital",
    location: "New Delhi, India",
    contact: "+91 98765 43210",
  });

  // Hardcoded organ availability (Pie Chart)
  const [organAvailability] = useState({
    labels: ["Kidney", "Liver", "Heart", "Lungs"],
    datasets: [
      {
        label: "Available Organs",
        data: [10, 5, 2, 3],
        backgroundColor: ["#4CAF50", "#FF9800", "#F44336", "#3F51B5"],
      },
    ],
  });

  // Hardcoded transplant statistics (Bar Chart)
  const [transplantStats] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Transplants Performed",
        data: [4, 6, 3, 8, 5],
        backgroundColor: "#2196F3",
      },
    ],
  });

  // Hardcoded incoming requests
  const [requests] = useState([
    { organ: "Kidney", hospital: "CityCare Hospital", urgency: "High", date: "2025-04-01" },
    { organ: "Liver", hospital: "HopeWell Clinic", urgency: "Medium", date: "2025-04-03" },
    { organ: "Heart", hospital: "MetroMed", urgency: "Critical", date: "2025-04-05" },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-2xl font-bold mb-6 text-slate-900">Hospital Dashboard</h2>

      {/* Hospital Info */}
      <div className="bg-white p-6 shadow-md rounded-lg mb-6 transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-slate-900 mb-2">Hospital Information</h3>
        <p className="text-slate-700"><strong>Name:</strong> {hospitalInfo.name}</p>
        <p className="text-slate-700"><strong>Location:</strong> {hospitalInfo.location}</p>
        <p className="text-slate-700"><strong>Contact:</strong> {hospitalInfo.contact}</p>
      </div>

      {/* Chart Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pie Chart */}
        <div className="bg-white p-6 shadow-md rounded-lg transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Available Organs</h3>
          <Pie data={organAvailability} />
        </div>

        {/* Bar Chart */}
        <div className="bg-white p-6 shadow-md rounded-lg transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Transplant Statistics</h3>
          <Bar
            data={transplantStats}
            options={{
              responsive: true,
              plugins: {
                legend: { position: "top" },
              },
            }}
          />
        </div>
      </div>

      {/* Incoming Organ Requests */}
      <div className="bg-white p-6 shadow-md rounded-lg mt-6 transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Incoming Organ Requests</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
              <th className="p-3">Organ</th>
              <th className="p-3">Requested By</th>
              <th className="p-3">Urgency</th>
              <th className="p-3">Request Date</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200"
              >
                <td className="p-3 text-slate-700">{request.organ}</td>
                <td className="p-3 text-slate-700">{request.hospital}</td>
                <td className={`p-3 font-semibold ${
                  request.urgency === "Critical"
                    ? "text-red-600"
                    : request.urgency === "High"
                    ? "text-orange-500"
                    : "text-yellow-500"
                }`}>
                  {request.urgency}
                </td>
                <td className="p-3 text-slate-700">{request.date}</td>
                <td className="p-3">
                  <div className="flex gap-2">
                    <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg text-sm transition-all">Accept</button>
                    <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm transition-all">Reject</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HospitalDashboard;
