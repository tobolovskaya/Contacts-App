import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from '../redux/filters/slice';
import { TextField, Box } from "@mui/material";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <Box className={styles.searchBox}>
      <TextField
        fullWidth
        label="Find contacts by name or number"
        variant="outlined"
        value={filter}
        onChange={handleFilterChange}
      />
    </Box>
  );
};

export default SearchBox;