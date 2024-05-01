import {useContext} from "react";
import {Context} from "../state/ContextProvider.tsx";
import {FlightCard} from "./flightCard.tsx";
import {Stack, Typography} from "@mui/material";
import {getReformattedDate, roundToTwoDecimalPlaces, getStopsText} from "../helpers/utils.ts";
import {exchangeRates} from "../state/constants.ts";

export const Flights = () => {

  const {tickets, currentCurrency, stopsCount} = useContext(Context)
  const sortedTickets = tickets.sort((a, b) => {
    return a.price - b.price
  })

  const filteredTickets = stopsCount.all ? sortedTickets : sortedTickets.filter((ticket) =>
    (ticket.stops === 0 && stopsCount.no) ||
    (ticket.stops === 1 && stopsCount.one) ||
    (ticket.stops === 2 && stopsCount.two) ||
    (ticket.stops === 3 && stopsCount.three))


  const ratio = currentCurrency === "rub" ? 1 : currentCurrency === "usd" ? 1 / exchangeRates.usd : 1 / exchangeRates.eur;
  const currencySymbol = currentCurrency === "rub" ? "₽" : currentCurrency === "usd" ? "$" : "€";


  return (
    <Stack direction="column" spacing={2} style={{paddingBottom: "20px", width: '700px'}}>
      {filteredTickets.length > 0 ? (
        filteredTickets.map((ticket) =>
          <FlightCard origin={ticket.origin} origin_name={ticket.origin_name} destination={ticket.destination}
                      destination_name={ticket.destination_name}
                      departure_date={getReformattedDate(ticket.departure_date)} departure_time={ticket.departure_time}
                      arrival_date={getReformattedDate(ticket.arrival_date)} arrival_time={ticket.arrival_time}
                      carrier={ticket.carrier} stops={getStopsText(ticket.stops)}
                      price={`${roundToTwoDecimalPlaces(ratio * ticket.price)}${currencySymbol}`}
          />
        )
      ) : (
        <Stack alignItems="center" justifyContent="center" style={{height: '100px'}}> <Typography fontSize="24px"
                                                                                                  color="darkgray">
          No flights available
        </Typography></Stack>
      )}
    </Stack>
  )
}
