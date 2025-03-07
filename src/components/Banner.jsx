import { FiDownload } from 'react-icons/fi';
import mehedi from '../assets/mehedi.webp';
import { FaFacebookF, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const Banner = ({ scrollToSection, refs }) => {
  return (
    <section className="bg-zinc-200 rounded-b-[25px] sm:rounded-b-[50px] md:rounded-b-[100px] lg:rounded-b-[150px] py-10 md:py-0">
      <div className="container mx-auto grid grid-col-1 md:grid-cols-2 gap-10 items-center lg:px-16 md:8 px-4 min-h-screen">
        {/* Banner Content */}
        <div className="col-span-1 md:justify-self-center">
          {/* Title */}
          <h1 className="text-center md:text-left">
            <span className="block text-lg sm:text-xl md:text-2xl font-medium mb-3">
              Hi, I&apos;m Mehedi
            </span>
            <span className="block xl:text-5xl lg:text-4xl sm:text-3xl text-2xl font-semibold">
              A Full-Stack Developer
            </span>
          </h1>
          {/* Social Buttons */}
          <div className="my-8 flex items-center gap-5 text-2xl justify-center md:justify-start">
            <a
              href="https://github.com/Mehedi107"
              target="blank"
              className="inline-block hover:text-[ #171515] transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.facebook.com/mehedi.hasan.402149"
              target="blank"
              className="inline-block hover:text-[#1877F2] transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://x.com/MehediHasa6169"
              target="blank"
              className="inline-block hover:text-[#1DA1F2] transition"
            >
              <FaXTwitter />
            </a>
          </div>
          {/* CTA Buttons */}
          <div className="flex items-center gap-5 mt-10 justify-center md:justify-start">
            <motion.button
              onClick={() => scrollToSection(refs.contactRef)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="font-medium btn md:btn-lg rounded-full bg-zinc-700 text-white "
            >
              Let&apos;s talk
            </motion.button>
            <motion.a
              href="https://drive.google.com/uc?export=download&id=14q4w1IBRXpYODygmm006Vwmw6_-UfmcE"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="btn md:btn-lg flex justify-center items-center bg-lime-400 rounded-full font-medium"
            >
              <span>
                <FiDownload />
              </span>
              <span>Resume</span>
            </motion.a>
          </div>
        </div>
        {/* Banner Img */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, transition: { duration: 1 } }}
          className="col-span-1 justify-self-center "
        >
          <div className="bg-zinc-200 rounded-full shadow-2xl overflow-hidden">
            <img className="max-h-96 w-full object-cover" src={mehedi} alt="" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
