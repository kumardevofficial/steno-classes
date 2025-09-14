import { useState, useEffect } from "react";
import JobCard from "./JobCard";
import JobFilter from "./VacancyDiv";

export default function LatestVacancy() {
  const [jobselction, setJobselection] = useState("0");

  // log whenever jobselction changes:
  useEffect(() => {
    console.log("Current selected job index/value:", jobselction);
  }, [jobselction]);

  const jobfilter = (value) => {
    // update state from child click
    setJobselection(value);
    // you can also log value directly if you want immediate feedback:
    // console.log("Clicked value:", value);
  };

  return (
    <>
      {/* Pass callback down */}
      <JobFilter jobfilter={jobfilter} />
      {/* Pass selected state down */}
      <JobCard jobselction={jobselction} />
    </>
  );
}
