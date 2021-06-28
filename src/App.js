import { Route, Switch } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import HomePage from "./views/HomePage";
import MoviesPage from "./views/MoviesPage";
import MovieDetailsPage from "./views/MovieDetailsPage";
import NotFoundViews from "./views/NotFoundViews";
import routes from "./routes";

const App = () => (
  <>
    <AppBar />

    <Switch>
      <Route path={routes.moviesDetails} component={MovieDetailsPage} />
      <Route exact path={routes.home} component={HomePage} />
      <Route path={routes.movies} component={MoviesPage} />

      <Route component={NotFoundViews} />
    </Switch>
  </>
);

export default App;
