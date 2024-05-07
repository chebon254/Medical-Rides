import { createContext, Dispatch, SetStateAction } from "react";

interface DestinationCoordinatesContextValue {
  destinationCoordinates: { lat: number; lng: number } | null;
  setDestinationCoordinates: Dispatch<SetStateAction<{ lat: number; lng: number } | null>>;
}

const defaultValue: DestinationCoordinatesContextValue = {
  destinationCoordinates: null,
  setDestinationCoordinates: () => {},
};

export const DestinationCoordiContext = createContext<DestinationCoordinatesContextValue>(defaultValue);