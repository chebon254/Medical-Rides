import { createContext, Dispatch, SetStateAction } from "react";

interface SourceCoordinatesContextValue {
  sourceCoordinates: { lat: number; lng: number } | null;
  setSourceCoordinates: Dispatch<SetStateAction<{ lat: number; lng: number } | null>>;
}

const defaultValue: SourceCoordinatesContextValue = {
  sourceCoordinates: null,
  setSourceCoordinates: () => {},
};

export const SourceCoordiContext = createContext<SourceCoordinatesContextValue>(defaultValue);