import { Link, withRouter } from "react-router-dom";
import MoviePreview from "../MoviePreview/MoviePreview";

const MovieList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map(({ id, poster_path, original_title }) => (
        <li key={id}>
          <Link to={{ pathname: `/movies/${id}`, state: { from: location } }}>
            <MoviePreview
              imgUrl={`https://image.tmdb.org/t/p/original/${poster_path}`}
              title={original_title}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MovieList);
