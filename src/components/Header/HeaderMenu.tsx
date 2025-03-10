import MenuClose from '../../assets/menu-burger-close.svg?react';

const HeaderMenu = ({onBurgerClick}: {onBurgerClick: () => void}) => {
  return (
    <div className='header__menu-container'>
      <button onClick={onBurgerClick} className='header__menu-button header__menu-button--close'>
        <MenuClose />
      </button>
      <ul className='header__menu'>
        <li className='header__menu_item'><a href='#' className='header__menu_link'>Science</a></li>
        <li className='header__menu_item'><a href='#' className='header__menu_link'>General</a></li>
        <li className='header__menu_item'><a href='#' className='header__menu_link'>Entertainment</a></li>
        <li className='header__menu_item'><a href='#' className='header__menu_link'>Technology</a></li>
        <li className='header__menu_item'><a href='#' className='header__menu_link'>Business</a></li>
        <li className='header__menu_item'><a href='#' className='header__menu_link'>Health</a></li>
        <li className='header__menu_item'><a href='#' className='header__menu_link'>Sports</a></li>
      </ul>
    </div>
  );
};

export default HeaderMenu;