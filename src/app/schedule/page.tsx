"use client"
import Booking from '@/components/Booking/Booking'
import MapBoxMap from '@/components/Map/MapBoxMap'
import { UserLocationContext } from '@/context/UserLocationContext'
import { SourceCoordiContext } from '@/context/SourceCoordiContext'
import { DestinationCoordiContext } from '@/context/DestinationCoordiContext'
import { DirectionDataContext } from '@/context/DirectionDataContext'
import React, { useState, useEffect, useContext } from 'react'
import { SelectedCarAmountContext } from '@/context/SelectedCarAmountContext'

function Schedule() {
  // State initialization
  const [userLocation, setUserLocation] = useState<any>();
  const [sourceCoordinates, setSourceCoordinates] = useState(); // Initialize state for sourceCoordinates
  const [destinationCoordinates, setDestinationCoordinates] = useState(); // Initialize state for destinationCoordinates
  const [directionData, setDirectionData] = useState<any>();
  const [carAmount, setCarAmount] = useState<any>();

  // Side effects
  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      setUserLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
    });
  };

  // Return JSX with context providers correctly wrapping their consumers
  return (
    <UserLocationContext.Provider value={{ userLocation, setUserLocation }}>
      <SourceCoordiContext.Provider value={{ sourceCoordinates, setSourceCoordinates }}>
        <DestinationCoordiContext.Provider value={{ destinationCoordinates, setDestinationCoordinates }}>
          <DirectionDataContext.Provider value={{ directionData, setDirectionData }}>
            <SelectedCarAmountContext.Provider value={{ carAmount, setCarAmount }}>
              <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 container">
                <div className="">
                  <Booking />
                </div>
                <div className="col-span-2 order-first md:order-last">
                  <MapBoxMap />
                </div>
              </div>
            </SelectedCarAmountContext.Provider>
          </DirectionDataContext.Provider>
        </DestinationCoordiContext.Provider>
      </SourceCoordiContext.Provider>
    </UserLocationContext.Provider >
  );
}

export default Schedule;
