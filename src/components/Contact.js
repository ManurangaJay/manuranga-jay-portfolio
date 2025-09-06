import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/ManurangaJay",
      color: "hover:text-gray-800 dark:hover:text-gray-200",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://linkedin.com/in/manuranga-jayawardhana-761288229",
      color: "hover:text-blue-600",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      url: "https://twitter.com/Manu_Ranga_Jay",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-200 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-blue-500 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            My inbox is always open. Whether you have a question or just want to
            say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="space-y-8">
          {/* Email Button */}
          <div>
            <a
              href="mailto:manurangajayawardhana@email.com"
              className="inline-flex items-center space-x-3 bg-blue-500 hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <FaEnvelope size={20} />
              <span>Say Hello</span>
            </a>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">
              manurangajayawardhana.jay@email.com
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-slate-600 dark:text-slate-400 ${social.color} transition-colors duration-300 transform hover:scale-110`}
                aria-label={social.name}
              >
                <social.icon size={28} />
              </a>
            ))}
          </div>

          {/* Additional Contact Info */}
          <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6 max-w-md mx-auto">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-200 mb-2">
              Let's Connect
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              I'm always interested in new opportunities and exciting projects.
              Feel free to reach out!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
