
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { selectUserName } from '../../redux/auth/selectors';
import styles from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  return (
    <div className={styles.userMenu}>
      <span className={styles.userName}>Welcome, {userName}</span>
      <button type="button" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
