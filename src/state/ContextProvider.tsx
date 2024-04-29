import React, {createContext} from "react";

interface IContext {
  currentCurrency: CurrenciesType,
  currentTransfer: TransfersType,
  setCurrentCurrency: React.Dispatch<React.SetStateAction<CurrenciesType>>,
  setCurrentTransfer: React.Dispatch<React.SetStateAction<TransfersType>>,
}

const initialState: IContext = {
  currentCurrency: 'rub',
  currentTransfer: 'all',
  setCurrentCurrency: () => {},
  setCurrentTransfer: () => {}
}
export const Context = createContext<IContext>(initialState);
export const ContextProvider = ({children}: React.PropsWithChildren<object>) => {
  const [currentCurrency, setCurrentCurrency] = React.useState<CurrenciesType>('rub');
  const [currentTransfer, setCurrentTransfer] = React.useState<TransfersType>('all');

  return (
    <Context.Provider value={{currentCurrency, currentTransfer, setCurrentCurrency, setCurrentTransfer}}>
      {children}
    </Context.Provider>
  );
}