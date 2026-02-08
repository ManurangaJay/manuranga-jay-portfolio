import { FaLinkedin, FaGithub, FaTwitter, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/ManurangaJay",
      color: "hover:text-slate-900 dark:hover:text-white",
      bg: "hover:bg-slate-200 dark:hover:bg-slate-700",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://linkedin.com/in/manuranga-jayawardhana-761288229",
      color: "hover:text-blue-600",
      bg: "hover:bg-blue-50 dark:hover:bg-blue-900/30",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      url: "https://twitter.com/Manu_Ranga_Jay",
      color: "hover:text-blue-400",
      bg: "hover:bg-blue-50 dark:hover:bg-blue-900/30",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase">
            Contact
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-200">
            Get In Touch
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full"></div>
          <p className="mt-8 text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            My inbox is always open. Whether you have a question, a project idea, or just want to
            say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="space-y-12">
          {/* Email Button */}
          <div className="relative group inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <a
              href="mailto:manurangajayawardhana@email.com"
              className="relative flex items-center gap-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-8 py-5 rounded-xl text-lg font-bold leading-none shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 group-hover:shadow-2xl border border-slate-100 dark:border-slate-700"
            >
              <FaPaperPlane className="text-blue-500 group-hover:rotate-12 transition-transform duration-300" />
              <span>Say Hello</span>
            </a>
          </div>
          
          <p className="text-slate-500 dark:text-slate-400 font-medium">
            manurangajayawardhana.jay@email.com
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 bg-white dark:bg-slate-800 rounded-full shadow-md text-slate-500 dark:text-slate-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg ${social.color} ${social.bg}`}
                aria-label={social.name}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>

          {/* Footer Note */}
          <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
             <p className="text-slate-600 dark:text-slate-300 text-sm">
              I'm always interested in new opportunities and exciting projects.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
