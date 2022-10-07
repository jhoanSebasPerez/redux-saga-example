import React from "react";
import { Formik, Form, Field } from "formik";

const LoginForm = ({ login }) => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={async (values) => {
        console.log(values);
        login(values.email, values.password);
      }}
    >
      <Form>
        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <label htmlFor="password">Password</label>
        <Field
          type="password"
          id="password"
          name="password"
          placeholder="*******"
        />

        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
