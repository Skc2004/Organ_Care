import React, { useEffect, useState } from "react";

const OrganTracking = () => {
  const [organs, setOrgans] = useState([]);
  const [complaint, setComplaint] = useState({
    organId: "",
    message: "",
  });

  useEffect(() => {
    // Hardcoded organ data
    const hardcodedOrgans = [
      {
        OrganID: "ORG-101",
        Type: "Kidney",
        Status: "In Transit",
        DonorID: "DON-221",
        RecipientID: "REC-789",
        TransportationDetails: "Via Ambulance - ETA 2 hrs",
      },
      {
        OrganID: "ORG-102",
        Type: "Liver",
        Status: "Stored at Facility",
        DonorID: "DON-312",
        RecipientID: "",
        TransportationDetails: "",
      },
      {
        OrganID: "ORG-103",
        Type: "Heart",
        Status: "Delivered",
        DonorID: "DON-143",
        RecipientID: "REC-998",
        TransportationDetails: "Airlifted - Completed",
      },
      {
        OrganID: "ORG-104",
        Type: "Cornea",
        Status: "Awaiting Pickup",
        DonorID: "DON-415",
        RecipientID: "",
        TransportationDetails: "",
      },
    ];

    setOrgans(hardcodedOrgans);
  }, []);

  const handleComplaintSubmit = (e) => {
    e.preventDefault();
    console.log("Complaint Submitted:", complaint);
    alert("Complaint filed successfully!");
    setComplaint({ organId: "", message: "" });
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h2 className="text-3xl font-bold mb-6 text-slate-900">Organ Tracking</h2>

      {/* Organ Table */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
              <th className="p-3 text-left">Organ ID</th>
              <th className="p-3 text-left">Type</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Donor ID</th>
              <th className="p-3 text-left">Recipient ID</th>
            </tr>
          </thead>
          <tbody>
            {organs.map((organ, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <td className="p-3 text-slate-700">{organ.OrganID}</td>
                <td className="p-3 text-slate-700">{organ.Type}</td>
                <td
                  className={`p-3 font-semibold ${
                    organ.Status === "Delivered"
                      ? "text-green-600"
                      : organ.Status === "In Transit"
                      ? "text-yellow-600"
                      : "text-blue-600"
                  }`}
                >
                  {organ.Status}
                </td>
                <td className="p-3 text-slate-700">{organ.DonorID}</td>
                <td className="p-3 text-slate-700">
                  {organ.RecipientID || <span className="text-gray-400">Not Allocated</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Complaint Section */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4 text-slate-800">
          File a Complaint (Suspicious Transplantation)
        </h3>
        <form onSubmit={handleComplaintSubmit} className="space-y-4">
          <div>
            <label htmlFor="organId" className="block font-medium mb-1">
              Select Organ ID
            </label>
            <select
              id="organId"
              value={complaint.organId}
              onChange={(e) => setComplaint({ ...complaint, organId: e.target.value })}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">-- Choose Organ ID --</option>
              {organs.map((organ, index) => (
                <option key={index} value={organ.OrganID}>
                  {organ.OrganID} ({organ.Type})
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block font-medium mb-1">
              Complaint Details
            </label>
            <textarea
              id="message"
              rows="4"
              value={complaint.message}
              onChange={(e) => setComplaint({ ...complaint, message: e.target.value })}
              placeholder="Describe the issue you noticed..."
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold px-6 py-2 rounded-lg hover:shadow-lg transition"
          >
            Submit Complaint
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrganTracking;
