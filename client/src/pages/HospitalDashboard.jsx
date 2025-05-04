// // import React, { useState, useEffect } from "react";
// // import axios from "axios";

// // const HospitalDashboard = () => {
// //   const [hospitalInfo] = useState({
// //     name: "Lifeline Hospital",
// //     location: "New Delhi, India",
// //     contact: "+91 98765 43210",
// //   });

// //   const [requests, setRequests] = useState([]);
// //   const [acceptedRequests, setAcceptedRequests] = useState([]);

// //   useEffect(() => {
// //     const fetchMatchedRequests = async () => {
// //       try {
// //         const response = await axios.get('http://localhost:5000/api/matched-transplant-requests');
// //         console.log('Fetched requests:', response.data);
// //         setRequests(response.data);
// //       } catch (error) {
// //         console.error('❌ Error fetching matched transplant requests:', error);
// //       }
// //     };

// //     fetchMatchedRequests();
// //   }, []);

// //   const handleLogout = () => {
// //     console.log("Logged out");
// //     window.location.href = "/"; 
// //   };

// //   const handleAccept = async (request) => {
// //     console.log('Accepting request:', request); 
// //     try {
// //       const response = await axios.patch(`http://localhost:5000/api/recipient_requests/${request.RequestID}/approve`);
// //       console.log('Response after accepting:', response);

// //       if (response.status === 200) {
// //         // Add the accepted request to acceptedRequests state
// //         setAcceptedRequests(prevState => [...prevState, request]);
// //         // Remove the accepted request from the requests list
// //         setRequests(prevState => prevState.filter(req => req.RequestID !== request.RequestID));
// //       }
// //     } catch (error) {
// //       console.error('❌ Error accepting request:', error);
// //     }
// //   };

// //   const handleReject = async (request) => {
// //     console.log('Rejecting request:', request); 
// //     try {
// //       const response = await axios.patch(`http://localhost:5000/api/recipient_requests/${request.RequestID}/decline`);
// //       console.log('Response after rejecting:', response);

// //       if (response.status === 200) {
// //         // Remove the rejected request from the requests list
// //         setRequests(prevState => prevState.filter(req => req.RequestID !== request.RequestID));
// //       }
// //     } catch (error) {
// //       console.error('❌ Error rejecting request:', error);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-50 p-6">
// //       <div className="flex justify-between items-center mb-6">
// //         <h2 className="text-2xl font-bold text-slate-900">Hospital Dashboard</h2>
// //         <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-all">
// //           Logout
// //         </button>
// //       </div>

// //       <div className="bg-white p-6 shadow-md rounded-lg mb-6">
// //         <h3 className="text-lg font-semibold text-slate-900 mb-2">Hospital Information</h3>
// //         <p className="text-slate-700"><strong>Name:</strong> {hospitalInfo.name}</p>
// //         <p className="text-slate-700"><strong>Location:</strong> {hospitalInfo.location}</p>
// //         <p className="text-slate-700"><strong>Contact:</strong> {hospitalInfo.contact}</p>
// //       </div>

// //       <div className="bg-white p-6 shadow-md rounded-lg">
// //         <h3 className="text-lg font-semibold text-slate-900 mb-4">Organ Transplantation Requests</h3>
// //         {requests.length === 0 ? (
// //           <p className="text-slate-600">No transplantation requests available.</p>
// //         ) : (
// //           <ul className="space-y-4">
// //             {requests.map((request, index) => (
// //               <li key={index} className="border p-4 rounded-lg shadow-sm bg-gray-50">
// //                 <p className="text-slate-800"><strong>Organ:</strong> {request.OrganType}</p>
// //                 <p className="text-slate-800"><strong>Requested By:</strong> {request.Username}</p>
// //                 <p className="text-slate-800"><strong>Request Date:</strong> {request.RequestDate}</p>
// //                 <div className="flex gap-2 mt-4">
// //                   <button 
// //                     onClick={() => handleAccept(request)}
// //                     className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg text-sm"
// //                   >
// //                     Accept
// //                   </button>
// //                   <button 
// //                     onClick={() => handleReject(request)}
// //                     className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm"
// //                   >
// //                     Reject
// //                   </button>
// //                 </div>
// //               </li>
// //             ))}
// //           </ul>
// //         )}
// //       </div>

