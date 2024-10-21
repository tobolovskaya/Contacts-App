import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <h1>Welcome to the Contacts App!</h1>
      {!isLoggedIn && <p>Manage your contacts easily and securely. Register or log in to get started!</p>}
    </div>
  );
};

export default HomePage;