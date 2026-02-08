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
          color: "text-slate-900 dark:text-slate-100",
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
          color: "text-slate-900 dark:text-slate-100",
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
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase">
            Expertise
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-200">
            My Skills & Technologies
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="flex flex-col space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 border-l-4 border-blue-500 pl-4">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm hover:shadow-md border border-slate-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 flex flex-col items-center justify-center gap-3 hover:-translate-y-1"
                  >
                    <div
                      className={`${skill.color} text-3xl p-3 rounded-lg bg-slate-50 dark:bg-slate-700/50 group-hover:bg-white dark:group-hover:bg-slate-800 transition-colors duration-300`}
                    >
                      <skill.icon />
                    </div>
                    <span className="text-slate-600 dark:text-slate-300 font-medium text-sm text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
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
