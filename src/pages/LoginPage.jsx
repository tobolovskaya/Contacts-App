import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { logIn } from "../redux/auth/operations";

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = (credentials) => {
    dispatch(logIn(credentials));
  };

  return (
    <div>
      <h2>Login</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleLogin}
      >
        <Form>
          <div>
            <label>Email</label>
            <Field name="email" type="email" />
          </div>
          <div>
            <label>Password</label>
            <Field name="password" type="password" />
          </div>
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
