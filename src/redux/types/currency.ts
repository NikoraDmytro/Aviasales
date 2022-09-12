import { ICurrency } from "shared/models/ICurrency";

export interface CurrencyState {
  current: string;
  all: { [name: string]: ICurrency };
}

export enum CurrencyActionTypes {
  SET_CURRENT_CURRENCY = "SET_CURRENT_CURRENCY",
}

export type CurrencyAction = {
  type: CurrencyActionTypes.SET_CURRENT_CURRENCY;
  payload: string;
};
