import { Link } from "react-router-dom";

const MovieList = ({ movies, match, location, path = "" }) => (
  <ul>
    {movies.map(({ id, title, poster_path }) => (
      <li key={id}>
        <Link
          to={{
            pathname: `${match.url}${path}/${id}`,
            state: { from: location },
          }}
        ></Link>
      </li>
    ))}
  </ul>
);

export default MovieList;
