import { object, string, ref } from "yup";

const Validation = object({
  email: string().email().required(),
  password: string().min(5).required(),
  confirmPassword: string()
    .min(5)
    .oneOf([ref("password")])
    .required(),
});

export default Validation;
