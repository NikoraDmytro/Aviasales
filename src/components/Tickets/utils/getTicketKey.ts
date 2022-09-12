import { ITicket } from "shared/models/ITicket";

export const getTicketKey = (ticket: ITicket) =>
  ticket.destination +
  ticket.departure_date +
  ticket.departure_time +
  ticket.arrival_date +
  ticket.arrival_time;
