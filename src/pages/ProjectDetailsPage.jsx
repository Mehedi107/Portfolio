import { useParams } from 'react-router';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import p1 from '../assets/artifact.png';
import p2 from '../assets/vocabhero.png';
import p3 from '../assets/prodvent.png';

const projects = [
  {
    name: 'ProdVent',
    image: p3,
    description:
      'ProdVent is a web platform designed to showcase and discover the latest digital products, including web apps, AI tools, software, games, and mobile apps. Built using the MERN stack (MongoDB, Express.js, React, Node.js), ProdVent allows users to submit, explore, and engage with innovative products.',
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

const ProjectDetailsPage = () => {
  const { projectName } = useParams();
  const project = projects.find(project => project.name === projectName);

  if (!project) {
    return (
      <div className="text-center text-gray-400 py-20 text-xl">
        Project not found.
      </div>
    );
  }

  return (
    <section className="py-16 bg-zinc-300">
      <div className="max-w-5xl mx-auto px-6">
        <motion.img
          src={project.image}
          alt={project.name}
          className="rounded-2xl w-full shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />
        <h2 className="text-4xl font-bold mt-6">{project.name}</h2>
        <p className="mt-4">{project.description}</p>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Tech Stack Used</h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, i) => (
              <span key={i} className="badge">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 flex gap-6">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white"
          >
            <FaGithub /> GitHub
          </a>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Challenges Faced</h3>
          <p className="text-gray-300">{project.challenges}</p>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Future Improvements</h3>
          <p className="text-gray-300">{project.improvements}</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsPage;
