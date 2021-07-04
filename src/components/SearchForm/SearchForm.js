import styles from "../SearchForm/SearchForm.module.css";

const SearchForm = ({ onSubmit, onChange, searchQuery }) => {
  return (
    <>
      <form className={styles.Form} onSubmit={onSubmit}>
        <input
          className={styles.Input}
          onChange={onChange}
          value={searchQuery}
          type="text"
          autoComplete="off"
          autoFocus
        />

        <button className={styles.Btn} type="submit">
          <span>🔍</span>
        </button>
      </form>
    </>
  );
};

export default SearchForm;
