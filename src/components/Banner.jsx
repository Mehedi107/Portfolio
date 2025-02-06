import mehedi from '../assets/mehedi.webp';

const Banner = () => {
  return (
    <section className="bg-zinc-200 rounded-b-4xl py-20">
      <div className="container mx-auto grid grid-col-1 md:grid-cols-2 min-h-screen items-center lg:px-16 md:8 px-4 ">
        {/* Banner Content */}
        <div className="col-span-1 md:justify-self-center">
          <h1 className="text-center md:text-left">
            <span className="block text-lg sm:text-xl md:text-2xl font-medium mb-3">
              Hi, I&apos;m Mehedi
            </span>
            <span className="block xl:text-5xl lg:text-4xl sm:text-3xl text-2xl font-semibold">
              A Full-Stack Developer
            </span>
          </h1>
        </div>
        {/* Banner Img */}
        <div className="col-span-1 justify-self-center ">
          <div className="bg-zinc-50 rounded-full shadow-2xl overflow-hidden">
            <img className="max-h-96 w-full object-cover" src={mehedi} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
