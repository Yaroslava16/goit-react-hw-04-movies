import { Component } from "react";
import axios from "axios";
import MoviesList from "../components/MoviesList";

const URL_Top_Movies =
  "https://api.themoviedb.org/3/trending/all/day?api_key=7f5c22cc3d00862e5e2a46a3605db11a";

class HomePage extends Component {
  state = {
    topMovies: [],
  };

  async componentDidMount() {
    const response = await axios.get(URL_Top_Movies);
    // console.log(response.data.results);

    this.setState({ topMovies: response.data.results });
  }

  render() {
    return (
      <>
        <h1>Trending today</h1>
        <MoviesList movies={this.state.topMovies} />
      </>
    );
  }
}

export default HomePage;
