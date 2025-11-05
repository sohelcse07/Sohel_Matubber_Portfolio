import { motion } from "framer-motion";
import { FaPython, FaJs, FaGitAlt, FaReact } from "react-icons/fa";
import { SiPandas, SiNumpy, SiScikitlearn, SiTensorflow , SiOpenai, SiPostgresql, SiMongodb, SiApacheairflow, SiAstro, SiGithubactions, SiJupyter, SiPowerbi } from "react-icons/si";
import { TbBrandPython } from "react-icons/tb";
import { SiCplusplus } from "react-icons/si";


const Tech = () => {
  const skillCategories = [
    {
      name: "Programming Languages",
      icon: <TbBrandPython className="text-4xl" />,
      skills: [
        { name: "Python", level: "Advanced", icon: <FaPython />, 
          details: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Django"] },
           { name: "C++", level: "Intermediate", icon: <SiCplusplus />, 
          details: ["OOP", "STL", "Data Structures", "Problem Solving"] },
        { name: "JavaScript", level: "Advanced", icon: <FaJs />, 
          details: ["React", "ES6+", "DOM Manipulation"] }
      ]
    },
    {
      name: "Machine Learning & AI",
      icon: <SiScikitlearn className="text-4xl" />,
      skills: [
        { name: "Scikit-learn", details: ["K-Means", "PCA", "Regression", "Classification"] },
        { name: "Hugging Face", details: ["BERT", "Transformers", "Fine-tuning"] }
      ]
    },
    {
      name: "Data Analysis & Visualization",
      icon: <SiPandas className="text-4xl" />,
      skills: [
        { name: "Pandas & NumPy", details: ["Data wrangling", "Feature engineering"] },
        { name: "Matplotlib & Seaborn", details: ["Statistical visualization"] },
        { name: "Power BI", details: ["Dashboards", "Business reporting"] }
      ]
    },
    {
      name: "Databases",
      icon: <SiPostgresql className="text-4xl" />,
      skills: [
        { name: "SQL", details: ["PostgreSQL", "MySQL"] },
        { name: "NoSQL", details: ["MongoDB"] }
      ]
    },
    {
      name: "Frontend Development",
      icon: <FaReact className="text-4xl" />,
      skills: [
        { name: "React", details: ["Component-based UI", "State Management", "Hooks"] },
        { name: "JavaScript", details: ["ES6+", "DOM Manipulation", "API Integration"] },
        { name: "HTML & CSS", details: ["Responsive Design", "Tailwind CSS", "Animations"] }
      ]
    },
    {
      name: "Other Tools",
      icon: <FaGitAlt className="text-4xl" />,
      skills: [
        { name: "Excel/Google Sheets", details: ["Quick analysis", "Reporting"] },
        { name: "Git & GitHub", details: ["Version control", "Collaboration"] },
        { name: "Jupyter Notebooks", details: ["Interactive analysis"] }
      ]
    }
  ];

  return (
    <section id="tech" className="w-full min-h-screen py-20 px-4 sm:px-8 bg-gradient-to-br from-gray-900 to-gray-800">
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
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-800 rounded-xl p-6 shadow-xl hover:shadow-green-500/20 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gray-700 rounded-lg text-green-400">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{category.name}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-700 rounded-md text-green-400 group-hover:bg-green-400 group-hover:text-white transition-colors">
                        {skill.icon || <SiJupyter />}
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white">{skill.name}</h4>
                        {skill.level && (
                          <span className="text-xs text-gray-400">{skill.level}</span>
                        )}
                      </div>
                    </div>
                    {skill.details && (
                      <div className="mt-2 pl-11">
                        <div className="flex flex-wrap gap-2">
                          {skill.details.map((detail, detailIndex) => (
                            <span
                              key={detailIndex}
                              className="px-2 py-1 bg-gray-700 text-green-400 text-xs rounded-full"
                            >
                              {detail}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;