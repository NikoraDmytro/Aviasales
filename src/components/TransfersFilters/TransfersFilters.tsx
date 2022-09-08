import React from "react";
import {
  resetTransfersFilters,
  setOneTransfersFilter,
  toggleTransfersFilter,
} from "redux/reducers/filtersReducer";

import { Filter } from "components/Filter";

import { useTypedDispatch, useTypedSelector } from "redux/hooks";

import styles from "./TransfersFilter.module.scss";

export const TransfersFilters = () => {
  const dispatch = useTypedDispatch();

  const filters = useTypedSelector((state) => state.filters.transfers);

  const renderFilter = (id: string, value: number, label: string) => (
    <Filter
      id={id}
      label={label}
      checked={id in filters.entries}
      toggle={() => dispatch(toggleTransfersFilter({ id, value }))}
      pickOnly={() => dispatch(setOneTransfersFilter({ id, value }))}
    />
  );

  const resetFilters = () => dispatch(resetTransfersFilters());

  return (
    <>
      <h2 className={styles.inputGroupTitle}>Количество пересадок</h2>

      <div className={styles.filtersContainer}>
        <Filter
          label="Все"
          id="allTransfers"
          checked={!filters.ids.length}
          toggle={() => dispatch(resetFilters())}
        />
        {renderFilter("noTransfers", 0, "Без пересадок")}
        {renderFilter("oneTransfers", 1, "1 пересадка")}
        {renderFilter("twoTransfers", 2, "2 пересадки")}
        {renderFilter("threeTransfers", 3, "3 пересадки")}
      </div>
    </>
  );
};
