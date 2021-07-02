import styles from "../MoviePreview/MoviePreview.module.css";

const MoviePreview = ({ imgUrl, title }) => {
  return (
    <div className={styles.Conteiner}>
      <div className={styles.ImgThumb}>
        <img className={styles.Img} src={imgUrl} alt={title} />
      </div>
      <h3 className={styles.Title}>{title}</h3>
    </div>
  );
};

export default MoviePreview;
