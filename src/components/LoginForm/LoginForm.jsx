import { Field, Form, Formik } from 'formik';
import css from './LoginForm.module.css';

const LoginForm = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      //   onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Email
          <Field type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
};
export default LoginForm;
