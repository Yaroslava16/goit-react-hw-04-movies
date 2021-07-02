import { Link, withRouter } from "react-router-dom";
import MoviePreview from "../MoviePreview/MoviePreview";
import defaultMoviePoster from "../MoviesList/default-movie-poster.jpg";
import styles from "../../views/HomePage/HomePage.module.css";

const MovieList = ({ movies, location }) => {
  return (
    <ul className={styles.List}>
      {movies.map(({ id, poster_path, original_title, original_name }) => (
        <li className={styles.Item} key={id}>
          <Link to={{ pathname: `/movies/${id}`, state: { from: location } }}>
            <MoviePreview
              imgUrl={
                poster_path
                  ? `https://image.tmdb.org/t/p/original/${poster_path}`
                  : defaultMoviePoster
              }
              title={original_title || original_name}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MovieList);