// //       {acceptedRequests.length > 0 && (
// //         <div className="bg-white p-6 shadow-md rounded-lg mt-6">
// //           <h3 className="text-lg font-semibold text-slate-900 mb-4">Accepted Organ Transplantation Requests</h3>
// //           <ul className="space-y-4">
// //             {acceptedRequests.map((request, index) => (
// //               <li key={index} className="border p-4 rounded-lg shadow-sm bg-gray-50">
// //                 <p className="text-slate-800"><strong>Organ:</strong> {request.OrganType}</p>
// //                 <p className="text-slate-800"><strong>Requested By:</strong> {request.Username}</p>
// //                 <p className="text-slate-800"><strong>Request Date:</strong> {request.RequestDate}</p>
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default HospitalDashboard;


// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const HospitalDashboard = () => {
//   const [hospitalInfo] = useState({
//     name: "Lifeline Hospital",
//     location: "New Delhi, India",
//     contact: "+91 98765 43210",
//   });

//   const [requests, setRequests] = useState([]);
//   const [approvedRequests, setApprovedRequests] = useState([]);
//   const [rejectedRequests, setRejectedRequests] = useState([]);

//   useEffect(() => {
//     fetchMatchedRequests();
//   }, []);

//   const fetchMatchedRequests = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/matched-transplant-requests");
//       setRequests(response.data);
//     } catch (error) {
//       console.error("Error fetching requests:", error);
//     }
//   };

//   const handleLogout = () => {
//     console.log("Logged out");
//     window.location.href = "/";
//   };

//   const handleAccept = async (request) => {
//     try {
//       const response = await axios.patch(`http://localhost:5000/api/recipient_requests/${request.RequestID}/approve`);
//       if (response.status === 200) {
//         // Move request to approved list
//         setApprovedRequests(prev => [...prev, request]);
//         setRequests(prev => prev.filter(r => r.RequestID !== request.RequestID));
//       }
//     } catch (error) {
//       console.error("Error accepting request:", error);
//     }
//   };

//   const handleReject = async (request) => {
//     try {
//       const response = await axios.patch(`http://localhost:5000/api/recipient_requests/${request.RequestID}/decline`);
//       if (response.status === 200) {
//         // Move request to rejected list
//         setRejectedRequests(prev => [...prev, request]);
//         setRequests(prev => prev.filter(r => r.RequestID !== request.RequestID));
//       }
//     } catch (error) {
//       console.error("Error rejecting request:", error);
//     }
//   };

  

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-3xl font-bold">Hospital Dashboard</h1>
//         <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
//           Logout
//         </button>
//       </div>

//       {/* Hospital Info */}
//       <div className="bg-white p-6 rounded shadow mb-8">
//         <h2 className="text-2xl font-semibold mb-2">Hospital Info</h2>
//         <p><strong>Name:</strong> {hospitalInfo.name}</p>
//         <p><strong>Location:</strong> {hospitalInfo.location}</p>
//         <p><strong>Contact:</strong> {hospitalInfo.contact}</p>
//       </div>

//       {/* Pending Requests */}
//       <div className="bg-white p-6 rounded shadow mb-8">
//         <h2 className="text-2xl font-semibold mb-4">Pending Requests</h2>
//         {requests.length === 0 ? (
//           <p>No pending requests.</p>
//         ) : (
//           <ul className="space-y-4">
//             {requests.map(request => (
//               <li key={request.RequestID} className="border p-4 rounded bg-gray-50 flex flex-col">
//                 <p><strong>Organ:</strong> {request.OrganType}</p>
//                 <p><strong>Requested By:</strong> {request.Username}</p>
//                 <p><strong>Date:</strong> {request.RequestDate}</p>
//                 <div className="flex gap-4 mt-4">
//                   <button
//                     onClick={() => handleAccept(request)}
//                     className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
//                   >
//                     Accept
//                   </button>
//                   <button
//                     onClick={() => handleReject(request)}
//                     className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
//                   >
//                     Reject
//                   </button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>

