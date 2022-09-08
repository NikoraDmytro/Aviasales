import { configureStore } from "@reduxjs/toolkit";

import filtersReducer from "./reducers/filtersReducer";
import currenciesReducer from "./reducers/currenciesReducer";

/* export const token = "5i2UwX558hLbZ5JzZ68Z2P5xq46mawOP";
 */

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    currencies: currenciesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
