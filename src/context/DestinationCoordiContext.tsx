// src/context/DestinationCoordiContext.tsx
"use client"
import { createContext, useState, ReactNode } from "react";

export const DestinationCoordiContext = createContext<any>(null);

export const DestinationCoordiProvider = ({ children }: { children: ReactNode }) => {
  const [destinationCoordinates, setDestinationCoordinates] = useState<any>(null);
  return (
    <DestinationCoordiContext.Provider value={{ destinationCoordinates, setDestinationCoordinates }}>
      {children}
    </DestinationCoordiContext.Provider>
  );
};
