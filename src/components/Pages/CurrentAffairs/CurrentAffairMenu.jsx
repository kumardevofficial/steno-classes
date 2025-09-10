import React from "react";
import { FaRegEdit } from "react-icons/fa";

const CurrentAffairsMenu = () => {
  const years = [
    "करेंट अफेयर्स 2025-26",
    "करेंट अफेयर्स 2024-25",
    "करेंट अफेयर्स 2023-24",
    "करेंट अफेयर्स 2022-23",
  ];

  return (
    <div className="w-72 border rounded shadow-md">
      {/* Header */}
      <div className="bg-sky-400 text-white font-semibold p-2 rounded-t">
        करेंट अफेयर्स
      </div>

      {/* List */}
      <ul className="p-2 space-y-2">
        {years.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-2 text-gray-700 hover:text-sky-500 cursor-pointer"
          >
            <FaRegEdit className="text-sky-500" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CurrentAffairsMenu;