//       {/* Approved Section */}
//       {approvedRequests.length > 0 && (
//         <div className="bg-white p-6 rounded shadow mb-8">
//           <h2 className="text-2xl font-semibold text-green-700 mb-4">Approved Requests</h2>
//           <ul className="space-y-4">
//             {approvedRequests.map(request => (
//               <li key={request.RequestID} className="border p-4 rounded bg-green-50">
//                 <p><strong>Organ:</strong> {request.OrganType}</p>
//                 <p><strong>Requested By:</strong> {request.Username}</p>
//                 <p><strong>Date:</strong> {request.RequestDate}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* Rejected Section */}
//       {rejectedRequests.length > 0 && (
//         <div className="bg-white p-6 rounded shadow mb-8">
//           <h2 className="text-2xl font-semibold text-red-700 mb-4">Rejected Requests</h2>
//           <ul className="space-y-4">
//             {rejectedRequests.map(request => (
//               <li key={request.RequestID} className="border p-4 rounded bg-red-50">
//                 <p><strong>Organ:</strong> {request.OrganType}</p>
//                 <p><strong>Requested By:</strong> {request.Username}</p>
//                 <p><strong>Date:</strong> {request.RequestDate}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HospitalDashboard;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const HospitalDashboard = () => {
//   const [hospitalInfo] = useState({
//     name: "Lifeline Hospital",
//     location: "New Delhi, India",
//     contact: "+91 98765 43210",
//   });

//   const [requests, setRequests] = useState([]);
//   const [approvedRequests, setApprovedRequests] = useState([]);
//   const [rejectedRequests, setRejectedRequests] = useState([]);

//   useEffect(() => {
//     fetchMatchedRequests();
//   }, []);

//   const fetchMatchedRequests = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/matched-transplant-requests");
//       setRequests(response.data);
//     } catch (error) {
//       console.error("Error fetching requests:", error);
//     }
//   };

//   const handleLogout = () => {
//     console.log("Logged out");
//     window.location.href = "/";
//   };

//   const handleAccept = async (request) => {
//     try {
//       const response = await axios.patch(`http://localhost:5000/api/recipient_requests/${request.RequestID}/approve`);
//       if (response.status === 200) {
//         // Move request to approved list
//         setApprovedRequests(prev => [...prev, request]);
//         setRequests(prev => prev.filter(r => r.RequestID !== request.RequestID));
//       }
//     } catch (error) {
//       console.error("Error accepting request:", error);
//     }
//   };

//   const handleReject = async (request) => {
//     try {
//       const response = await axios.patch(`http://localhost:5000/api/recipient_requests/${request.RequestID}/decline`);
//       if (response.status === 200) {
//         // Move request to rejected list
//         setRejectedRequests(prev => [...prev, request]);
//         setRequests(prev => prev.filter(r => r.RequestID !== request.RequestID));
//       }
//     } catch (error) {
//       console.error("Error rejecting request:", error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-3xl font-bold">Hospital Dashboard</h1>
//         <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
//           Logout
//         </button>
//       </div>

//       {/* Hospital Info */}
//       <div className="bg-white p-6 rounded shadow mb-8">
//         <h2 className="text-2xl font-semibold mb-2">Hospital Info</h2>
//         <p><strong>Name:</strong> {hospitalInfo.name}</p>
//         <p><strong>Location:</strong> {hospitalInfo.location}</p>
//         <p><strong>Contact:</strong> {hospitalInfo.contact}</p>
//       </div>

//       {/* Pending Requests */}
//       <div className="bg-white p-6 rounded shadow mb-8">
//         <h2 className="text-2xl font-semibold mb-4">Pending Requests</h2>
//         {requests.length === 0 ? (
//           <p>No pending requests.</p>
//         ) : (
//           <ul className="space-y-4">
//             {requests.map(request => (
//               <li key={request.RequestID} className="border p-4 rounded bg-gray-50 flex flex-col">
//                 <p><strong>Organ:</strong> {request.OrganType}</p>
//                 <p><strong>Requested By:</strong> {request.Username}</p>
//                 <p><strong>Date:</strong> {request.RequestDate}</p>
//                 <div className="flex gap-4 mt-4">
//                   <button
//                     onClick={() => handleAccept(request)}
//                     className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
//                   >
//                     Accept
//                   </button>
//                   <button
//                     onClick={() => handleReject(request)}
//                     className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
//                   >
//                     Reject
//                   </button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>

