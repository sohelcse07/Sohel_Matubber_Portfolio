import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdSchool } from "react-icons/md";

const Education = () => {
  // Define education data
  const educationData = [
    {
      date: "2015 - 2017",
      title: "SSC",
      institution: "United Islamia Govt High School, Madaripur",
    },
    {
      date: "2017 - 2019",
      title: "HSC",
      institution: "Madaripur Govt College, Madaripur ",
    },
    {
      date: "2020 - 2023",
      title: "BSC In CSE",
      institution: "Faridpur Engineering College (Affiliated to Dhaka University)",
    },
  ];

  return (
    <div className="flex justify-center items-center">
    <div className="edu w-[80%] max-[400px]:w-full h-full flex flex-col justify-center items-center bg-[#1D293A] text-white" id="education">
      <h2 className="text-3xl text-[#00CF5D] mb-4">Education</h2>
      <hr className="w-24 h-1 border-t border-gray-300 mb-8"></hr>
      <VerticalTimeline>
        {/* Map over educationData array */}
        {educationData.map((item, index) => (
          <VerticalTimelineElement
            key={index} // Use index as key (ideally should use unique ID)
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#138781", color: "white" }}
            contentArrowStyle={{ borderRight: "7px solid gray" }}
            date={item.date}
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="text-2xl">{item.title}</h3>
            <h4 className="font-mono">{item.institution}</h4>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
    </div>
  );
};

export default Education;
