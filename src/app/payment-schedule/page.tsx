"use client"
import Booking from '@/components/Booking/Booking'
import MapBoxMap from '@/components/Map/MapBoxMap'
import Navbar from '@/components/Navbar'

function Schedule() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Booking />
          </div>
          <div className="order-first lg:order-last lg:col-span-3 lg:sticky lg:top-20">
            <MapBoxMap />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
