import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import styles from './seetings.module.css';
import {Button, ButtonGroup, Checkbox, FormControlLabel, FormGroup, Typography} from "@mui/material";
import {blue} from "@mui/material/colors";


export const Settings = () => {
  return (
    <Card sx={{width: '300px'}}>
      <CardContent>
        <Typography sx={{fontSize: 16, fontWeight: 'bold', marginBottom: '10px'}} color="darkgray">
          ВАЛЮТА
        </Typography>
        <ButtonGroup>
          <Button key="rub" style={{fontWeight: 'bold', border: '1px solid lightgray', width: '90px'}}
                  className={true && styles.buttonActive} variant={true && "contained"}>Rub</Button>,
          <Button key="usd" style={{fontWeight: 'bold', border: '1px solid lightgray', width: '90px'}}
                  className={styles.button}>Usd</Button>,
          <Button key="eur" style={{fontWeight: 'bold', border: '1px solid lightgray', width: '90px'}}
                  className={styles.button}>Eur</Button>,
        </ButtonGroup>
        <Typography sx={{fontSize: 16, fontWeight: 'bold', marginTop: '10px'}} color="darkgray">
          КОЛИЧЕСТВО ПЕРЕСАДОК
        </Typography>

        <FormGroup>

          <FormControlLabel control={<Checkbox defaultChecked size="large" sx={{
            color: blue[800],
          }}/>} label="Все" sx={{
            color: "darkgray", fontSize: 16, fontWeight: 'bold',
          }} className={styles.checkbox}/>
          <FormControlLabel control={<Checkbox size="large" sx={{
            color: blue[800],
          }}/>} label="Без пересадок" sx={{
            color: "darkgray", fontSize: 16, fontWeight: 'bold',
          }} className={styles.checkbox}/>
          <FormControlLabel control={<Checkbox size="large" sx={{
            color: blue[800],
          }}/>} label="1 пересадка" sx={{
            color: "darkgray", fontSize: 16, fontWeight: 'bold',
          }} className={styles.checkbox}/>
          <FormControlLabel control={<Checkbox size="large" sx={{
            color: blue[800],
          }}/>} label="2 пересадки" sx={{
            color: "darkgray", fontSize: 16, fontWeight: 'bold',
          }} className={styles.checkbox}/>
          <FormControlLabel control={<Checkbox size="large" sx={{
            color: blue[800],
          }}/>} label="3 пересадки" sx={{
            color: "darkgray", fontSize: 16, fontWeight: 'bold',
          }} className={styles.checkbox}/>

        </FormGroup>
      </CardContent>
    </Card>
  );
}

