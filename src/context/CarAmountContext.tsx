import React, { createContext, useState } from "react";

interface CarAmountContextValue {
  carAmount: number;
  setCarAmount: (amount: number) => void;
}

export const CarAmountContext = createContext<CarAmountContextValue>({
  carAmount: 0,
  setCarAmount: () => {},
});

export const CarAmountProvider = ({ children }: { children: React.ReactNode }) => {
  const [carAmount, setCarAmount] = useState<number>(0);

  return (
    <CarAmountContext.Provider value={{ carAmount, setCarAmount }}>
      {children}
    </CarAmountContext.Provider>
  );
};

