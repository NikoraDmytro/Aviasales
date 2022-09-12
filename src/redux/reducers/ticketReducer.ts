import {
  TicketAction,
  TicketActionTypes,
  TicketState,
} from "redux/types/ticket";

const initialState: TicketState = {
  tickets: [],
  loading: false,
  error: null,
};

export const ticketReducer = (
  state = initialState,
  action: TicketAction
): TicketState => {
  switch (action.type) {
    case TicketActionTypes.FETCH_TICKETS:
      return { loading: true, tickets: [], error: null };
    case TicketActionTypes.FETCH_TICKETS_SUCCESS:
      return { loading: false, tickets: action.payload, error: null };
    case TicketActionTypes.FETCH_TICKETS_FAILED:
      return { loading: false, tickets: [], error: action.payload };
    default:
      return state;
  }
};
