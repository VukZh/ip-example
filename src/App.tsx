import './App.css'
import {Settings} from './components/settings'
import {Stack} from "@mui/material";
import logo from './assets/logo.png';
import './App.css';
import {Flights} from "./components/flights.tsx";
function App() {

  return (
    <>
      <img src={logo} alt="logo" width="50" className="logo"/>
      <Stack direction="row" spacing={2} justifyContent="center">
        <Settings/>
        <Flights/>
      </Stack>
    </>

  )
}

export default App
