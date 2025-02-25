const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center text-base-content px-4 py-10 ">
      <aside>
        <p className="md:text-base">
          Copyright © {new Date().getFullYear()} - All right reserved by Mehedi
          Hasan
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
