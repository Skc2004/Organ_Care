import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-bold">About Us</h2>
            <p className="text-sm mt-2">
              Organ Care Management System helps streamline organ donations, tracking, and compliance across hospitals, NGOs, and government institutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold">Quick Links</h2>
            <ul className="mt-2 space-y-2 text-sm">
              <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
              <li><Link to="/faq" className="hover:text-gray-400">FAQs</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-gray-400">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-gray-400">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xl font-bold">Contact Us</h2>
            <p className="text-sm mt-2">Email: support@organcare.com</p>
            <p className="text-sm">Phone: +1 234 567 890</p>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-xl font-bold">Follow Us</h2>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="hover:text-gray-400">🌐</a>
              <a href="#" className="hover:text-gray-400">📘</a>
              <a href="#" className="hover:text-gray-400">🐦</a>
              <a href="#" className="hover:text-gray-400">📸</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
          &copy; {new Date().getFullYear()} Organ Care Management. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
