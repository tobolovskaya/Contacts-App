
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to the Contacts App!</h1>
      <p className={styles.text}>
        Manage your contacts easily and securely. Register or log in to get started!
      </p>
    </div>
  );
};

export default HomePage;

