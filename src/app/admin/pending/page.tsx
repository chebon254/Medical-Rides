import React from 'react';
import BookingTable from '@/components/Admin/BookingTable';
import { SourceCoordiProvider } from '@/context/SourceCoordiContext';
import { DestinationCoordiProvider } from '@/context/DestinationCoordiContext';
import { DirectionDataProvider } from '@/context/DirectionDataContext';

function PendingRidesPage() {
  return (
    <div className="max-w-screen-lg mx-auto px-4">
      <h1 className="font-manrope font-bold mb-5 mt-14 text-4xl text-slate-900">Pending Rides</h1>
      <SourceCoordiProvider>
        <DestinationCoordiProvider>
          <DirectionDataProvider>
            <BookingTable status="pending" />
          </DirectionDataProvider>
        </DestinationCoordiProvider>
      </SourceCoordiProvider>
    </div>
  );
}

export default PendingRidesPage;

