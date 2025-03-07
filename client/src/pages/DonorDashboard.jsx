import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import axios from "axios";

const DonorDashboard = () => {
  const [donationData, setDonationData] = useState({
    labels: [],
    datasets: [
      {
        label: "Organs Donated",
        data: [],
        backgroundColor: "#4CAF50",
      },
    ],
  });
  const [consentStatus, setConsentStatus] = useState(false);
  const [donationHistory, setDonationHistory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/donor/dashboard", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        const data = response.data;
        setDonationData({
          labels: data.months,
          datasets: [
            {
              label: "Organs Donated",
              data: data.donations,
              backgroundColor: "#4CAF50",
            },
          ],
        });
        setConsentStatus(data.consentStatus);
        setDonationHistory(data.history);
      } catch (error) {
        console.error("Error fetching donor data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Donor Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-lg font-semibold">Donation Statistics</h3>
          <Bar data={donationData} />
        </div>
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-lg font-semibold">Consent Status</h3>
          <p className={`mt-2 ${consentStatus ? "text-green-600" : "text-red-600"}`}>
            {consentStatus ? "You have given consent for organ donation." : "You have not given consent."}
          </p>
        </div>
      </div>
      <div className="bg-white p-4 shadow-md rounded-lg mt-6">
        <h3 className="text-lg font-semibold">Donation History</h3>
        <table className="w-full mt-4 border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Date</th>
              <th className="border p-2">Organ</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {donationHistory.map((donation, index) => (
              <tr key={index}>
                <td className="border p-2">{donation.date}</td>
                <td className="border p-2">{donation.organ}</td>
                <td className={`border p-2 ${donation.status === "Transplanted" ? "text-green-600" : "text-yellow-600"}`}>
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
