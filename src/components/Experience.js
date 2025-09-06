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
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-200 mb-4">
            My Journey
          </h2>
          <div className="w-24 h-1 bg-blue-500 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-full bg-slate-200 dark:bg-slate-700"></div>
              )}

              <div className="flex items-start space-x-6">
                {/* Icon */}
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                    exp.type === "experience"
                      ? "bg-blue-500 dark:bg-blue-400"
                      : "bg-green-500 dark:bg-green-400"
                  }`}
                >
                  <exp.icon className="text-white" size={20} />
                </div>

                {/* Content */}
                <div className="flex-1 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-200">
                        {exp.title}
                      </h3>
                      <p className="text-blue-500 dark:text-blue-400 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-2 sm:mt-0">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li
                        key={achievementIndex}
                        className="flex items-start space-x-2"
                      >
                        <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
