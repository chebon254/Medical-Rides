"use client";
import React, { useContext, useEffect, useRef, useCallback } from 'react';
import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { DirectionDataContext } from '@/context/DirectionDataContext';
import AdminMarkers from './AdminMarkers';
import AdminMapBoxRoute from './AdminMapBoxRoute';
import AdminDistanceTime from './AdminDistanceTime';

const MAPBOX_DRIVING_ENDPOINT = "https://api.mapbox.com/directions/v5/mapbox/driving/";

function AdminMap({ sourceCoordinates, destinationCoordinates }: { sourceCoordinates: { lng: number; lat: number } | null; destinationCoordinates: { lng: number; lat: number } | null }) {
  const mapRef = useRef<any>();
  const { directionData, setDirectionData } = useContext(DirectionDataContext);

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

    const url = `${MAPBOX_DRIVING_ENDPOINT}${sourceCoordinates.lng},${sourceCoordinates.lat};${destinationCoordinates.lng},${destinationCoordinates.lat}?alternatives=true&geometries=geojson&language=en&overview=full&steps=true&access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`;

    try {
      const res = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await res.json();
      setDirectionData(result);
    } catch (error) {
      console.error('Error fetching direction route:', error);
    }
  };

  return (
    <div className='m-1 relative'>
      <h2 className='text-[20px] font-semibold'>Map</h2>
      <div className='rounded-lg overflow-hidden'>
        <Map
          ref={mapRef}
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
          initialViewState={{
            longitude: sourceCoordinates ? sourceCoordinates.lng : 0,
            latitude: sourceCoordinates ? sourceCoordinates.lat : 0,
            zoom: 14,
          }}
          style={{ width: "100%", height: 450, borderRadius: 10 }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
          <AdminMarkers
            sourceCoordinates={sourceCoordinates}
            destinationCoordinates={destinationCoordinates}
          />
          {directionData?.routes ? (
            <AdminMapBoxRoute coordinates={directionData.routes[0].geometry.coordinates} />
          ) : null}
        </Map>
      </div>
      <div className='absolute bottom-[40px] z-20 right-[20px] hidden md:block'>
        <AdminDistanceTime />
      </div>
    </div>
  );
}

export default AdminMap;