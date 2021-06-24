import axios from "axios";
import { Component } from "react";

const URL_Movie = "https://api.themoviedb.org/3/movie/";
const API_KEY = "7f5c22cc3d00862e5e2a46a3605db11a";

class MovieDetailsPage extends Component {
  state = {
    poster_path: null,
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
    console.log(response.data);

    this.setState({ ...response.data });
  }
  render() {
    return (
      <>
        <img
          width="250px"
          height="250px"
          src={`https://image.tmdb.org/t/p/original/${this.state.poster_path}`}
          alt={this.state.original_title}
        />
        <h2>
          {this.state.original_title}
          <span> ({new Date(this.state.release_date).getFullYear()})</span>
        </h2>
        <p>User Score: {this.state.vote_average * 10} %</p>
        <h2>Overview</h2>
        <p>{this.state.overview}</p>
        <h2>Genres</h2>
        <ul>
          {this.state.genres.map((genre) => (
            <li key={genre.id}> {genre.name} </li>
          ))}
        </ul>
      </>
    );
  }
}

export default MovieDetailsPage;
