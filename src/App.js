import { Route, NavLink, Switch } from "react-router-dom";
import HomePage from "./views/HomePage";
// import MoviesPage from "./views/MoviesPage";
import MovieDetailsPage from "./views/MovieDetailsPage";
import NotFoundViews from "./views/NotFoundViews";
// import Casts from "./views/Cast";

const App = () => (
  <>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {/* <li>
        <NavLink to="/movies">Movies</NavLink>
      </li> */}
      <li>
        <NavLink to="/movies/:movieId">Movies</NavLink>
      </li>
      {/* <li>
        <NavLink to="/movies/:movieId">Cast</NavLink>
      </li> */}
    </ul>

    <Switch>
      <Route path="/movies/:movieId" component={MovieDetailsPage} />
      <Route exact path="/" component={HomePage} />
      {/* <Route path="/movies" component={MoviesPage} /> */}
      {/* <Route exact path="/movies/:movieId/cast" component={Casts} /> */}

      <Route component={NotFoundViews} />
    </Switch>
  </>
);

export default App;
