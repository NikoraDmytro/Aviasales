import {
  FilterActionTypes,
  setOneTransferFilterAction,
} from "redux/types/filter";

export const setOneTransferFilter = (
  transfersCount: number
): setOneTransferFilterAction => {
  return {
    type: FilterActionTypes.SET_ONE_TRANSFER_FILTER,
    payload: transfersCount,
  };
};
