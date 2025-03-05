import Menu from '../assets/menu-burger.svg?react';
const Header = () => {
  return (
    <header className='flex items-center pt-[29px] pl-[20px] pb-[27px] gap-x-[83px]'>
      <Menu/>
      <p>BESIDER</p>
    </header>
  );
};

export default Header;