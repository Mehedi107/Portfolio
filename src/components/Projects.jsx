import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import p1 from '../assets/artifact.png';
import p2 from '../assets/vocabhero.png';
import p3 from '../assets/prodvent.png';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { Link } from 'react-router';

const projects = [
  {
    name: 'ProdVent',
    image: p3,
    description:
      'A Product Hunt-style platform for discovering and launching new products.',
    techStack: ['React', 'Node.js', 'MongoDB', 'TailwindCSS'],
    liveLink: 'https://prodvent.live',
    githubLink: 'https://github.com/yourusername/prodvent-client',
    detailsPage: '/projects/prodvent',
  },
  {
    name: 'Artifact Vault',
    image: p1,
    description:
      'A web app for tracking historical artifacts with user contributions and interactive engagement.',
    techStack: ['React', 'Firebase', 'Express.js', 'MongoDB'],
    liveLink: 'https://artifactvault.live',
    githubLink: 'https://github.com/yourusername/artifactvault-client',
    detailsPage: '/projects/artifactvault',
  },
  {
    name: 'Vocabulary Builder',
    image: p2,
    description:
      'An interactive language learning app for improving vocabulary retention.',
    techStack: ['React', 'Firebase', 'Speech API', 'TailwindCSS'],
    liveLink: 'https://vocabuilder.live',
    githubLink: 'https://github.com/yourusername/vocabuilder-client',
    detailsPage: '/projects/vocabuilder',
  },
];

export default function Projects() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">My Projects</h2>
        <p className="mb-16 text-lg">
          A showcase of my latest work and technical expertise.
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 border border-zinc-300 "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={project.image}
              alt={project.name}
              className="rounded-t-2xl w-full h-40 object-cover grayscale"
            />
            <div className="p-6 bg-zinc-300">
              <h3 className="text-2xl font-semibold">{project.name}</h3>
              <p className=" my-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 my-5">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm badge px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between my-5">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-zinc-800 underline underline-offset-4"
                >
                  <HiOutlineExternalLink /> Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:underline underline-offset-4"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
              <Link
                to={`project/${project.name}`}
                className="block text-center mt-4 bg-lime-400 py-2 rounded-lg transition duration-300"
              >
                View More
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
