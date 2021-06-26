import { Component } from "react";
import ApiServices from "../components/moviesAPI";

class MoviesPage extends Component {
  state = {
    searchQuery: "",
    movies: [],
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchMovies();
    }
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  fetchMovies = () => {
    const { searchQuery } = this.state;

    ApiServices.fetchMovies({ searchQuery }).then((response) => {
      this.setState({
        movies: response.data.results,
      });
    });
  };

  onChangeQuery = (query) => {
    this.setState({ searchQuery: query, movies: [] });
  };

  handleChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.onChangeQuery(this.state.inputValue);
    this.setState({ searchQuery: "" });
  };

  render() {
    const { searchQuery } = this.state;
    return (
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
    );
  }
}

export default MoviesPage;
