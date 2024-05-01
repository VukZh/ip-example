import React, {createContext} from "react";
import {ticketsData} from "./constants.ts";

interface IContext {
  currentCurrency: CurrenciesType,
  currentTransfer: TransfersType,
  setCurrentCurrency: React.Dispatch<React.SetStateAction<CurrenciesType>>,
  setCurrentTransfer: React.Dispatch<React.SetStateAction<TransfersType>>,
  tickets: Array<TicketType>,
}

const initialState: IContext = {
  currentCurrency: 'rub',
  currentTransfer: 'all',
  setCurrentCurrency: () => {
  },
  setCurrentTransfer: () => {
  },
  tickets: [],
}
export const Context = createContext<IContext>(initialState);
export const ContextProvider = ({children}: React.PropsWithChildren<object>) => {
  const [currentCurrency, setCurrentCurrency] = React.useState<CurrenciesType>('rub');
  const [currentTransfer, setCurrentTransfer] = React.useState<TransfersType>('all');
  const [tickets] = React.useState(ticketsData);

  return (
    <Context.Provider value={{currentCurrency, currentTransfer, setCurrentCurrency, setCurrentTransfer, tickets}}>
      {children}
    </Context.Provider>
  );
}