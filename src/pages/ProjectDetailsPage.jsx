import { Link, useParams } from 'react-router';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import p1 from '../assets/artifact.png';
import p2 from '../assets/vocabhero.png';
import p3 from '../assets/prodvent.png';
import { HiOutlineExternalLink } from 'react-icons/hi';

const projects = [
  {
    name: 'ProdVent',
    image: p3,
    description:
      'ProdVent is a web platform designed to showcase and discover the latest digital products, including web apps, AI tools, software, games, and mobile apps. Built using the MERN stack (MongoDB, Express.js, React, Node.js), ProdVent allows users to submit, explore, and engage with innovative products.',
    techStack: ['tailwind', 'React', 'Node.js', 'MongoDB', 'TailwindCSS'],
    liveLink: 'https://prodvent-5cd36.web.app/',
    githubLink: 'https://github.com/Mehedi107/A12-client',
    challenges: 'Integrating Stripe payment method',
    improvements: 'Integrate SSL commerce',
  },
  {
    name: 'Artifact Vault',
    image: p1,
    description:
      'Artifact Vault is a web application designed for tracking and showcasing historical artifacts such as the Rosetta Stone and Antikythera Mechanism. Users can browse artifacts, view detailed information, and contribute by adding their own entries. The platform also allows users to like artifacts and keep track of their contributions. The application',
    techStack: [
      'tailwind',
      'React',
      'Firebase',
      'Express.js',
      'MongoDB',
      'Node.js',
    ],
    liveLink: 'https://artifact-vault-916d6.web.app/',
    githubLink: 'https://github.com/Mehedi107/A11-client',
    challenges: 'Integrating JWT, Axios and TanStack query',
    improvements: 'Integrate Payment Method',
  },
  {
    name: 'VizaFlow',
    image: p2,
    description:
      'The Visa Navigator Portal is a comprehensive platform designed to streamline and simplify the visa application process. Built using the MERN stack (MongoDB, Express.js, React, and Node.js), this portal offers a user-friendly experience for applicants, agents, and administrators.',
    techStack: [
      'React',
      'Firebase',
      'Express.js',
      'MongoDB',
      'Node.js',
      'tailwind',
    ],
    liveLink: 'https://visaflow-400fc.web.app/',
    githubLink: 'https://github.com/Mehedi107/Visa-Flow',
    challenges: 'Integrating JWT and Axios',
    improvements: 'Integrate TanStack query',
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
          <Link
            to={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-800 underline underline-offset-4"
          >
            <HiOutlineExternalLink /> Live Demo
          </Link>
          <Link
            to={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline underline-offset-4"
          >
            <FaGithub /> GitHub
          </Link>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Challenges Faced</h3>
          <p className="text-zinc-600">{project.challenges}</p>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Future Improvements</h3>
          <p className="text-zinc-600">{project.improvements}</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsPage;
