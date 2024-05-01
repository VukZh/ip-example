import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import styles from './seetings.module.css';
import {Button, ButtonGroup, Checkbox, FormControlLabel, FormGroup, Typography} from "@mui/material";
import {blue} from "@mui/material/colors";
import {
  CheckBoxOutlineBlank,
  CheckBoxTwoTone
} from '@mui/icons-material';
import {useContext} from "react";
import {Context, IStopsCount} from "../state/ContextProvider.tsx";
import {updateStopsSettings} from "../helpers/utils.ts";


export const Settings = () => {

  const {currentCurrency, setCurrentCurrency, stopsCount, setStopsCount} = useContext(Context);
  const stopsHandler = (fieldName: keyof IStopsCount, value: boolean, only: boolean, stops: IStopsCount) => {
    const newStops = updateStopsSettings(fieldName, value, only, stops);
    setStopsCount(newStops)
  }

  return (
    <Card sx={{width: '300px', maxHeight: '400px', position: 'sticky', top: '20px'}}>
      <CardContent>
        <Typography sx={{fontSize: 16, fontWeight: 'bold', marginBottom: '10px'}} color="darkgray">
          ВАЛЮТА
        </Typography>
        <ButtonGroup>
          <Button key="rub" style={{fontWeight: 'bold', border: '1px solid lightgray', width: '90px'}}
                  className={true && styles.buttonActive} variant={currentCurrency === 'rub' ? "contained" : "outlined"}
                  onClick={() => setCurrentCurrency('rub')}>Rub</Button>,
          <Button key="usd" style={{fontWeight: 'bold', border: '1px solid lightgray', width: '90px'}}
                  className={styles.button} variant={currentCurrency === 'usd' ? "contained" : "outlined"}
                  onClick={() => setCurrentCurrency('usd')}>Usd</Button>,
          <Button key="eur" style={{fontWeight: 'bold', border: '1px solid lightgray', width: '90px'}}
                  className={styles.button} variant={currentCurrency === 'eur' ? "contained" : "outlined"}
                  onClick={() => setCurrentCurrency('eur')}>Eur</Button>,
        </ButtonGroup>
        <Typography sx={{fontSize: 16, fontWeight: 'bold', marginTop: '10px'}} color="darkgray">
          КОЛИЧЕСТВО ПЕРЕСАДОК
        </Typography>

        <FormGroup>

          <FormControlLabel control={<Checkbox icon={<CheckBoxOutlineBlank color='primary'/>}
                                               checkedIcon={<CheckBoxTwoTone color='primary'/>} size="large" sx={{
            color: blue[800],
          }} checked={stopsCount.all} onChange={e => stopsHandler('all', e.target.checked, false, stopsCount)}/>}
                            label="Все" sx={{
            color: "darkgray", fontSize: 16, fontWeight: 'bold',
          }} className={styles.checkbox}/>
          <FormControlLabel control={<Checkbox icon={<CheckBoxOutlineBlank color='primary'/>}
                                               checkedIcon={<CheckBoxTwoTone color='primary'/>} size="large" sx={{
            color: blue[800],
          }} checked={stopsCount.no} onChange={e => stopsHandler('no', e.target.checked, false, stopsCount)}/>}
                            label="Без пересадок" sx={{
            color: "darkgray", fontSize: 16, fontWeight: 'bold',
          }} className={styles.checkbox}/>
          <FormControlLabel control={<Checkbox icon={<CheckBoxOutlineBlank color='primary'/>}
                                               checkedIcon={<CheckBoxTwoTone color='primary'/>} size="large" sx={{
            color: blue[800],
          }} checked={stopsCount.one} onChange={e => stopsHandler('one', e.target.checked, false, stopsCount)}/>}
                            label="1 пересадка" sx={{
            color: "darkgray", fontSize: 16, fontWeight: 'bold',
          }} className={styles.checkbox}/>
          <FormControlLabel control={<Checkbox icon={<CheckBoxOutlineBlank color='primary'/>}
                                               checkedIcon={<CheckBoxTwoTone color='primary'/>} size="large" sx={{
            color: blue[800],
          }} checked={stopsCount.two} onChange={e => stopsHandler('two', e.target.checked, false, stopsCount)}/>}
                            label="2 пересадки" sx={{
            color: "darkgray", fontSize: 16, fontWeight: 'bold',
          }} className={styles.checkbox}/>
          <FormControlLabel control={<Checkbox icon={<CheckBoxOutlineBlank color='primary'/>}
                                               checkedIcon={<CheckBoxTwoTone color='primary'/>} size="large" sx={{
            color: blue[800],
          }} checked={stopsCount.three} onChange={e => stopsHandler('three', e.target.checked, false, stopsCount)}/>}
                            label="3 пересадки" sx={{
            color: "darkgray", fontSize: 16, fontWeight: 'bold',
          }} className={styles.checkbox}/>

        </FormGroup>
      </CardContent>
    </Card>
  );
}

