
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/operations';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(logIn(values));
  };

  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
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
          <button type="submit">Log In</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
