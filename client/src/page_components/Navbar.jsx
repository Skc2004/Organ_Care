import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [userRole, setUserRole] = useState(null); // Role: donor, recipient, hospital, government, ngo, admin

  useEffect(() => {
    // Fetch user role from local storage or API
    const role = localStorage.getItem("userRole"); // Example: "donor", "recipient"
    setUserRole(role);
  }, []);

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          OrganCare
        </Link>

        {/* Navigation Menu */}
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
          <li><Link to="/organ-tracking" className="hover:text-gray-400">Organ Tracking</Link></li>
          <li><Link to="/awareness" className="hover:text-gray-400">Awareness</Link></li>
          <li><Link to="/faq" className="hover:text-gray-400">FAQs</Link></li>
          
          {/* Conditional Menus based on User Role */}
          {userRole === "donor" && (
            <>
              <li><Link to="/donordashboard" className="hover:text-gray-400">Donor Dashboard</Link></li>
            </>
          )}
          {userRole === "recipient" && (
            <>
              <li><Link to="/recipientdashboard" className="hover:text-gray-400">Recipient Dashboard</Link></li>
            </>
          )}
          {userRole === "hospital" && (
            <>
              <li><Link to="/hospital/dashboard" className="hover:text-gray-400">Hospital Dashboard</Link></li>
              <li><Link to="/compliance" className="hover:text-gray-400">Compliance</Link></li>
            </>
          )}
          {userRole === "government" && (
            <>
              <li><Link to="/government/dashboard" className="hover:text-gray-400">Govt Dashboard</Link></li>
              <li><Link to="/reporting" className="hover:text-gray-400">Reporting</Link></li>
            </>
          )}
          {userRole === "ngo" && (
            <>
              <li><Link to="/ngo/dashboard" className="hover:text-gray-400">NGO Dashboard</Link></li>
            </>
          )}
          {userRole === "admin" && (
            <>
              <li><Link to="/admin/dashboard" className="hover:text-gray-400">Admin Panel</Link></li>
            </>
          )}

          {/* Authentication */}
          {userRole ? (
            <li>
              <button
                onClick={() => {
                  localStorage.removeItem("userRole");
                  window.location.reload();
                }}
                className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </li>
          ) : (
            <>
              <li><Link to="/login" className="hover:text-gray-400">Login</Link></li>
              <li><Link to="/register" className="hover:text-gray-400">Register</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
