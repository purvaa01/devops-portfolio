import { motion } from "framer-motion";
import {
  SiDocker, SiKubernetes, SiJenkins, SiGithubactions,
  SiTerraform, SiPython, SiGnubash,
  SiPrometheus, SiGrafana, SiGit, SiGithub,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const categories = [
  {
    title: "DevOps Tools",
    skills: [
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Jenkins", icon: SiJenkins },
      { name: "GitHub Actions", icon: SiGithubactions },
    ],
  },
  {
    title: "Cloud & IaC",
    skills: [
      { name: "AWS", icon: FaAws },
      { name: "Terraform", icon: SiTerraform },
    ],
  },
  {
    title: "Programming",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "Bash", icon: SiGnubash },
    ],
  },
  {
    title: "Monitoring",
    skills: [
      { name: "Prometheus", icon: SiPrometheus },
      { name: "Grafana", icon: SiGrafana },
    ],
  },
  {
    title: "Version Control",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <p className="text-cyan-400 font-mono text-sm mb-2">03.</p>

          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Skills
          </h2>

          <p className="text-gray-400 max-w-md">
            Technologies and tools I work with daily.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: ci * 0.1 }}
              className="group relative bg-[#0f172a]/60 backdrop-blur-md border border-gray-700 rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40"
            >
              {/* GLOW */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none shadow-[0_0_40px_rgba(34,211,238,0.15)]" />

              <div className="relative z-10">
                {/* CATEGORY TITLE */}
                <h3 className="font-mono text-sm text-cyan-400 mb-4">
                  {cat.title}
                </h3>

                {/* SKILLS */}
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg text-sm text-gray-300 border border-gray-700 transition-all duration-200 hover:border-cyan-400/40 hover:text-cyan-300"
                    >
                      <skill.icon className="text-base text-gray-400 group-hover:text-cyan-300 transition" />
                      {skill.name}
                    </div>
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

export default Skills;