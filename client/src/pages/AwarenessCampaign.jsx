// src/pages/AwarenessCampaign.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const AwarenessCampaign = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Participation in Campaigns",
        data: [],
        backgroundColor: "#FF9800",
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/campaigns", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        const data = response.data;
        setCampaigns(data.campaignList);
        setChartData({
          labels: data.campaignList.map((c) => c.name),
          datasets: [
            {
              label: "Participation in Campaigns",
              data: data.campaignList.map((c) => c.participants),
              backgroundColor: "#FF9800",
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching campaign data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Awareness Campaigns</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-lg font-semibold">Campaign Participation</h3>
          <Bar data={chartData} />
        </div>
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-lg font-semibold">Upcoming & Past Campaigns</h3>
          <ul className="list-disc pl-5 mt-2">
            {campaigns.map((campaign, index) => (
              <li key={index} className="mb-2">
                <strong>{campaign.name}</strong> - {campaign.date} - {campaign.status}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AwarenessCampaign;
