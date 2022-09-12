import { Dispatch } from "react";
import { TicketAction, TicketActionTypes } from "redux/types/ticket";

import tickets from "shared/tickets.json";

export const fetchTickets = () => {
  return async (dispatch: Dispatch<TicketAction>) => {
    try {
      dispatch({ type: TicketActionTypes.FETCH_TICKETS });

      setTimeout(() => {
        dispatch({
          type: TicketActionTypes.FETCH_TICKETS_SUCCESS,
          payload: tickets,
        });
      }, 500);
    } catch (e) {
      console.log(e);

      dispatch({
        type: TicketActionTypes.FETCH_TICKETS_FAILED,
        payload: "Произошла ошибка при загрузке билетов",
      });
    }
  };
};
