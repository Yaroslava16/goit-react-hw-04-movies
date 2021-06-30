import axios from "axios";

const API_KEY = "7f5c22cc3d00862e5e2a46a3605db11a";

const fetchMovies = async ({ searchQuery }) => {
  return await axios.get(
    `https://api.themoviedb.org/3/search/movie/?api_key=${API_KEY}&query=${searchQuery}`
  );
};

export default fetchMovies;
