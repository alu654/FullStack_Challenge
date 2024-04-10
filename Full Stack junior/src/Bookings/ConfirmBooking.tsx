import React from 'react';
import './ConfirmBooking.css'; 
import { Service } from '../types';

interface ConfirmBookingProps {
  service: Service;
  selectedTime: string;
  onConfirm: () => void;
  onBack: () => void;
}

const ConfirmBooking = ({ service, selectedTime, onConfirm, onBack }) => {

  const downloadICSFile = () => {
    const filename = "booking.ics";
    const startDate = new Date(selectedTime);
    const endDate = new Date(startDate.getTime() + 60*60*1000); 

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'BEGIN:VEVENT',
      `DTSTART:${startDate.toISOString().replace(/-|:|\.\d{3}/g, '')}`,
      `DTEND:${endDate.toISOString().replace(/-|:|\.\d{3}/g, '')}`,
      `SUMMARY:${service.name}`,
      `DESCRIPTION:Booking for ${service.category} service.`,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], {type: 'text/calendar'});
    const href = URL.createObjectURL(blob);

    const downloadLink = document.createElement("a");
    downloadLink.href = href;
    downloadLink.download = filename;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }

  const handleConfirm = () => {
    downloadICSFile();
    onConfirm(); 
  };

  return (
    <div>
      <h2>Confirm Your Booking</h2>
      <p><strong>Service:</strong> {service.name}</p>
      <p><strong>Category:</strong> {service.category}</p> 
      <p><strong>Time:</strong> {selectedTime}</p>
      <button onClick={onBack}>Back</button>
      <button onClick={handleConfirm}>Confirm</button>
    </div>
  );
};

export default ConfirmBooking;
