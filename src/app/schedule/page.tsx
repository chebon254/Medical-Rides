"use client"
import Booking from '@/components/Booking/Booking'
import MapBoxMap from '@/components/Map/MapBoxMap'

function Schedule() {
  // Return JSX with context providers correctly wrapping their consumers
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 container">
      <div className="">
        <Booking />
      </div>
      <div className="col-span-2 order-first md:order-last">
        <MapBoxMap />
      </div>
    </div>
  );
}

export default Schedule;
