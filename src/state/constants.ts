import * as tickets from './tickets.json';

export const exchangeRates = {
  usd: 92.3,
  eur: 98.7
}

const data = tickets as unknown as { tickets: Array<TicketType> };

export const ticketsData = data.tickets;
