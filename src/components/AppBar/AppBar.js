import Navigation from "../Navigation/Navigation";
import styles from "../AppBar/AppBar.module.css";

const AppBar = () => {
  return (
    <ul className={styles.AppBar}>
      <Navigation />
    </ul>
  );
};

export default AppBar;
