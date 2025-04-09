import { NavLink } from 'react-router-dom';

import css from './Header.module.css';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';

const Header = () => {
  return (
    <header className={css.header}>
      <nav>
        <NavLink className={css.link} to="/">
          Home
        </NavLink>
        <NavLink className={css.link} to="/task">
          Task
        </NavLink>
      </nav>
      <UserMenu />
      <AuthNav />
    </header>
  );
};
export default Header;
