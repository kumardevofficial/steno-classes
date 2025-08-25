import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import weblogo from "../assets/logo.png"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + About */}
        <div>
          <img
            src={weblogo}
            alt="Logo"
            className="h-14 mb-3"
          />
          <p className="text-sm leading-6">
            Our platform is dedicated to providing quality education through 
            courses, test series, and study materials for various competitive exams.  
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="courses" className="hover:text-white">Courses</Link></li>
            <li><Link to="test-series" className="hover:text-white">Test Series</Link></li>
            <li><Link to="current-affairs" className="hover:text-white">Current Affairs</Link></li>
            <li><Link to="study-materials" className="hover:text-white">Study Materials</Link></li>
          </ul>
        </div>
        

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Ask a Doubt</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
            <li><a href="#" className="hover:text-white">FAQs</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {/* <a href="#" className="bg-gray-700 hover:bg-blue-600 p-3 rounded-full">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-gray-700 hover:bg-sky-500 p-3 rounded-full">
              <FaTwitter />
            </a> */}
            <a href="#" className="bg-gray-700 hover:bg-pink-600 p-3 rounded-full">
              <FaInstagram />
            </a>
            <a href="#" className="bg-gray-700 hover:bg-red-600 p-3 rounded-full">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Shirdha Shorthand Classes. All rights reserved.
      </div>
    </footer>
  );
}
