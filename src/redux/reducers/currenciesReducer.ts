import { RootState } from "redux/store";
import {
  CurrencyAction,
  CurrencyActionTypes,
  CurrencyState,
} from "redux/types/currency";

const initialState: CurrencyState = {
  current: "RUB",
  all: {
    RUB: {
      rate: 1,
      name: "RUB",
      symbol: "₽",
    },
    USD: {
      rate: 0.0165,
      name: "USD",
      symbol: "$",
    },
    EUR: {
      rate: 0.0165,
      name: "EUR",
      symbol: "€",
    },
  },
};

export const currencyReducer = (
  state = initialState,
  action: CurrencyAction
): CurrencyState => {
  switch (action.type) {
    case CurrencyActionTypes.SET_CURRENT_CURRENCY:
      return { ...state, current: action.payload };
    default:
      return state;
  }
};

export const selectCurrentCurrency = (state: RootState) => {
  const currencies = state.currency.all;
  const current = state.currency.current;

  return currencies[current];
};
