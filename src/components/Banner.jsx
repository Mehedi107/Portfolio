import { FiDownload } from 'react-icons/fi';
import mehedi from '../assets/mehedi.webp';
import { FaFacebookF, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Banner = () => {
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
            <button className="btn md:p-8 md:btn-lg rounded-full bg-zinc-700 text-white ">
              Let&apos;s talk
            </button>
            <a className="btn md:btn-lg flex justify-center items-center bg-lime-400 rounded-full md:p-8">
              <span>
                <FiDownload />
              </span>
              <span>Resume</span>
            </a>
          </div>
        </div>
        {/* Banner Img */}
        <div className="col-span-1 justify-self-center ">
          <div className="bg-zinc-200 rounded-full shadow-2xl overflow-hidden">
            <img
              className="max-h-96 w-full object-cover grayscale hover:grayscale-0 transition"
              src={mehedi}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
