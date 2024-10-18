
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={styles.authNav}>
      <NavLink to="/register" className={styles.link} activeClassName={styles.activeLink}>
        Register
      </NavLink>
      <NavLink to="/login" className={styles.link} activeClassName={styles.activeLink}>
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
