import MyImage from "../imgs/Me.png";

const About = () => {
  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-12 mt-10"
      id="about"
    >
      <h2 className="text-3xl md:text-4xl text-[#00CF5D] font-bold text-center mb-4">
        About
      </h2>
      <div className="w-28 md:w-64 border-t-2 border-gray-300 mb-8"></div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full max-w-5xl">
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src={MyImage}
            alt="My Profile"
            className="w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full object-contain border-4 border-[#00CF5D] shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="text-center lg:text-left max-w-2xl">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
           Sohel Matubber
          </h1>
          <h2 className="text-xl md:text-2xl text-[#00CF5D] mt-2 mb-4">
            B.Sc in CSE
          </h2>
          <p className="text-white text-sm md:text-lg leading-relaxed">
            Hello! I’m a passionate Computer Science Engineer with a strong interest in data analysis, automation, and AI. I love solving real-world problems using data-driven insights and building smart systems that enhance efficiency and innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
