import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";
import { projects } from "../data/projects";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset"; // Restore scrolling
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-200 mb-4">
            Things I've Built
          </h2>
          <div className="w-24 h-1 bg-blue-500 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group flex flex-col h-full"
            >
              <div className="relative overflow-hidden shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-200 mb-3">
                  {project.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed line-clamp-3 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.slice(0, 5).map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 5 && (
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm rounded-full font-medium">
                      +{project.techStack.length - 5} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex space-x-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="flex items-center space-x-2 text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors font-medium"
                      >
                        <FaExternalLinkAlt size={16} />
                        <span className="hidden sm:inline">Live Demo</span>
                      </a>
                    )}

                    {/* Show separate Backend and Frontend links if both exist */}
                    {project.backendUrl && project.frontendUrl ? (
                      <>
                        <a
                          href={project.backendUrl}
                          className="flex items-center space-x-2 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors font-medium"
                        >
                          <FaGithub size={16} />
                          <span className="hidden sm:inline">Backend</span>
                        </a>
                        <a
                          href={project.frontendUrl}
                          className="flex items-center space-x-2 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors font-medium"
                        >
                          <FaGithub size={16} />
                          <span className="hidden sm:inline">Frontend</span>
                        </a>
                      </>
                    ) : (
                      /* Show single GitHub link if only one exists */
                      (project.githubUrl ||
                        project.backendUrl ||
                        project.frontendUrl) && (
                        <a
                          href={
                            project.githubUrl ||
                            project.backendUrl ||
                            project.frontendUrl
                          }
                          className="flex items-center space-x-2 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors font-medium"
                        >
                          <FaGithub size={16} />
                          <span className="hidden sm:inline">GitHub</span>
                        </a>
                      )
                    )}
                  </div>
                  <button
                    onClick={() => openModal(project)}
                    className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors focus:outline-none"
                  >
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 backdrop-blur-sm transition-opacity duration-300">
          <div
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100"
            role="dialog"
            aria-modal="true"
          >
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 sm:h-80 object-cover"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-colors focus:outline-none"
                aria-label="Close modal"
              >
                <FaTimes size={20} />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                {selectedProject.title}
              </h3>

              <div className="space-y-4 text-slate-600 dark:text-slate-300 mb-8">
                <p className="text-lg">{selectedProject.description}</p>
                {selectedProject.details && (
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-200 mb-2">
                      Key Features:
                    </h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {selectedProject.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-200 mb-3">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                  >
                    <FaExternalLinkAlt size={16} />
                    <span>Live Demo</span>
                  </a>
                )}

                {selectedProject.backendUrl && selectedProject.frontendUrl ? (
                  <>
                    <a
                      href={selectedProject.backendUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-slate-800 dark:bg-slate-700 hover:bg-slate-900 dark:hover:bg-slate-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                    >
                      <FaGithub size={20} />
                      <span>Backend Code</span>
                    </a>
                    <a
                      href={selectedProject.frontendUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-slate-800 dark:bg-slate-700 hover:bg-slate-900 dark:hover:bg-slate-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                    >
                      <FaGithub size={20} />
                      <span>Frontend Code</span>
                    </a>
                  </>
                ) : (
                  (selectedProject.githubUrl ||
                    selectedProject.backendUrl ||
                    selectedProject.frontendUrl) && (
                    <a
                      href={
                        selectedProject.githubUrl ||
                        selectedProject.backendUrl ||
                        selectedProject.frontendUrl
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-slate-800 dark:bg-slate-700 hover:bg-slate-900 dark:hover:bg-slate-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                    >
                      <FaGithub size={20} />
                      <span>View Code</span>
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
