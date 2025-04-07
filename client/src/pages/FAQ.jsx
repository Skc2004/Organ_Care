// // src/pages/FAQ.jsx
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FaPlus, FaMinus } from "react-icons/fa";

// const FAQ = () => {
//   const [faqs, setFaqs] = useState([]);
//   const [openIndex, setOpenIndex] = useState(null);

//   useEffect(() => {
//     const fetchFAQs = async () => {
//       try {
//         const response = await axios.get("/api/faqs");
//         setFaqs(response.data);
//       } catch (error) {
//         console.error("Error fetching FAQs", error);
//       }
//     };
//     fetchFAQs();
//   }, []);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="p-6 max-w-3xl mx-auto">
//       <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
//       <div className="space-y-4">
//         {faqs.map((faq, index) => (
//           <div key={index} className="border rounded-lg shadow-md p-4 bg-white">
//             <button
//               className="w-full flex justify-between items-center text-left font-semibold text-lg"
//               onClick={() => toggleFAQ(index)}
//             >
//               {faq.question}
//               {openIndex === index ? <FaMinus /> : <FaPlus />}
//             </button>
//             {openIndex === index && <p className="mt-2 text-gray-700">{faq.answer}</p>}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FAQ;


// src/pages/FAQ.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await axios.get("/api/faqs");
        setFaqs(response.data);
      } catch (error) {
        console.error("Error fetching FAQs", error);
        // Fallback sample data
        setFaqs([
          { question: "How does OrganCare work?", answer: "OrganCare provides real-time tracking and compliance tools for organ transplants." },
          { question: "Is the system HIPAA compliant?", answer: "Yes, we fully adhere to HIPAA and ISO standards." },
          { question: "How do I contact emergency support?", answer: "Click on the Emergency Contact button at the bottom right corner of any page." },
        ]);
      }
    };
    fetchFAQs();
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 animate-gradient py-16 px-6">
      {/* Animated bubbles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-30"
            animate={{ x: [0, 100, 0], y: [0, 100, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 12 + i * 2, repeat: Infinity, ease: "easeInOut" }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['#60A5FA', '#818CF8', '#E879F9'][i % 3],
              width: '250px',
              height: '250px',
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto relative z-10"
      >
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full mb-4">
            <HelpCircle className="w-5 h-5 mr-2" />
            <span className="font-medium tracking-wide text-sm uppercase">FAQs</span>
          </div>
          <h1 className="text-4xl font-bold font-display text-gray-900 mb-4 heading-shadow">Frequently Asked Questions</h1>
          <p className="text-gray-600 text-lg font-light">Get quick answers to common questions about our services.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.01 }}
              className="border border-gray-200 rounded-xl shadow-lg p-6 bg-white"
            >
              <button
                className="w-full flex justify-between items-center text-left font-semibold text-lg text-gray-800"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? <FaMinus className="text-blue-600" /> : <FaPlus className="text-blue-600" />}
              </button>
              {openIndex === index && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-gray-700 font-light leading-relaxed"
                >
                  {faq.answer}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default FAQ;
