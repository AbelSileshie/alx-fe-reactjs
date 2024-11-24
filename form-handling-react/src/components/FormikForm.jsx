import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  termsAccepted: Yup.bool().oneOf(
    [true],
    "You must accept the terms and conditions"
  ),
});

const FormikForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    termsAccepted: false,
  };

  const handleSubmit = (values) => {
    console.log("Form submitted successfully!", values);
    // Handle form submission logic here
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className="p-6 bg-white shadow-md rounded w-80 mx-auto">
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-bold mb-2"
            >
              Username
            </label>
            <Field
              type="text"
              id="username"
              name="username"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <ErrorMessage
              name="username"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <ErrorMessage
              name="email"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <ErrorMessage
              name="password"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="mb-4">
            <label className="flex items-center">
              <Field type="checkbox" name="termsAccepted" className="mr-2" />
              <span className="text-gray-700">
                I agree to the{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  Terms and Conditions
                </a>
              </span>
            </label>
            <ErrorMessage
              name="termsAccepted"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
          >
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
