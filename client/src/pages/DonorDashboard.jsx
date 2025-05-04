// // // import React, { useState, useEffect } from "react";
// // // import axios from "axios";

// // // const DonorDashboard = () => {
// // //   const [donationHistory, setDonationHistory] = useState([]);
// // //   const [organForm, setOrganForm] = useState({
// // //     organ: "",
// // //     date: "",
// // //     bloodGroup: "",
// // //     height: "",
// // //     consent: false,
// // //   });

// // //   const userId = localStorage.getItem("userId"); // Must be set during login

// // //   // Fetch donation history
// // //   const fetchDonationHistory = async () => {
// // //     try {
// // //       const response = await axios.get(`http://localhost:5000/api/donations/${userId}`);
// // //       setDonationHistory(response.data);
// // //     } catch (error) {
// // //       console.error("Error fetching donation history:", error);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     if (userId) fetchDonationHistory();
// // //   }, [userId]);

// // //   // Handle input changes
// // //   const handleInputChange = (e) => {
// // //     const { name, value, type, checked } = e.target;
// // //     setOrganForm({
// // //       ...organForm,
// // //       [name]: type === "checkbox" ? checked : value,
// // //     });
// // //   };

// // //   // Handle form submit
// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     if (!organForm.consent) {
// // //       alert("You must give consent to donate an organ.");
// // //       return;
// // //     }

// // //     if (!userId) {
// // //       alert("User ID not found. Please login again.");
// // //       return;
// // //     }

// // //     const newDonation = {
// // //       userId,
// // //       organType: organForm.organ,
// // //       donationDate: organForm.date,
// // //       bloodGroup: organForm.bloodGroup,
// // //       heightCm: organForm.height,
// // //       consentGiven: organForm.consent,
// // //     };

// // //     try {
// // //       console.log('Submitting donation:', newDonation); // Debug: Check submission data

// // //       await axios.post('http://localhost:5000/api/donations', newDonation);

// // //       alert("Organ donation added successfully!");

// // //       setOrganForm({
// // //         organ: "",
// // //         date: "",
// // //         bloodGroup: "",
// // //         height: "",
// // //         consent: false,
// // //       });

// // //       fetchDonationHistory();
// // //     } catch (error) {
// // //       console.error("Error submitting donation:", error.response?.data || error.message);
// // //       alert(`Failed to submit donation: ${error.response?.data?.message || error.message}`);
// // //     }
// // //   };

// // //   // Handle logout
// // //   const handleLogout = () => {
// // //     localStorage.clear();
// // //     alert("Logged out successfully!");
// // //     window.location.href = "/"; // Redirect if needed
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gray-50 p-6">
// // //       {/* Top section: Logout button */}
// // //       <div className="flex justify-end mb-6">
// // //         <button
// // //           onClick={handleLogout}
// // //           className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
// // //         >
// // //           Logout
// // //         </button>
// // //       </div>

// // //       <h2 className="text-2xl font-bold mb-4 text-slate-900">Donor Dashboard</h2>

// // //       {/* Add Organ Donation Form Card */}
// // //       <div className="bg-white p-6 shadow-md rounded-lg mt-6 transform hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
// // //         <h3 className="text-lg font-semibold text-slate-900 mb-4">Add Organ for Donation</h3>
// // //         <form onSubmit={handleSubmit}>
// // //           <div className="space-y-4">
// // //             {/* Organ Type Dropdown */}
// // //             <div>
// // //               <label className="block text-sm font-medium text-slate-700">Organ Type</label>
// // //               <select
// // //                 name="organ"
// // //                 value={organForm.organ}
// // //                 onChange={handleInputChange}
// // //                 className="mt-1 block w-full p-2 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
// // //                 required
// // //               >
// // //                 <option value="" disabled>Select an organ</option>
// // //                 <option value="Kidney">Kidney</option>
// // //                 <option value="Liver">Liver</option>
// // //                 <option value="Heart">Heart</option>
// // //               </select>
// // //             </div>

// // //             {/* Donation Date */}
// // //             <div>
// // //               <label className="block text-sm font-medium text-slate-700">Donation Date</label>
// // //               <input
// // //                 type="date"
// // //                 name="date"
// // //                 value={organForm.date}
// // //                 onChange={handleInputChange}
// // //                 className="mt-1 block w-full p-2 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
// // //                 required
// // //               />
// // //             </div>

