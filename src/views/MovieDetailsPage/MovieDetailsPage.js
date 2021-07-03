import axios from "axios";
import { Component } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import Cast from "../../components/Cast/Cast";
import Reviews from "../../components/Reviews/Reviews";
import routes from "../../components/routes";
import defaultMoviePoster from "../../components/MoviesList/default-movie-poster.jpg";
import styles from "../MovieDetailsPage/MovieDetailsPage.module.css";

const URL_Movie = "https://api.themoviedb.org/3/movie";
const API_KEY = "7f5c22cc3d00862e5e2a46a3605db11a";

class MovieDetailsPage extends Component {
  state = {
    poster_path: "",
    original_title: null,
    release_date: null,
    vote_average: null,
    popularity: null,
    overview: null,
    genres: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const response = await axios.get(
      `${URL_Movie}/${movieId}?api_key=${API_KEY}`
    );

    this.setState({ ...response.data });
  }

  handleGoBack = () => {
    const { history, location } = this.props;
    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }

    history.push(routes.home);
  };

  render() {
    const { location } = this.props;
    const {
      poster_path,
      original_title,
      release_date,
      vote_average,
      overview,
      genres,
      id,
    } = this.state;
    return (
      <div className={styles.Conteiner}>
        <div className={styles.ConteinerMovie}>
          <div className={styles.ConteinerImg}>
            <button
              className={styles.Btn}
              type="button"
              onClick={this.handleGoBack}
              data-back="👈👈👈"
              data-front="Go Back"
            ></button>

            <img
              width="280px"
              height="400px"
              className={styles.Img}
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/original/${poster_path}`
                  : defaultMoviePoster
              }
              alt={original_title}
            />
          </div>
          <div className={styles.ConteinerData}>
            <h2>
              {original_title}
              <span> ({new Date(release_date).getFullYear()})</span>
            </h2>
            <p className={styles.TextData}>User Score: {vote_average * 10} %</p>
            <h2>Overview</h2>
            <p className={styles.TextData}>{overview}</p>
            <h2>Genres</h2>
            <ul className={styles.ListGenres}>
              {genres.map((genre) => (
                <li className={styles.ItemGenres} key={genre.id}>
                  {" "}
                  {genre.name}{" "}
                </li>
              ))}
            </ul>
          </div>
        </div>
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
      </div>
    );
  }
}

export default MovieDetailsPage;
