import React, { useState } from "react";
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
        backgroundColor: "#4CAF50", // Green color for bars
      },
    ],
  });

  // Mock data for consent status
  const [consentStatus, setConsentStatus] = useState({
    given: true, // Whether consent is given
    approvedOrgans: ["Kidney", "Liver"], // List of approved organs
  });

  // Mock data for donation history
  const [donationHistory, setDonationHistory] = useState([
    { date: "2023-01-15", organ: "Kidney", status: "Transplanted" },
    { date: "2023-03-22", organ: "Liver", status: "Pending" },
    { date: "2023-05-10", organ: "Heart", status: "Transplanted" },
  ]);

  // State for the organ donation form
  const [organForm, setOrganForm] = useState({
    organ: "",
    date: "",
    notes: "",
    consent: false, // Consent checkbox state
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setOrganForm({
      ...organForm,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!organForm.consent) {
      alert("You must give consent to donate an organ.");
      return;
    }
    // Add the new organ donation to the history
    const newDonation = {
      date: organForm.date,
      organ: organForm.organ,
      status: "Pending", // Default status for new donations
    };
    setDonationHistory([...donationHistory, newDonation]);
    // Reset the form
    setOrganForm({
      organ: "",
      date: "",
      notes: "",
      consent: false,
    });
    alert("Organ donation added successfully!");
  };

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
          <p className={`text-lg ${consentStatus.given ? "text-green-600" : "text-red-600"}`}>
            {consentStatus.given
              ? "You have given consent for organ donation."
              : "You have not given consent."}
          </p>
          {consentStatus.given && (
            <div className="mt-4">
              <h4 className="text-md font-medium text-slate-700">Approved Organs:</h4>
              <ul className="list-disc list-inside text-slate-600">
                {consentStatus.approvedOrgans.map((organ, index) => (
                  <li key={index}>{organ}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Add Organ Donation Form Card */}
      <div className="bg-white p-6 shadow-md rounded-lg mt-6 transform hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Add Organ for Donation</h3>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* Organ Type */}
            <div>
              <label className="block text-sm font-medium text-slate-700">Organ Type</label>
              <input
                type="text"
                name="organ"
                value={organForm.organ}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="e.g., Kidney, Liver, Heart"
                required
              />
            </div>

            {/* Donation Date */}
            <div>
              <label className="block text-sm font-medium text-slate-700">Donation Date</label>
              <input
                type="date"
                name="date"
                value={organForm.date}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            {/* Additional Notes */}
            <div>
              <label className="block text-sm font-medium text-slate-700">Additional Notes</label>
              <textarea
                name="notes"
                value={organForm.notes}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Any additional information"
                rows="3"
              />
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                name="consent"
                checked={organForm.consent}
                onChange={handleInputChange}
                className="h-4 w-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500"
                required
              />
              <label className="ml-2 text-sm text-slate-700">
                I hereby give my consent to donate the specified organ.
              </label>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-2 rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
              >
                Submit Donation
              </button>
            </div>
          </div>
        </form>
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