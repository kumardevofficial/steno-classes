import React from "react";

const LatestPosts = () => {
  const posts = [
    "विदेशी प्रजातियों से जैव विविधता को खतरा: भारत में छुपी हुई लागत और वैश्विक चुनौती",
    "स्वतंत्रता दिवस पर प्रधानमंत्री का बड़ा ऐलान: जीएसटी 2.0 और भारत की अर्थव्यवस्था पर प्रभाव",
    "कीलाड़ी विवाद और ASI की आलोचना: भारत के पुरातात्विक अनुसंधान में नई बहस",
  ];

  return (
    <div className="w-80 border rounded shadow-md">
      {/* Header */}
      <div className="bg-sky-400 text-white font-semibold p-2 rounded-t">
        नवीनतम पोस्ट्स
      </div>

      {/* Posts list */}
      <ul className="p-3 space-y-3">
        {posts.map((post, index) => (
          <li
            key={index}
            className="text-gray-700 hover:text-sky-600 cursor-pointer border-b pb-2 last:border-b-0"
          >
            {post}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LatestPosts;
