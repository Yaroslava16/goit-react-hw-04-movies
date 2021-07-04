import styles from "../MovieData/MovieData.module.css";
import defaultMoviePoster from "../../components/MoviesList/default-movie-poster.jpg";

const MovieData = ({
  handleGoBack,
  poster_path,
  original_title,
  release_date,
  vote_average,
  overview,
  genres,
}) => {
  return (
    <>
      <div className={styles.Conteiner}>
        <div className={styles.ConteinerMovie}>
          <div className={styles.ConteinerImg}>
            <button
              className={styles.Btn}
              type="button"
              onClick={handleGoBack}
              data-back="👈👈👈"
              data-front="Go Back"
            ></button>

            <img
              width="280px"
              height="400px"
              className={styles.Img}
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/original/${poster_path}`
                  : defaultMoviePoster
              }
              alt={original_title}
            />
          </div>
          <div className={styles.ConteinerData}>
            <h2>
              {original_title}
              <span> ({new Date(release_date).getFullYear()})</span>
            </h2>
            <p className={styles.TextData}>User Score: {vote_average * 10} %</p>
            <h2>Overview</h2>
            <p className={styles.TextData}>{overview}</p>
            <h2>Genres</h2>
            <ul className={styles.ListGenres}>
              {genres.map((genre) => (
                <li className={styles.ItemGenres} key={genre.id}>
                  {" "}
                  {genre.name}{" "}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieData;
