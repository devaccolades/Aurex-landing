import * as Yup from "yup";

export const baseSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name cannot be longer than 50 characters")
    .matches(/^[a-zA-Z ]+$/, "Name can only contain letters and spaces"),

  whatsapp: Yup.string()
    .required("Phone number is required")
    .transform((value) => value.replace(/[\s-]/g, ""))
    .matches(/^(\+?\d{1,3})?\d{10}$/, "Enter a valid Phone number"),

  email: Yup.string()
    .required("Email is required")
    .email("Enter a valid email address")
    .max(254, "Email is too long")
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
      "Enter a valid email with proper domain"
    ),
});

