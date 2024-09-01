import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .max(50, 'Must be less than 50 characters')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .max(50, 'Must be less than 50 characters')
    .required('Required'),
});

const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    onSubmit(values.name, values.number);
    setSubmitting(false);
    resetForm();
  };

  return (
    <div>
      <h2>Add contact</h2>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {formik => (
          <Form className={styles.form}>
            <div className={styles.field}>
              <label htmlFor="name">Name</label>
              <Field name="name" type="text" />
              <ErrorMessage
                name="name"
                component="div"
                className={styles.error}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="number">Number</label>
              <Field name="number" type="text" />
              <ErrorMessage
                name="number"
                component="div"
                className={styles.error}
              />
            </div>
            <button
              type="submit"
              className={styles.addButton}
              disabled={formik.isSubmitting}
            >
              Add contact
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
