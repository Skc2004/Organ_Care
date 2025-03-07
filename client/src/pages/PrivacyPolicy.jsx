// src/pages/PrivacyPolicy.jsx
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Privacy Policy</h2>
      <p className="mb-4 text-gray-700">
        Welcome to the Organ Care Management System. We value your privacy and 
        are committed to protecting your personal data.
      </p>
      <h3 className="text-xl font-semibold mt-4">1. Information We Collect</h3>
      <p className="mb-4 text-gray-700">
        We may collect your name, contact details, medical history, and other 
        relevant information necessary for organ donation and transplantation.
      </p>
      <h3 className="text-xl font-semibold mt-4">2. How We Use Your Information</h3>
      <p className="mb-4 text-gray-700">
        Your data is used for donor-recipient matching, medical processing, 
        and system improvement. We do not sell or share your data with third 
        parties without consent.
      </p>
      <h3 className="text-xl font-semibold mt-4">3. Data Security</h3>
      <p className="mb-4 text-gray-700">
        We implement industry-standard security measures to protect your 
        personal data from unauthorized access.
      </p>
      <h3 className="text-xl font-semibold mt-4">4. Your Rights</h3>
      <p className="mb-4 text-gray-700">
        You have the right to access, update, or delete your data. If you have 
        any concerns, please contact our support team.
      </p>
      <h3 className="text-xl font-semibold mt-4">5. Changes to Policy</h3>
      <p className="mb-4 text-gray-700">
        We may update this policy from time to time. Please review this page 
        periodically for any changes.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
