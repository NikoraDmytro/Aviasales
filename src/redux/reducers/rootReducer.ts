import { combineReducers } from "@reduxjs/toolkit";

import { ticketReducer } from "./ticketReducer";
import { filterReducer } from "./filtersReducer";
import { currencyReducer } from "./currenciesReducer";

export const rootReducer = combineReducers({
  ticket: ticketReducer,
  filter: filterReducer,
  currency: currencyReducer,
});
