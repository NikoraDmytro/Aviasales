import React from "react";

import { Filter } from "components/Filter";

import { useTypedDispatch, useTypedSelector } from "redux/hooks";

import styles from "./TransfersFilter.module.scss";
import { toggleTransferFilter } from "redux/actionCreators/toggleTransferFilter";
import { setOneTransferFilter } from "redux/actionCreators/setOneTransferFilter";
import { resetTransferFilters } from "redux/actionCreators/resetTransferFilters";

const filters = [
  { id: "noTransfers", value: 0, label: "Без пересадок" },
  { id: "oneTransfers", value: 1, label: "1 пересадка" },
  { id: "twoTransfers", value: 2, label: "2 пересадки" },
  { id: "threeTransfers", value: 3, label: "3 пересадки" },
];

export const TransfersFilters = () => {
  const dispatch = useTypedDispatch();

  const activeFilters = useTypedSelector((state) => state.filter.transfers);

  return (
    <>
      <h2 className={styles.inputGroupTitle}>Количество пересадок</h2>

      <div className={styles.filtersContainer}>
        <Filter
          label="Все"
          id="allTransfers"
          checked={!activeFilters.length}
          toggle={() => dispatch(resetTransferFilters())}
        />

        {filters.map((filter) => (
          <Filter
            {...filter}
            key={filter.id}
            checked={activeFilters.includes(filter.value)}
            toggle={() => dispatch(toggleTransferFilter(filter.value))}
            pickOnly={() => dispatch(setOneTransferFilter(filter.value))}
          />
        ))}
      </div>
    </>
  );
};
