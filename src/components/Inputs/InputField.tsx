import { InputHTMLAttributes } from "react";
import { useField } from "formik";
import classNames from "classnames";

import styles from "./InputField.module.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export const InputField = ({ name, label, ...props }: Props) => {
  const [field, meta] = useField(name);

  const className = classNames(styles.inputField, {
    [styles.invalid]: meta.touched && meta.error,
    [styles.valid]: meta.value && !meta.error,
  });

  return (
    <div className={className}>
      <label htmlFor={props.id || name}>{label}</label>
      <input {...field} {...props} id={props.id || name} />
    </div>
  );
};
