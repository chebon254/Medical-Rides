"use client";
import React, { useContext, useEffect, useRef } from 'react';
import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { UserLocationContext } from '@/context/UserLocationContext';
import { DestinationCoordiContext } from '@/context/DestinationCoordiContext';
import { SourceCoordiContext } from '@/context/SourceCoordiContext';
import Markers from './Markers';
import { DirectionDataContext } from '@/context/DirectionDataContext';
import MapBoxRoute from './MapBoxRoute';
import DistanceTime from './DistanceTime';
import { SelectedCarAmountContext } from '@/context/SelectedCarAmountContext';

const MAPBOX_DRIVING_ENDPOINT = "https://api.mapbox.com/directions/v5/mapbox/driving/"
const session_token = "0e4d5549-e85f-4591-88f5-11822aa0aaba"

function MapBoxMap() {
  const mapRef =  useRef<any>();
  const { sourceCoordinates, setSourceCoordinates } = useContext(SourceCoordiContext);
  const { destinationCoordinates, setDestinationCoordinates } = useContext(DestinationCoordiContext);
  const { directionData, setDirectionData } = useContext(DirectionDataContext);
  const { setCarAmount } = useContext(SelectedCarAmountContext);

  useEffect(()=>{
    if(sourceCoordinates){
      mapRef.current?.flyTo({
        center:[sourceCoordinates.lng, sourceCoordinates.lat], duration:2500
      })
    }
  }, [sourceCoordinates])

  useEffect(()=>{
    if(destinationCoordinates){
      mapRef.current?.flyTo({
        center:[destinationCoordinates.lng, destinationCoordinates.lat], duration:2500
      })
    }
  }, [destinationCoordinates])

  useEffect(() => {
    if (sourceCoordinates && destinationCoordinates) {
      getDirectionRoute();
    }
  }, [sourceCoordinates, destinationCoordinates]);
  

  const getDirectionRoute = async () => {
    if (!sourceCoordinates || !destinationCoordinates) {
      console.error('Source or destination coordinates are missing');
      return;
    }
  
    const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${sourceCoordinates.lng}%2C${sourceCoordinates.lat}%3B${destinationCoordinates.lng}%2C${destinationCoordinates.lat}?alternatives=true&geometries=geojson&language=en&overview=full&steps=true&access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`;
    
    try {
      const res = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await res.json();
      setDirectionData(result);

      const distance = result.routes?.[0]?.distance || 0;
      const carAmount = 2 * Number((distance * 0.000621371192).toFixed(0));
      setCarAmount(carAmount);

    } catch (error) {
      console.error('Error fetching direction route:', error);
    }
  };

  return (
    <div className='m-1 '>
      <h2 className='text-[20px] font-semibold'>Map</h2>
      <div className='bottom-[40px] m-4 right-[20px] hidden md:block'>
        <DistanceTime/>
      </div>
      <div className='rounded-lg overflow-hidden'>
        {sourceCoordinates && destinationCoordinates ? (
          <Map
          ref = {mapRef}
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
            initialViewState={{
              longitude: sourceCoordinates.lng,
              latitude: sourceCoordinates.lat,
              zoom: 14
            }}
            style={{ width: "100%", height: 450, borderRadius: 10 }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
          >

            <Markers/>
            {directionData?.routes? (
              <MapBoxRoute
                coordinates = {directionData?.routes[0]?.geometry?.coordinates}
              />
            ):null}
          </Map>
        ) : null}
      </div>
    </div>
  );
}

export default MapBoxMap;
