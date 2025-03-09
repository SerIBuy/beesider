import Menu from '../../assets/menu-burger.svg?react';
const Header = () => {
  return (
    <header className='header'>
      <Menu className='header__menu'/>
      <p className='header__title'>BESIDER</p>
    </header>
  );
};

export default Header;