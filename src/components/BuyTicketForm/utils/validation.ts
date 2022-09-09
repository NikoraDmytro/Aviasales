import * as Yup from "yup";

export const validationObject = Yup.object({
  firstName: Yup.string().required(),
  secondName: Yup.string().required(),
  phone: Yup.string()
    .matches(
      /^[+]?\d{1,4}[-\s.]?[(]?[0-9]{2}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{2}[-\s.]?[0-9]{2}$/
    )
    .required(),
  email: Yup.string().email().required(),
  passportNumber: Yup.string()
    .matches(/^\d{9}$/)
    .required(),
});
