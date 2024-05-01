export type CurrenciesType = "rub" | "usd" | "eur"

export type TransfersType = "0" | "1" | "2" | "3" | "all"

export type TicketType = {
  "origin": string,
  "origin_name": string,
  "destination": string,
  "destination_name": string,
  "departure_date": string,
  "departure_time": string,
  "arrival_date": string,
  "arrival_time": string,
  "carrier": string,
  "stops": number,
  "price": number,
}