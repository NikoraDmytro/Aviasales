import {
  FilterActionTypes,
  resetTransfersFiltersAction,
} from "redux/types/filter";

export const resetTransferFilters = (): resetTransfersFiltersAction => {
  return {
    type: FilterActionTypes.RESET_TRANSFER_FILTERS,
  };
};
