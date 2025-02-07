import { FaReact, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa';
import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiTailwindcss,
} from 'react-icons/si';
import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', icon: <FaReact className="text-blue-500" /> },
      {
        name: 'JavaScript',
        icon: <SiJavascript className="text-yellow-500" />,
      },
      {
        name: 'Tailwind',
        icon: <SiTailwindcss className="text-teal-400" />,
      },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
      { name: 'Express.js', icon: <SiExpress className="text-gray-300" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
    ],
  },
  {
    category: 'Tools & Others',
    skills: [
      { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
      { name: 'GitHub', icon: <FaGithub className="text-white" /> },
      { name: 'Firebase', icon: <SiFirebase className="text-yellow-400" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2>My Skills</h2>
        <p className="mb-16 md:text-lg text-center">
          Technologies I work with to build seamless digital experiences.
        </p>
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              className="p-4 md:p-6 bg-zinc-200 rounded-2xl hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-4 border-b border-zinc-400 pb-2">
                {category.category}
              </h3>
              <div className="flex gap-5 flex-wrap mt-4">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3 p-3 bg-zinc-800/80 text-zinc-100 rounded-lg hover:bg-zinc-800/100 transition duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-xl md:text-2xl">{skill.icon}</span>
                    <span className="text-sm md:text-base">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
