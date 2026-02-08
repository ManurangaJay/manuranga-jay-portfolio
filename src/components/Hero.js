import React from "react";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-purple-300 dark:bg-purple-900/30 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-[10%] -right-[10%] w-[40%] h-[40%] bg-blue-300 dark:bg-blue-900/30 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-[10%] left-[20%] w-[40%] h-[40%] bg-indigo-300 dark:bg-indigo-900/30 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="mb-10 space-y-6">
          <h2 className="text-lg sm:text-xl font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            Welcome to my portfolio
          </h2>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">
              Manuranga
            </span>
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-700 dark:text-slate-300 mb-8">
            Building Logic into{" "}
            <span className="text-slate-900 dark:text-slate-100 decoration-blue-500/30 underline decoration-4 underline-offset-4">
              Digital Reality
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A Software Engineer leveraging modern technologies to build scalable,
            user-centric solutions. From full-stack applications to AI/ML
            integrations, I turn complex problems into elegant code.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
          <button
            onClick={scrollToProjects}
            className="group relative px-8 py-4 bg-blue-600 text-white text-lg font-bold rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-blue-500/25 hover:-translate-y-1 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <FaArrowDown className="group-hover:translate-y-1 transition-transform" />
            </span>
          </button>
          
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                 const offset = 80;
                 const bodyRect = document.body.getBoundingClientRect().top;
                 const elementRect = contactSection.getBoundingClientRect().top;
                 const elementPosition = elementRect - bodyRect;
                 const offsetPosition = elementPosition - offset;
                 window.scrollTo({ top: offsetPosition, behavior: "smooth" });
              }
            }}
            className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-lg font-bold rounded-full shadow-lg border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 hover:-translate-y-1"
          >
            Contact Me
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        </div>
      </div>
    </section>
  );
};

export default Hero;
