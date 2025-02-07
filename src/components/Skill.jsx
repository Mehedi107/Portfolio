import Marquee from 'react-fast-marquee';
import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.png';
import jsLogo from '../assets/js.png';
import tailwindLogo from '../assets/tailwind.png';
import expressLogo from '../assets/express.png';
import nodeLogo from '../assets/nodejs.png';
import fireLogo from '../assets/firebase.png';
import mongodbLogo from '../assets/mongodb.png';
import reactLogo from '../assets/react.png';

const imgs = [
  htmlLogo,
  jsLogo,
  tailwindLogo,
  cssLogo,
  nodeLogo,
  fireLogo,
  expressLogo,
  mongodbLogo,
  reactLogo,
];

const Skill = () => {
  return (
    <section>
      <div className="container mx-auto py-10 md:py-20 lg:py-28">
        <Marquee gradient={false} gradientColor={'#f4f4f5'}>
          {imgs.map((img, i) => (
            <img
              key={i}
              className="w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain mx-5 md:mx-10 grayscale"
              src={img}
              alt="logo"
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Skill;
