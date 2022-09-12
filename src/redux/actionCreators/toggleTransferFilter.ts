import { FilterAction, FilterActionTypes } from "redux/types/filter";

export const toggleTransferFilter = (transfersCount: number): FilterAction => {
  return {
    type: FilterActionTypes.TOGGLE_TRANSFER_FILTER,
    payload: transfersCount,
  };
};
