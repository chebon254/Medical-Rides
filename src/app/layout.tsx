"use client"
import { UserLocationContext } from '@/context/UserLocationContext';
import { SourceCoordiContext } from '@/context/SourceCoordiContext';
import { DestinationCoordiContext } from '@/context/DestinationCoordiContext';
import { DirectionDataContext } from '@/context/DirectionDataContext';
import React, { useState, useEffect } from 'react';
import { SelectedCarAmountContext } from '@/context/SelectedCarAmountContext';
import { FormDetailsProvider } from '@/context/FormDetailsContext';
import { AddressProvider } from '@/context/AddressContext';

import { Inter } from "next/font/google";
import "./globals.css";
import Image from 'next/image';
import Link from 'next/link';
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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

  return (
    <ClerkProvider>
      <UserLocationContext.Provider value={{ userLocation, setUserLocation }}>
        <SourceCoordiContext.Provider value={{ sourceCoordinates, setSourceCoordinates }}>
          <DestinationCoordiContext.Provider value={{ destinationCoordinates, setDestinationCoordinates }}>
            <DirectionDataContext.Provider value={{ directionData, setDirectionData }}>
              <SelectedCarAmountContext.Provider value={{ carAmount, setCarAmount }}>
                <FormDetailsProvider>
                  <AddressProvider>
                    <html lang="en">
                      <body>
                        <main>
                            {children}
                        </main>
                      </body>
                    </html>
                  </AddressProvider>
                </FormDetailsProvider>
              </SelectedCarAmountContext.Provider>
            </DirectionDataContext.Provider>
          </DestinationCoordiContext.Provider>
        </SourceCoordiContext.Provider>
      </UserLocationContext.Provider >
    </ClerkProvider>
  );
}