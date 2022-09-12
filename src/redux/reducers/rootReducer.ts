import { combineReducers } from "@reduxjs/toolkit";

import currenciesReducer from "./currenciesReducer";
import { ticketReducer } from "./ticketReducer";
import { filterReducer } from "./filtersReducer";

export const rootReducer = combineReducers({
  ticket: ticketReducer,
  filter: filterReducer,
  currency: currenciesReducer,
});
