import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";
import { projects } from "../data/projects";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
    document.body.style.paddingRight = "8px"; // Compensate for scrollbar
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset"; // Restore scrolling
    document.body.style.paddingRight = "0px";
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-200">
            Featured Projects
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-slate-700/50 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
            >
              <div
                className="relative overflow-hidden shrink-0 cursor-pointer"
                onClick={() => openModal(project)}
              >
                <div className="aspect-video w-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <span className="text-white font-medium px-4 py-2 bg-blue-600/90 rounded-full backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Details
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex space-x-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-blue-500 transition-colors"
                        title="Live Demo"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt size={18} />
                      </a>
                    )}
                    {(project.githubUrl ||
                      project.backendUrl ||
                      project.frontendUrl) && (
                      <a
                        href={
                          project.githubUrl ||
                          project.backendUrl ||
                          project.frontendUrl
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                        title="View Code"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed line-clamp-3 text-sm flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded-full font-medium border border-slate-200 dark:border-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-3 py-1 bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs rounded-full font-medium border border-slate-200 dark:border-slate-600">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          onClick={closeModal}
        >
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity" />
          
          <div
            className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-modal-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header/Image */}
            <div className="relative h-48 sm:h-64 md:h-80 shrink-0">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors backdrop-blur-md"
              >
                <FaTimes size={20} />
              </button>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl sm:text-4xl font-bold text-white mb-2">
                  {selectedProject.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/20 hover:bg-white/30 text-white text-sm rounded-full backdrop-blur-md border border-white/10 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                      Overview
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                      {selectedProject.description}
                    </p>
                  </div>

                  {selectedProject.details && (
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                        Key Features
                      </h4>
                      <ul className="grid grid-cols-1 gap-3">
                        {selectedProject.details.map((detail, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 text-slate-600 dark:text-slate-300"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="lg:col-span-1 space-y-6">
                  <div className="p-6 bg-slate-50 dark:bg-slate-700/50 rounded-xl border border-slate-100 dark:border-slate-600">
                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                      Project Links
                    </h4>
                    <div className="flex flex-col gap-3">
                      {selectedProject.liveUrl && (
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-lg shadow-blue-500/20"
                        >
                          <FaExternalLinkAlt size={16} />
                          Live Demo
                        </a>
                      )}
                      
                      {selectedProject.frontendUrl && (
                        <a
                          href={selectedProject.frontendUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full py-3 bg-slate-800 hover:bg-slate-900 dark:bg-slate-600 dark:hover:bg-slate-500 text-white rounded-lg font-medium transition-colors"
                        >
                          <FaGithub size={18} />
                          Frontend Code
                        </a>
                      )}

                      {selectedProject.backendUrl && (
                        <a
                          href={selectedProject.backendUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full py-3 bg-slate-800 hover:bg-slate-900 dark:bg-slate-600 dark:hover:bg-slate-500 text-white rounded-lg font-medium transition-colors"
                        >
                          <FaGithub size={18} />
                          Backend Code
                        </a>
                      )}

                      {!selectedProject.backendUrl && !selectedProject.frontendUrl && selectedProject.githubUrl && (
                         <a
                         href={selectedProject.githubUrl}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="flex items-center justify-center gap-2 w-full py-3 bg-slate-800 hover:bg-slate-900 dark:bg-slate-600 dark:hover:bg-slate-500 text-white rounded-lg font-medium transition-colors"
                       >
                         <FaGithub size={18} />
                         View Code
                       </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
