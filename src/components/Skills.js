import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaAws,
  FaCode,
  FaLinux,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiTypescript,
  SiNextdotjs,
  SiSpring,
  SiNestjs,
  SiMysql,
  SiApachecassandra,
  SiKubernetes,
  SiGitlab,
  SiServerless,
  SiTensorflow,
  SiPytorch,
  SiPython,
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
        { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
        { name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
        { name: "React", icon: FaReact, color: "text-cyan-500" },
        {
          name: "Next.js",
          icon: SiNextdotjs,
          color: "text-gray-800 dark:text-gray-200",
        },
        { name: "Redux", icon: SiRedux, color: "text-purple-500" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Java Spring Boot", icon: SiSpring, color: "text-green-600" },
        { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
        { name: "Nest.js", icon: SiNestjs, color: "text-red-500" },
        { name: "Serverless", icon: SiServerless, color: "text-orange-500" },
        { name: "REST APIs", icon: FaNodeJs, color: "text-blue-500" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600" },
        { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
        { name: "Cassandra", icon: SiApachecassandra, color: "text-red-500" },
        { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
      ],
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
        {
          name: "GitHub",
          icon: FaGithub,
          color: "text-gray-800 dark:text-gray-200",
        },
        { name: "GitLab", icon: SiGitlab, color: "text-orange-500" },
        { name: "Docker", icon: FaDocker, color: "text-blue-500" },
        { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-600" },
        { name: "Linux", icon: FaLinux, color: "text-yellow-600" },
        { name: "AWS", icon: FaAws, color: "text-orange-500" },
        { name: "VS Code", icon: FaCode, color: "text-blue-500" },
      ],
    },
    {
      title: "AI & ML",
      skills: [
        { name: "Python", icon: SiPython, color: "text-yellow-500" },
        { name: "TensorFlow", icon: SiTensorflow, color: "text-orange-500" },
        { name: "PyTorch", icon: SiPytorch, color: "text-red-500" },
        { name: "Machine Learning", icon: SiPython, color: "text-blue-500" },
        { name: "Deep Learning", icon: SiTensorflow, color: "text-purple-500" },
        { name: "Data Mining", icon: SiPython, color: "text-green-500" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-200 mb-4">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-blue-500 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-200 mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center space-x-3 group"
                  >
                    <div
                      className={`${skill.color} group-hover:scale-110 transition-transform duration-200`}
                    >
                      <skill.icon size={24} />
                    </div>
                    <span className="text-slate-700 dark:text-slate-300 font-medium group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
