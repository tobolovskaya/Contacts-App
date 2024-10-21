
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/operations';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(register(values));
  };

  return (
    <div>
      <h1>Register</h1>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label>Name</label>
            <Field name="name" type="text" />
          </div>
          <div>
            <label>Email</label>
            <Field name="email" type="email" />
          </div>
          <div>
            <label>Password</label>
            <Field name="password" type="password" />
          </div>
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterPage;
