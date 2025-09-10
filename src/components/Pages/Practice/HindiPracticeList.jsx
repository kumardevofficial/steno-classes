import React from "react";
import { Link } from "react-router-dom";
import { SiGoogletranslate } from "react-icons/si";

const HindiPracticeList = () => {
  const passages = [
    { id: 1, title: "समय प्रबंधन का महत्व" },
    { id: 2, title: "स्वस्थ जीवनशैली एक बेहतर भविष्य के लिए" },
    { id: 3, title: "शिक्षा पर प्रौद्योगिकी का प्रभाव" },
    { id: 4, title: "सकारात्मक सोच की शक्ति" },
    { id: 5, title: "वैश्विक तापन और जलवायु परिवर्तन" },
    { id: 6, title: "अनुशासन: सफलता की कुंजी" },
    { id: 7, title: "छात्र जीवन में खेलों की भूमिका" },
    { id: 8, title: "इंटरनेट: वरदान या अभिशाप?" },
    { id: 9, title: "पुस्तक पढ़ने का महत्व" },
    { id: 10, title: "जीवन में कठिन परिश्रम का मूल्य" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-6">
        {/* Title */}
        <div className="flex items-center justify-center mb-6">
          <SiGoogletranslate className="text-orange-500 text-3xl mr-2" />
          <h1 className="text-2xl font-bold text-gray-800">हिंदी टाइपिंग</h1>
        </div>

        {/* List of passages */}
        <ul className="space-y-3">
          {passages.map((p) => (
            <li
              key={p.id}
              className="border rounded-lg p-4 bg-gray-50 hover:bg-orange-50 cursor-pointer transition"
            >
              <Link
                to={`/hindi-typing-test/${p.id}`}
                className="text-lg font-medium text-gray-700 hover:text-orange-600"
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

export default HindiPracticeList;
