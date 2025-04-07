// // src/pages/ngo/Dashboard.jsx
// import React, { useEffect, useState } from "react";
// import { Bar } from "react-chartjs-2";
// import "chart.js/auto";
// import axios from "axios";

// const NGODashboard = () => {
//   const [awarenessData, setAwarenessData] = useState({
//     labels: [],
//     datasets: [
//       {
//         label: "Awareness Campaigns Conducted",
//         data: [],
//         backgroundColor: "#4CAF50",
//       },
//     ],
//   });
//   const [financialSupport, setFinancialSupport] = useState(0);
//   const [campaigns, setCampaigns] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("/api/ngo/dashboard", {
//           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//         });
//         const data = response.data;
//         setAwarenessData({
//           labels: data.months,
//           datasets: [
//             {
//               label: "Awareness Campaigns Conducted",
//               data: data.campaigns,
//               backgroundColor: "#4CAF50",
//             },
//           ],
//         });
//         setFinancialSupport(data.financialSupport);
//         setCampaigns(data.campaignList);
//       } catch (error) {
//         console.error("Error fetching NGO data", error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">NGO Dashboard</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="bg-white p-4 shadow-md rounded-lg">
//           <h3 className="text-lg font-semibold">Awareness Campaign Statistics</h3>
//           <Bar data={awarenessData} />
//         </div>
//         <div className="bg-white p-4 shadow-md rounded-lg">
//           <h3 className="text-lg font-semibold">Financial Support Provided</h3>
//           <p className="mt-2 text-green-600">Total Support: ${financialSupport}</p>
//         </div>
//       </div>
//       <div className="bg-white p-4 shadow-md rounded-lg mt-6">
//         <h3 className="text-lg font-semibold">Recent Campaigns</h3>
//         <table className="w-full mt-4 border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border p-2">Date</th>
//               <th className="border p-2">Campaign Name</th>
//               <th className="border p-2">Impact</th>
//             </tr>
//           </thead>
//           <tbody>
//             {campaigns.map((campaign, index) => (
//               <tr key={index}>
//                 <td className="border p-2">{campaign.date}</td>
//                 <td className="border p-2">{campaign.name}</td>
//                 <td className="border p-2 text-blue-600">{campaign.impact}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default NGODashboard;

import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const NGODashboard = () => {
  const [awarenessData] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Awareness Campaigns Conducted",
        data: [5, 8, 4, 10, 6],
        backgroundColor: "#4CAF50",
      },
    ],
  });

  const [financialSupport] = useState(120000); // in USD

  const [campaigns, setCampaigns] = useState([
    {
      date: "2025-04-01",
      name: "Organ Donation Drive - Delhi",
      impact: "Reached 5000+ individuals",
    },
    {
      date: "2025-03-15",
      name: "Awareness Rally - Mumbai",
      impact: "Engaged 2000+ citizens",
    },
    {
      date: "2025-02-20",
      name: "Campus Awareness Tour",
      impact: "10 colleges covered",
    },
  ]);

  const [newCampaign, setNewCampaign] = useState({ date: "", name: "", impact: "" });

  const handleInputChange = (e) => {
    setNewCampaign({ ...newCampaign, [e.target.name]: e.target.value });
  };

  const handleAddCampaign = (e) => {
    e.preventDefault();
    if (!newCampaign.date || !newCampaign.name || !newCampaign.impact) return;
    setCampaigns([...campaigns, newCampaign]);
    setNewCampaign({ date: "", name: "", impact: "" });
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h2 className="text-3xl font-bold mb-6 text-slate-900">NGO Dashboard</h2>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-semibold mb-4 text-slate-800">Awareness Campaign Statistics</h3>
          <Bar
            data={awarenessData}
            options={{
              responsive: true,
              plugins: {
                legend: { position: "top" },
              },
            }}
          />
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-slate-800">Financial Support Provided</h3>
          <p className="mt-4 text-2xl font-bold text-green-600">
            ${financialSupport.toLocaleString()} USD
          </p>
        </div>
      </div>

      {/* Recent Campaigns */}
      <div className="mt-8 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
        <h3 className="text-xl font-semibold mb-4 text-slate-800">Recent Campaigns</h3>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Campaign Name</th>
              <th className="p-3 text-left">Impact</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <td className="p-3 text-slate-700">{campaign.date}</td>
                <td className="p-3 text-slate-700">{campaign.name}</td>
                <td className="p-3 text-blue-600">{campaign.impact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Upload New Campaign */}
      <div className="mt-10 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
        <h3 className="text-xl font-semibold mb-4 text-slate-800">Upload New Campaign</h3>
        <form onSubmit={handleAddCampaign} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="date"
              name="date"
              value={newCampaign.date}
              onChange={handleInputChange}
              className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <input
              type="text"
              name="name"
              placeholder="Campaign Name"
              value={newCampaign.name}
              onChange={handleInputChange}
              className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <input
              type="text"
              name="impact"
              placeholder="Impact (e.g., Reached 1000 people)"
              value={newCampaign.impact}
              onChange={handleInputChange}
              className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform"
          >
            Add Campaign
          </button>
        </form>
      </div>
    </div>
  );
};

export default NGODashboard;
