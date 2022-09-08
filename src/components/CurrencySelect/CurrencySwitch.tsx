import React from "react";
import { useTypedSelector, useTypedDispatch } from "redux/hooks";
import { setCurrentCurrency } from "redux/reducers/currenciesReducer";

import styles from "./CurrencySelect.module.scss";

interface CurrencyProps {
  name: string;
  checked: boolean;
}

const Currency = ({ name, checked }: CurrencyProps) => {
  const dispatch = useTypedDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currencyName = e.target.value;

    dispatch(setCurrentCurrency(currencyName));
  };

  return (
    <>
      <input
        id={name}
        type="radio"
        value={name}
        name="currency"
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor={name}>{name}</label>
    </>
  );
};

export const CurrencySwitch = () => {
  const { all, current } = useTypedSelector((state) => state.currencies);

  const currencies = Object.values(all);

  return (
    <>
      <h2 className={styles.inputGroupTitle}>Валюта</h2>

      <div className={styles.switchBox}>
        {currencies.map(({ name }) => (
          <Currency key={name} name={name} checked={current === name} />
        ))}
      </div>
    </>
  );
};
