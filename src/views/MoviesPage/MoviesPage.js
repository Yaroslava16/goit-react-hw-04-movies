import { Component } from "react";
import fetchMovies from "../../components/moviesAPI";
import MoviesList from "../../components/MoviesList/MoviesList";
import styles from "../MoviesPage/MoviesPage.module.css";
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
        <form className={styles.Form} onSubmit={this.handleSubmit}>
          <input
            className={styles.Input}
            onChange={this.handleChange}
            value={searchQuery}
            type="text"
            autoComplete="off"
            autoFocus
          />

          <button className={styles.Btn} type="submit">
            <span>🔍</span>
          </button>
        </form>
        <MoviesList movies={movies} />
      </>
    );
  }
}

export default MoviesPage;
