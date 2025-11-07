import React from "react";
import Typewriter from "typewriter-effect";
import MyImage from "../imgs/Me.png";
import { AiFillGithub } from "react-icons/ai";
import { FaFileDownload } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import CV_Resume from "../assets/Sohel-Matubber-Resume.pdf";

const Section = () => {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row justify-center items-center px-4 sm:px-8 md:px-16 lg:px-24 py-16 bg-gradient-to-br from-gray-900 to-gray-800 relative top-20">
      {/* Text Content */}
     <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-6 mb-12 md:mb-0">
  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
    Hi, I'm <span className="text-green-400">Sohel</span>
  </h1>

  <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-green-300">
    <Typewriter
      options={{
        strings: ["B.Sc in CSE", "Data Analyst", "Automation Enthusiast"],
        autoStart: true,
        loop: true,
      }}
    />
  </h2>

  <p className="text-lg text-gray-300 max-w-lg">
   Analytical Engineer skilled in Python and data analysis. Familiar with Power BI and automation tools, with a growing interest in building data-driven solutions that enhance efficiency and service excellence.
  </p>

        <div className="flex flex-wrap gap-4">
          <a
            href={CV_Resume}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors duration-300"
          >
            <FaFileDownload className="text-lg" />
            Download Resume
          </a>

          <a
            href="https://github.com/sohelcse07"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors duration-300"
          >
            <AiFillGithub className="text-xl" />
            GitHub Profile
          </a>
        </div>

        <a
          href="mailto:sohelmatubber4@gmail.com"
          className="flex items-center gap-2 text-lg text-gray-300 hover:text-white transition-colors duration-300"
        >
          <HiMail className="text-2xl text-green-400" />
          sohelmatubber4@gmail.com
        </a>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-green-400 p-2 shadow-lg">
          <img
            src={MyImage}
            alt="Sohel"
            className="w-full h-full rounded-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Section;