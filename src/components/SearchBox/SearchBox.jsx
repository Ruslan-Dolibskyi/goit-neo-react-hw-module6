import styles from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={styles.searchBox}>
      <input
        type="text"
        placeholder="Find contacts by name"
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </div>
  );
};

export default SearchBox;
