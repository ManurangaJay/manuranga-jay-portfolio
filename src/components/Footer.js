import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";

const Footer = () => {
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
    <footer className="bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-200 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-slate-500 dark:text-slate-400 ${social.color} transition-colors duration-300 transform hover:scale-110`}
                aria-label={social.name}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>

          {/* Credit */}
          <div className="flex items-center space-x-2 text-slate-500 dark:text-slate-400">
            <span>Designed & Built by</span>
            <span className="font-semibold text-slate-700 dark:text-slate-200">
              Manuranga Jay
            </span>
            <FaHeart className="text-red-500 animate-pulse" size={16} />
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-8 pt-8 border-t border-slate-300 dark:border-slate-700">
          <div className="text-center text-slate-500 dark:text-slate-500 text-sm">
            <p>&copy; 2025 Manuranga Jay. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
