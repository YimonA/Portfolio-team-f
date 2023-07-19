import React from "react";
import Education from "../Components/Education";
import Experience from "../Components/Experience";

const Resume = () => {
  return (
    <div className="container px-5 md:px-12 2xl:px-48 mx-auto flex flex-col lg:flex-row lg:justify-center lg:items-center lg:h-screen my-40 lg:my-0">
      <div className=" w-full lg:w-1/2">
        <Education />
      </div>
      <div className="w-full lg:w-1/2 mt-16 lg:mt-0">
        <Experience />
      </div>
    </div>
  );
};

export default Resume;
