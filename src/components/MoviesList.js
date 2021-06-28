import { Link, withRouter } from "react-router-dom";
import MoviePreview from "./MoviePreview/MoviePreview";

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, poster_path, original_title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`}>
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

// const MovieList = ({ movies, match, location, path = "" }) => (
//   <ul>
//     {movies.map(({ id, title, poster_path }) => (
//       <li key={id}>
//         <Link
//           to={{
//             pathname: `${match.url}${path}/${id}`,
//             state: { from: location },
//           }}
//         ></Link>
//       </li>
//     ))}
//   </ul>
// );

export default withRouter(MovieList);
