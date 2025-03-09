import FooterMenu from "./FooterMenu";
import FooterLogo from "./FooterLogo";

const Footer = () => {
  return (
    <footer className="footer">
      <FooterMenu />
      <FooterLogo />
      <p className="footer__copyright">© 2023 Besider. Inspired by Insider</p>
    </footer>
  );
};

export default Footer;