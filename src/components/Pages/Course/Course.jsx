import { FaRegClock } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function CoursePage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="text-center max-w-lg p-8">
        <div className="flex justify-center mb-6">
          <div className="p-6 bg-indigo-100 rounded-full shadow-md">
            <FaRegClock className="text-indigo-600 text-5xl" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          Work in Progress
        </h1>
        <p className="text-gray-600 text-lg">
          We’re working hard to bring you this course.  
          Please check back soon for updates.
        </p>

        <div className="mt-8">
          <Link to="/" className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition">
            Go Back Home
          </Link>
          
        </div>
      </div>
    </div>
  );
}
