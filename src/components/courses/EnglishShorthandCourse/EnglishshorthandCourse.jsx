import { useState } from "react";
import { Menu } from "lucide-react";

const chapters = [
  { title: "The Consonants", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { title: "The Vowels", video: "https://www.w3schools.com/html/movie.mp4" },
  { title: "Intervening Vowels and Position", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { title: "Grammalogues, Punctuation", video: "https://www.w3schools.com/html/movie.mp4" },
  { title: "Alternative Signs for r and h", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { title: "Diphthongs", video: "https://www.w3schools.com/html/movie.mp4" },
  { title: "Abbreviated w", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { title: "Phraseography", video: "https://www.w3schools.com/html/movie.mp4" },
  { title: "Tick the", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { title: "Circle s and z — Left and Right Motion", video: "https://www.w3schools.com/html/movie.mp4" },
  { title: "Stroke s and z", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { title: "Large Circles sw and ss or sz", video: "https://www.w3schools.com/html/movie.mp4" },
  { title: "Loops st and str", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { title: "Initial Hooks to Straight Strokes and Curves", video: "https://www.w3schools.com/html/movie.mp4" },
  { title: "Alternative Forms for fr, vr, etc. Intervening Vowels", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { title: "Circle or Loop Preceding Initial Hook", video: "https://www.w3schools.com/html/movie.mp4" },
  { title: "n and f Hooks", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { title: "Circles and Loops to Final Hooks", video: "https://www.w3schools.com/html/movie.mp4" },
  { title: "The shun Hook", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { title: "The Aspirate", video: "https://www.w3schools.com/html/movie.mp4" },
  { title: "Upward and Downward r", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { title: "Upward and Downward l and sh", video: "https://www.w3schools.com/html/movie.mp4" },
  { title: "Compound Consonants", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { title: "Vowel Indication", video: "https://www.w3schools.com/html/movie.mp4" },
  { title: "The Halving Principle (Section 1)", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { title: "The Halving Principle (Section 2)", video: "https://www.w3schools.com/html/movie.mp4" },
  { title: "The Doubling Principle", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { title: "Diphonic or Two-Vowel Signs", video: "https://www.w3schools.com/html/movie.mp4" },
  { title: "Medial Semicircle", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { title: "Prefixes", video: "https://www.w3schools.com/html/movie.mp4" },
  { title: "Negative Words", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { title: "Suffixes and Terminations", video: "https://www.w3schools.com/html/movie.mp4" },
  { title: "Contractions", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { title: "Figures, etc.", video: "https://www.w3schools.com/html/movie.mp4" },
  { title: "Proper Names", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { title: "Note-Taking, Transcription, etc.", video: "https://www.w3schools.com/html/movie.mp4" },
  { title: "Essential Vowels", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { title: "Special Contractions", video: "https://www.w3schools.com/html/movie.mp4" },
  { title: "Advanced Phraseography", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { title: "Intersections", video: "https://www.w3schools.com/html/movie.mp4" },
  { title: "Business Phrases", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { title: "Political Phrases", video: "https://www.w3schools.com/html/movie.mp4" },
  { title: "Banking and Stockbroking Phrases", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { title: "Insurance and Shipping Phrases", video: "https://www.w3schools.com/html/movie.mp4" },
  { title: "Technical and Railway Phrases", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { title: "Legal Phrases", video: "https://www.w3schools.com/html/movie.mp4" },
  { title: "Theological Phrases", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { title: "Special List of Words", video: "https://www.w3schools.com/html/movie.mp4" },
  { title: "Shorthand in Practice", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { title: "Outlines for the Names of Some Chief Cities and Towns", video: "https://www.w3schools.com/html/movie.mp4" },
  { title: "Grammalogues Arranged Alphabetically", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { title: "Grammalogues Arranged Phonetically", video: "https://www.w3schools.com/html/movie.mp4" },
  { title: "Special List of Contractions", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { title: "Index", video: "https://www.w3schools.com/html/movie.mp4" },
];



export default function EnglishIndexPage() {
  const [activeVideo, setActiveVideo] = useState(chapters[0].video); // default video
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleChapterClick = (video) => {
    setActiveVideo(video);
    setIsMenuOpen(false); // collapse menu after selecting
  };

  return (
 <>
     <div className="w-full h-[20px]">

    </div>
     <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      {isMenuOpen && (
        <div className="w-64 bg-white shadow-lg flex-shrink-0">
          <div className="p-4 border-b">
            <h2 className="text-lg font-bold">Chapters</h2>
          </div>
          <ul className="p-4 space-y-2 overflow-y-auto h-[calc(100%-60px)]">
            {chapters.map((chapter, index) => (
              <li key={index}>
                <button
                  onClick={() => handleChapterClick(chapter.video)}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-blue-100"
                >
                  {index + 1}. {chapter.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top bar */}
        <div className="p-3 bg-white shadow-md flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md hover:bg-gray-200"
          >
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="ml-4 text-xl font-semibold">Table of Contents</h1>
        </div>

        {/* Video player */}
        <div className="flex-1 flex items-center justify-center bg-black">
          <video
            key={activeVideo} // reload on change
            controls
            autoPlay
            className="max-h-full max-w-full"
          >
            <source src={activeVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>

    <div className="w-full h-[20px]">

    </div>
 </>


  );
}
