import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-50 to-blue-100 text-gray-900 p-6 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-5xl font-extrabold text-blue-700 mb-4 drop-shadow-lg">OrganCare</h1>
        <p className="text-lg text-gray-700 mb-6 font-medium">
          A Comprehensive Organ Care Management System for Transparent and Ethical Organ Transplantation.
        </p>

        <div className="flex justify-center space-x-6 mt-4">
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              to="/register"
              className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-green-700 transition"
            >
              Register
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              to="/login"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition"
            >
              Login
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl px-4"
      >
        <FeatureCard
          title="Organ Tracking"
          description="Monitor real-time organ transportation with cutting-edge technology."
          link="/organ-tracking"
        />
        <FeatureCard
          title="Compliance"
          description="Ensure legal and ethical compliance in organ donation procedures."
          link="/compliance"
        />
        <FeatureCard
          title="Awareness"
          description="Promote organ donation awareness campaigns and educate communities."
          link="/awareness"
        />
      </motion.div>

      {/* Floating Animation */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 bg-blue-300 rounded-full opacity-50"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute bottom-10 right-10 w-32 h-32 bg-green-300 rounded-full opacity-50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      ></motion.div>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ title, description, link }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <Link to={link} className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition border-t-4 border-blue-500 flex flex-col items-center text-center">
        <h2 className="text-xl font-semibold text-blue-800 mb-2">{title}</h2>
        <p className="text-gray-600 max-w-xs">{description}</p>
      </Link>
    </motion.div>
  );
};

export default Home;
