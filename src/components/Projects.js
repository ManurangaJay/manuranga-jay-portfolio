import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Bidflare - Online Bidding Platform",
      description:
        "An online bidding platform for selling new arts, handmade items, and other products via online auctions. Features secure bidding, real-time updates, and comprehensive auction management.",
      image: "/Bidflare.png",
      techStack: [
        "Java",
        "Spring Boot",
        "TypeScript",
        "Next.js",
        "Redux",
        "PostgreSQL",
        "Spring Security",
        "JWT",
        "AWS Services",
        "REST API",
        "Tailwind CSS",
      ],
      liveUrl: null,
      backendUrl: "https://github.com/ManurangaJay/bidflare-backend",
      frontendUrl: "https://github.com/ManurangaJay/bidflare-frontend",
    },
    {
      id: 2,
      title: "Student Log - Management System",
      description:
        "Built a full-stack student management system with CRUD functionality and responsive interface. Improved data management and user experience using modern web technologies.",
      image: "/student_log.png",
      techStack: [
        "Java Spring Boot",
        "React.js",
        "MySQL",
        "Postman",
        "GitHub",
        "Full Stack",
      ],
      liveUrl: null,
      githubUrl: "https://github.com/ManurangaJay/Student-Log",
    },
    {
      id: 3,
      title: "Automated Image Captioning System",
      description:
        "Developed and evaluated two deep-learning models (VGG16-LSTM and ResNet50-Transformer) for generating captions from images. Trained on 8,091 images with human-generated captions, achieving superior performance with VGG16-LSTM architecture.",
      image: "/image_caption_generator.png",
      techStack: [
        "Python",
        "Deep Learning",
        "VGG16",
        "LSTM",
        "ResNet50",
        "Transformer",
        "TensorFlow",
        "PyTorch",
        "Computer Vision",
      ],
      liveUrl: null,
      githubUrl: "https://github.com/ManurangaJay/Image-Caption-Generator",
    },
    {
      id: 4,
      title: "JobHub - Job Listings API",
      description:
        "Built a REST API for job listings, companies, and reviews with Docker and PostgreSQL. Gained experience in microservices architecture with ongoing frontend integration.",
      image: "/Jobhub.png",
      techStack: [
        "Spring Boot",
        "Spring Boot MVC",
        "JPA",
        "H2",
        "PostgreSQL",
        "Docker",
        "Spring Boot Actuator",
      ],
      liveUrl: null,
      githubUrl: "#",
    },
    {
      id: 5,
      title: "CinemaSphere - Movie Review App",
      description:
        "Built a movie review app with decoupled architecture for scalable client-server interaction. Gained experience in full-stack development with modern technologies.",
      image: "/CinemaSphere.png",
      techStack: [
        "MongoDB",
        "Java",
        "Spring Boot",
        "React",
        "Bootstrap",
        "Postman",
        "Full Stack",
      ],
      liveUrl: null,
      githubUrl: "https://github.com/ManurangaJay/CinemaSphere",
    },
    {
      id: 6,
      title: "University Exam Hall Booking System",
      description:
        "Developed an Exam Hall Booking System with user management and Outlook integration. Contributed to frontend development using React.js and .NET integration.",
      image: "/Exam_Hall_Booking_System.png",
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Web API",
        "Bootstrap",
        "Jira",
        "Postman",
        "GitHub",
        "Figma",
      ],
      liveUrl: null,
      githubUrl: "https://github.com/ManurangaJay/ExamHallBookingSystem",
    },
    {
      id: 7,
      title: "Decentralized Vehicle History System",
      description:
        "Final Year Research Project: Developing a blockchain-based system for secure, tamper-proof vehicle history tracking, ensuring data immutability, traceability, and fraud prevention in the vehicle market.",
      image: "/Vehicle_History_System.png",
      techStack: [
        "Blockchain",
        "Ethereum",
        "Smart Contracts",
        "Node.js",
        "React",
        "Web3.js",
      ],
      liveUrl: null,
      githubUrl: "https://github.com/ManurangaJay/Vehicle-History-Dapp",
    },
  ];

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
              className="bg-white dark:bg-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-200 mb-3">
                  {project.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="flex items-center space-x-2 text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors font-medium"
                    >
                      <FaExternalLinkAlt size={16} />
                      <span>Live Demo</span>
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
                        <span>Backend</span>
                      </a>
                      <a
                        href={project.frontendUrl}
                        className="flex items-center space-x-2 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors font-medium"
                      >
                        <FaGithub size={16} />
                        <span>Frontend</span>
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
                        <span>GitHub</span>
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
