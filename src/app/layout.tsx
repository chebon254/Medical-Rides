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
    <UserLocationContext.Provider value={{ userLocation, setUserLocation }}>
      <SourceCoordiContext.Provider value={{ sourceCoordinates, setSourceCoordinates }}>
        <DestinationCoordiContext.Provider value={{ destinationCoordinates, setDestinationCoordinates }}>
          <DirectionDataContext.Provider value={{ directionData, setDirectionData }}>
            <SelectedCarAmountContext.Provider value={{ carAmount, setCarAmount }}>
              <FormDetailsProvider>
                <AddressProvider>
                  <html lang="en">
                    <body>
                    <header className="bg-white shadow-md">
                      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center py-4">
                          <div className="flex items-center">
                            <Link href="/">
                              <Image
                                src="/logo.png"
                                alt="Peak Elite Logo"
                                width={150}
                                height={50}
                              />
                            </Link>
                          </div>
                          <nav className="hidden md:flex space-x-6">
                            <Link href="/" className="text-gray-700 hover:text-gray-900">
                              Home
                            </Link>
                            <Link href="/schedule" className="text-gray-700 hover:text-gray-900">
                              Schedule
                            </Link>
                            <Link href="/forms" className="text-gray-700 hover:text-gray-900">
                              Forms
                            </Link>
                            <Link href="/about" className="text-gray-700 hover:text-gray-900">
                              About
                            </Link>
                            <Link href="/services" className="text-gray-700 hover:text-gray-900">
                              Services
                            </Link>
                            <Link href="/contact" className="text-gray-700 hover:text-gray-900">
                              Contact
                            </Link>
                            <Link href="/faqs" className="text-gray-700 hover:text-gray-900">
                              FAQ&apos;s {/* Escape single quote */}
                            </Link>
                            <Link href="/service-areas" className="text-gray-700 hover:text-gray-900">
                              Service Areas
                            </Link>
                          </nav>
                          <div className="flex items-center md:hidden">
                              {/* Mobile menu button */}
                              <button className="mobile-menu-button">
                                <svg
                                  className="h-6 w-6"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                  />
                                </svg>
                              </button>
                            </div>
                            <div className="mobile-menu hidden md:hidden">
                              <div className="flex flex-col items-start">
                                <Link href="/" className="mobile-menu-item">Home</Link>
                                <Link href="/schedule" className="mobile-menu-item">Schedule</Link>
                                <Link href="/forms" className="mobile-menu-item">Forms</Link>
                                <Link href="/about" className="mobile-menu-item">About</Link>
                                <Link href="/services" className="mobile-menu-item">Services</Link>
                                <Link href="/contact" className="mobile-menu-item">Contact</Link>
                                <Link href="/faqs" className="mobile-menu-item">FAQ&apos;s</Link> {/* Escape single quote */}
                                <Link href="/service-areas" className="mobile-menu-item">Service Areas</Link>
                              </div>
                            </div>
                        </div>
                      </div>
                    </header>
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
  );
}