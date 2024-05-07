import { DestinationCoordiContext } from '@/context/DestinationCoordiContext';
import { SourceCoordiContext } from '@/context/SourceCoordiContext';
import { UserLocationContext } from '@/context/UserLocationContext';
import React, { useContext } from 'react'
import Map, { Marker } from 'react-map-gl';

function Markers() {
    const { sourceCoordinates, setSourceCoordinates } = useContext(SourceCoordiContext);
    const { destinationCoordinates, setDestinationCoordinates } = useContext(DestinationCoordiContext);
  
    const { userLocation, setUserLocation } = useContext(UserLocationContext);
    return (
        <>
            <Marker longitude={userLocation?.lng} latitude={userLocation?.lat} anchor="bottom">
                <img src="/pin.png" alt="pin" className='w-10 h-10'/>
            </Marker>

            {sourceCoordinates? 
            <Marker longitude={sourceCoordinates?.lng} latitude={sourceCoordinates?.lat} anchor="bottom">
                <img src="/pin.png" alt="pin" className='w-10 h-10'/>
            </Marker>
            :null}

            {destinationCoordinates?
                <Marker longitude={destinationCoordinates?.lng} latitude={destinationCoordinates?.lat} anchor="bottom">
                <img src="/pin.png" alt="pin" className='w-10 h-10'/>
            </Marker>:null
            }
        </>
    )
}

export default Markers