// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Bar } from "react-chartjs-2";
// import "chart.js/auto";

// const AwarenessCampaign = () => {
//   const [campaigns, setCampaigns] = useState([]);
//   const [chartData, setChartData] = useState({
//     labels: [],
//     datasets: [
//       {
//         label: "Participation in Campaigns",
//         data: [],
//         backgroundColor: "#FF9800",
//       },
//     ],
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("/api/campaigns", {
//           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//         });
//         const data = response.data;
//         setCampaigns(data.campaignList);
//         setChartData({
//           labels: data.campaignList.map((c) => c.name),
//           datasets: [
//             {
//               label: "Participation in Campaigns",
//               data: data.campaignList.map((c) => c.participants),
//               backgroundColor: "#FF9800",
//             },
//           ],
//         });
//       } catch (error) {
//         console.error("Error fetching campaign data", error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Awareness Campaigns</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="bg-white p-4 shadow-md rounded-lg">
//           <h3 className="text-lg font-semibold">Campaign Participation</h3>
//           <Bar data={chartData} />
//         </div>
//         <div className="bg-white p-4 shadow-md rounded-lg">
//           <h3 className="text-lg font-semibold">Upcoming & Past Campaigns</h3>
//           <ul className="list-disc pl-5 mt-2">
//             {campaigns.map((campaign, index) => (
//               <li key={index} className="mb-2">
//                 <strong>{campaign.name}</strong> - {campaign.date} - {campaign.status}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AwarenessCampaign;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Bar } from "react-chartjs-2";
// import "chart.js/auto";

// const AwarenessCampaign = () => {
//   const [campaigns, setCampaigns] = useState([]);
//   const [chartData, setChartData] = useState({
//     labels: [],
//     datasets: [
//       {
//         label: "Participation in Campaigns",
//         data: [],
//         backgroundColor: "#FF9800",
//       },
//     ],
//   });
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("/api/campaigns", {
//           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//         });
//         console.log("API Response:", response.data); // Log the response
//         const data = response.data;
//         setCampaigns(data.campaignList);
//         setChartData({
//           labels: data.campaignList.map((c) => c.name),
//           datasets: [
//             {
//               label: "Participation in Campaigns",
//               data: data.campaignList.map((c) => c.participants),
//               backgroundColor: "#FF9800",
//             },
//           ],
//         });
//       } catch (error) {
//         console.error("Error fetching campaign data", error);
//       } finally {
//         setLoading(false); // Set loading to false after fetching data
//       }
//     };
//     fetchData();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//       </div>
//     );
//   }

//   if (!campaigns.length) {
//     return (
//       <div className="p-6">
//         <h2 className="text-2xl font-bold mb-4">Awareness Campaigns</h2>
//         <p className="text-gray-600">No campaigns available.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Awareness Campaigns</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="bg-white p-4 shadow-md rounded-lg">
//           <h3 className="text-lg font-semibold">Campaign Participation</h3>
//           <Bar data={chartData} />
//         </div>
//         <div className="bg-white p-4 shadow-md rounded-lg">
//           <h3 className="text-lg font-semibold">Upcoming & Past Campaigns</h3>
//           <ul className="list-disc pl-5 mt-2">
//             {campaigns.map((campaign, index) => (
//               <li key={index} className="mb-2">
//                 <strong>{campaign.name}</strong> - {campaign.date} - {campaign.status}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AwarenessCampaign;

// import React, { useEffect, useState } from "react";
// import { Bar } from "react-chartjs-2";
// import "chart.js/auto";

// const AwarenessCampaign = () => {
//   // State for storing campaigns and chart data
//   const [campaigns, setCampaigns] = useState([]);
//   const [chartData, setChartData] = useState({
//     labels: [],
//     datasets: [
//       {
//         label: "Participation in Campaigns",
//         data: [],
//         backgroundColor: "#FF9800",
//       },
//     ],
//   });
//   const [loading, setLoading] = useState(true); // Loading state

//   // Simulate fetching data with mock data
//   useEffect(() => {
//     // Mock data
//     const mockData = {
//       campaignList: [
//         { name: "Blood Donation Drive", date: "2023-10-01", status: "Upcoming", participants: 120 },
//         { name: "Organ Donation Awareness", date: "2023-09-15", status: "Past", participants: 200 },
//         { name: "Health Checkup Camp", date: "2023-08-20", status: "Past", participants: 150 },
//         { name: "Vaccination Awareness", date: "2023-11-05", status: "Upcoming", participants: 90 },
//       ],
//     };

//     // Simulate API call delay
//     setTimeout(() => {
//       setCampaigns(mockData.campaignList); // Set campaigns
//       setChartData({
//         labels: mockData.campaignList.map((c) => c.name), // Set chart labels
//         datasets: [
//           {
//             label: "Participation in Campaigns",
//             data: mockData.campaignList.map((c) => c.participants), // Set chart data
//             backgroundColor: "#FF9800",
//           },
//         ],
//       });
//       setLoading(false); // Set loading to false after "fetching" mock data
//     }, 1000); // Simulate a 1-second delay
//   }, []);

//   // Show loading spinner while data is being fetched
//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//       </div>
//     );
//   }

//   // Show message if no campaigns are available
//   if (!campaigns.length) {
//     return (
//       <div className="p-6">
//         <h2 className="text-2xl font-bold mb-4">Awareness Campaigns</h2>
//         <p className="text-gray-600">No campaigns available.</p>
//       </div>
//     );
//   }

//   // Render the main content
//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Awareness Campaigns</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Chart Section */}
//         <div className="bg-white p-4 shadow-md rounded-lg">
//           <h3 className="text-lg font-semibold">Campaign Participation</h3>
//           <Bar
//             data={chartData}
//             options={{
//               responsive: true,
//               plugins: {
//                 tooltip: {
//                   enabled: true,
//                 },
//               },
//               scales: {
//                 y: {
//                   beginAtZero: true,
//                 },
//               },
//             }}
//           />
//         </div>

//         {/* Campaign List Section */}
//         <div className="bg-white p-4 shadow-md rounded-lg">
//           <h3 className="text-lg font-semibold">Upcoming & Past Campaigns</h3>
//           <ul className="list-disc pl-5 mt-2">
//             {campaigns.map((campaign, index) => (
//               <li key={index} className="mb-2">
//                 <strong>{campaign.name}</strong> - {campaign.date} - {campaign.status}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AwarenessCampaign;

import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { motion } from "framer-motion";

const AwarenessCampaign = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Participation in Campaigns",
        data: [],
        backgroundColor: "#FF9800",
        borderColor: "#000", // Darker border
        borderWidth: 2,
      },
    ],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data
    const mockData = {
      campaignList: [
        { name: "Blood Donation Drive", date: "2023-10-01", status: "Upcoming", participants: 120 },
        { name: "Organ Donation Awareness", date: "2023-09-15", status: "Past", participants: 200 },
        { name: "Health Checkup Camp", date: "2023-08-20", status: "Past", participants: 150 },
        { name: "Vaccination Awareness", date: "2023-11-05", status: "Upcoming", participants: 90 },
      ],
    };

    // Simulate API call delay
    setTimeout(() => {
      setCampaigns(mockData.campaignList);
      setChartData({
        labels: mockData.campaignList.map((c) => c.name),
        datasets: [
          {
            label: "Participation in Campaigns",
            data: mockData.campaignList.map((c) => c.participants),
            backgroundColor: "#FF9800",
            borderColor: "#000",
            borderWidth: 2,
          },
        ],
      });
      setLoading(false); // Set loading to false after "fetching" mock data
    }, 1000); // Simulate a 1-second delay
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 animate-gradient">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!campaigns.length) {
    return (
      <div className="p-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 animate-gradient min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-900">No campaigns available.</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 animate-gradient p-6">
      {/* Floating Shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-30"
            animate={{
              x: [0, 100, 0],
              y: [0, 100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['#60A5FA', '#818CF8', '#E879F9'][i % 3],
              width: '300px',
              height: '300px',
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 space-y-6"
      >
        <h2 className="text-3xl font-display font-bold text-gray-900">Awareness Campaigns</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Chart Section */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass-effect p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Campaign Participation</h3>
            <Bar
              data={chartData}
              options={{
                responsive: true,
                plugins: {
                  tooltip: {
                    enabled: true,
                  },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
              }}
            />
          </motion.div>

          {/* Campaign List Section */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass-effect p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Upcoming & Past Campaigns</h3>
            <ul className="list-disc pl-5 mt-2">
              {campaigns.map((campaign, index) => (
                <li key={index} className="mb-2">
                  <strong>{campaign.name}</strong> - {campaign.date} - {campaign.status}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AwarenessCampaign;