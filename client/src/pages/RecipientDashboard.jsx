import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const RecipientDashboard = () => {
  const [newRequest, setNewRequest] = useState({
    organType: "",
    bloodGroup: "",
    height: "",
    date: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [userId, setUserId] = useState(localStorage.getItem("userId") || "");
  const [requestHistory, setRequestHistory] = useState([]);

  useEffect(() => {
    const fetchRequestHistory = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/recipient_requests/${userId}`);
        if (response.status === 200) {
          setRequestHistory(response.data);
        }
      } catch (error) {
        console.error("Error fetching request history:", error);
      }
    };

    if (userId) {
      fetchRequestHistory();
    }
  }, [userId]);

  const handleInputChange = (e) => {
    setNewRequest({ ...newRequest, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { organType, bloodGroup, height, date } = newRequest;

    if (!organType || !bloodGroup || !height || !date) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/recipient_requests", {
        userId,
        organType,
        bloodGroup,
        heightCm: height,
        requestDate: date,
        currentStatus: "Pending",
      });

      if (response.status === 201) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);

        setRequestHistory((prevHistory) => [
          ...prevHistory,
          {
            RequestDate: date,
            OrganType: organType,
            CurrentStatus: "Pending",
          },
        ]);
      }
    } catch (error) {
      console.error("Error submitting request:", error);
    }

    setNewRequest({ organType: "", bloodGroup: "", height: "", date: "" });
  };

  const handleLogout = () => {
    localStorage.removeItem("userId");
    window.location.href = "/";
  };

  return (
    <motion.div
      className="p-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-500 to-indigo-600 text-white px-6 py-2 rounded-xl shadow mb-6 inline-block">
        Recipient Dashboard
      </h2>

      <button
        onClick={handleLogout}
        className="bg-red-600 text-white font-semibold px-6 py-2 rounded-xl hover:bg-red-700 transition mt-6"
      >
        Logout
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-5 border border-gray-200"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-xl font-semibold text-indigo-600 mb-4">
            Request History
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-700 border border-gray-200 rounded-xl overflow-hidden">
              <thead className="text-xs text-white uppercase bg-indigo-500">
                <tr>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Organ</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {requestHistory.length > 0 ? (
                  requestHistory.map((entry, index) => (
                    <tr
                      key={index}
                      className="bg-white border-t border-gray-200 hover:bg-indigo-50"
                    >
                      <td className="px-4 py-3">{entry.RequestDate}</td>
                      <td className="px-4 py-3">{entry.OrganType}</td>
                      <td className="px-4 py-3">{entry.CurrentStatus}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="3"
                      className="px-4 py-3 text-center text-gray-500"
                    >
                      No request history available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl shadow-xl p-5 border border-gray-200"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-xl font-semibold text-indigo-600 mb-4">
            Create New Request
          </h3>
          {submitted && (
            <div className="bg-green-100 text-green-600 text-sm p-4 rounded-lg mb-4">
              Request submitted successfully!
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="organType" className="block text-sm font-medium text-gray-700">
                Organ Type
              </label>
              <select
                id="organType"
                name="organType"
                value={newRequest.organType}
                onChange={handleInputChange}
                required
                className="mt-1 p-2 w-full border rounded-lg"
              >
                <option value="">Select Organ</option>
                <option value="Kidney">Kidney</option>
                <option value="Liver">Liver</option>
                <option value="Heart">Heart</option>
                {/* <option value="Lungs">Lungs</option>
                <option value="Pancreas">Pancreas</option>
                <option value="Intestine">Intestine</option> */}
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="bloodGroup" className="block text-sm font-medium text-gray-700">
                Blood Group
              </label>
              <input
                type="text"
                id="bloodGroup"
                name="bloodGroup"
                value={newRequest.bloodGroup}
                onChange={handleInputChange}
                required
                className="mt-1 p-2 w-full border rounded-lg"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="height" className="block text-sm font-medium text-gray-700">
                Height (cm)
              </label>
              <input
                type="number"
                id="height"
                name="height"
                value={newRequest.height}
                onChange={handleInputChange}
                required
                className="mt-1 p-2 w-full border rounded-lg"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                Request Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={newRequest.date}
                onChange={handleInputChange}
                required
                className="mt-1 p-2 w-full border rounded-lg"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg"
            >
              Submit Request
            </button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RecipientDashboard;
