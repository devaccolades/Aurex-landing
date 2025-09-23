import * as Yup from "yup";

export const baseSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),

  whatsapp: Yup.string()
    .required("WhatsApp number is required")
    .matches(/^\d{10,15}$/, "Enter a valid number (10–15 digits)"),

  email: Yup.string()
    .required("Email is required")
    .email("Enter a valid email"),
});

// Project form schema extends base
export const projectFormSchema = baseSchema.shape({
  project: Yup.string().required("Please select a project"),
});