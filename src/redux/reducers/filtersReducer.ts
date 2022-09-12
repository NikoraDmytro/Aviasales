import {
  FilterAction,
  FilterActionTypes,
  FilterState,
} from "./../types/filter";

const initialState: FilterState = {
  transfers: [],
};

export const filterReducer = (
  state = initialState,
  action: FilterAction
): FilterState => {
  switch (action.type) {
    case FilterActionTypes.TOGGLE_TRANSFER_FILTER:
      const index = state.transfers.indexOf(action.payload);

      if (index !== -1) {
        return {
          transfers: state.transfers.splice(index, 1),
        };
      }

      return { transfers: [...state.transfers, action.payload] };
    case FilterActionTypes.SET_ONE_TRANSFER_FILTER:
      return { transfers: [action.payload] };
    case FilterActionTypes.RESET_TRANSFER_FILTERS:
      return { transfers: [] };
    default:
      return state;
  }
};
