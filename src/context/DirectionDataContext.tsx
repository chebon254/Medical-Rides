// src/context/DirectionDataContext.tsx
"use client"
import { createContext, useState, ReactNode } from "react";

export const DirectionDataContext = createContext<any>(null);

export const DirectionDataProvider = ({ children }: { children: ReactNode }) => {
  const [directionData, setDirectionData] = useState<any>(null);
  return (
    <DirectionDataContext.Provider value={{ directionData, setDirectionData }}>
      {children}
    </DirectionDataContext.Provider>
  );
};
