import React, { useEffect } from "react";
import { useTypedDispatch, useTypedSelector } from "redux/hooks";
import { fetchTickets } from "redux/actionCreators/fetchTickets";
import { selectTransfersFilters } from "redux/reducers/filtersReducer";

import { Loader } from "components/Loader";

import { ITicket } from "shared/models/ITicket";

interface Props {
  children: (tickets: ITicket[]) => React.ReactElement;
}

export const Wrapper = ({ children }: Props) => {
  const dispatch = useTypedDispatch();
  const transfers = useTypedSelector(selectTransfersFilters);
  const { tickets, loading, error } = useTypedSelector(
    (state) => state.tickets
  );

  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);

  tickets.sort((a, b) => a.price - b.price);

  let filteredTickets = tickets;

  if (transfers.length) {
    filteredTickets = tickets.filter((ticket) =>
      transfers.includes(ticket.stops)
    );
  }

  return (
    <div style={{ width: "700px" }}>
      {loading && <Loader />}
      {error && <h1>{error}</h1>}
      {children(filteredTickets)}
    </div>
  );
};
