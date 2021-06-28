import { Component } from "react";
import ApiServices from "../components/moviesAPI";
import MoviesList from "../components/MoviesList";

class MoviesPage extends Component {
  state = {
    searchQuery: "",
    movies: [],
    loading: false,
  };

  fetchMovies = () => {
    const { searchQuery } = this.state;

    ApiServices.fetchMovies({ searchQuery }).then((response) => {
      this.setState({
        movies: response.data.results,
      });
    });
  };

  handleChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.fetchMovies();
  };

  render() {
    const { searchQuery, movies } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={searchQuery}
            type="text"
            autoComplete="off"
            autoFocus
          />

          <button type="submit">
            <span>Search</span>
          </button>
        </form>
        <MoviesList movies={movies} />
      </>
    );
  }
}

export default MoviesPage;
