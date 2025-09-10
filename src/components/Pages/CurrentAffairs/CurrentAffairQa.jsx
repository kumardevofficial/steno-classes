import React, { useState } from "react";

const CurrentAffairsQA = () => {
  const questions = [
    {
      id: 1,
      question: "‘साबल पाँड’, जो हाल ही में समाचारों में देखा गया है, क्या है?",
      options: [
        "A) यूथोपिया डिवाइस",
        "B) स्पेस क्राफ्ट",
        "C) इनवेसिव वीड",
        "D) लार्ज लैंग्वेज मॉडल",
      ],
      answer: "C) इनवेसिव वीड",
    },
    {
      id: 2,
      question:
        "हाल ही में गुजरात सरकार ने काराकल (हिनोटार) प्रजनन और संरक्षण केंद्र किस जिले में स्थापित किया है?",
      options: ["A) कच्छ", "B) भावनगर", "C) खेड़ा", "D) जामनगर"],
      answer: "D) जामनगर",
    },
  ];

  const [showAnswer, setShowAnswer] = useState({});

  const toggleAnswer = (id) => {
    setShowAnswer((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-3xl mx-auto p-4 border rounded shadow-md">
      <h1 className="text-gray-800 mb-4 leading-relaxed text-blue">
        हिन्दी करेंट अफेयर्स 2025-26 जीक्यूटेड द्वारा प्रकाशित भारत की सबसे
        सटीक एवं विश्वसनीय करेंट अफेयर्स प्रश्नोत्तरी है। हर प्रश्न की सटीक
        व्याख्या, उत्तर एवं सामान्य ज्ञान सहित यूपीएससी, आरपीएससी, यूपीपीएससी,
        बीपीएससी, एमपीपीएससी, एचपीपीएससी, एमपीपीएससी, सीजीपीएससी तथा अन्य सभी
        परीक्षाओं के लिए करेंट घटनाओं एवं सामाजिक घटनाओं पर आधारित है।
      </h1>

      {questions.map((q) => (
        <div key={q.id} className="mb-6 p-4 border-b">
          <p className="font-semibold text-gray-900 mb-2">
            {q.id}. {q.question}
          </p>
          <ul className="space-y-1 text-gray-700">
            {q.options.map((opt, i) => (
              <li key={i}>{opt}</li>
            ))}
          </ul>
          <button
            onClick={() => toggleAnswer(q.id)}
            className="mt-3 px-4 py-1 bg-sky-500 text-white rounded hover:bg-sky-600"
          >
            {showAnswer[q.id] ? "Hide Answer" : "Show Answer"}
          </button>
          {showAnswer[q.id] && (
            <p className="mt-2 text-green-600 font-medium">✔ {q.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default CurrentAffairsQA;
