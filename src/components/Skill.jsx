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

const Skill = () => {
  return (
    <section>
      <div className="container mx-auto py-28">
        <Marquee gradient={true}>
          <img
            className="w-24 h-24 object-contain mx-10 grayscale"
            src={htmlLogo}
            alt=""
          />

          <img
            className="w-24 h-24 object-contain mx-10 grayscale"
            src={jsLogo}
            alt=""
          />
          <img
            className="w-24 h-24 object-contain mx-10 grayscale"
            src={tailwindLogo}
            alt=""
          />
          <img
            className="w-24 h-24 object-contain mx-10 grayscale"
            src={cssLogo}
            alt=""
          />
          <img
            className="w-24 h-24 object-contain mx-10 grayscale"
            src={reactLogo}
            alt=""
          />
          <img
            className="w-24 h-24 object-contain mx-10 grayscale"
            src={fireLogo}
            alt=""
          />
          <img
            className="w-24 h-24 object-contain mx-10 grayscale"
            src={nodeLogo}
            alt=""
          />
          <img
            className="w-24 h-24 object-contain mx-10 grayscale"
            src={expressLogo}
            alt=""
          />
          <img
            className="w-24 h-24 object-contain mx-10 grayscale"
            src={mongodbLogo}
            alt=""
          />
        </Marquee>
      </div>
    </section>
  );
};

export default Skill;
