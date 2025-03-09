import Logo from '../../assets/footer-logo.svg?react';

const FooterLogo = () => {
  return (
    <div className="footer__logo">
      <p className="footer__logo_text">Powered by</p>
      <Logo />
    </div>
  );
};

export default FooterLogo;