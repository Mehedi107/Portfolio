import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="flex flex-col justify-center items-center py-24 bg-zinc-200 rounded-section">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          className=" text-center"
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>
        <p className=" text-center mt-2">
          Feel free to reach out via email, phone, or WhatsApp.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
          <div className="mt-8 md:text-lg flex flex-col items-center w-full md:w-1/2 gap-3">
            <motion.div
              className="flex items-center gap-3 p-4 rounded-xl bg-zinc-300 max-w-96 w-full hover:-translate-y-1 duration-200 hover:shadow-lg"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FaEnvelope className="text-xl " />
              <span>mehedi.hsn.dev@gmail.com</span>
            </motion.div>

            <motion.div
              className="flex items-center gap-3 p-4 rounded-xl bg-zinc-300 max-w-96 w-full hover:-translate-y-1 duration-200 hover:shadow-lg"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <FaPhone className="text-xl " />
              <span>+880 1515657013</span>
            </motion.div>

            <motion.div
              className="flex items-center gap-3 p-4 rounded-xl bg-zinc-300  max-w-96 w-full hover:-translate-y-1 duration-200 hover:shadow-lg"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <FaWhatsapp className="text-xl" />
              <span>+880 1515657013</span>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="mt-10 rounded-lg w-full md:w-1/2">
            <motion.h3
              className="text-2xl font-semibold text-center max-w-xl"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              Send Me a Message
            </motion.h3>

            <form
              action="https://formsubmit.co/2e108d1d4e2e90b6edbc540f21b005f7"
              method="POST"
              className="mt-4 space-y-4 w-full max-w-xl"
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 px-5 rounded-xl  border-zinc-400/50 focus:outline-none"
                required
                name="name"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 px-5 rounded-xl  border-zinc-400/50 focus:outline-none"
                required
                name="email"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full p-3 px-5 rounded-xl  border-zinc-400/50 focus:outline-none"
                required
                name="message"
              />

              <button
                type="submit"
                className="btn btn-block md:btn-lg bg-lime-400 border-none rounded-xl py-5"
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