// // //             {/* Blood Group */}
// // //             <div>
// // //               <label className="block text-sm font-medium text-slate-700">Blood Group</label>
// // //               <input
// // //                 type="text"
// // //                 name="bloodGroup"
// // //                 value={organForm.bloodGroup}
// // //                 onChange={handleInputChange}
// // //                 className="mt-1 block w-full p-2 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
// // //                 required
// // //               />
// // //             </div>

// // //             {/* Height */}
// // //             <div>
// // //               <label className="block text-sm font-medium text-slate-700">Height (cm)</label>
// // //               <input
// // //                 type="number"
// // //                 name="height"
// // //                 value={organForm.height}
// // //                 onChange={handleInputChange}
// // //                 className="mt-1 block w-full p-2 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
// // //                 required
// // //               />
// // //             </div>

// // //             {/* Consent Checkbox */}
// // //             <div className="flex items-center space-x-3">
// // //               <input
// // //                 type="checkbox"
// // //                 name="consent"
// // //                 checked={organForm.consent}
// // //                 onChange={handleInputChange}
// // //                 className="h-4 w-4 text-indigo-600"
// // //                 required
// // //               />
// // //               <label className="text-sm text-slate-700">I consent to donate this organ</label>
// // //             </div>

// // //             {/* Submit Button */}
// // //             <button
// // //               type="submit"
// // //               className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-all duration-300"
// // //             >
// // //               Submit Donation
// // //             </button>
// // //           </div>
// // //         </form>
// // //       </div>

// // //       {/* Donation History */}
// // //       <div className="mt-8 bg-white p-6 shadow-md rounded-lg">
// // //         <h3 className="text-lg font-semibold text-slate-900 mb-4">Donation History</h3>
// // //         {donationHistory.length > 0 ? (
// // //           <ul className="space-y-3">
// // //             {donationHistory.map((donation) => (
// // //               <li key={donation.DonationID} className="border-b border-slate-300 py-3">
// // //                 <span className="font-semibold">Organ Type: </span>{donation.OrganType} <br />
// // //                 <span className="font-semibold">Donation Date: </span>{donation.DonationDate} <br />
// // //                 <span className="font-semibold">Blood Group: </span>{donation.BloodGroup} <br />
// // //                 <span className="font-semibold">Height: </span>{donation.HeightCm} cm
// // //               </li>
// // //             ))}
// // //           </ul>
// // //         ) : (
// // //           <p>No donation history available.</p>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default DonorDashboard;


// // import React, { useState, useEffect } from "react";
// // import axios from "axios";

// // const DonorDashboard = () => {
// //   const [donationHistory, setDonationHistory] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [organForm, setOrganForm] = useState({
// //     organ: "",
// //     date: "",
// //     bloodGroup: "",
// //     height: "",
// //     consent: false,
// //   });

// //   const userId = localStorage.getItem("userId"); // Must be set during login

// //   // Fetch donation history
// //   const fetchDonationHistory = async () => {
// //     try {
// //       const response = await axios.get(`http://localhost:5000/api/donations/${userId}`);
// //       setDonationHistory(response.data);
// //     } catch (error) {
// //       console.error("Error fetching donation history:", error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     if (userId) fetchDonationHistory();
// //   }, [userId]);

// //   // Handle input changes
// //   const handleInputChange = (e) => {
// //     const { name, value, type, checked } = e.target;
// //     setOrganForm({
// //       ...organForm,
// //       [name]: type === "checkbox" ? checked : value,
// //     });
// //   };

