import React from "react";
import { Form, Formik } from "formik";

import { validationObject } from "./utils/validation";
import { InputField } from "components/Inputs/InputField";

import styles from "./BuyTicketForm.module.scss";

interface FormValues {
  email: string;
  phone: string;
  firstName: string;
  secondName: string;
  passportNumber: string;
}

const initialValues: FormValues = {
  email: "",
  phone: "",
  firstName: "",
  secondName: "",
  passportNumber: "",
};

export const BuyTicketForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationObject}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log(values);

        resetForm();
        setSubmitting(false);
      }}
    >
      <Form className={styles.ticketForm}>
        <h1 className={styles.formTitle}>Купить билет</h1>

        <div className={styles.formControlsBox}>
          <InputField
            name="firstName"
            type="text"
            placeholder="Имя"
            label="Имя"
          />
          <InputField
            name="secondName"
            type="text"
            label="Фамилия"
            placeholder="Фамилия"
          />

          <InputField
            name="phone"
            type="tel"
            label="Номер телефона"
            className={styles.fullWidthInput}
            placeholder="+380 (66)623-88-21"
          />

          <InputField
            name="email"
            type="email"
            label="Електронная почта"
            className={styles.fullWidthInput}
            placeholder="email@address.com"
          />
          <InputField
            type="text"
            name="passportNumber"
            label="Номер паспорта"
            placeholder="XXXXXXXXX"
            className={styles.passportNumberInput}
          />
        </div>

        <button className={styles.submitBtn} type="submit">
          Подтвердить
        </button>
      </Form>
    </Formik>
  );
};
