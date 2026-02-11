import { FaDownload } from "react-icons/fa";

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
    <section
      id="about"
      className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase">
            Get To Know Me
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-200">
            About Me
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className="relative group flex justify-center lg:justify-end pr-0 lg:pr-8">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              <div className="absolute inset-0 bg-blue-500 rounded-2xl rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-300"></div>
              <div className="absolute inset-0 bg-purple-500 rounded-2xl -rotate-6 opacity-20 group-hover:-rotate-12 transition-transform duration-300"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-700">
                <img
                  src="/My_Image.jpg"
                  alt="Manuranga Jay"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                Hello! I'm{" "}
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">
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

            <div className="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
              <p className="text-slate-900 dark:text-slate-100 font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Recent Technologies I've Worked With:
              </p>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm rounded-full shadow-sm border border-slate-100 dark:border-slate-600 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-800 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="/Manuranga_Jayawardhana - Resume.pdf"
              download="Manuranga_Jayawardhana_Resume.pdf"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <FaDownload />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
