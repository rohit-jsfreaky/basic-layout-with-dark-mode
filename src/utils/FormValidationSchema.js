import * as Yup from "yup"

export  const loginSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one symbol"
      )
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter"),
    confirmPassword: Yup.string()
      .oneOf(
        [Yup.ref("password")],
        "Confirm Password must be the same as password"
      )
      .required("Confirm password is required"),
    termsAccepted: Yup.bool().oneOf(
      [true],
      "You must accept the terms and conditions"
    ),
  });