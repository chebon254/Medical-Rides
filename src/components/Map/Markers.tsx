import { SourceCoordiContext } from '@/context/SourceCoordiContext';
import { DestinationCoordiContext } from '@/context/DestinationCoordiContext';
import React, { useContext } from 'react';
import { Marker } from 'react-map-gl';

function MapPin({ label, colorClass, ringClass }: { label: string; colorClass: string; ringClass: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold text-white shadow-md ${colorClass}`}>
        {label}
      </span>
      <span className={`-mt-0.5 h-2 w-px ${colorClass}`} />
      <span className={`h-3 w-3 rounded-full border-2 border-white shadow ${colorClass} ${ringClass}`} />
    </div>
  );
}

function Markers() {
  const { sourceCoordinates } = useContext(SourceCoordiContext);
  const { destinationCoordinates } = useContext(DestinationCoordiContext);

  return (
    <>
      {sourceCoordinates ? (
        <Marker longitude={sourceCoordinates.lng} latitude={sourceCoordinates.lat} anchor="bottom">
          <MapPin label="Pickup" colorClass="bg-teal-600" ringClass="ring-4 ring-teal-600/25" />
        </Marker>
      ) : null}
      {destinationCoordinates ? (
        <Marker longitude={destinationCoordinates.lng} latitude={destinationCoordinates.lat} anchor="bottom">
          <MapPin label="Drop-off" colorClass="bg-amber-500" ringClass="ring-4 ring-amber-500/25" />
        </Marker>
      ) : null}
    </>
  );
}

export default Markers;
