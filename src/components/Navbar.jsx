import { useState } from "react";
import { FaShoppingCart, FaBell, FaBars, FaTimes } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full shadow-md bg-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="https://your-logo-url.png"
            alt="logo"
            className="h-12 w-auto"
          />
          <div className="hidden md:block">
            <select className="border rounded px-2 py-1 text-sm">
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
            placeholder="What do you want to learn"
            className="w-full border rounded px-3 py-2 text-sm"
          />
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4">
          <button className="flex items-center gap-1 text-blue-800 font-medium">
            <FaShoppingCart /> KGS Store
          </button>
          <a href="tel:8757354880" className="flex items-center gap-1 text-blue-800">
            <FiPhone /> 8757354880
          </a>
          <button className="relative">
            <FaBell className="text-blue-800 text-lg" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">
              New
            </span>
          </button>
          <button className="bg-blue-900 text-white px-4 py-2 rounded">
            Login / Register
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Bottom Nav (Desktop) */}
      <div className="hidden md:flex justify-center gap-6 py-2 border-t text-sm font-medium">
        <a href="#" className="text-blue-900 border-b-2 border-blue-900 pb-1">Home</a>
        <a href="#">Courses</a>
        <a href="#">Practice</a>
        <a href="#">Current Affairs</a>
        <a href="#">Ask Doubt</a>
        <a href="#">Test Series</a>
        <a href="#">Study Materials</a>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t p-4 flex flex-col gap-4 text-sm">
          <input
            type="text"
            placeholder="What do you want to learn"
            className="w-full border rounded px-3 py-2 text-sm"
          />
          <button className="flex items-center gap-2 text-blue-800 font-medium">
            <FaShoppingCart /> KGS Store
          </button>
          <a href="tel:8757354880" className="flex items-center gap-2 text-blue-800">
            <FiPhone /> 8757354880
          </a>
          <button className="flex items-center gap-2">
            <FaBell className="text-blue-800" /> Notifications
          </button>
          <button className="bg-blue-900 text-white px-4 py-2 rounded">
            Login / Register
          </button>

          <div className="flex flex-col gap-2 mt-3 border-t pt-3">
            <a href="#" className="text-blue-900">Home</a>
            <a href="#">Courses</a>
            <a href="#">Practice</a>
            <a href="#">Current Affairs</a>
            <a href="#">Ask Doubt</a>
            <a href="#">Test Series</a>
            <a href="#">Study Materials</a>
          </div>
        </div>
      )}
    </nav>
  );
}
