import React from "react";
import { Link } from "react-router-dom";
import { FaKeyboard } from "react-icons/fa";
import { SiGoogletranslate } from "react-icons/si";

const TypingPractice = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl p-10">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Choose Your Typing Practice
        </h1>

        {/* Two Divs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Hindi Typing */}
          <Link
            to="/hindi-typing"
            className="flex flex-col items-center justify-center border rounded-xl p-8 bg-gradient-to-br from-orange-100 to-orange-200 hover:shadow-lg hover:scale-105 transition cursor-pointer"
          >
            <SiGoogletranslate className="text-orange-600 text-5xl mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Hindi Typing
            </h2>
            <p className="text-gray-600 text-center">
              Practice Hindi typing and improve your accuracy & speed with
              real-time feedback.
            </p>
          </Link>

          {/* English Typing */}
          <Link
            to="/english-typing"
            className="flex flex-col items-center justify-center border rounded-xl p-8 bg-gradient-to-br from-sky-100 to-sky-200 hover:shadow-lg hover:scale-105 transition cursor-pointer"
          >
            <FaKeyboard className="text-sky-600 text-5xl mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              English Typing
            </h2>
            <p className="text-gray-600 text-center">
              Boost your English typing skills with professional passages and
              live tracking.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TypingPractice;
