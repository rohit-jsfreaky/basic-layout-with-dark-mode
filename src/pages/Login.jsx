import React from "react";
import FormInput from "../components/Form/FormInput";
import PasswordInput from "../components/Form/PasswordInput";
import SubmitButton from "../components/Form/SubmitButton";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup"

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({});

  const validationSchema = Yup.object({
    email:Yup.string().email("Invalid email format").required("Email feild is requrired"),
    password:Yup.string().required("Password is required")  
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await validationSchema.validate(formData,{abortEarly:false})
      console.log("login successfull")
    } catch (error) {
      const newError = {};
      error.inner.forEach((err) => {
        newError[err.path] = err.message;
      });
      setError(newError);
      console.log(newError)
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

  return  <section className="bg-gray-50 dark:bg-gray-900 p-3 min-h-screen">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 mt-16">
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
          Login to your account
        </h1>
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
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
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            <Link
              to={"/signup"}
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Forgot Password
            </Link>
          </p>
          {/* Submit Button */}
          <SubmitButton text="Login" />
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            New User{" "}
            <Link
              to={"/signup"}
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Signup here
            </Link>
          </p>
        </form>
      </div>
    </div>
  </div>
</section>;
};

export default Login;
