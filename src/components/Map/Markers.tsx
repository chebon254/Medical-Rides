import { SourceCoordiContext } from '@/context/SourceCoordiContext';
import { DestinationCoordiContext } from '@/context/DestinationCoordiContext';
import React, { useContext } from 'react';
import { Map, Marker } from 'react-map-gl';

function Markers() {
  const { sourceCoordinates, setSourceCoordinates } = useContext(SourceCoordiContext);
  const { destinationCoordinates, setDestinationCoordinates } = useContext(DestinationCoordiContext);

  return (
    <>
      <Marker longitude={sourceCoordinates?.lng} latitude={sourceCoordinates?.lat} anchor="bottom">
        <img src="/pin.png" alt="pin" className="w-10 h-10" />
      </Marker>
      {sourceCoordinates && sourceCoordinates.length !== 0 ? (
        <Marker longitude={sourceCoordinates.lng} latitude={sourceCoordinates.lat} anchor="bottom">
          <img src="/pin.png" alt="pin" className="w-10 h-10" />
        </Marker>
      ) : null}
      {destinationCoordinates && destinationCoordinates.length !== 0 ? (
        <Marker longitude={destinationCoordinates.lng} latitude={destinationCoordinates.lat} anchor="bottom">
          <img src="/pin.png" alt="pin" className="w-10 h-10" />
        </Marker>
      ) : null}
    </>
  );
}

export default Markers;