"use client"
import React, { useState, useEffect } from 'react';
import AdminMap from './AdminMap';
import { Booking } from '@/types/booking';

function BookingTable() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch('/api/bookings');
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
  }, []);

  const handleViewDetails = (booking: Booking) => {
    setSelectedBooking(booking);
  };

  return (
    <div>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Pick Up Date</th>
            <th>Pick Up Time</th>
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
              <td>
                <button onClick={() => handleViewDetails(booking)}>View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedBooking && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setSelectedBooking(null)}>&times;</span>
            <h2>Booking Details</h2>
            <p>Name: {selectedBooking.name}</p>
            <p>Phone: {selectedBooking.phone}</p>
            <p>Pick Up Address: {selectedBooking.pickUpAddress}</p>
            <p>Drop Off Address: {selectedBooking.dropOffAddress}</p>
            <AdminMap />
          </div>
        </div>
      )}
    </div>
  );
}

export default BookingTable;
