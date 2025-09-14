import React from "react";

// your jobs data stays here
const jobs = [
  {
    id: 1,
    department: "SSC",
    post: "Stenographer Grade C & D",
    vacancies: 1200,
    qualification: "12th Pass",
    startDate: "01 Sept 2025",
    endDate: "30 Sept 2025",
  },
  {
    id: 2,
    department: "RRB",
    post: "Junior Stenographer",
    vacancies: 450,
    qualification: "12th Pass + Typing",
    startDate: "20 Sept 2025",
    endDate: "15 Oct 2025",
  },
  {
    id: 3,
    department: "High Court",
    post: "Personal Assistant (Steno)",
    vacancies: 75,
    qualification: "Graduate + Steno",
    startDate: "05 Sept 2025",
    endDate: "25 Sept 2025",
  },
];

export default function JobCard({ jobselction }) {
  const deptMap = {
    1: "SSC",
    2: "RRB",
    3: "High Court",
    4: "PSC",
    5: "UPSC",
    6: "Central Dept",
  };

  // filter jobs based on selection
  const filteredJobs =
    jobselction == 0
      ? jobs
      : jobs.filter((job) => job.department === deptMap[jobselction]);

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 p-6">
      {filteredJobs.length === 0 ? (
        <div className="col-span-full text-center p-6 bg-gray-100 border rounded-2xl">
          <p className="text-gray-700 font-medium">
            No jobs available for this category
          </p>
        </div>
      ) : (
        filteredJobs.map((job) => (
          <div
            key={job.id}
            className="group relative rounded-3xl bg-gray-50 border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300"
          >
            {/* Top ribbon */}
            <div className="absolute top-0 right-0 bg-blue-700 text-white text-xs font-semibold px-3 py-1 rounded-bl-3xl">
              #{job.id}
            </div>

            {/* Header */}
            <div className="bg-blue-700 text-white rounded-t-3xl p-5">
              <h2 className="text-xl font-bold leading-tight group-hover:scale-105 transform transition">
                {job.post}
              </h2>
              <p className="text-sm opacity-80">{job.department}</p>
            </div>

            {/* Body */}
            <div className="p-5 space-y-2">
              <p className="flex justify-between text-sm text-gray-700">
                <span className="font-medium">Vacancies:</span>
                <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs font-semibold">
                  {job.vacancies}
                </span>
              </p>
              <p className="flex justify-between text-sm text-gray-700">
                <span className="font-medium">Qualification:</span>
                <span>{job.qualification}</span>
              </p>
              <div className="flex justify-between text-sm text-gray-700">
                <span className="font-medium">Start:</span>
                <span>{job.startDate}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-700">
                <span className="font-medium">End:</span>
                <span>{job.endDate}</span>
              </div>
            </div>

            {/* Button */}
            <div className="p-5 pt-0">
              <button className="w-full bg-blue-700 text-white font-medium py-2.5 rounded-xl hover:bg-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                View Details
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
