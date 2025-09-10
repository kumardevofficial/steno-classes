import CourseCard from "./CourseCard";
// import clsimg from "../../../assets/cls1.png"
import cls from "../../../assets/cls1.png";
import hinditp from "../../../assets/hinditp.png";
import englishtp from "../../../assets/englishtp.png";
import hindish from "../../../assets/hindish.png";



function Courses() {
  const courses = [
    {
      id: 1,
      title: "UPSC G.S (Prelims+Mains) Foundation Programme 2026 English Medium",
      startDate: "09 Sep 2025",
      endDate: "09 Sep 2027",
      price: 79500,
      oldPrice: 100000,
      status: "Offline",
      image:cls,
    },
    {
      id: 2,
      title: "SSC CGL 2025 Complete Course (English Medium)",
      startDate: "01 Jan 2025",
      endDate: "01 Jan 2026",
      price: 24999,
      oldPrice: 30000,
      status: "Online",
      image: hinditp,
    },
    {
      id: 3,
      title: "Banking (IBPS + SBI + RBI) Mega Batch 2025",
      startDate: "15 Feb 2025",
      endDate: "15 Feb 2026",
      price: 19999,
      oldPrice: 25000,
      status: "Online",
      image: hindish,
    },
    {
      id: 4,
      title: "Railway NTPC + Group D Crash Course 2025",
      startDate: "10 Mar 2025",
      endDate: "10 Mar 2026",
      price: 14999,
      oldPrice: 20000,
      status: "Offline",
      image: englishtp,
    },
  ];

  return (

    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
          Our Courses
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </div>

  );
}

export default Courses;
