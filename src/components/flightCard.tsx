import {Button, Divider, Stack, Typography} from "@mui/material";
import Card from "@mui/material/Card";
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import su from '../assets/su.png'
import s7 from '../assets/s7.png'
import tk from '../assets/tk.png'
import ba from '../assets/ba.png'
import style from './flightCard.module.css'
import {Context} from "../state/ContextProvider.tsx";
import {useContext} from "react";
import {getDate, reformattedDate} from "../helpers/utils.ts";

export const FlightCard = () => {

  const currentCarrierImg = s7

  const {tickets} = useContext(Context);
  tickets.map((t) => {
    const day = getDate(t.arrival_date);
    console.log("d", day)
    const dd = reformattedDate(day);
    console.log("dd", dd)
  });

  return (
    <Card sx={{width: '700px'}}>
      <Stack direction="row">
        <Stack direction="column" style={{margin: '16px'}} spacing={2}>
          <img src={currentCarrierImg} alt="s7"/>
          <Button variant="contained" color="warning" style={{fontSize: "large"}}>
            Купить <br/>
            за 12345Р
          </Button>
        </Stack>
        <Divider orientation="vertical" flexItem/>
        <Stack direction="row" spacing={2} justifyContent="space-between" style={{width: '100%'}}>
          <Stack direction="column" style={{margin: '16px'}}>
            <Typography fontSize="36px" color="darkgray">
              TIME
            </Typography>
            <Typography fontSize="24px" color="darkgray">
              Place
            </Typography>
            <Typography fontSize="16px" color="gray">
              Time
            </Typography>
          </Stack>
          <div>
            <Typography fontSize="16px" color="gray" style={{marginTop: '18px', textAlign: 'center'}}>
              2 пересадки
            </Typography>
            <hr className={style.vertLine}/>
            <AirplanemodeActiveIcon fontSize="small" className={style.airplane}/>
          </div>
          <Stack direction="column" style={{margin: '16px'}} alignItems="flex-end">
            <Typography fontSize="36px" color="darkgray">
              TIME
            </Typography>
            <Typography fontSize="24px" color="darkgray">
              Place
            </Typography>
            <Typography fontSize="16px" color="gray">
              Time
            </Typography>
          </Stack>
        </Stack>
      </Stack>

    </Card>
  );
}