import { NavLink } from "react-router-dom";
import routes from "../../routes";
import styles from "../Navigation/Navigation.module.css";

const Navigation = () => {
  return (
    <>
      <li className={styles.Item}>
        <NavLink className={styles.ItemLink} to={routes.home}>
          Home
        </NavLink>
      </li>
      <li className={styles.Item}>
        <NavLink className={styles.ItemLink} to={routes.movies}>
          Movies
        </NavLink>
      </li>
    </>
  );
};

export default Navigation;
