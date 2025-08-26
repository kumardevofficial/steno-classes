import { FaCircle } from "react-icons/fa";

export default function CourseCard({ title, startDate, endDate, price, oldPrice, status, image }) {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden border">
      {/* Image */}
      <img className="w-full h-40 object-cover" src={image} alt={title} />

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h2 className="text-gray-800 font-semibold text-lg leading-snug mb-2">
          {title}
        </h2>

        {/* Dates */}
        <p className="text-sm text-gray-600">
          <span className="font-medium">Starts On: </span>
          <span className="text-black">{startDate}</span>
        </p>
        <p className="text-sm text-gray-600 mb-2">
          <span className="font-medium">Ends On: </span>
          <span className="text-black">{endDate}</span>
        </p>

        {/* Price & Status */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-blue-600 font-bold text-xl">₹{price}/-</span>
            <span className="text-gray-400 line-through ml-2">₹{oldPrice}</span>
          </div>
          <div
            className={`flex items-center font-medium px-3 py-1 rounded-full text-sm ${
              status === "Online"
                ? "text-green-600 bg-green-100"
                : "text-red-500 bg-red-100"
            }`}
          >
            <FaCircle className="w-2 h-2 mr-2" /> {status}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex space-x-3">
          <button className="flex-1 border border-gray-400 text-gray-700 py-2 rounded-lg hover:bg-gray-100">
            Explore
          </button>
          <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
