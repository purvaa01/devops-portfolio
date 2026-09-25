import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";

const experiences = [
    {
        role: "DevOps Engineer",
        company: "PearlThoughts",
        duration: "Aug 2026 – Sep 2026",
        location: "Remote",
        description:
            "Worked on real-world DevOps and Cloud tasks involving CI/CD automation, containerization, Kubernetes deployments, cloud infrastructure, and troubleshooting. Gained hands-on experience supporting application deployment workflows and automating development and operations tasks.",
        responsibilities: [
            "Built and maintained CI/CD pipelines using GitHub Actions.",
            "Worked with Docker and Kubernetes for containerized application deployment.",
            "Deployed and troubleshot applications on Kubernetes, including Twenty CRM.",
            "Worked with AWS, Linux, Git/GitHub, Python, and automation workflows.",
        ],
        tech: [
            "Terraform",
            "GitHub Actions",
            "Docker",
            "Kubernetes",
            "AWS",
            "Linux",
            "Python",
            "Git",
        ],
    },

    {
        role: "DevOps Intern",
        company: "Davine Technologies",
        duration: "Jul 2026 - Sep 2026",
        location: "Remote",
        description:
            "Hands-on DevOps experience at Davine Technologies, working with AWS, Docker, Kubernetes, Jenkins, Terraform, Ansible, and Linux across CI/CD, infrastructure, deployment, monitoring, and security tasks.",
        responsibilities: [
            "Built Jenkins CI/CD pipelines integrated with GitHub for automated build, testing, Docker image creation, and registry publishing.",
            "Provisioned AWS infrastructure with Terraform and automated server configuration and application setup using Ansible.",
            "Deployed and troubleshot containerized applications on Kubernetes/K3s, working with Deployments, Services, ConfigMaps, Secrets, scaling, and rollbacks.",
            "Automated Linux administration and DevOps workflows using Bash and Python, with hands-on work in monitoring, container security scanning, and system troubleshooting."
        ],
        tech: [
            "Jenkins",
            "Docker",
            "Kubernetes",
            "Terraform",
            "Ansible",
            "Linux",
            "Bash",
            "Python",
            "GitHub",
            "Prometheus",
            "Grafana"
        ],
    },
];

const Experience = () => {
    return (
        <section id="experience" className="py-24">
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
                        Experience
                    </h2>

                    <p className="text-gray-400 max-w-md">
                        Hands-on internship experience in DevOps, Cloud, automation, and
                        application deployment.
                    </p>
                </motion.div>

                {/* EXPERIENCE CARDS */}
                <div className="grid gap-8">
                    {experiences.map((experience, i) => (
                        <motion.div
                            key={experience.company}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            className="group relative bg-[#0f172a]/60 backdrop-blur-md border border-gray-700 rounded-xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
                        >
                            {/* GLOW EFFECT */}
                            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none shadow-[0_0_40px_rgba(34,211,238,0.12)]" />

                            {/* CONTENT */}
                            <div className="relative z-10">

                                {/* TOP SECTION */}
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">

                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <FiBriefcase className="text-cyan-400" />

                                            <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition">
                                                {experience.role}
                                            </h3>
                                        </div>

                                        <p className="text-cyan-400 font-mono text-sm">
                                            {experience.company}
                                        </p>
                                    </div>

                                    {/* DETAILS */}
                                    <div className="flex flex-col gap-2 text-sm text-gray-400 md:text-right">
                                        <div className="flex items-center gap-2 md:justify-end">
                                            <FiCalendar className="text-cyan-400" />
                                            <span>{experience.duration}</span>
                                        </div>

                                        <div className="flex items-center gap-2 md:justify-end">
                                            <FiMapPin className="text-cyan-400" />
                                            <span>{experience.location}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* DESCRIPTION */}
                                <p className="text-gray-400 text-sm leading-relaxed mb-5 max-w-4xl">
                                    {experience.description}
                                </p>

                                {/* RESPONSIBILITIES */}
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-gray-200 mb-3">
                                        Key Contributions
                                    </h4>

                                    <ul className="space-y-2">
                                        {experience.responsibilities.map((item, index) => (
                                            <li
                                                key={index}
                                                className="flex items-start gap-3 text-sm text-gray-400"
                                            >
                                                <span className="text-cyan-400 mt-1">▹</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* TECH STACK */}
                                <div className="flex flex-wrap gap-2">
                                    {experience.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs font-mono px-2.5 py-1 rounded-md bg-gray-800 text-cyan-400 border border-gray-700 group-hover:border-cyan-400/30 transition"
                                        >
                      {tech}
                    </span>
                                    ))}
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Experience;