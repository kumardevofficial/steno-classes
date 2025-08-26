import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import bear from "../assets/bear.jpg"
import cls from "../assets/cls1.png"
import { Link } from "react-router-dom";

export default function PopularCourses() {
  const courses = [
    {
      id: 1,
      img:cls,
    },
    {
      id: 2,
      img: cls,
    },
    {
      id: 3,
      img: cls,
    },
    {
      id: 4,
      img: cls,
    },
    {
      id: 5,
      img: cls,
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    if (current < courses.length - 1) setCurrent(current + 1);
  };

  const prevSlide = () => {
    if (current > 0) setCurrent(current - 1);
  };

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
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {courses.map((course) => (
              <div
                key={course.id}
                className="min-w-full sm:min-w-[50%] lg:min-w-[25%] p-2"
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
        <Link to="courses" className="bg-indigo-50 text-indigo-700 px-6 py-2 rounded-lg shadow hover:bg-indigo-100">
          Explore Courses
        </Link>
      </div>
      
    </div>
  );
}
