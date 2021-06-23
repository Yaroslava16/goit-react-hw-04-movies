import { Component } from "react";
import axios from "axios";

class HomePage extends Component {
  state = {
    topMovies: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      "https://api.themoviedb.org/3/trending/all/day?api_key=7f5c22cc3d00862e5e2a46a3605db11a"
    );
    console.log(response.data.results);

    this.setState({ topMovies: response.data.results });
  }

  render() {
    return (
      <>
        <h1>Trending today</h1>
        <ul>
          {this.state.topMovies.map((movie) => (
            <li key={movie.id}>
              {movie.original_title}
              {movie.original_name}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePage;
