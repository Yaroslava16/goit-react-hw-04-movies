import { Route, NavLink, Switch } from "react-router-dom";
import HomePage from "./views/HomePage";
import MoviesPage from "./views/MoviesPage";
import MovieDetailsPage from "./views/MovieDetailsPage";
import NotFoundViews from "./views/NotFoundViews";

const App = () => (
  <>
    <ul>
      <li>
        <NavLink to="/">HomePage</NavLink>
      </li>
      <li>
        <NavLink to="/movies">Movies</NavLink>
      </li>
      <li>
        <NavLink to="/movieId">MovieDetailsPage</NavLink>
      </li>
    </ul>

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/movies" component={MoviesPage} />
      <Route path="/movieId" component={MovieDetailsPage} />
      <Route component={NotFoundViews} />
    </Switch>
  </>
);

export default App;
