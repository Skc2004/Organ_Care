import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Shield, Users, Activity, Clock, Phone, Star, ArrowRight, CheckCircle } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 animate-gradient">
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

      {/* Hero Section */}
      <header className="relative pt-20 pb-32 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-full mb-8 text-white"
          >
            <Star className="w-5 h-5 mr-2" />
            <span className="font-display font-medium tracking-wider text-sm uppercase">Leading Healthcare Innovation</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-display text-7xl font-bold text-gray-900 mb-6 leading-tight heading-shadow"
          >
            OrganCare
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="block text-3xl text-gradient mt-4 font-semibold tracking-wide"
            >
              Advanced Organ Care Management
            </motion.span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Revolutionizing organ transplantation through cutting-edge technology, 
            transparent processes, and ethical care management solutions.
          </motion.p>

          <div className="flex justify-center gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/register"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-display font-semibold tracking-wide shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all text-lg"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/login"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-display font-semibold tracking-wide shadow-lg hover:bg-gray-50 transition-all border-2 border-blue-600 text-lg"
              >
                Member Login
                <Users className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="container mx-auto px-4 mt-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard
              number="1000+"
              label="Successful Transplants"
              icon={<Heart className="w-8 h-8 text-red-500" />}
            />
            <StatCard
              number="24/7"
              label="Emergency Support"
              icon={<Clock className="w-8 h-8 text-blue-500" />}
            />
            <StatCard
              number="100%"
              label="Compliance Rate"
              icon={<Shield className="w-8 h-8 text-green-500" />}
            />
          </div>
        </motion.div>
      </header>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4 heading-shadow">Our Services</h2>
            <p className="text-xl text-gray-600 font-light">Comprehensive care management solutions</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <FeatureCard
              icon={<Activity className="w-8 h-8 text-blue-600" />}
              title="Real-time Tracking"
              description="Advanced GPS tracking and monitoring systems ensure safe organ transportation with live updates."
              link="/tracking"
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-purple-600" />}
              title="Ethical Compliance"
              description="Strict adherence to medical regulations and ethical guidelines in organ donation procedures."
              link="/compliance"
            />
            <FeatureCard
              icon={<Users className="w-8 h-8 text-pink-600" />}
              title="Community Support"
              description="Comprehensive support network for donors, recipients, and healthcare providers."
              link="/support"
            />
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              "ISO Certified",
              "HIPAA Compliant",
              "24/7 Support",
              "Global Network"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex items-center justify-center bg-white rounded-lg p-4 shadow-md"
              >
                <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                <span className="font-display font-semibold text-gray-800 tracking-wide">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <Link
          to="/emergency"
          className="flex items-center bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full shadow-lg hover:from-red-600 hover:to-red-700 transition-all font-display font-semibold tracking-wide"
        >
          <Phone className="w-5 h-5 mr-2" />
          Emergency Contact
        </Link>
      </motion.div>
    </div>
  );
};

const StatCard = ({ number, label, icon }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="glass-effect rounded-xl shadow-lg p-8 text-center relative overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 opacity-50"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div className="relative z-10">
        <div className="flex justify-center mb-4">{icon}</div>
        <h3 className="font-display text-4xl font-bold text-gradient mb-2">
          {number}
        </h3>
        <p className="text-gray-700 font-medium tracking-wide">{label}</p>
      </div>
    </motion.div>
  );
};

const FeatureCard = ({ icon, title, description, link }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-xl p-8 hover:shadow-xl transition-all relative overflow-hidden border border-gray-100"
    >
      <Link to={link} className="block relative z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-purple-50 opacity-90" />
        <div className="relative z-20">
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50">
              {icon}
            </div>
            <h3 className="text-xl font-display font-semibold text-gray-900 ml-4">{title}</h3>
          </div>
          <p className="text-gray-700 leading-relaxed font-light text-lg">{description}</p>
          <div className="mt-6 flex items-center text-blue-600 font-medium">
            Learn More
            <ArrowRight className="w-4 h-4 ml-2" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Home;