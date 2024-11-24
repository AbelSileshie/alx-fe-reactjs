import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { validationSchema, initialValues, handleSubmit } from "./formikForm"; // Import validation and functions

const FormikForm = () => {
  return (
    <div className="form-container">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
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
      </Formik>
    </div>
  );
};

export default FormikForm;
