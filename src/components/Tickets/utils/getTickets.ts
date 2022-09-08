import jsonTickets from "shared/tickets.json";

import { ITicket } from "shared/models/ITicket";

export const getTickets = (transfersCount: number[]): ITicket[] => {
  const jsonString = JSON.stringify(jsonTickets);

  const tickets: ITicket[] = JSON.parse(jsonString);

  tickets.sort((a, b) => a.price - b.price);

  if (!transfersCount.length) {
    return tickets;
  }

  return tickets.filter((ticket) => transfersCount.includes(ticket.stops));
};
