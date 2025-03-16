import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const DonorDashboard = () => {
  // Mock data for donation statistics
  const [donationData, setDonationData] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Organs Donated",
        data: [3, 5, 2, 6, 4, 7],
        backgroundColor: "#4CAF50",
      },
    ],
  });

  // Mock data for consent status
  const [consentStatus, setConsentStatus] = useState(true);

  // Mock data for donation history
  const [donationHistory, setDonationHistory] = useState([
    { date: "2023-01-15", organ: "Kidney", status: "Transplanted" },
    { date: "2023-03-22", organ: "Liver", status: "Pending" },
    { date: "2023-05-10", organ: "Heart", status: "Transplanted" },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-2xl font-bold mb-4 text-slate-900">Donor Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Donation Statistics Card */}
        <div className="bg-white p-6 shadow-md rounded-lg transform hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Donation Statistics</h3>
          <Bar
            data={donationData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "top",
                },
              },
            }}
          />
        </div>

        {/* Consent Status Card */}
        <div className="bg-white p-6 shadow-md rounded-lg transform hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Consent Status</h3>
          <p className={`text-lg ${consentStatus ? "text-green-600" : "text-red-600"}`}>
            {consentStatus
              ? "You have given consent for organ donation."
              : "You have not given consent."}
          </p>
        </div>
      </div>

      {/* Donation History Card */}
      <div className="bg-white p-6 shadow-md rounded-lg mt-6 transform hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Donation History</h3>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Organ</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {donationHistory.map((donation, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200"
              >
                <td className="p-3 text-slate-700">{donation.date}</td>
                <td className="p-3 text-slate-700">{donation.organ}</td>
                <td
                  className={`p-3 ${
                    donation.status === "Transplanted"
                      ? "text-green-600"
                      : "text-yellow-600"
                  }`}
                >
                  {donation.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DonorDashboard;

