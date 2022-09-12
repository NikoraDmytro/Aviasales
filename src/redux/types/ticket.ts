import { ITicket } from "shared/models/ITicket";

export interface TicketState {
  tickets: ITicket[];
  loading: boolean;
  error: null | string;
}

export enum TicketActionTypes {
  FETCH_TICKETS = "FETCH_TICKETS",
  FETCH_TICKETS_FAILED = "FETCH_TICKETS_FAILED",
  FETCH_TICKETS_SUCCESS = "FETCH_TICKETS_SUCCESS",
}

export type FetchTicketsAction = {
  type: TicketActionTypes.FETCH_TICKETS;
};

export type FetchTicketsSuccessAction = {
  type: TicketActionTypes.FETCH_TICKETS_SUCCESS;
  payload: ITicket[];
};

export type FetchTicketsFailedAction = {
  type: TicketActionTypes.FETCH_TICKETS_FAILED;
  payload: string;
};

export type TicketAction =
  | FetchTicketsAction
  | FetchTicketsFailedAction
  | FetchTicketsSuccessAction;
