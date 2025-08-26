import { useState } from "react";
import { FaShoppingCart, FaBell, FaBars, FaTimes } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import weblog from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "courses", label: "Courses" },
    { path: "practice", label: "Practice" },
    { path: "current-affairs", label: "Current Affairs" },
    { path: "askdoubt", label: "Ask Doubt" },
    { path: "test-series", label: "Test Series" },
    { path: "study-materials", label: "Study Materials" },
  ];

  const linkClass = (path) =>
    location.pathname === `/${path === "/" ? "" : path}`
      ? "text-blue-700 border-b-2 border-blue-700 pb-1"
      : "hover:text-blue-700 hover:border-b-2 hover:border-blue-700 pb-1";

  return (
    <nav className="w-full shadow-md bg-white relative z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={weblog} alt="logo" className="h-14 w-auto" />
          <div className="flex flex-col leading-tight">
            <h1 className="text-lg md:text-xl font-bold text-blue-900">
              Sridha Shorthand Academy
            </h1>
            <span className="hidden md:block text-sm text-gray-500">
              Excellence in Learning
            </span>
          </div>
        </div>

        <div className="hidden md:block flex-1 mx-4">
          <input
            type="text"
            placeholder="🔍 What do you want to learn?"
            className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 py-2 text-sm shadow-sm 
               placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 
               focus:bg-white transition-all duration-300 ease-in-out"
          />
        </div>

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

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      <div className="hidden md:flex justify-center gap-8 py-3 text-sm font-semibold">
        {menuItems.map((item) => (
          <Link key={item.path} to={item.path} className={linkClass(item.path)}>
            {item.label}
          </Link>
        ))}
      </div>

      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 p-6 flex flex-col gap-4 text-sm overflow-y-auto">
          <div className="flex items-center gap-3 mb-4">
            <img src={weblog} alt="logo" className="h-12 w-auto" />
            <h1 className="text-lg font-bold text-blue-900">Shridhan Shorthand Academy</h1>
          </div>

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
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={linkClass(item.path)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
