import {
  FilterActionTypes,
  toggleTransferFilterAction,
} from "redux/types/filter";

export const toggleTransferFilter = (
  transfersCount: number
): toggleTransferFilterAction => {
  return {
    type: FilterActionTypes.TOGGLE_TRANSFER_FILTER,
    payload: transfersCount,
  };
};
