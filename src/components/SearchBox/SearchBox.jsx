import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  return (
    <div className={styles.searchBox}>
      <input
        type="text"
        placeholder="Find contacts by name"
        value={value}
        onChange={e => dispatch(changeFilter(e.target.value))}
        className={styles.input}
      />
    </div>
  );
};

export default SearchBox;
