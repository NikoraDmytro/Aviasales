import { FilterAction, FilterActionTypes } from "redux/types/filter";

export const resetTransferFilters = (): FilterAction => {
  return {
    type: FilterActionTypes.RESET_TRANSFER_FILTERS,
  };
};
