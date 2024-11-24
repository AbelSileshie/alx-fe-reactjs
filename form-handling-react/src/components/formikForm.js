import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
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

export const initialValues = {
  username: "",
  email: "",
  password: "",
  termsAccepted: false,
};

export const handleSubmit = (values) => {
  console.log("Form submitted successfully!", values);
};
