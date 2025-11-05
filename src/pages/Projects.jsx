import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import { motion } from "framer-motion";
import WeatherImage from "../imgs/weather-clusturing.png";
import ChatAnalyticsImage from "../imgs/chatbot-analysis.png"

const projectsData = [
  {
    name: "Weather Pattern Clustering",
    imageSrc: WeatherImage, 
    liveLink: "https://github.com/sohelcse07/Weather-Analysis/blob/main/weather_analysis.ipynb", 
    githubLink: "https://github.com/sohelcse07/weather-analysis", 
    description:
      "Built a full-stack data pipeline to fetch and simulate weather data. Applied PCA and K-Means clustering to identify distinct weather patterns with actionable insights.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Open-Meteo API", "Matplotlib"],
  
  },
  {
    name: "Customer Chat Analytics",
    imageSrc: ChatAnalyticsImage, 
    liveLink: "https://github.com/sohelcse07/Chat_Bot_Data_Analysis/blob/main/chat_bot_data_analysis.ipynb", 
    githubLink: "https://github.com/sohelcse07/chatbot-data-analysis/tree/main", 
    description:
      "Analysis pipeline processing chatbot messages to track product demand and customer behavior, enabling targeted marketing strategies.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Seaborn", "Matplotlib"],
  },

];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="project"
      className="w-full min-h-screen py-20 px-4 sm:px-8 bg-gradient-to-br from-gray-900 to-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              whileHover={{ y: -10 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-green-500/20 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden group">
                <img
                  src={project.imageSrc}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-gray-200 text-sm">{project.description}</p>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.name}
                </h3>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700 text-green-400 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-700">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-green-400 transition-colors"
                  >
                    <AiFillGithub className="mr-2 text-xl" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                  >
                    <AiOutlineLink className="mr-2" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;