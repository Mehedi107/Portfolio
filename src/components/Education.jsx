import { FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';

const education = [
  {
    degree: 'B.A Honors in English',
    institution: 'Narayanganj College, Narayanganj',
    year: '2024',
  },
  {
    degree: 'HSC in Business Studies',
    institution: 'Govt. City College, Chattogram',
    year: '2015',
  },
];

export default function Education() {
  return (
    <section className="py-24 bg-zinc-200 rounded-t-[50px] md:rounded-t-[100px] lg:rounded-t-[150px] ">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2>Educational Qualification</h2>
        <p className="mb-10 md:text-lg">A glimpse into my academic journey.</p>
      </div>
      <div className="max-w-4xl mx-auto space-y-6 px-4">
        {education.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row items-start md:items-center gap-4 bg-zinc-100 backdrop-blur-md  rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <FaGraduationCap className="text-3xl" />
            <div>
              <h3 className="text-xl font-semibold">{item.degree}</h3>
              <p className="">{item.institution}</p>
              <span className="">{item.year}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
