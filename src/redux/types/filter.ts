export interface FilterState {
  transfers: number[];
}

export enum FilterActionTypes {
  TOGGLE_TRANSFER_FILTER = "TOGGLE_TRANSFER_FILTER",
  RESET_TRANSFER_FILTERS = "RESET_TRANSFER_FILTERS",
  SET_ONE_TRANSFER_FILTER = "SET_ONE_TRANSFER_FILTER",
}

export type toggleTransferFilterAction = {
  type: FilterActionTypes.TOGGLE_TRANSFER_FILTER;
  payload: number;
};
export type setOneTransferFilterAction = {
  type: FilterActionTypes.SET_ONE_TRANSFER_FILTER;
  payload: number;
};
export type resetTransfersFiltersAction = {
  type: FilterActionTypes.RESET_TRANSFER_FILTERS;
};

export type FilterAction =
  | toggleTransferFilterAction
  | setOneTransferFilterAction
  | resetTransfersFiltersAction;
