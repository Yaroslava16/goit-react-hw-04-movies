import { Route, Switch } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import HomePage from "./views/HomePage/HomePage";
import MoviesPage from "./views/MoviesPage/MoviesPage";
import MovieDetailsPage from "./views/MovieDetailsPage/MovieDetailsPage";
import NotFoundViews from "./views/NotFoundViews";
import routes from "./routes";
import "./styles.css";

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
