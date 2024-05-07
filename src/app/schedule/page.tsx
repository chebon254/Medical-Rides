"use client"
import Booking from '@/components/Booking/Booking'
import MapBoxMap from '@/components/Map/MapBoxMap'
import { UserLocationContext } from '@/context/UserLocationContext'
import { SourceCoordiContext } from '@/context/SourceCoordiContext'
import { DestinationCoordiContext } from '@/context/DestinationCoordiContext'
import React, { useState, useEffect, useContext } from 'react'


function Schedule() {
  const [userLocation, setUserLocation] = useState<any>();
  const {sourceCoordinates, setSourceCoordinates} = useContext(SourceCoordiContext);
  const {destinationCoordinates, setDestinationCoordinates} = useContext(DestinationCoordiContext);

  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      setUserLocation({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
      });
    });
  };

  return (
    <div className='p-4'>
      <UserLocationContext.Provider value={{ userLocation, setUserLocation }}>
        <SourceCoordiContext.Provider value={{ sourceCoordinates, setSourceCoordinates }}>
          <DestinationCoordiContext.Provider value={{ destinationCoordinates, setDestinationCoordinates }}>
            <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8  container">
              <div className="">
                <Booking />
              </div>
              <div className="col-span-2 order-first md:order-last">
                <MapBoxMap />
              </div>
            </div>
          </DestinationCoordiContext.Provider>
        </SourceCoordiContext.Provider>
      </UserLocationContext.Provider>
    </div>
  );
}

export default Schedule;
