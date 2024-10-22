import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { login } from '../redux/auth/operations';
import { selectIsLoggedIn } from '../redux/auth/selectors';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  const handleLogin = (credentials) => {
    dispatch(login(credentials));
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/contacts'); 
    }
  }, [isLoggedIn, navigate]);

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
      </form>
    </div>
  );
};

export default LoginPage;

