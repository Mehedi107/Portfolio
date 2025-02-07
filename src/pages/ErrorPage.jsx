import { Link } from 'react-router';
import { motion } from 'framer-motion';
const ErrorPage = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-zinc-300 text-center px-6 text-zinc-700">
      <motion.h1
        className="text-7xl md:text-9xl font-bold "
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        404
      </motion.h1>
      <motion.h2
        className="text-2xl md:text-3xl font-semibold mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Oops! Page Not Found
      </motion.h2>
      <p className="text-zinc-500 mt-2 md:text-lg">
        The page you&apos;re looking for might have been removed or is
        temporarily unavailable.
      </p>
      <Link
        to="/"
        className="mt-6 btn btn-xl border-none text-zinc-700 hover:scale-105  bg-lime-400 transition  "
      >
        Go Back Home
      </Link>
    </section>
  );
};

export default ErrorPage;
