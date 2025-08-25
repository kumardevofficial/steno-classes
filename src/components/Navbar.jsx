import { useState } from "react";
import { FaShoppingCart, FaBell, FaBars, FaTimes } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";
import weblog from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full shadow-md bg-white relative z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div>
            <img src={weblog} alt="logo" className="h-16 w-auto" />
          </div>
          <div className="hidden md:block">
            <select
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-3 py-2 text-sm 
                        shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400 
                        focus:bg-white transition-all duration-300 ease-in-out cursor-pointer"
            >
              <option>All Exams</option>
              <option>UPSC</option>
              <option>SSC</option>
              <option>Banking</option>
            </select>
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden md:block flex-1 mx-4">
          <input
            type="text"
            placeholder="🔍 What do you want to learn?"
            className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 py-2 text-sm shadow-sm 
               placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 
               focus:bg-white transition-all duration-300 ease-in-out"
          />
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:8757354880" className="flex items-center gap-1 text-blue-800">
            <FiPhone /> 7004903656
          </a>
          <button className="relative">
            <FaBell className="text-blue-800 text-lg" />
            <span className="absolute -top-3 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">
              New
            </span>
          </button>
          <button className="bg-blue-900 text-white px-4 py-2 rounded">
            <Link to="login"> Login / Register</Link>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex justify-center gap-8 py-3 text-sm font-semibold">
        <Link
          to="/"
          className="text-blue-700 border-b-2 border-blue-700 pb-1 transition-colors duration-300"
        >
          Home
        </Link>
        <Link
          to="courses"
          className="text-gray-700 hover:text-blue-700 hover:border-b-2 hover:border-blue-700 pb-1 transition-all duration-300"
        >
          Courses
        </Link>
        <Link
          to="practice"
          className="text-gray-700 hover:text-blue-700 hover:border-b-2 hover:border-blue-700 pb-1 transition-all duration-300"
        >
          Practice
        </Link>
        <Link
          to="current-affairs"
          className="text-gray-700 hover:text-blue-700 hover:border-b-2 hover:border-blue-700 pb-1 transition-all duration-300"
        >
          Current Affairs
        </Link>
        <Link
          to="askdoubt"
          className="text-gray-700 hover:text-blue-700 hover:border-b-2 hover:border-blue-700 pb-1 transition-all duration-300"
        >
          Ask Doubt
        </Link>
        <Link
          to="test-series"
          className="text-gray-700 hover:text-blue-700 hover:border-b-2 hover:border-blue-700 pb-1 transition-all duration-300"
        >
          Test Series
        </Link>
        <Link
          to="study-materials"
          className="text-gray-700 hover:text-blue-700 hover:border-b-2 hover:border-blue-700 pb-1 transition-all duration-300"
        >
          Study Materials
        </Link>
      </div>

      {/* Mobile Menu (Overlay) */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 p-6 flex flex-col gap-4 text-sm overflow-y-auto">
          <input
            type="text"
            placeholder="What do you want to learn"
            className="w-full border rounded px-3 py-2 text-sm"
          />
          <a href="tel:8757354880" className="flex items-center gap-2 text-blue-800">
            <FiPhone /> 7004903656
          </a>
          <button className="flex items-center gap-2">
            <FaBell className="text-blue-800" /> Notifications
          </button>
          <button className="bg-blue-900 text-white px-4 py-2 rounded">
            <Link to="login" onClick={() => setMenuOpen(false)}>
              Login / Register
            </Link>
          </button>

          <div className="flex flex-col gap-4 mt-4 border-t pt-4">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="courses" onClick={() => setMenuOpen(false)}>Courses</Link>
            <Link to="practice" onClick={() => setMenuOpen(false)}>Practice</Link>
            <Link to="current-affairs" onClick={() => setMenuOpen(false)}>Current Affairs</Link>
            <Link to="askdoubt" onClick={() => setMenuOpen(false)}>Ask Doubt</Link>
            <Link to="test-series" onClick={() => setMenuOpen(false)}>Test Series</Link>
            <Link to="study-materials" onClick={() => setMenuOpen(false)}>Study Materials</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
