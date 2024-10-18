
import { Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import HomePage from './pages/HomePage/HomePage';
import PrivateRoute from './components/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/register"
        element={<RestrictedRoute component={RegisterPage} redirectTo="/contacts" />}
      />
      <Route
        path="/login"
        element={<RestrictedRoute component={LoginPage} redirectTo="/contacts" />}
      />
      <Route
        path="/contacts"
        element={<PrivateRoute component={ContactsPage} redirectTo="/login" />}
      />
    </Routes>
  );
};

export default App;
