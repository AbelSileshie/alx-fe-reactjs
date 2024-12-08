import React, { useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "username") setUsername(value);
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
    if (name === "termsAccepted") setTermsAccepted(checked);
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!username) {
      newErrors.username = "Username is required!";
    }

    if (!email) {
      newErrors.email = "Email is required!";
    } else if (!validateEmail(email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!password) {
      newErrors.password = "Password is required!";
    } else if (!validatePassword(password)) {
      newErrors.password = "Password must be at least 8 characters long.";
    }

    if (!termsAccepted) {
      newErrors.termsAccepted = "You must accept the terms and conditions.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    console.log("Form Submitted Successfully!", {
      username,
      email,
      password,
      termsAccepted,
    });
    // Handle form submission logic here

    // Reset form fields after successful submission
    setUsername("");
    setEmail("");
    setPassword("");
    setTermsAccepted(false);
  };

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        onSubmit={handleSubmit}
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography>
          <Input
            size="lg"
            placeholder="John Doe"
            name="username"
            value={username}
            onChange={handleChange}
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          {errors.username && (
            <p className="text-red-500 text-sm mt-2">{errors.username}</p>
          )}
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            name="email"
            value={email}
            onChange={handleChange}
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-2">{errors.email}</p>
          )}
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            name="password"
            value={password}
            onChange={handleChange}
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-2">{errors.password}</p>
          )}
        </div>
        <Checkbox
          name="termsAccepted"
          checked={termsAccepted}
          onChange={handleChange}
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree to the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        {errors.termsAccepted && (
          <p className="text-red-500 text-sm mt-2">{errors.termsAccepted}</p>
        )}
        <Button type="submit" className="mt-6" fullWidth>
          Sign Up
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <a href="#" className="font-medium text-gray-900">
            Sign In
          </a>
        </Typography>
      </form>
    </Card>
  );
}