// //   // Handle form submit
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     if (!organForm.consent) {
// //       alert("You must give consent to donate an organ.");
// //       return;
// //     }

// //     if (!userId) {
// //       alert("User ID not found. Please login again.");
// //       return;
// //     }

// //     // Validation
// //     if (!/^(A|B|AB|O)[+-]$/.test(organForm.bloodGroup)) {
// //       alert("Please enter a valid blood group (e.g., A+, O-, AB+).");
// //       return;
// //     }

// //     if (organForm.height < 50 || organForm.height > 250) {
// //       alert("Please enter a valid height between 50cm and 250cm.");
// //       return;
// //     }

// //     const newDonation = {
// //       userId,
// //       organType: organForm.organ,
// //       donationDate: organForm.date,
// //       bloodGroup: organForm.bloodGroup,
// //       heightCm: organForm.height,
// //       consentGiven: organForm.consent,
// //     };

// //     try {
// //       await axios.post('http://localhost:5000/api/donations', newDonation);

// //       alert("Organ donation added successfully!");

// //       setOrganForm({
// //         organ: "",
// //         date: "",
// //         bloodGroup: "",
// //         height: "",
// //         consent: false,
// //       });

// //       fetchDonationHistory();
// //     } catch (error) {
// //       console.error("Error submitting donation:", error.response?.data || error.message);
// //       alert(`Failed to submit donation: ${error.response?.data?.message || error.message}`);
// //     }
// //   };

// //   // Handle logout
// //   const handleLogout = () => {
// //     localStorage.clear();
// //     alert("Logged out successfully!");
// //     window.location.href = "/";
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-50 p-6">
// //       {/* Top section: Logout button */}
// //       <div className="flex justify-end mb-6">
// //         <button
// //           onClick={handleLogout}
// //           className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
// //         >
// //           Logout
// //         </button>
// //       </div>

// //       <h2 className="text-2xl font-bold mb-4 text-slate-900">Donor Dashboard</h2>

// //       {/* Add Organ Donation Form Card */}
// //       <div className="bg-white p-6 shadow-md rounded-lg mt-6 transform hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
// //         <h3 className="text-lg font-semibold text-slate-900 mb-4">Add Organ for Donation</h3>
// //         <form onSubmit={handleSubmit}>
// //           <div className="space-y-4">
// //             {/* Organ Type Dropdown */}
// //             <div>
// //               <label className="block text-sm font-medium text-slate-700">Organ Type</label>
// //               <select
// //                 name="organ"
// //                 value={organForm.organ}
// //                 onChange={handleInputChange}
// //                 className="mt-1 block w-full p-2 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //                 required
// //               >
// //                 <option value="" disabled>Select an organ</option>
// //                 <option value="Kidney">Kidney</option>
// //                 <option value="Liver">Liver</option>
// //                 <option value="Heart">Heart</option>
// //               </select>
// //             </div>

// //             {/* Donation Date */}
// //             <div>
// //               <label className="block text-sm font-medium text-slate-700">Donation Date</label>
// //               <input
// //                 type="date"
// //                 name="date"
// //                 value={organForm.date}
// //                 onChange={handleInputChange}
// //                 className="mt-1 block w-full p-2 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //                 required
// //               />
// //             </div>

// //             {/* Blood Group Dropdown */}
// //             <div>
// //               <label className="block text-sm font-medium text-slate-700">Blood Group</label>
// //               <select
// //                 name="bloodGroup"
// //                 value={organForm.bloodGroup}
// //                 onChange={handleInputChange}
// //                 className="mt-1 block w-full p-2 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //                 required
// //               >
// //                 <option value="" disabled>Select Blood Group</option>
// //                 <option value="A+">A+</option>
// //                 <option value="A-">A-</option>
// //                 <option value="B+">B+</option>
// //                 <option value="B-">B-</option>
// //                 <option value="AB+">AB+</option>
// //                 <option value="AB-">AB-</option>
// //                 <option value="O+">O+</option>
// //                 <option value="O-">O-</option>
// //               </select>
// //             </div>

// //             {/* Height */}
// //             <div>
// //               <label className="block text-sm font-medium text-slate-700">Height (cm)</label>
// //               <input
// //                 type="number"
// //                 name="height"
// //                 value={organForm.height}
// //                 onChange={handleInputChange}
// //                 className="mt-1 block w-full p-2 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //                 required
// //               />
// //             </div>

// //             {/* Consent Checkbox */}
// //             <div className="flex items-center space-x-3">
// //               <input
// //                 type="checkbox"
// //                 name="consent"
// //                 checked={organForm.consent}
// //                 onChange={handleInputChange}
// //                 className="h-4 w-4 text-indigo-600"
// //                 required
// //               />
// //               <label className="text-sm text-slate-700">I consent to donate this organ</label>
// //             </div>

// //             {/* Submit Button */}
// //             <button
// //               type="submit"
// //               className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-all duration-300"
// //             >
// //               Submit Donation
// //             </button>
// //           </div>
// //         </form>
// //       </div>

// //       {/* Donation History */}
// //       <div className="mt-8 bg-white p-6 shadow-md rounded-lg">
// //         <h3 className="text-lg font-semibold text-slate-900 mb-4">Donation History</h3>
// //         {loading ? (
// //           <p>Loading donation history...</p>
// //         ) : donationHistory.length > 0 ? (
// //           <ul className="space-y-3">
// //             {donationHistory.map((donation) => (
// //               <li key={donation.DonationID} className="border-b border-slate-300 py-3">
// //                 <span className="font-semibold">Organ Type: </span>{donation.OrganType} <br />
// //                 <span className="font-semibold">Donation Date: </span>{donation.DonationDate} <br />
// //                 <span className="font-semibold">Blood Group: </span>{donation.BloodGroup} <br />
// //                 <span className="font-semibold">Height: </span>{donation.HeightCm} cm
// //               </li>
// //             ))}
// //           </ul>
// //         ) : (
// //           <p>No donation history available.</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default DonorDashboard;


// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const DonorDashboard = () => {
//   const [donationHistory, setDonationHistory] = useState([]);
//   const [organForm, setOrganForm] = useState({
//     organ: "",
//     date: "",
//     bloodGroup: "",
//     height: "",
//     consent: false,
//   });
//   const [showTermsModal, setShowTermsModal] = useState(false);
//   const [termsAgreement, setTermsAgreement] = useState("");

//   const userId = localStorage.getItem("userId");

//   const fetchDonationHistory = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/api/donations/${userId}`);
//       setDonationHistory(response.data);
//     } catch (error) {
//       console.error("Error fetching donation history:", error);
//     }
//   };

//   useEffect(() => {
//     if (userId) fetchDonationHistory();
//   }, [userId]);

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     if (name === "consent" && checked) {
//       setShowTermsModal(true);
//     } else {
//       setOrganForm({
//         ...organForm,
//         [name]: type === "checkbox" ? checked : value,
//       });
//     }
//   };

//   const handleConsentConfirm = () => {
//     if (termsAgreement.trim() === "I agree to the above terms") {
//       setOrganForm((prev) => ({ ...prev, consent: true }));
//       setShowTermsModal(false);
//       setTermsAgreement("");
//     } else {
//       alert("You must type 'I agree to the above terms' to proceed.");
//     }
//   };

//   const handleConsentCancel = () => {
//     setShowTermsModal(false);
//     setOrganForm((prev) => ({ ...prev, consent: false }));
//     setTermsAgreement("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!organForm.consent) {
//       alert("You must give consent to donate an organ.");
//       return;
//     }

//     if (!userId) {
//       alert("User ID not found. Please login again.");
//       return;
//     }

//     const newDonation = {
//       userId,
//       organType: organForm.organ,
//       donationDate: organForm.date,
//       bloodGroup: organForm.bloodGroup,
//       heightCm: organForm.height,
//       consentGiven: organForm.consent,
//     };

//     try {
//       await axios.post("http://localhost:5000/api/donations", newDonation);
//       alert("Organ donation added successfully!");

//       setOrganForm({
//         organ: "",
//         date: "",
//         bloodGroup: "",
//         height: "",
//         consent: false,
//       });

//       fetchDonationHistory();
//     } catch (error) {
//       console.error("Error submitting donation:", error.response?.data || error.message);
//       alert(`Failed to submit donation: ${error.response?.data?.message || error.message}`);
//     }
//   };

//   const handleLogout = () => {
//     localStorage.clear();
//     alert("Logged out successfully!");
//     window.location.href = "/";
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       {/* Logout */}
//       <div className="flex justify-end mb-6">
//         <button
//           onClick={handleLogout}
//           className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
//         >
//           Logout
//         </button>
//       </div>

//       <h2 className="text-2xl font-bold mb-4 text-slate-900">Donor Dashboard</h2>

//       {/* Organ Donation Form */}
//       <div className="bg-white p-6 shadow-md rounded-lg mt-6 transform hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
//         <h3 className="text-lg font-semibold text-slate-900 mb-4">Add Organ for Donation</h3>
//         <form onSubmit={handleSubmit}>
//           <div className="space-y-4">
//             {/* Organ Type */}
//             <div>
//               <label className="block text-sm font-medium text-slate-700">Organ Type</label>
//               <select
//                 name="organ"
//                 value={organForm.organ}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full p-2 border border-slate-300 rounded-lg shadow-sm"
//                 required
//               >
//                 <option value="" disabled>Select an organ</option>
//                 <option value="Kidney">Kidney</option>
//                 <option value="Liver">Liver</option>
//                 <option value="Heart">Heart</option>
//               </select>
//             </div>

//             {/* Donation Date */}
//             <div>
//               <label className="block text-sm font-medium text-slate-700">Donation Date</label>
//               <input
//                 type="date"
//                 name="date"
//                 value={organForm.date}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full p-2 border border-slate-300 rounded-lg shadow-sm"
//                 required
//               />
//             </div>

//             {/* Blood Group */}
//             <div>
//               <label className="block text-sm font-medium text-slate-700">Blood Group</label>
//               <input
//                 type="text"
//                 name="bloodGroup"
//                 value={organForm.bloodGroup}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full p-2 border border-slate-300 rounded-lg shadow-sm"
//                 required
//               />
//             </div>

//             {/* Height */}
//             <div>
//               <label className="block text-sm font-medium text-slate-700">Height (cm)</label>
//               <input
//                 type="number"
//                 name="height"
//                 value={organForm.height}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full p-2 border border-slate-300 rounded-lg shadow-sm"
//                 required
//               />
//             </div>

//             {/* Consent */}
//             <div className="flex items-center space-x-3">
//               <input
//                 type="checkbox"
//                 name="consent"
//                 checked={organForm.consent}
//                 onChange={handleInputChange}
//                 className="h-4 w-4 text-indigo-600"
//               />
//               <label className="text-sm text-slate-700">I consent to donate this organ</label>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700"
//             >
//               Submit Donation
//             </button>
//           </div>
//         </form>
//       </div>

//       {/* Donation History */}
//       <div className="mt-8 bg-white p-6 shadow-md rounded-lg">
//         <h3 className="text-lg font-semibold text-slate-900 mb-4">Donation History</h3>
//         {donationHistory.length > 0 ? (
//           <ul className="space-y-3">
//             {donationHistory.map((donation) => (
//               <li key={donation.DonationID} className="border-b border-slate-300 py-3">
//                 <span className="font-semibold">Organ Type: </span>{donation.OrganType}<br />
//                 <span className="font-semibold">Donation Date: </span>{donation.DonationDate}<br />
//                 <span className="font-semibold">Blood Group: </span>{donation.BloodGroup}<br />
//                 <span className="font-semibold">Height: </span>{donation.HeightCm} cm
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No donation history available.</p>
//         )}
//       </div>

//       {/* Terms & Conditions Modal */}
//       {showTermsModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md space-y-4">
//             <h2 className="text-lg font-bold text-slate-800">Terms & Conditions</h2>
//             <div className="text-sm text-slate-700 space-y-2 max-h-60 overflow-y-auto">
//               <p>1. By agreeing to donate your organ(s), you voluntarily authorize the Organ Care Management System (OCMS) to collect, store, and process your personal and medical information for the sole purpose of medical compatibility and transplant facilitation.</p>
//               <p>2. Your consent grants OCMS permission to share necessary medical records with authorized hospitals and transplant coordinators.</p>
//               <p>3. You affirm that the information provided in the donation form is true and correct to the best of your knowledge.</p>
//               <p>4. This donation is completely voluntary. You may withdraw your consent before the actual transplant procedure by contacting the system administrators.</p>
//               <p>5. Once the organ retrieval process has begun, the donation cannot be revoked or reversed.</p>
//               <p>6. OCMS will not be liable for any post-operative medical outcomes or consequences after the donation is completed.</p>
//               <p>7. Your data will be protected under the applicable data protection laws and will not be used for any purpose other than organ transplantation and related communication.</p>
//               <p className="font-semibold">To confirm your consent, type: <strong>"I agree to the above terms"</strong> below.</p>
//             </div>

//             <input
//               type="text"
//               value={termsAgreement}
//               onChange={(e) => setTermsAgreement(e.target.value)}
//               className="w-full border border-slate-300 p-2 rounded mt-2"
//               placeholder="Type here..."
//             />

//             <div className="flex justify-end gap-2 mt-4">
//               <button
//                 onClick={handleConsentCancel}
//                 className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleConsentConfirm}
//                 className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
//               >
//                 Confirm
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DonorDashboard;


import React, { useState, useEffect } from "react";
import axios from "axios";

const DonorDashboard = () => {
  const [donationHistory, setDonationHistory] = useState([]);
  const [organForm, setOrganForm] = useState({
    organ: "",
    date: "",
    bloodGroup: "",
    height: "",
    consent: false,
  });

  const [showModal, setShowModal] = useState(false);
  const [termsAgreement, setTermsAgreement] = useState("");

  const userId = localStorage.getItem("userId");

  const fetchDonationHistory = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/donations/${userId}`);
      setDonationHistory(response.data);
    } catch (error) {
      console.error("Error fetching donation history:", error);
    }
  };

  useEffect(() => {
    if (userId) fetchDonationHistory();
  }, [userId]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "consent" && checked) {
      setShowModal(true);
    } else {
      setOrganForm({
        ...organForm,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!organForm.consent) {
      alert("You must give consent to donate an organ.");
      return;
    }

    if (!userId) {
      alert("User ID not found. Please login again.");
      return;
    }

    const newDonation = {
      userId,
      organType: organForm.organ,
      donationDate: organForm.date,
      bloodGroup: organForm.bloodGroup,
      heightCm: organForm.height,
      consentGiven: organForm.consent,
    };

    try {
      await axios.post("http://localhost:5000/api/donations", newDonation);
      alert("Organ donation added successfully!");
      setOrganForm({
        organ: "",
        date: "",
        bloodGroup: "",
        height: "",
        consent: false,
      });
      fetchDonationHistory();
    } catch (error) {
      console.error("Error submitting donation:", error.response?.data || error.message);
      alert(`Failed to submit donation: ${error.response?.data?.message || error.message}`);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    alert("Logged out successfully!");
    window.location.href = "/";
  };

  const confirmConsent = () => {
    if (termsAgreement.trim().toLowerCase() === "i agree to the terms") {
      setOrganForm({ ...organForm, consent: true });
      setShowModal(false);
      setTermsAgreement("");
    } else {
      alert("Please type exactly: I agree to the terms");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Logout */}
      <div className="flex justify-end mb-6">
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
        >
          Logout
        </button>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-slate-900">Donor Dashboard</h2>

      {/* Organ Donation Form */}
      <div className="bg-white p-6 shadow-md rounded-lg mt-6 hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Add Organ for Donation</h3>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* Organ */}
            <div>
              <label className="block text-sm font-medium text-slate-700">Organ Type</label>
              <select
                name="organ"
                value={organForm.organ}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-slate-300 rounded-lg shadow-sm"
                required
              >
                <option value="" disabled>Select an organ</option>
                <option value="Kidney">Kidney</option>
                <option value="Liver">Liver</option>
                <option value="Heart">Heart</option>
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-slate-700">Donation Date</label>
              <input
                type="date"
                name="date"
                value={organForm.date}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-slate-300 rounded-lg shadow-sm"
                required
              />
            </div>

            {/* Blood Group */}
            <div>
              <label className="block text-sm font-medium text-slate-700">Blood Group</label>
              <select
                name="bloodGroup"
                value={organForm.bloodGroup}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-slate-300 rounded-lg shadow-sm"
                required
              >
                <option value="" disabled>Select blood group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>

            {/* Height */}
            <div>
              <label className="block text-sm font-medium text-slate-700">Height (cm)</label>
              <input
                type="number"
                name="height"
                value={organForm.height}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-slate-300 rounded-lg shadow-sm"
                required
              />
            </div>

            {/* Consent */}
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                name="consent"
                checked={organForm.consent}
                onChange={handleInputChange}
                className="h-4 w-4 text-indigo-600"
              />
              <label className="text-sm text-slate-700">I consent to donate this organ</label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-all duration-300"
            >
              Submit Donation
            </button>
          </div>
        </form>
      </div>

      {/* Donation History */}
      <div className="mt-8 bg-white p-6 shadow-md rounded-lg">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Donation History</h3>
        {donationHistory.length > 0 ? (
          <ul className="space-y-3">
            {donationHistory.map((donation) => (
              <li key={donation.DonationID} className="border-b border-slate-300 py-3">
                <strong>Organ Type:</strong> {donation.OrganType} <br />
                <strong>Donation Date:</strong> {donation.DonationDate} <br />
                <strong>Blood Group:</strong> {donation.BloodGroup} <br />
                <strong>Height:</strong> {donation.HeightCm} cm
              </li>
            ))}
          </ul>
        ) : (
          <p>No donation history available.</p>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full">
            <h3 className="text-xl font-bold mb-4 text-slate-900">Terms and Conditions</h3>
            <div className="mb-4 text-sm text-slate-700 max-h-40 overflow-y-auto">
              <ul className="list-disc pl-5 space-y-1">
                <li>You voluntarily agree to donate your organ after appropriate evaluation.</li>
                <li>Organ donation must comply with government guidelines and legal consent.</li>
                <li>Once submitted, your donation information will be shared with authorized hospitals.</li>
                <li>You can contact support to withdraw consent before processing starts.</li>
              </ul>
            </div>
            <input
              type="text"
              placeholder='Type: I agree to the terms'
              className="w-full p-2 border rounded mb-3"
              value={termsAgreement}
              onChange={(e) => setTermsAgreement(e.target.value)}
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => {
                  setShowModal(false);
                  setTermsAgreement("");
                }}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                onClick={confirmConsent}
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonorDashboard;
