import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import cls from "../assets/cls1.png";
import hinditp from "../assets/hinditp.png";
import englishtp from "../assets/englishtp.png";
import hindish from "../assets/hindish.png";

export default function PopularCourses() {
  const courses = [
    { id: 1, img: cls },
    { id: 2, img: hindish },
    { id: 3, img: englishtp },
    { id: 4, img: hinditp },
  ];

  const [current, setCurrent] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);

  // Update slidesToShow based on window width (responsive)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setSlidesToShow(4);
      else if (window.innerWidth >= 640) setSlidesToShow(2);
      else setSlidesToShow(1);
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % courses.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + courses.length) % courses.length);
  };

  // Calculate translate percentage based on slidesToShow
  const translatePercentage = (current * 100) / slidesToShow;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Popular Courses
        <div className="w-20 h-1 bg-yellow-400 mt-1"></div>
      </h2>

      {/* Slider Container */}
      <div className="relative">
        {/* Slider */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${translatePercentage}%)` }}
          >
            {courses.map((course) => (
              <div
                key={course.id}
                className={`p-2 ${
                  slidesToShow === 1
                    ? "min-w-full"
                    : slidesToShow === 2
                    ? "min-w-1/2"
                    : "min-w-1/4"
                }`}
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src={course.img}
                    alt={`course-${course.id}`}
                    className="w-full h-40 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 -translate-y-1/2 bg-white border rounded-full p-2 shadow-md hover:bg-gray-100"
        >
          <FaChevronLeft />
        </button>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 -translate-y-1/2 bg-white border rounded-full p-2 shadow-md hover:bg-gray-100"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Explore Button */}
      <div className="flex justify-end mt-6">
        <Link
          to="courses"
          className="bg-indigo-50 text-indigo-700 px-6 py-2 rounded-lg shadow hover:bg-indigo-100"
        >
          Explore Courses
        </Link>
      </div>
    </div>
  );
}
