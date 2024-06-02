// src/context/SourceCoordiContext.tsx
"use client"
import { createContext, useState, ReactNode } from "react";

export const SourceCoordiContext = createContext<any>(null);

export const SourceCoordiProvider = ({ children }: { children: ReactNode }) => {
  const [sourceCoordinates, setSourceCoordinates] = useState<any>(null);
  return (
    <SourceCoordiContext.Provider value={{ sourceCoordinates, setSourceCoordinates }}>
      {children}
    </SourceCoordiContext.Provider>
  );
};
