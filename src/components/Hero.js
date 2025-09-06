import React from "react";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-200 mb-6">
            Hi, I'm{" "}
            <span className="text-blue-500 dark:text-blue-400">Manuranga</span>
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-700 dark:text-slate-300 mb-8">
            A Software Engineer building next-generation digital solutions
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            As a lifelong learner, I bridge foundational development skills with
            emerging technologies. I actively explore applications for AI/ML and
            decentralized systems while using modern DevOps methodologies to
            deliver efficient, forward-thinking, and dependable software
            solutions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToProjects}
            className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
          >
            <span>View My Projects</span>
            <FaArrowDown className="animate-bounce" />
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <FaArrowDown
            className="text-slate-400 dark:text-slate-500"
            size={24}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
