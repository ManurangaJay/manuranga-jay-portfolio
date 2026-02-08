import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      type: "experience",
      title: "Software Engineer Intern",
      company: "Sayanu (Pvt) Ltd.",
      period: "6 months",
      icon: FaBriefcase,
      achievements: [
        "Full-stack development of e-commerce platforms using modern web technologies.",
        "Implemented serverless architecture using AWS Lambda and Serverless Framework.",
        "Developed applications using Node.js, Next.js, and AWS Amplify for seamless deployment.",
        "Managed PostgreSQL databases and integrated AWS services including S3 and CloudWatch.",
        "Implemented security mechanisms using JWT for authentication and authorization.",
        "Deployed applications on AWS Lambda and AWS Amplify platforms.",
      ],
    },
    {
      type: "education",
      title: "B. Sc. Eng. (Hons) in Computer Engineering",
      company: "University of Jaffna, Sri Lanka",
      period: "2021 - 2025",
      icon: FaGraduationCap,
      achievements: [
        "Relevant Coursework: Data Structures, Algorithms, Database Systems, Software Engineering, Computer Networks, Network Security, Machine Learning, Deep Learning, Artificial Intelligence, Data Mining, Computer Vision, Natural Language Processing",
        "Member of Computer Engineering Society (CES) at University of Jaffna",
        "Executive member of Engineering Student Union",
        "Active member of University Cricket Team",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase">
            Career Path
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-200">
            Education & Experience
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 sm:pl-0 py-8 group">
              {/* Timeline Connector */}
              {index < experiences.length - 1 && (
                <div className="hidden sm:block absolute left-1/2 top-24 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700 -translate-x-1/2 group-hover:bg-blue-500/30 transition-colors duration-300"></div>
              )}
              {/* Mobile Timeline Connector */}
              {index < experiences.length - 1 && (
                <div className="sm:hidden absolute left-4 top-24 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700 group-hover:bg-blue-500/30 transition-colors duration-300"></div>
              )}

              <div className={`flex flex-col sm:flex-row items-center gap-8 ${index % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
                
                {/* Content Card */}
                <div className="flex-1 w-full">
                  <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 hover:border-blue-500/20 group-hover:-translate-y-1">
                    <div className="flex flex-col gap-2 mb-4">
                      <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wide text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-full w-fit">
                        {exp.period}
                      </span>
                      <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                        {exp.title}
                      </h3>
                      <p className="text-lg font-medium text-slate-600 dark:text-slate-400">
                        {exp.company}
                      </p>
                    </div>

                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li
                          key={achievementIndex}
                          className="flex items-start gap-3"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                          <span className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline Icon */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white dark:bg-slate-900 border-4 border-white dark:border-slate-800 shadow-xl flex items-center justify-center z-10">
                   <div className={`w-full h-full rounded-full flex items-center justify-center text-white ${exp.type === 'experience' ? 'bg-blue-500' : 'bg-purple-500'}`}>
                      <exp.icon size={20} />
                   </div>
                </div>

                {/* Spacer for the other side */}
                <div className="flex-1 w-full hidden sm:block"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
