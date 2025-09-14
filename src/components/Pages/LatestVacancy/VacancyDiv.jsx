import { useState } from "react";

const categories = [
  "All",
  "SSC",
  "RRB",
  "High Court",
  "PSC",
  "UPSC",
  "Central Dept",
];


const JobFilter = ({jobfilter}) => {
  const [selected, setSelected] = useState("All");

  return (
    <div className="w-full flex flex-col items-center py-8 bg-white">
      {/* Title */}
      <h2 className="text-xl font-bold text-gray-900 mb-6">
        Stenographer Vacancy By Department
      </h2>

      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((cat, index) => (
          <button
            key={cat}
            onClick={() => {setSelected(cat); jobfilter(index)}}
            className={`px-4 py-2 rounded-full border transition 
              ${
                selected === cat
                  ? "border-blue-600 text-blue-600 font-medium"
                  : "border-gray-300 text-gray-600 hover:border-blue-400 hover:text-blue-500"
              }`}
          >
            {cat}
          </button>
        ))}

        {/* "+ more" button */}
        {/* <button className="px-4 py-2 rounded-full border border-gray-300 text-gray-600 hover:border-blue-400 hover:text-blue-500">
          +4 more
        </button> */}
      </div>
    </div>
  );
};

export default JobFilter;
