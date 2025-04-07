// // src/pages/PrivacyPolicy.jsx
// import React from "react";

// const PrivacyPolicy = () => {
//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h2 className="text-3xl font-bold mb-4">Privacy Policy</h2>
//       <p className="mb-4 text-gray-700">
//         Welcome to the Organ Care Management System. We value your privacy and 
//         are committed to protecting your personal data.
//       </p>
//       <h3 className="text-xl font-semibold mt-4">1. Information We Collect</h3>
//       <p className="mb-4 text-gray-700">
//         We may collect your name, contact details, medical history, and other 
//         relevant information necessary for organ donation and transplantation.
//       </p>
//       <h3 className="text-xl font-semibold mt-4">2. How We Use Your Information</h3>
//       <p className="mb-4 text-gray-700">
//         Your data is used for donor-recipient matching, medical processing, 
//         and system improvement. We do not sell or share your data with third 
//         parties without consent.
//       </p>
//       <h3 className="text-xl font-semibold mt-4">3. Data Security</h3>
//       <p className="mb-4 text-gray-700">
//         We implement industry-standard security measures to protect your 
//         personal data from unauthorized access.
//       </p>
//       <h3 className="text-xl font-semibold mt-4">4. Your Rights</h3>
//       <p className="mb-4 text-gray-700">
//         You have the right to access, update, or delete your data. If you have 
//         any concerns, please contact our support team.
//       </p>
//       <h3 className="text-xl font-semibold mt-4">5. Changes to Policy</h3>
//       <p className="mb-4 text-gray-700">
//         We may update this policy from time to time. Please review this page 
//         periodically for any changes.
//       </p>
//     </div>
//   );
// };

// export default PrivacyPolicy;


import React, { useEffect, useState } from "react";

const P = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-4xl font-bold text-slate-900 mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 text-transparent bg-clip-text">
          Privacy Policy
        </h2>
        <p className="mb-6 text-gray-700 text-lg">
          Welcome to the <strong>Organ Care Management System</strong>. We are committed to protecting your privacy and safeguarding your personal data.
        </p>

        {/* Section 1 */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-blue-700 mb-2">1. Information We Collect</h3>
          <p className="text-gray-700">
            We collect information including your name, contact details, medical history, and any other data necessary for the safe and effective management of organ donation and transplantation processes.
          </p>
        </div>

        {/* Section 2 */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-blue-700 mb-2">2. How We Use Your Information</h3>
          <p className="text-gray-700">
            The collected data is used for donor-recipient matching, medical evaluations, communication, and system improvements. We do not sell, rent, or share your personal information without your consent.
          </p>
        </div>

        {/* Section 3 */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-blue-700 mb-2">3. Data Security</h3>
          <p className="text-gray-700">
            We employ industry-standard encryption, authentication, and access control mechanisms to protect your data from unauthorized access or misuse.
          </p>
        </div>

        {/* Section 4 */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-blue-700 mb-2">4. Your Rights</h3>
          <p className="text-gray-700">
            You have the right to access, correct, update, or delete your personal data at any time. To exercise your rights, please contact our support team at <span className="text-blue-600 underline">support@organcare.org</span>.
          </p>
        </div>

        {/* Section 5 */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-700 mb-2">5. Changes to This Policy</h3>
          <p className="text-gray-700">
            This policy may be updated periodically to reflect changes in practices or legal requirements. We encourage you to revisit this page occasionally to stay informed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default P;
