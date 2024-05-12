import { createContext } from "react";

export const SelectedCarAmountContext = createContext<any>({ carAmount: null, setCarAmount: () => {} });