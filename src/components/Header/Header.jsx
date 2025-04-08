import Navigation from '../Navigation/Navigation';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <Navigation />
    </header>
  );
};
export default Header;
