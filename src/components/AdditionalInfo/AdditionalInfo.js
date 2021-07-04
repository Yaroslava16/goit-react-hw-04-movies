import { Route, Switch, NavLink } from "react-router-dom";
import Cast from "../../components/Cast/Cast";
import Reviews from "../../components/Reviews/Reviews";
import styles from "../AdditionalInfo/AdditionalInfo.module.css";

const AdditionalInfo = ({ id, location }) => {
  return (
    <>
      {" "}
      <h3 className={styles.TitleAdditional}>Additional information</h3>
      <ul className={styles.ListAdditional}>
        <li className={styles.ItemAdditional}>
          <NavLink
            className={styles.LinkAdditional}
            to={{
              pathname: `/movies/${id}/cast`,
              state: {
                from: location.state.from,
              },
            }}
          >
            Cast
          </NavLink>
        </li>
        <li className={styles.ItemAdditional}>
          <NavLink
            className={styles.LinkAdditional}
            to={{
              pathname: `/movies/${id}/reviews`,
              state: {
                from: location.state.from,
              },
            }}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/movies/:movieId/cast" component={Cast} />
        <Route path="/movies/:movieId/reviews" component={Reviews} />
      </Switch>
    </>
  );
};

export default AdditionalInfo;
