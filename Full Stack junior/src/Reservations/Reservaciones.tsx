import React, { useEffect, useState } from 'react';
import './Reservaciones.css';
import { Reservation } from '../types';


interface ReservacionesProps {
  onSelectReservation: (reservation: Reservation) => void;
}

const Reservaciones = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);

  const fetchReservations = async () => {
    try {
      const response = await fetch('http://localhost:3000/booking');
      const data: Reservation[] = await response.json();
      setReservations(data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };
  
  useEffect(() => {
    fetchReservations();
  }, []);

  const deleteReservation = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3000/booking/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {

        setReservations(reservations.filter(reservation => reservation.id !== id));
      } else {

        console.error('Error deleting reservation');
      }
    } catch (error) {
      console.error('Error deleting reservation: ', error);
    }
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  return (
    <div>
      <h1>Reservaciones</h1>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation.id}>
            <p><strong>Servicio:</strong> {reservation.service.name}</p>
            <p><strong>Descripción:</strong> {reservation.service.description}</p>
            <p><strong>Categoría:</strong> {reservation.service.category}</p>
            <p><strong>Fecha y Hora:</strong> {new Date(reservation.dateTime).toLocaleString()}</p>
            <button onClick={() => deleteReservation(reservation.id)}>Borrar Reserva</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reservaciones;
