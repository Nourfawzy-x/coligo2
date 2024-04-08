import * as yup from "yup";
export const loginSchemaValidation = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),

  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password should be at least 6 characters long"),
});
