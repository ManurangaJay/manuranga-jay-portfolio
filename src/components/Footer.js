import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 py-8 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm font-medium">
            &copy; {new Date().getFullYear()} <span className="text-slate-900 dark:text-slate-200">Manuranga Jay</span>. All rights reserved.
          </div>

          <div className="flex items-center space-x-2 text-sm">
            <span>Designed & Built with</span>
            <FaHeart className="text-red-500 animate-pulse" size={12} />
            <span>by Manuranga Jay</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
