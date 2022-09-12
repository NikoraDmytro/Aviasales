import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ICurrency } from "shared/models/ICurrency";

import { RootState } from "redux/store";

interface CurrenciesState {
  current: string;
  all: { [name: string]: ICurrency };
}

const initialState: CurrenciesState = {
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

export const currenciesSlice = createSlice({
  name: "currencies",
  initialState,
  reducers: {
    setCurrentCurrency: (state, action: PayloadAction<string>) => {
      const name = action.payload;

      if (name in state.all) {
        state.current = name;
      }
    },
  },
});

export const { setCurrentCurrency } = currenciesSlice.actions;

export const selectCurrentCurrency = (state: RootState) => {
  const currencies = state.currency.all;
  const current = state.currency.current;

  return currencies[current];
};

export default currenciesSlice.reducer;
