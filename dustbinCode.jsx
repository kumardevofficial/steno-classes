// import React, { useState, useEffect } from "react";

// const TypingTest = () => {
//   const [sampleText, setSampleText] = useState("");
//   const [userInput, setUserInput] = useState("");
//   const [correctCount, setCorrectCount] = useState(0);
//   const [wrongCount, setWrongCount] = useState(0);
//   const [loading, setLoading] = useState(true);

//   // ✅ Fetch paragraph from API
//   useEffect(() => {
//     const fetchText = async () => {
//       try {
//         // Example: free quotes API (you can replace with your own endpoint)
//         const res = await fetch("https://api.quotable.io/random?minLength=100&maxLength=200");
//         const data = await res.json();
//         setSampleText(data.content); // use API content
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching text:", error);
//         setSampleText("Failed to load passage. Please try again.");
//         setLoading(false);
//       }
//     };

//     fetchText();
//   }, []);

//   // ✅ Check correct/wrong characters
//   useEffect(() => {
//     let correct = 0;
//     let wrong = 0;

//     for (let i = 0; i < userInput.length; i++) {
//       if (userInput[i] === sampleText[i]) {
//         correct++;
//       } else {
//         wrong++;
//       }
//     }

//     setCorrectCount(correct);
//     setWrongCount(wrong);
//   }, [userInput, sampleText]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-xl text-gray-600">
//         Loading passage...
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
//       <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-6">
//         {/* Heading */}
//         <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
//           English Typing Test
//         </h1>

//         {/* Sample Text */}
//         <p className="border rounded-lg p-4 bg-gray-50 text-lg leading-relaxed mb-6">
//           {sampleText.split("").map((char, index) => {
//             let color = "";
//             if (index < userInput.length) {
//               color = userInput[index] === char ? "text-green-600" : "text-red-600";
//             }
//             return (
//               <span key={index} className={`${color}`}>
//                 {char}
//               </span>
//             );
//           })}
//         </p>

//         {/* Typing Box */}
//         <textarea
//           value={userInput}
//           onChange={(e) => setUserInput(e.target.value)}
//           className="w-full h-32 border rounded-lg p-3 text-lg outline-none focus:ring-2 focus:ring-sky-400"
//           placeholder="Start typing here..."
//         ></textarea>

//         {/* Result */}
//         <div className="flex justify-around mt-6 text-center">
//           <div className="bg-green-100 text-green-700 px-6 py-3 rounded-lg shadow">
//             <p className="text-lg font-semibold">Correct</p>
//             <p className="text-2xl font-bold">{correctCount}</p>
//           </div>
//           <div className="bg-red-100 text-red-700 px-6 py-3 rounded-lg shadow">
//             <p className="text-lg font-semibold">Wrong</p>
//             <p className="text-2xl font-bold">{wrongCount}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TypingTest;
