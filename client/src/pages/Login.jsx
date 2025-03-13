import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Backend API request
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role); // Save user role
      navigate(`/${data.role}/dashboard`); // Redirect to respective dashboard
    } else {
      alert(data.message);
    }
  };

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

      {/* Login Card */}
      <div className="min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-effect rounded-xl shadow-2xl w-full max-w-md overflow-hidden"
        >
          <div className="p-8">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-display font-bold text-gray-900 text-center mb-6"
            >
              Login
            </motion.h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Password</label>
                <input
                  type="password"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-display font-semibold tracking-wide shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                Login
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </motion.button>
            </form>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-4 text-center text-gray-600"
            >
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-600 hover:underline font-medium">
                Register
              </Link>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;