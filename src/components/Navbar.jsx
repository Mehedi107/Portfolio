import { FiDownload } from 'react-icons/fi';
import logo from '../assets/logo.png';
import MobileNavigation from './MobileNavigation';

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>About</a>
      </li>
      <li>
        <a>Project</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
    </>
  );
  return (
    <div className="navbar bg-zinc-200">
      {/* Start */}
      <div className="navbar-start">
        <a className="w-12">
          <img className="grayscale" src={logo} alt="logo" />
        </a>
      </div>
      {/* Center */}
      <div className="navbar-center">
        <ul className="md:flex hidden menu menu-horizontal px-1 text-lg">
          {navLinks}
        </ul>
      </div>
      {/* End */}
      <div className="navbar-end">
        <div className="hidden md:block">
          <a className=" btn md:btn-lg rounded-full flex justify-center items-center bg-lime-400">
            <span>
              <FiDownload />
            </span>
            <span>Resume</span>
          </a>
        </div>
        {/* Mobile navigation */}
        <MobileNavigation navLinks={navLinks} />
      </div>
    </div>
  );
};

export default Navbar;
