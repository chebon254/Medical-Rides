"use client"
import React, { useState, useEffect } from 'react';
import AdminMap from './AdminMap';
import { Booking } from '@/types/booking';
import "../../styles/global.css"

interface BookingTableProps {
  status: 'pending' | 'completed';
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
    <div className="container m-auto">
      <table className="table-auto w-full mb-32">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Pick Up Date</th>
            <th>Pick Up Time</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.name}</td>
              <td>{booking.phone}</td>
              <td>{new Date(booking.pickUpDate).toLocaleDateString()}</td>
              <td>{booking.pickUpTime}</td>
              <td>${booking.amount}</td>
              <td>
                <button onClick={() => handleViewDetails(booking)}>View Details</button>
                {status === 'pending' && (
                  <button onClick={() => handleCompleteRide(booking.id)}>Complete Ride</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedBooking && (
        <div className="modal">
          <div className="modal-content relative z-0 pt-8">
            <span className="close absolute top-2 right-5 z-10" onClick={() => setSelectedBooking(null)}>&times;</span>
            <h2 className="mb-3 font-bold text-2xl">Booking Details</h2>
            <p className="my-1"><span className="font-semibold">Name:</span> {selectedBooking.name}</p>
            <p className="my-1"><span className="font-semibold">Phone:</span> {selectedBooking.phone}</p>
            <p className="my-1"><span className="font-semibold">Amount Paid:</span> ${selectedBooking.amount}</p>
            <p className="my-1"><span className="font-semibold">Pick Up Address:</span> {selectedBooking.sourceAddress}</p>
            <p className="my-1 mb-6"><span className="font-semibold">Drop Off Address:</span> {selectedBooking.destinationAddress}</p>
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
