import { Component } from "react";
import fetchMovies from "../components/moviesAPI";
import SearchForm from "../components/SearchForm/SearchForm";
import MoviesList from "../components/MoviesList/MoviesList";
import queryString from "query-string";

class MoviesPage extends Component {
  state = {
    searchQuery: "",
    movies: [],
    loading: false,
  };

  componentDidMount() {
    const searchQuery =
      queryString.parse(this.props.location.search).search || "";

    searchQuery &&
      fetchMovies({ searchQuery }).then((response) => {
        this.setState({
          movies: response.data.results,
        });
      });
  }

  fetchMoviesPage = (searchData) => {
    fetchMovies(searchData).then((response) => {
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
    const { searchQuery } = this.state;
    if (searchQuery.trim() === "") {
      alert("Incorrect value");
      return;
    }
    this.props.history.push({ search: `search=${searchQuery}` });

    this.fetchMoviesPage({ searchQuery });
  };

  render() {
    const { searchQuery, movies } = this.state;
    return (
      <>
        <SearchForm
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          searchQuery={searchQuery}
        />

        <MoviesList movies={movies} />
      </>
    );
  }
}

export default MoviesPage;
