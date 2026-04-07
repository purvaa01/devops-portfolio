import { motion } from "framer-motion";
import { FiAward, FiExternalLink } from "react-icons/fi";

const certs = [
  {
    title: "Crash Course: Kubernetes For Absolute Beginners",
    issuer: "KodeKloud",
    link: "https://learn.kodekloud.com/user/certificate/2ec9a098-5d2b-488e-a19f-a728f7329908",
  },
  {
        title: "Crash Course: Linux For Absolute Beginners",
        issuer: "KodeKloud",
        link: "https://learn.kodekloud.com/user/certificate/69ae2847-a3eb-45b4-a029-5f50d8bd0506"
        },
    ];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <p className="text-cyan-400 font-mono text-sm mb-2">04.</p>

          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Certifications
          </h2>

          <p className="text-gray-400 max-w-md">
            Courses and certifications I've completed.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative bg-[#0f172a]/60 backdrop-blur-md border border-gray-700 rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40"
            >
              {/* GLOW */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none shadow-[0_0_40px_rgba(34,211,238,0.15)]" />

              <div className="relative z-10">

                {/* ICON */}
                <FiAward className="text-2xl text-cyan-400 mb-3 group-hover:text-cyan-300 transition" />

                {/* TITLE */}
                <h3 className="font-semibold text-white mb-1 group-hover:text-cyan-300 transition">
                  {cert.title}
                </h3>

                {/* ISSUER */}
                <p className="text-sm text-gray-400 mb-4">
                  {cert.issuer}
                </p>

                {/* LINK */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-cyan-400 transition"
                >
                  View <FiExternalLink className="text-xs" />
                </a>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;