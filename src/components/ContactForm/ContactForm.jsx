import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations.js";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, TextField, Box } from "@mui/material";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = { name: "", number: "" };

  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(/^[A-Za-zА-Яа-яЁёІіЇїЄє\s]+$/, "Letters and spaces only")
      .min(3, "Must be at least 3 characters")
      .max(50, "Must be 50 characters or less")
      .required("Required"),
    number: Yup.string()
      .matches(/^[\d-]+$/, "Digits only")
      .min(3, "Must be at least 3 digits")
      .max(50, "Must be 50 digits or less")
      .required("Required"),
  });

  const onSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className={styles.formContainer}>
        <Box className={styles.inputGroup}>
          <Field name="name">
            {({ field }) => (
              <TextField
                label="Name"
                variant="outlined"
                {...field}
                className={styles.textField}
              />
            )}
          </Field>
          <ErrorMessage
            name="name"
            component="div"
            className={styles.errorMessage}
          />

          <Field name="number">
            {({ field }) => (
              <TextField
                label="Number"
                variant="outlined"
                {...field}
                className={styles.textField}
              />
            )}
          </Field>
          <ErrorMessage
            name="number"
            component="div"
            className={styles.errorMessage}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={styles.submitButton}
          >
            Add contact
          </Button>
        </Box>
      </Form>
    </Formik>
  );
};

export default ContactForm;