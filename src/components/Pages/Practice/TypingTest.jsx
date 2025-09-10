import { useState, useEffect } from "react";

const TypingTest = () => {
  const passage =
    "The quick brown fox jumps over the lazy dog. Practice typing to improve speed and accuracy.";

  const [userInput, setUserInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [stats, setStats] = useState({
    totalWords: 0,
    wrongWords: 0,
    wpm: 0,
    accuracy: 0,
  });

  // Split passage and input into words
  const passageWords = passage.split(" ");
  const inputWords = userInput.trim().split(" ");

  useEffect(() => {
    if (userInput.length === 1) {
      setStartTime(Date.now()); // start timer on first key press
    }

    const totalWords = inputWords.filter((w) => w !== "").length;

    // Wrong word check
    let wrong = 0;
    inputWords.forEach((word, i) => {
      if (word && word !== passageWords[i]) wrong++;
    });

    const correct = totalWords - wrong;

    // Calculate WPM
    let wpm = 0;
    if (startTime && totalWords > 0) {
      const minutes = (Date.now() - startTime) / 60000;
      wpm = Math.round(correct / minutes);
    }

    // Calculate Accuracy
    let accuracy = 0;
    if (totalWords > 0) {
      accuracy = Math.round((correct / totalWords) * 100);
    }

    setStats({ totalWords, wrongWords: wrong, wpm, accuracy });
  }, [userInput]);

  // Render passage with per-character highlighting
  const renderPassage = () => {
    return passage.split("").map((char, index) => {
      let color = "text-gray-400"; // default (not typed yet)
      if (index < userInput.length) {
        if (userInput[index] === char) {
          color = "text-green-600"; // correct char
        } else {
          color = "text-red-600"; // wrong char
        }
      }
      return (
        <span key={index} className={`${color}`}>
          {char}
        </span>
      );
    });
  };

  return (
    <div className="flex flex-col items-center p-6 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">
        English Typing Test
      </h1>

      {/* Highlighted Passage */}
      <div className="p-4 bg-white rounded-xl shadow-md w-full max-w-3xl text-lg leading-relaxed mb-6 border-l-4 border-blue-500 font-mono break-words">
        {renderPassage()}
      </div>

      {/* Input */}
      <textarea
        className="w-full max-w-3xl p-4 border rounded-xl shadow-md focus:ring-2 focus:ring-blue-400 text-lg font-mono"
        rows="6"
        placeholder="Start typing here..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />

      {/* Stats */}
      <div className="grid grid-cols-4 gap-6 mt-8 w-full max-w-4xl text-center">
        <div className="p-4 bg-white rounded-xl shadow-md">
          <h2 className="text-lg font-semibold text-gray-700">Words Typed</h2>
          <p className="text-2xl font-bold text-green-600">{stats.totalWords}</p>
        </div>
        <div className="p-4 bg-white rounded-xl shadow-md">
          <h2 className="text-lg font-semibold text-gray-700">Wrong Words</h2>
          <p className="text-2xl font-bold text-red-600">{stats.wrongWords}</p>
        </div>
        <div className="p-4 bg-white rounded-xl shadow-md">
          <h2 className="text-lg font-semibold text-gray-700">WPM</h2>
          <p className="text-2xl font-bold text-blue-600">{stats.wpm}</p>
        </div>
        <div className="p-4 bg-white rounded-xl shadow-md">
          <h2 className="text-lg font-semibold text-gray-700">Accuracy</h2>
          <p className="text-2xl font-bold text-purple-600">{stats.accuracy}%</p>
        </div>
      </div>
    </div>
  );
};

export default TypingTest;
