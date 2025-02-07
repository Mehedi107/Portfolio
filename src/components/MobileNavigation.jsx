import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import PropTypes from 'prop-types';

const MobileNavigation = ({ navLinks }) => {
  return (
    <div className="drawer md:hidden drawer-end place-content-end">
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
        <ul className="menu text-lg bg-base-200 text-base-content min-h-full w-64 p-4">
          {/* Sidebar content here */}
          {navLinks}
        </ul>
      </div>
    </div>
  );
};

MobileNavigation.propTypes = {
  navLinks: PropTypes.node,
};

export default MobileNavigation;
