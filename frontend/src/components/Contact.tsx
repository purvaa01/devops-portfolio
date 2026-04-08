import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiFileText } from "react-icons/fi";

const links = [
  {
    label: "purvaa462@gmail.com",
    href: "mailto:purvaa462@gmail.com",
    icon: FiMail,
  },
  {
    label: "purvaa01",
    href: "https://github.com/purvaa01",
    icon: FiGithub,
  },
  {
    label: "Purva Wankhede",
    href: "https://www.linkedin.com/in/purvaw01",
    icon: FiLinkedin,
  },
  {
    label: "View Resume",
    href: "/pw_resume.pdf",
    icon: FiFileText,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <p className="text-cyan-400 font-mono text-sm mb-2">05.</p>

          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Get In Touch
          </h2>

          <p className="text-gray-400 max-w-md mx-auto">
            Feel free to reach out — I'm always open to opportunities and conversations.
          </p>
        </motion.div>

        {/* LINKS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {links.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className="group relative bg-[#0f172a]/60 backdrop-blur-md border border-gray-700 px-5 py-3 rounded-xl text-sm text-gray-300 flex items-center gap-2 transition-all duration-300 hover:border-cyan-400/40"
            >
              {/* GLOW */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none shadow-[0_0_30px_rgba(34,211,238,0.15)]" />

              <div className="relative z-10 flex items-center gap-2">
                <link.icon className="text-cyan-400 group-hover:text-cyan-300 transition" />
                {link.label}
              </div>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;