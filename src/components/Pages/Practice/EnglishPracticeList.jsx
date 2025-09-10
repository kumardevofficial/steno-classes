import React from "react";
import { Link } from "react-router-dom";
import { FaKeyboard } from "react-icons/fa";

const EnglishPracticeList = () => {
  const passages = [
    { id: 1, title: "The Importance of Time Management" },
    { id: 2, title: "Healthy Lifestyle for a Better Future" },
    { id: 3, title: "The Impact of Technology on Education" },
    { id: 4, title: "The Power of Positive Thinking" },
    { id: 5, title: "Global Warming and Climate Change" },
    { id: 6, title: "Discipline: The Key to Success" },
    { id: 7, title: "The Role of Sports in Student Life" },
    { id: 8, title: "Internet: A Boon or a Curse?" },
    { id: 9, title: "Importance of Reading Books" },
    { id: 10, title: "The Value of Hard Work in Life" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-6">
        {/* Title */}
        <div className="flex items-center justify-center mb-6">
          <FaKeyboard className="text-sky-500 text-3xl mr-2" />
          <h1 className="text-2xl font-bold text-gray-800">English Typing</h1>
        </div>

        {/* List of passages */}
        <ul className="space-y-3">
          {passages.map((p) => (
            <li
              key={p.id}
              className="border rounded-lg p-4 bg-gray-50 hover:bg-sky-50 cursor-pointer transition"
            >
              <Link
                to={`/typing-test/${p.id}`}
                className="text-lg font-medium text-gray-700 hover:text-sky-600"
              >
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EnglishPracticeList;
