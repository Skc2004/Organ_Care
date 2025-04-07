// // src/pages/TermsOfService.jsx
// import React from "react";

// const TermsOfService = () => {
//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h2 className="text-3xl font-bold mb-4">Terms of Service</h2>
//       <p className="mb-4 text-gray-700">
//         Welcome to the Organ Care Management System. By using our platform, you agree to the following terms and conditions.
//       </p>
//       <h3 className="text-xl font-semibold mt-4">1. Use of Service</h3>
//       <p className="mb-4 text-gray-700">
//         This system is intended for registered users including donors, recipients, hospitals, government entities, and NGOs.
//       </p>
//       <h3 className="text-xl font-semibold mt-4">2. User Responsibilities</h3>
//       <p className="mb-4 text-gray-700">
//         You agree to provide accurate information and comply with all legal requirements regarding organ donation and transplantation.
//       </p>
//       <h3 className="text-xl font-semibold mt-4">3. Data Usage</h3>
//       <p className="mb-4 text-gray-700">
//         Your data will be used for organ matching, medical processing, and system improvements. Unauthorized use of the system is prohibited.
//       </p>
//       <h3 className="text-xl font-semibold mt-4">4. Termination</h3>
//       <p className="mb-4 text-gray-700">
//         We reserve the right to suspend or terminate accounts that violate our policies or engage in fraudulent activities.
//       </p>
//       <h3 className="text-xl font-semibold mt-4">5. Changes to Terms</h3>
//       <p className="mb-4 text-gray-700">
//         We may update these terms periodically. Continued use of the system implies acceptance of the revised terms.
//       </p>
//     </div>
//   );
// };

// export default TermsOfService;


// src/pages/TermsOfService.jsx
import React from "react";
import { motion } from "framer-motion";

const TermsOfService = () => {
  return (
    <motion.div
      className="p-6 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-xl shadow mb-6 inline-block">
        Terms of Service
      </h2>

      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
        <p className="mb-4 text-gray-700">
          Welcome to the Organ Care Management System. By using our platform, you agree to the following terms and conditions.
        </p>

        <h3 className="text-xl font-semibold mt-6 text-indigo-600">1. Use of Service</h3>
        <p className="mb-4 text-gray-700">
          This system is intended for registered users including donors, recipients, hospitals, government entities, and NGOs.
        </p>

        <h3 className="text-xl font-semibold mt-6 text-indigo-600">2. User Responsibilities</h3>
        <p className="mb-4 text-gray-700">
          You agree to provide accurate information and comply with all legal requirements regarding organ donation and transplantation.
        </p>

        <h3 className="text-xl font-semibold mt-6 text-indigo-600">3. Data Usage</h3>
        <p className="mb-4 text-gray-700">
          Your data will be used for organ matching, medical processing, and system improvements. Unauthorized use of the system is prohibited.
        </p>

        <h3 className="text-xl font-semibold mt-6 text-indigo-600">4. Termination</h3>
        <p className="mb-4 text-gray-700">
          We reserve the right to suspend or terminate accounts that violate our policies or engage in fraudulent activities.
        </p>

        <h3 className="text-xl font-semibold mt-6 text-indigo-600">5. Changes to Terms</h3>
        <p className="mb-4 text-gray-700">
          We may update these terms periodically. Continued use of the system implies acceptance of the revised terms.
        </p>
      </div>
    </motion.div>
  );
};

export default TermsOfService;
