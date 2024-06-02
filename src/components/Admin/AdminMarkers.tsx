import React, { useContext } from 'react';
import { Marker } from 'react-map-gl';
import { SourceCoordiContext } from '@/context/SourceCoordiContext';
import { DestinationCoordiContext } from '@/context/DestinationCoordiContext';

function AdminMarkers() {
  const { sourceCoordinates } = useContext(SourceCoordiContext);
  const { destinationCoordinates } = useContext(DestinationCoordiContext);

  return (
    <>
      {sourceCoordinates && (
        <Marker longitude={sourceCoordinates.lng} latitude={sourceCoordinates.lat} anchor="bottom">
          <img src="/pin.png" alt="pin" className="w-10 h-10" />
        </Marker>
      )}
      {destinationCoordinates && (
        <Marker longitude={destinationCoordinates.lng} latitude={destinationCoordinates.lat} anchor="bottom">
          <img src="/pin.png" alt="pin" className="w-10 h-10" />
        </Marker>
      )}
    </>
  );
}

export default AdminMarkers;
