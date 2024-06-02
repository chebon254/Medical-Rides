import React from 'react';
import BookingTable from '@/components/Admin/BookingTable';
import { SourceCoordiProvider } from '@/context/SourceCoordiContext';
import { DestinationCoordiProvider } from '@/context/DestinationCoordiContext';
import { DirectionDataProvider } from '@/context/DirectionDataContext';

function AdminPage() {
  return (
    <div className="container m-auto my-8">
      <h1 className="font-bold mb-5 text-5xl">Admin Dashboard</h1>
      <SourceCoordiProvider>
        <DestinationCoordiProvider>
          <DirectionDataProvider>
            <BookingTable />
          </DirectionDataProvider>
        </DestinationCoordiProvider>
      </SourceCoordiProvider>
    </div>
  );
}

export default AdminPage;
