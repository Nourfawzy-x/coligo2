import * as yup from "yup";
export const userValidationSchema = yup.object().shape({
  name: yup
    .string()
    .required("Full name is required")
    .min(3, "Full name should be at least 3 characters long")
    .max(25, "Full name should not exceed 25 characters"),

  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),

  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password should be at least 6 characters long"),
  age: yup
    .number()
    .min(6, "age must be more than 6 years")
    .max(21, "age must be less than 21 years")
    .required("age is required"),
});
