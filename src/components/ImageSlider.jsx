import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import shorthandBook from "../assets/Miller.png";
import courseEnglish from "../assets/courseEnglish.png";
import hindicourse from "../assets/hindicourse.png";

export default function Slider() {
  const images = [shorthandBook, courseEnglish, hindicourse];
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Images */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className="w-full flex-shrink-0 h-[250px] sm:h-[350px] md:h-[500px] object-cover"
          />
        ))}
      </div>

      {/* Left & Right Buttons */}
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button
          onClick={prevSlide}
          className="bg-white text-gray-700 p-3 rounded-full shadow-md hover:bg-gray-200"
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="bg-white text-gray-700 p-3 rounded-full shadow-md hover:bg-gray-200"
        >
          <FaChevronRight size={20} />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              current === index ? "bg-blue-600" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
