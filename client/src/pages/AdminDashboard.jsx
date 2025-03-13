import React, { useEffect, useState } from "react";
import { Line, Pie, Bar, Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import axios from "axios";
import { motion } from "framer-motion";

const AdminDashboard = () => {
  const [userStats, setUserStats] = useState({
    labels: [],
    datasets: [
      {
        label: "User Registrations",
        data: [],
        borderColor: "#3b82f6",
        borderWidth: 2, // Darker border
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
        borderColor: "#000", // Darker border
        borderWidth: 2,
      },
    ],
  });
  const [donationStats, setDonationStats] = useState({
    labels: ["Blood", "Organs", "Tissues"],
    datasets: [
      {
        label: "Donations",
        data: [0, 0, 0],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        borderColor: "#000", // Darker border
        borderWidth: 2,
      },
    ],
  });
  const [hospitalStats, setHospitalStats] = useState({
    labels: [],
    datasets: [
      {
        label: "Hospitals",
        data: [],
        backgroundColor: "#4CAF50",
        borderColor: "#000", // Darker border
        borderWidth: 2,
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
              borderWidth: 2,
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
              borderColor: "#000",
              borderWidth: 2,
            },
          ],
        });
        setDonationStats({
          labels: ["Blood", "Organs", "Tissues"],
          datasets: [
            {
              label: "Donations",
              data: [data.bloodDonations, data.organDonations, data.tissueDonations],
              backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
              borderColor: "#000",
              borderWidth: 2,
            },
          ],
        });
        setHospitalStats({
          labels: data.hospitals.map((h) => h.name),
          datasets: [
            {
              label: "Hospitals",
              data: data.hospitals.map((h) => h.count),
              backgroundColor: "#4CAF50",
              borderColor: "#000",
              borderWidth: 2,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching admin data", error);
      }
    };
    fetchData();
  }, []);

  // Smooth scroll function
  const handleSmoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 animate-gradient flex">
      {/* Sidebar */}
      <div className="w-64 bg-white/20 backdrop-blur-md border-r border-gray-200 p-4 sticky top-0 h-screen">
        <h2 className="text-xl font-display font-bold text-gray-900 mb-6">Dashboard</h2>
        <nav>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => handleSmoothScroll("user-stats")}
                className="block w-full text-left p-2 text-gray-700 hover:bg-purple-50 rounded-lg transition-all"
              >
                User Registrations
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSmoothScroll("organ-stats")}
                className="block w-full text-left p-2 text-gray-700 hover:bg-purple-50 rounded-lg transition-all"
              >
                Organ Distribution
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSmoothScroll("donation-stats")}
                className="block w-full text-left p-2 text-gray-700 hover:bg-purple-50 rounded-lg transition-all"
              >
                Donation Statistics
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSmoothScroll("hospital-stats")}
                className="block w-full text-left p-2 text-gray-700 hover:bg-purple-50 rounded-lg transition-all"
              >
                Hospital Statistics
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">
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

        {/* Dashboard Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 space-y-6"
        >
          {/* User Registration Statistics */}
          <div id="user-stats" className="glass-effect p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">User Registration Statistics</h3>
            <Line
              data={userStats}
              options={{
                responsive: true,
                plugins: {
                  tooltip: {
                    enabled: true,
                    mode: "index",
                    intersect: false,
                  },
                },
                hover: {
                  mode: "nearest",
                  intersect: true,
                },
              }}
            />
          </div>

          {/* Organ Distribution */}
          <div id="organ-stats" className="glass-effect p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Organ Distribution</h3>
            <Pie
              data={organStats}
              options={{
                responsive: true,
                plugins: {
                  tooltip: {
                    enabled: true,
                  },
                },
              }}
            />
          </div>

          {/* Donation Statistics */}
          <div id="donation-stats" className="glass-effect p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Donation Statistics</h3>
            <Doughnut
              data={donationStats}
              options={{
                responsive: true,
                plugins: {
                  tooltip: {
                    enabled: true,
                  },
                },
              }}
            />
          </div>

          {/* Hospital Statistics */}
          <div id="hospital-stats" className="glass-effect p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Hospital Statistics</h3>
            <Bar
              data={hospitalStats}
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
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;