import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="flex flex-col justify-center items-center py-24 bg-zinc-200 rounded-t-[50px] md:rounded-t-[100px] lg:rounded-t-[150px] rounded-b-[50px] md:rounded-b-[100px] lg:rounded-b-[150px]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          className=" text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h2>
        <p className=" text-center mt-2">
          Feel free to reach out via email, phone, or WhatsApp.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5">
          <div className="mt-8 md:text-lg flex flex-col items-center gap-3">
            <motion.div
              className="flex items-center gap-3 p-4 rounded-lg bg-zinc-300 max-w-96 w-full"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FaEnvelope className="text-blue-400 text-xl " />
              <span>mehedi.hsn.dev@gmail.com</span>
            </motion.div>

            <motion.div
              className="flex items-center gap-3 p-4 rounded-lg bg-zinc-300 max-w-96 w-full"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <FaPhone className="text-green-400 text-xl " />
              <span>+880 1234-567890</span>
            </motion.div>

            <motion.div
              className="flex items-center gap-3 p-4 rounded-lg bg-zinc-300  max-w-96 w-full"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <FaWhatsapp className="text-green-500 text-xl" />
              <span>+880 1234-567890</span>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="mt-10 rounded-lg w-full">
            <motion.h3
              className="text-2xl font-semibold text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Send Me a Message
            </motion.h3>

            <form className="mt-4 space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 px-5 rounded-xl  border-zinc-400/50 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 px-5 rounded-xl  border-zinc-400/50 focus:outline-none"
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full p-3 px-5 rounded-xl  border-zinc-400/50 focus:outline-none"
              />
              <button
                type="submit"
                className="btn btn-block md:btn-lg bg-lime-400 rounded-xl py-5"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
