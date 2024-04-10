import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import SelectService from './Services/SelectService';
import SelectTimeslot from './TimeSlots/SelectTimeslot';
import ConfirmBooking from './Bookings/ConfirmBooking';
import Reservaciones from './Reservations/Reservaciones';
import ProgressBar from './ProgressBar/ProgressBar';
import { Service } from './types'; 
import 'react-datepicker/dist/react-datepicker.css';
import './App.css'; 
import Login from './Auth/Login';
import Register from './Auth/Register';


const App: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedTimeslot, setSelectedTimeslot] = useState<Date | null>(null);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const goToStep = (stepNumber: number) => {
    setCurrentStep(stepNumber);
  };
  
  useEffect(() => {
    fetch('http://localhost:3000/services') 
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        return response.json();
      })
      .then(data => {
        const uniqueServices = Array.from(new Set(data.map(service => service.name)))
          .map(name => {
            return data.find(service => service.name === name);
          });
        setServices(uniqueServices);
      })
      .catch(error => console.log(error));
  }, []);
  
  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    setSelectedCategory(service.category);
    setCurrentStep(2);
  };

  const handleTimeslotSelect = (date: Date) => {
    console.log("Fecha seleccionada:", date);
    setSelectedTimeslot(date);
    setCurrentStep(3);
  };

  const handleConfirm = () => {
    if (selectedService && selectedTimeslot) {
      const bookingDetails = {
        serviceId: selectedService.id,
        dateTime: selectedTimeslot.toISOString(),
      };
      fetch('http://localhost:3000/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingDetails),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to confirm booking');
        }
        return response.json();
      })
      .then(data => {
        alert('Booking confirmed successfully!');
        console.log(data); 

      })
      .catch(error => {
        console.error('Error during booking confirmation:', error);
        alert('There was an issue confirming your booking.');
      });
    }
  };

  const handleReset = () => {
    if (currentStep === 2) {
      setSelectedTimeslot(null);
    }
    setCurrentStep(prevStep => prevStep - 1);
  }
  return (
    <Router>
      <div>
      <nav>
          <Link to="/login">Login</Link> | 
          <Link to="/register">Register</Link>
        </nav>
        <Routes>
          <Route path="/reservations" element={<Reservaciones />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={
            <div>
              <ProgressBar currentStep={currentStep} goToStep={goToStep} />
              {currentStep === 1 && (
                <SelectService
                  services={services}
                  selectedCategory={selectedCategory}
                  onServiceSelect={handleServiceSelect}
                />
              )}
              {currentStep === 2 && selectedService && (
                <>
                  <h1>Seleccionar horario</h1>
                  <SelectTimeslot
                    onDateTimeSelect={handleTimeslotSelect} 
                    onBack={handleReset}
                  />
                </>
              )}
              {currentStep === 3 && selectedService && selectedTimeslot && (
                <ConfirmBooking
                  service={selectedService}
                  selectedTime={selectedTimeslot ? selectedTimeslot.toLocaleString() : ""}
                  onConfirm={handleConfirm}
                  onBack={handleReset}
                />
              )}
            </div>
          } />
        </Routes>
      </div>
      <nav>
          <Link to="/">Reservar</Link> | <Link to="/reservations">Mis Turnos</Link>
        </nav>
    </Router>
  );
};

export default App;
