import { NavLink } from "react-router-dom";
import routes from "../../routes";

const Navigation = () => {
  return (
    <>
      <li>
        <NavLink to={routes.home}>Home</NavLink>
      </li>
      <li>
        <NavLink to={routes.movies}>Movies</NavLink>
      </li>
    </>
  );
};

export default Navigation;
