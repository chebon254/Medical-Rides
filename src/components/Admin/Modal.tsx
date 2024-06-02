import React from 'react';
import AdminMap from './AdminMap';
import { Booking } from '@/types/booking';

interface ModalProps {
  booking: Booking;
  onClose: () => void;
}

function Modal({ booking, onClose }: ModalProps) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Booking Details</h2>
        <p>Name: {booking.name}</p>
        <p>Phone: {booking.phone}</p>
        <p>Pick Up Address: {booking.sourceAddress}</p>
        <p>Drop Off Address: {booking.destinationAddress}</p>
        <AdminMap />
      </div>
    </div>
  );
}

export default Modal;
