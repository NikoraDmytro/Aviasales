import { CurrencyAction, CurrencyActionTypes } from "redux/types/currency";

export const setCurrentCurrency = (currencyName: string): CurrencyAction => {
  return {
    payload: currencyName,
    type: CurrencyActionTypes.SET_CURRENT_CURRENCY,
  };
};
