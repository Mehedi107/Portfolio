const About = () => {
  return (
    <section className="bg-zinc-200 rounded-y-[150px]">
      <div className="container mx-auto py-24 px-4">
        <h2 className="text-4xl font-semibold mb-10 text-center">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:text-lg">
          <p className="hover:bg-white transition border border-zinc-400 hover:border-white md:p-8 p-4  rounded-2xl ">
            Hi, I’m Mehedi, a passionate full-stack web developer with a love
            for crafting intuitive and dynamic digital experiences. My journey
            into programming started with sheer curiosity—what began as simple
            HTML and CSS experiments soon turned into a deep fascination with
            JavaScript, React, and the MERN stack. Over time, I honed my skills,
            tackled real-world projects, and even completed a full-stack MERN
            development course from Programming Hero to solidify my expertise.
          </p>
          <p className="hover:bg-white transition border border-zinc-400 hover:border-white md:p-8 p-4 rounded-2xl">
            I specialize in building scalable web applications that seamlessly
            blend performance and usability. Whether it’s designing sleek UI
            components, optimizing backend performance, or integrating secure
            authentication and payment systems, I find joy in solving complex
            problems through code. My favorite type of work includes developing
            interactive web apps, implementing modern front-end frameworks, and
            creating solutions that enhance user experience.
          </p>
          <p className="hover:bg-white transition border border-zinc-400 hover:border-white md:p-8 p-4 rounded-2xl">
            But there’s more to me than just code! When I step away from my
            computer, you’ll often find me exploring history, discovering new
            gadgets, or brainstorming creative ideas. I have a deep appreciation
            for technology’s impact on our lives, which inspires me to build
            tools that make a difference.
          </p>
          <p className="hover:bg-white transition border-zinc-400 hover:border-white border md:p-8 p-4 rounded-2xl">
            I believe that learning never stops, and I’m always excited about
            exploring new technologies, frameworks, and industry trends. If
            you&apos;re looking for someone who’s not just a developer but a
            creative problem solver, collaborator, and lifelong learner—let’s
            connect and build something amazing!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
