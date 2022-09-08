import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "redux/store";
import { TransferFilterPayload } from "redux/types/ActionPayloads";

import { NormalizedData } from "redux/types/NormalizedData";

interface FiltersState {
  transfers: NormalizedData<number>;
}

const initialState: FiltersState = {
  transfers: {
    ids: [],
    entries: {},
  },
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    toggleTransfersFilter: (state, action: TransferFilterPayload) => {
      const { id, value } = action.payload;

      if (id in state.transfers.entries) {
        delete state.transfers.entries[id];

        state.transfers.ids = state.transfers.ids.filter(
          (filterId) => filterId !== id
        );
        return;
      }

      state.transfers.ids.push(id);
      state.transfers.entries[id] = value;
    },
    setOneTransfersFilter: (state, action: TransferFilterPayload) => {
      const { id, value } = action.payload;

      state.transfers.entries = { [id]: value };
      state.transfers.ids = [id];
    },
    resetTransfersFilters: (state) => {
      state.transfers = initialState.transfers;
    },
  },
});

export const {
  toggleTransfersFilter,
  setOneTransfersFilter,
  resetTransfersFilters,
} = filtersSlice.actions;

export const selectTransfersFilters = (state: RootState) => {
  const ids = state.filters.transfers.ids;
  const filters = state.filters.transfers.entries;

  return ids.map((id) => filters[id]);
};

export default filtersSlice.reducer;
