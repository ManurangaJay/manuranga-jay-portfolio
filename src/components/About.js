import React from "react";

const About = () => {
  const technologies = [
    "Java",
    "Java Spring Boot",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Nest.js",
    "MongoDB",
    "SQL",
    "AWS Services",
    "Serverless",
    "Blockchain",
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-200 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-500 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl">
              <img
                src="/My_Image.jpg"
                alt="Manuranga Jay"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                Hello! I'm{" "}
                <span className="font-semibold text-slate-900 dark:text-slate-200">
                  Manuranga Jay
                </span>
                , a Software Engineer and undergraduate in B. Sc. Eng. (Hons) in
                Computer Engineering. I'm passionate about creating innovative
                digital solutions that make a real impact.
              </p>

              <p>
                I work on diverse projects including full-stack development with
                experience in e-commerce platforms, AI applications, Blockchain
                applications (Decentralized applications), and ML projects. I
                also have hands-on experience in deployment and DevOps, ensuring
                that applications are not just built well but also deployed and
                maintained efficiently.
              </p>
            </div>

            <div className="mt-8">
              <p className="text-slate-700 dark:text-slate-300 font-medium mb-4">
                Here are a few technologies I've been working with recently:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {technologies.map((tech, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
                    <span className="text-slate-600 dark:text-slate-300 text-sm">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
