import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Importing the eye icons from react-icons
import * as Yup from "yup";
import FormInput from "../components/Form/FormInput";
import PasswordInput from "../components/Form/PasswordInput";
import CheckboxInput from "../components/Form/CheckboxInput";
import SubmitButton from "../components/Form/SubmitButton";
import { loginSchema } from "../utils/FormValidationSchema";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  const [error, setError] = useState({});


 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginSchema.validate(formData, { abortEarly: false });
      console.log("form submitted");
      console.log(formData);
    } catch (error) {
      const newError = {};
      error.inner.forEach((err) => {
        newError[err.path] = err.message;
      });
      setError(newError);
    }
  };

  const handleChange = (e) => {
    setError({})
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 min-h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto mt-16 lg:py-0">
        <Link
          
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Brand Name
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              {/* Username */}
              <FormInput
                label="Username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                error={error.username}
                placeholder="your name"
              />

              {/* Email */}
              <FormInput
                label="Your email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={error.email}
                placeholder="name@company.com"
              />

              {/* Password */}
              <PasswordInput
                label="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                error={error.password}
                placeholder="••••••••"
              />

              {/* Confirm Password */}
              <PasswordInput
                label="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                error={error.confirmPassword}
                placeholder="••••••••"
              />

              {/* Terms and Conditions */}
              <div className="flex items-start">
                <CheckboxInput
                  label="I accept the Terms and Conditions"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  error={error.termsAccepted}
                />
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <a
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                  {error.termsAccepted && (
                    <div className="text-red-600 text-xs mt-2">
                      {error.termsAccepted}
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <SubmitButton text="Create an account" />
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to={"/login"}
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
