import { combineReducers } from "@reduxjs/toolkit";

import currenciesReducer from "./currenciesReducer";
import filtersReducer from "./filtersReducer";
import { ticketReducer } from "./ticketReducer";

export const rootReducer = combineReducers({
  tickets: ticketReducer,
  filters: filtersReducer,
  currencies: currenciesReducer,
});
