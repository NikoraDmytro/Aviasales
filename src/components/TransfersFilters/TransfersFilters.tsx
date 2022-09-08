import React from "react";
import {
  resetTransfersFilters,
  setOneTransfersFilter,
  toggleTransfersFilter,
} from "redux/reducers/filtersReducer";

import { Filter } from "components/Filter";

import { useTypedDispatch, useTypedSelector } from "redux/hooks";

import styles from "./TransfersFilter.module.scss";

const filters = [
  { id: "noTransfers", value: 0, label: "Без пересадок" },
  { id: "oneTransfers", value: 1, label: "1 пересадка" },
  { id: "twoTransfers", value: 2, label: "2 пересадки" },
  { id: "threeTransfers", value: 3, label: "3 пересадки" },
];

export const TransfersFilters = () => {
  const dispatch = useTypedDispatch();

  const activeFilters = useTypedSelector((state) => state.filters.transfers);

  const toggleFilter = (id: string, value: number) => () =>
    dispatch(toggleTransfersFilter({ id, value }));
  const setOneFilter = (id: string, value: number) => () =>
    dispatch(setOneTransfersFilter({ id, value }));
  const resetFilters = () => dispatch(resetTransfersFilters());

  return (
    <>
      <h2 className={styles.inputGroupTitle}>Количество пересадок</h2>

      <div className={styles.filtersContainer}>
        <Filter
          label="Все"
          id="allTransfers"
          checked={!activeFilters.ids.length}
          toggle={() => dispatch(resetFilters())}
        />

        {filters.map((filter) => (
          <Filter
            id={filter.id}
            key={filter.id}
            label={filter.label}
            checked={filter.id in activeFilters.entries}
            toggle={toggleFilter(filter.id, filter.value)}
            pickOnly={setOneFilter(filter.id, filter.value)}
          />
        ))}
      </div>
    </>
  );
};
