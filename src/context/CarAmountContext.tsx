import { createContext, useState } from "react";

interface CarAmountContextValue {
  carAmount: number | null;
  setCarAmount: (amount: number | null) => void;
}

export const CarAmountContext = createContext<CarAmountContextValue>({
  carAmount: null,
  setCarAmount: () => {},
});

export const CarAmountProvider = ({ children }: { children: React.ReactNode }) => {
  const [carAmount, setCarAmount] = useState<number | null>(null);

  return (
    <CarAmountContext.Provider value={{ carAmount, setCarAmount }}>
      {children}
    </CarAmountContext.Provider>
  );
};