//       {/* Approved Section */}
//       {approvedRequests.length > 0 && (
//         <div className="bg-white p-6 rounded shadow mb-8">
//           <h2 className="text-2xl font-semibold text-green-700 mb-4">Approved Requests</h2>
//           <ul className="space-y-4">
//             {approvedRequests.map(request => (
//               <li key={request.RequestID} className="border p-4 rounded bg-green-50">
//                 <p><strong>Organ:</strong> {request.OrganType}</p>
//                 <p><strong>Requested By:</strong> {request.Username}</p>
//                 <p><strong>Date:</strong> {request.RequestDate}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* Rejected Section */}
//       {rejectedRequests.length > 0 && (
//         <div className="bg-white p-6 rounded shadow mb-8">
//           <h2 className="text-2xl font-semibold text-red-700 mb-4">Rejected Requests</h2>
//           <ul className="space-y-4">
//             {rejectedRequests.map(request => (
//               <li key={request.RequestID} className="border p-4 rounded bg-red-50">
//                 <p><strong>Organ:</strong> {request.OrganType}</p>
//                 <p><strong>Requested By:</strong> {request.Username}</p>
//                 <p><strong>Date:</strong> {request.RequestDate}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HospitalDashboard;


import React, { useState, useEffect } from "react";
import axios from "axios";

const HospitalDashboard = () => {
  const [hospitalInfo] = useState({
    name: "Lifeline Hospital",
    location: "New Delhi, India",
    contact: "+91 98765 43210",
  });

  const [requests, setRequests] = useState([]);
  const [approvedRequests, setApprovedRequests] = useState([]);
  const [rejectedRequests, setRejectedRequests] = useState([]);

  useEffect(() => {
    fetchMatchedRequests();
  }, []);

  const fetchMatchedRequests = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/matched-transplant-requests");
      console.log("Fetched requests:", response.data); // Debugging log
      setRequests(response.data);
    } catch (error) {
      console.error("Error fetching requests:", error);
    }
  };

  const handleLogout = () => {
    console.log("Logged out");
    window.location.href = "/";
  };

  const handleAccept = (request) => {
    setApprovedRequests((prev) => [...prev, request]);
    setRequests((prev) => prev.filter((r) => r.RequestID !== request.RequestID));
  };

  const handleReject = (request) => {
    setRejectedRequests((prev) => [...prev, request]);
    setRequests((prev) => prev.filter((r) => r.RequestID !== request.RequestID));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Hospital Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      {/* Hospital Info */}
      <div className="bg-white p-6 rounded shadow mb-8">
        <h2 className="text-2xl font-semibold mb-2">Hospital Info</h2>
        <p><strong>Name:</strong> {hospitalInfo.name}</p>
        <p><strong>Location:</strong> {hospitalInfo.location}</p>
        <p><strong>Contact:</strong> {hospitalInfo.contact}</p>
      </div>

      {/* Pending Requests */}
      <div className="bg-white p-6 rounded shadow mb-8">
        <h2 className="text-2xl font-semibold mb-4">Pending Requests</h2>
        {requests.length === 0 ? (
          <p>No pending requests.</p>
        ) : (
          <ul className="space-y-4">
            {requests.map((request) => (
              <li key={request.RequestID} className="border p-4 rounded bg-gray-50 flex flex-col">
                <p><strong>Organ:</strong> {request.OrganType}</p>
                <p><strong>Requested By:</strong> {request.Username}</p>
                <p><strong>Date:</strong> {request.RequestDate}</p>
                <div className="flex gap-4 mt-4">
                  <button
                    onClick={() => handleAccept(request)}
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleReject(request)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Reject
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Approved Section */}
      {approvedRequests.length > 0 && (
        <div className="bg-white p-6 rounded shadow mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Approved Requests</h2>
          <ul className="space-y-4">
            {approvedRequests.map((request) => (
              <li key={request.RequestID} className="border p-4 rounded bg-green-50">
                <p><strong>Organ:</strong> {request.OrganType}</p>
                <p><strong>Requested By:</strong> {request.Username}</p>
                <p><strong>Date:</strong> {request.RequestDate}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Rejected Section */}
      {rejectedRequests.length > 0 && (
        <div className="bg-white p-6 rounded shadow mb-8">
          <h2 className="text-2xl font-semibold text-red-700 mb-4">Rejected Requests</h2>
          <ul className="space-y-4">
            {rejectedRequests.map((request) => (
              <li key={request.RequestID} className="border p-4 rounded bg-red-50">
                <p><strong>Organ:</strong> {request.OrganType}</p>
                <p><strong>Requested By:</strong> {request.Username}</p>
                <p><strong>Date:</strong> {request.RequestDate}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HospitalDashboard;
