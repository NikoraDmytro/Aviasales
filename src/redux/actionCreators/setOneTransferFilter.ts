import { FilterAction, FilterActionTypes } from "redux/types/filter";

export const setOneTransferFilter = (transfersCount: number): FilterAction => {
  return {
    type: FilterActionTypes.SET_ONE_TRANSFER_FILTER,
    payload: transfersCount,
  };
};
