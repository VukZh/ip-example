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
import {Context} from "../state/ContextProvider.tsx";


export const Settings = () => {

  const {currentCurrency, setCurrentCurrency} = useContext(Context);
  console.log("...", currentCurrency)

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
          }}/>} label="Все" sx={{
            color: "darkgray", fontSize: 16, fontWeight: 'bold',
          }} className={styles.checkbox}/>
          <FormControlLabel control={<Checkbox icon={<CheckBoxOutlineBlank color='primary'/>}
                                               checkedIcon={<CheckBoxTwoTone color='primary'/>} size="large" sx={{
            color: blue[800],
          }}/>} label="Без пересадок" sx={{
            color: "darkgray", fontSize: 16, fontWeight: 'bold',
          }} className={styles.checkbox}/>
          <FormControlLabel control={<Checkbox icon={<CheckBoxOutlineBlank color='primary'/>}
                                               checkedIcon={<CheckBoxTwoTone color='primary'/>} size="large" sx={{
            color: blue[800],
          }}/>} label="1 пересадка" sx={{
            color: "darkgray", fontSize: 16, fontWeight: 'bold',
          }} className={styles.checkbox}/>
          <FormControlLabel control={<Checkbox icon={<CheckBoxOutlineBlank color='primary'/>}
                                               checkedIcon={<CheckBoxTwoTone color='primary'/>} size="large" sx={{
            color: blue[800],
          }}/>} label="2 пересадки" sx={{
            color: "darkgray", fontSize: 16, fontWeight: 'bold',
          }} className={styles.checkbox}/>
          <FormControlLabel control={<Checkbox icon={<CheckBoxOutlineBlank color='primary'/>}
                                               checkedIcon={<CheckBoxTwoTone color='primary'/>} size="large" sx={{
            color: blue[800],
          }}/>} label="3 пересадки" sx={{
            color: "darkgray", fontSize: 16, fontWeight: 'bold',
          }} className={styles.checkbox}/>

        </FormGroup>
      </CardContent>
    </Card>
  );
}

