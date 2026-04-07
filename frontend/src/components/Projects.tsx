import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "DeploySafe",
    description:
      "A production-grade CI/CD pipeline with automated Docker builds, Kubernetes deployments, and real-time monitoring. Features blue-green deployment strategies, automated rollbacks via health checks, and a Grafana dashboard for infrastructure observability across staging and production environments.",
    tech: ["Docker", "Kubernetes", "Jenkins", "AWS", "Prometheus", "Grafana"],
    github: "https://github.com/purvaa01/DeploySafe-app",
  },
  {
    title: "DevOps Portfolio",
    description:
      "This very portfolio — a modern, responsive website built with React and Tailwind CSS, deployed via GitHub Actions to AWS with Terraform-managed infrastructure. Showcases clean component architecture, smooth animations, and a fully automated CI/CD pipeline from commit to production.",
    tech: ["React", "Tailwind", "Terraform", "AWS", "GitHub Actions"],
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      {/* SAME WIDTH AS OTHER SECTIONS */}
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <p className="text-cyan-400 font-mono text-sm mb-2">02.</p>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            Projects
          </h2>

          <p className="text-gray-400 max-w-md">
            Hands-on projects showcasing DevOps practices, cloud infrastructure, and automation.
          </p>
        </motion.div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <ProjectCard {...p} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;