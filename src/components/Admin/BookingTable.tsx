"use client"
import React, { useState, useEffect } from 'react';
import AdminMap from './AdminMap';
import { Booking } from '@/types/booking';

interface BookingTableProps {
  status: 'pending' | 'completed';
}

const statusStyles: Record<string, string> = {
  pending: 'bg-amber-100 text-amber-700',
  paid: 'bg-teal-100 text-teal-700',
  completed: 'bg-teal-100 text-teal-700',
};

function StatusPill({ status }: { status: string }) {
  return (
    <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold capitalize ${statusStyles[status] ?? 'bg-slate-100 text-slate-700'}`}>
      {status}
    </span>
  );
}

function BookingTable({ status }: BookingTableProps) {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [sourceCoordinates, setSourceCoordinates] = useState<{ lng: number; lat: number } | null>(null);
  const [destinationCoordinates, setDestinationCoordinates] = useState<{ lng: number; lat: number } | null>(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch(`/api/bookings/${status}`);
        if (!res.ok) {
          throw new Error(`Error fetching bookings: ${res.statusText}`);
        }
        const data: Booking[] = await res.json();
        setBookings(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBookings();
  }, [status]);

  const handleViewDetails = (booking: Booking) => {
    setSelectedBooking(booking);
    setSourceCoordinates({ lng: booking.sourceLongitude, lat: booking.sourceLatitude });
    setDestinationCoordinates({ lng: booking.destinationLongitude, lat: booking.destinationLatitude });
  };

  const handleCompleteRide = async (id: number) => {
    try {
      const res = await fetch('/api/bookings/update-status', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, rideStatus: 'completed' }),
      });
      if (!res.ok) {
        throw new Error(`Error updating booking status: ${res.statusText}`);
      }
      const updatedBooking: Booking = await res.json();
      setBookings(bookings.map(b => b.id === id ? updatedBooking : b));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mb-32">
      <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-900 text-white text-left uppercase text-xs tracking-wide">
              <th className="px-4 py-3 font-semibold">Name</th>
              <th className="px-4 py-3 font-semibold">Phone</th>
              <th className="px-4 py-3 font-semibold">Pick Up Date</th>
              <th className="px-4 py-3 font-semibold">Pick Up Time</th>
              <th className="px-4 py-3 font-semibold">Amount</th>
              <th className="px-4 py-3 font-semibold">Payment Status</th>
              <th className="px-4 py-3 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr
                key={booking.id}
                className={`${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'} hover:bg-teal-50 transition-colors`}
              >
                <td className="px-4 py-3 text-slate-800 font-medium">{booking.name}</td>
                <td className="px-4 py-3 text-slate-600">{booking.phone}</td>
                <td className="px-4 py-3 text-slate-600">{new Date(booking.pickUpDate).toLocaleDateString()}</td>
                <td className="px-4 py-3 text-slate-600">{booking.pickUpTime}</td>
                <td className="px-4 py-3 text-slate-800 font-semibold">${booking.amount}</td>
                <td className="px-4 py-3"><StatusPill status={booking.rideStatus} /></td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleViewDetails(booking)}
                      className="px-3 py-1.5 rounded-md text-teal-700 bg-teal-50 hover:bg-teal-100 font-medium transition-colors"
                    >
                      View Details
                    </button>
                    {status === 'pending' && (
                      <button
                        onClick={() => handleCompleteRide(booking.id)}
                        className="px-3 py-1.5 rounded-md text-slate-900 bg-amber-500 hover:bg-amber-600 font-medium transition-colors"
                      >
                        Complete Ride
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
            {bookings.length === 0 && (
              <tr>
                <td colSpan={7} className="px-4 py-8 text-center text-slate-400">
                  No {status} rides found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {selectedBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl p-6 pt-10 max-h-[90vh] overflow-y-auto">
            <button
              className="absolute top-3 right-4 text-slate-400 hover:text-slate-700 text-2xl leading-none"
              onClick={() => setSelectedBooking(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="mb-3 font-manrope font-bold text-2xl text-slate-900">Booking Details</h2>
            <p className="my-1 text-slate-700"><span className="font-semibold text-slate-900">Name:</span> {selectedBooking.name}</p>
            <p className="my-1 text-slate-700"><span className="font-semibold text-slate-900">Phone:</span> {selectedBooking.phone}</p>
            <p className="my-1 text-slate-700"><span className="font-semibold text-slate-900">Amount Paid:</span> ${selectedBooking.amount}</p>
            <p className="my-1 text-slate-700"><span className="font-semibold text-slate-900">Pick Up Address:</span> {selectedBooking.sourceAddress}</p>
            <p className="my-1 mb-6 text-slate-700"><span className="font-semibold text-slate-900">Drop Off Address:</span> {selectedBooking.destinationAddress}</p>
            <AdminMap
              sourceCoordinates={sourceCoordinates}
              destinationCoordinates={destinationCoordinates}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default BookingTable;
