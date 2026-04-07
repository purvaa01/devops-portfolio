import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
}

const ProjectCard = ({ title, description, tech, github, demo }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group relative bg-[#0f172a]/60 backdrop-blur-md border border-gray-700 rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40"
    >
      {/* GLOW EFFECT */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none shadow-[0_0_40px_rgba(34,211,238,0.15)]" />

      {/* CONTENT */}
      <div className="relative z-10">

        {/* Title */}
        <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-cyan-300 transition">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs font-mono px-2.5 py-1 rounded-md bg-gray-800 text-cyan-400 border border-gray-700 group-hover:border-cyan-400/30 transition"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-sm text-gray-400 hover:text-cyan-400 transition"
            >
              <FiGithub /> GitHub
            </a>
          )}

          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-sm text-gray-400 hover:text-cyan-400 transition"
            >
              <FiExternalLink /> Live
            </a>
          )}
        </div>

      </div>
    </motion.div>
  );
};

export default ProjectCard;