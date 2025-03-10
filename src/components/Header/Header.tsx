import MenuOpen from '../../assets/menu-burger-open.svg?react';
const Header = ({onBurgerClick}: {onBurgerClick: () => void}) => {
  return (
    <header className='header'>
      <button onClick={onBurgerClick} className='header__menu-button header__menu-button--open'>
        <MenuOpen />
      </button>
      <p className='header__title'>BESIDER</p>
    </header>
  );
};

export default Header;