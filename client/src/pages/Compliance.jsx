// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const CompliancePage = () => {
//   const [complianceData, setComplianceData] = useState([]);

//   useEffect(() => {
//     const fetchComplianceData = async () => {
//       try {
//         const response = await axios.get("/api/compliance", {
//           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//         });
//         setComplianceData(response.data);
//       } catch (error) {
//         console.error("Error fetching compliance data", error);
//       }
//     };
//     fetchComplianceData();
//   }, []);

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Compliance and Regulations</h2>
//       <div className="bg-white p-4 shadow-md rounded-lg">
//         <h3 className="text-lg font-semibold">Regulatory Guidelines</h3>
//         <ul className="list-disc pl-5 mt-2">
//           {complianceData.map((item, index) => (
//             <li key={index} className="mb-2">{item.guideline}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default CompliancePage;


import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CompliancePage = () => {
  const [complianceData, setComplianceData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data
    const mockData = [
      { guideline: "Ensure all organ donations comply with national health regulations." },
      { guideline: "Maintain accurate records of organ donors and recipients." },
      { guideline: "Conduct regular audits to ensure compliance with ethical standards." },
      { guideline: "Provide transparent reporting on organ allocation and usage." },
      { guideline: "Adhere to international guidelines for organ transplantation." },
    ];

    // Simulate API call delay
    setTimeout(() => {
      setComplianceData(mockData);
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
        className="relative z-10"
      >
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">Compliance and Regulations</h2>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="glass-effect p-6 rounded-xl shadow-lg"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Regulatory Guidelines</h3>
          <ul className="list-disc pl-5 mt-2">
            {complianceData.map((item, index) => (
              <li key={index} className="mb-2 text-gray-700">{item.guideline}</li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CompliancePage;
