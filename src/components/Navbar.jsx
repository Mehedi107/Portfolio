import { FiDownload } from 'react-icons/fi';
import logo from '../assets/logo.png';
import { TbMenu } from 'react-icons/tb';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';

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
    <div className="navbar bg-base-100 shadow-sm">
      {/* Start */}
      <div className="navbar-start">
        <a className="w-12 hidden md:block">
          <img src={logo} alt="logo" />
        </a>
        {/* Mobile navigation */}
        <div className="drawer md:hidden">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label
              htmlFor="my-drawer"
              className="btn text-2xl bg-transparent border-none shadow-none"
            >
              <HiOutlineMenuAlt4 />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-64 p-4">
              {/* Sidebar content here */}
              {navLinks}
            </ul>
          </div>
        </div>
      </div>
      {/* Center */}
      <div className="navbar-center">
        <a className="w-12  md:hidden">
          <img src={logo} alt="logo" />
        </a>
        <ul className="md:flex hidden menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      {/* End */}
      <div className="navbar-end">
        <a className="btn flex justify-center items-center bg-green-400">
          <span>
            <FiDownload />
          </span>
          <span>Resume</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
