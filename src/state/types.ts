type CurrenciesType = 'rub' | 'usd' | 'eur'

type TransfersType = "0" | "1" | "2" | "3" | "all"

type TicketType = {
  "origin": string,
  "origin_name": string,
  "destination": string,
  "destination_name": string,
  "departure_date": string,
  "departure_time": string,
  "arrival_date": string,
  "arrival_time": string,
  "carrier": string,
  "stops": null,
  "price": number,
}