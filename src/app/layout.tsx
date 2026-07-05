"use client"
import { SourceCoordiContext } from '@/context/SourceCoordiContext';
import { DestinationCoordiContext } from '@/context/DestinationCoordiContext';
import { DirectionDataContext } from '@/context/DirectionDataContext';
import React, { useState } from 'react';
import { SelectedCarAmountContext } from '@/context/SelectedCarAmountContext';
import { FormDetailsProvider } from '@/context/FormDetailsContext';
import { AddressProvider } from '@/context/AddressContext';

import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // State initialization
  const [sourceCoordinates, setSourceCoordinates] = useState(); // Initialize state for sourceCoordinates
  const [destinationCoordinates, setDestinationCoordinates] = useState(); // Initialize state for destinationCoordinates
  const [directionData, setDirectionData] = useState<any>();
  const [carAmount, setCarAmount] = useState<Number>(0);

  return (
    <ClerkProvider>
        <SourceCoordiContext.Provider value={{ sourceCoordinates, setSourceCoordinates }}>
          <DestinationCoordiContext.Provider value={{ destinationCoordinates, setDestinationCoordinates }}>
            <DirectionDataContext.Provider value={{ directionData, setDirectionData }}>
              <SelectedCarAmountContext.Provider value={{ carAmount, setCarAmount }}>
                <FormDetailsProvider>
                  <AddressProvider>
                    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
                      <body className="font-sans">
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
    </ClerkProvider>
  );
}