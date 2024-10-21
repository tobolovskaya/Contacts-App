import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav.jsx";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Toolbar, Typography } from "@mui/material";
import styles from "./AppBar.module.css";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Toolbar className={styles.toolbar}>
      <Typography variant="h5">Contacts App</Typography>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Toolbar>
  );
};
export default AppBar;