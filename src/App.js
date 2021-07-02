import { Route, Switch } from "react-router-dom";
import { Suspense, lazy } from "react";
import AppBar from "./components/AppBar/AppBar";
import routes from "./components/routes";
import "./styles.css";

const HomePage = lazy(() =>
  import("./views/HomePage/HomePage.js" /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import(
    "./views/MoviesPage/MoviesPage.js" /* webpackChunkName: "movies-page" */
  )
);
const MovieDetailsPage = lazy(() =>
  import(
    "./views/MovieDetailsPage/MovieDetailsPage.js" /* webpackChunkName: "movie-details-page" */
  )
);
const NotFoundViews = lazy(() =>
  import(
    "./components/NotFoundViews.js" /* webpackChunkName: "not-found-views" */
  )
);

const App = () => (
  <>
    <AppBar />
    <Suspense fallback={<h1>Load...</h1>}>
      <Switch>
        <Route path={routes.moviesDetails} component={MovieDetailsPage} />
        <Route exact path={routes.home} component={HomePage} />
        <Route path={routes.movies} component={MoviesPage} />

        <Route component={NotFoundViews} />
      </Switch>
    </Suspense>
  </>
);

export default App;
