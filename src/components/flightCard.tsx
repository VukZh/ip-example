import {Button, Divider, Stack, Typography} from "@mui/material";
import Card from "@mui/material/Card";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import su from "../assets/su.png";
import s7 from "../assets/s7.png";
import tk from "../assets/tk.png";
import ba from "../assets/ba.png";
import style from "./flightCard.module.css";
import {FC} from "react";
import {TicketType} from "../state/types.ts";

type FlightCardType = Omit<TicketType, "price" | "stops"> & { price: string; stops: string }

export const FlightCard: FC<FlightCardType> = ({
                                                 origin,
                                                 origin_name,
                                                 destination,
                                                 destination_name,
                                                 departure_date,
                                                 departure_time,
                                                 arrival_date,
                                                 arrival_time,
                                                 carrier,
                                                 stops,
                                                 price,
                                               }) => {

  const currentCarrierImg = carrier === "S7" ? s7 : carrier === "TK" ? tk : carrier === "BA" ? ba : su;

  return (
    <Card sx={{width: "740px", height: "183px"}}>
      <Stack direction="row" spacing={0}>
        <Stack direction="column" style={{margin: "16px"}} spacing={2}>
          <img src={currentCarrierImg} alt="carrier"/>
          <Button variant="contained" color="warning" style={{fontSize: "large", cursor: "pointer"}} onClick={() => {
            console.log(`buy a ticket from ${origin} to ${destination} at a price of ${price}`);
          }}>
            Купить <br/>
            за {price}
          </Button>
        </Stack>
        <Divider orientation="vertical" flexItem/>
        <Stack direction="row" spacing={2} justifyContent="space-between" style={{width: "100%"}}>
          <Stack direction="column" style={{margin: "16px"}}>
            <Typography fontSize="36px" color="dimgray">
              {departure_time}
            </Typography>
            <Typography fontSize="14px" color="dimgray" style={{fontWeight: "bold"}} className={style.place}>
              {origin}, {origin_name}
            </Typography>
            <Typography fontSize="14px" color="dimgray">
              {departure_date}
            </Typography>
          </Stack>
          <div>
            <Typography fontSize="12px" color="dimgray" style={{marginTop: "18px", textAlign: "center"}}>
              {stops}
            </Typography>
            <hr className={style.vertLine}/>
            <AirplanemodeActiveIcon fontSize="small" className={style.airplane} style={{color: "dimgray"}}/>
          </div>
          <Stack direction="column" style={{margin: "16px"}} alignItems="flex-end">
            <Typography fontSize="36px" color="dimgray">
              {arrival_time}
            </Typography>
            <Typography fontSize="14px" color="dimgray" style={{fontWeight: "bold", textAlign: "right"}}
                        className={style.place}>
              {destination}, {destination_name}
            </Typography>
            <Typography fontSize="14px" color="dimgray">
              {arrival_date}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
};