import { useEffect, useState } from "react";

const roles = [
  "DevOps Learner",
  "Cloud Explorer",
  "Building Real-World Projects",
  "Always Learning Something New",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => {
        setText(current.slice(0, text.length + 1));
      }, 80);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1500);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(text.slice(0, -1));
      }, 40);
    } else {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">

        {/* IMAGE */}
        <div className="flex justify-center md:order-1">
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-gray-700 shadow-[0_0_30px_rgba(34,211,238,0.15)]">
            <img
              src="/Purva_Blazer_one.png"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="max-w-xl md:order-2">
          <p className="text-cyan-400 text-sm font-mono mb-2">
            Hey, I'm
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
            Purva!
          </h2>

          <h2 className="text-cyan-400 font-mono text-lg mb-4">
            {text} |
          </h2>

          <p className="text-gray-400 leading-relaxed mb-6">
            Recent CS graduate from Fergusson College, Pune, currently trying to convince computers to work together without breaking everything. 😄

            I'm diving into the world of DevOps & Cloud, where most of my time is spent building projects, fixing bugs I created five minutes earlier, and learning something new every day.

            When I'm not working on a project, you'll probably find me reading novels, listening to music, experimenting with new tech. I enjoy learning by building, staying curious, and celebrating the little wins that come after hours of debugging.

          </p>

          {/* TAGS */}
          <div className="flex flex-wrap gap-3 text-sm text-gray-400 font-mono mb-6">
            <span className="bg-gray-800 px-3 py-1 rounded-md">☕ Coffee</span>
            <span className="bg-gray-800 px-3 py-1 rounded-md">🎵 Music</span>
            <span className="bg-gray-800 px-3 py-1 rounded-md">📚 Books</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;