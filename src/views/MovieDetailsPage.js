import axios from "axios";
import { Component } from "react";

import routes from "../components/routes";

import MovieData from "../components/MovieData/MovieData";
import AdditionalInfo from "../components/AdditionalInfo/AdditionalInfo";

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
      <>
        <MovieData
          handleGoBack={this.handleGoBack}
          poster_path={poster_path}
          original_title={original_title}
          release_date={release_date}
          vote_average={vote_average}
          overview={overview}
          genres={genres}
        />
        <AdditionalInfo id={id} location={location} />
      </>
    );
  }
}

export default MovieDetailsPage;
