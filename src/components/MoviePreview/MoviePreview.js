const MoviePreview = ({ imgUrl, title, release_date }) => {
  return (
    <div>
      <img width="100px" height="150px" src={imgUrl} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

export default MoviePreview;
