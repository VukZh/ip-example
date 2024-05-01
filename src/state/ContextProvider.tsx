import React, {createContext} from "react";
import {ticketsData} from "./constants.ts";
import {CurrenciesType, TicketType, TransfersType} from "./types.ts";

export interface IStopsCount {
  all: boolean,
  no: boolean,
  one: boolean,
  two: boolean,
  three: boolean
}

interface IContext {
  currentCurrency: CurrenciesType,
  currentTransfer: TransfersType,
  setCurrentCurrency: React.Dispatch<React.SetStateAction<CurrenciesType>>,
  setCurrentTransfer: React.Dispatch<React.SetStateAction<TransfersType>>,
  setStopsCount: React.Dispatch<React.SetStateAction<IStopsCount>>,
  tickets: Array<TicketType>,
  stopsCount: IStopsCount
}

const initialState: IContext = {
  currentCurrency: "rub",
  currentTransfer: "all",
  setCurrentCurrency: () => {
  },
  setCurrentTransfer: () => {
  },
  setStopsCount: () => {
  },
  tickets: [],
  stopsCount: {
    all: true,
    no: false,
    one: false,
    two: false,
    three: false,
  },
};
export const Context = createContext<IContext>(initialState);
export const ContextProvider = ({children}: React.PropsWithChildren<object>) => {
  const [currentCurrency, setCurrentCurrency] = React.useState<CurrenciesType>("rub");
  const [currentTransfer, setCurrentTransfer] = React.useState<TransfersType>("all");
  const [stopsCount, setStopsCount] = React.useState<IStopsCount>({
    all: true,
    no: false,
    one: false,
    two: false,
    three: false,
  });
  const [tickets] = React.useState(ticketsData);

  return (
    <Context.Provider value={{
      currentCurrency,
      currentTransfer,
      setCurrentCurrency,
      setCurrentTransfer,
      tickets,
      stopsCount,
      setStopsCount,
    }}>
      {children}
    </Context.Provider>
  );
};