import React from 'react';
import './ProgressBar.css'; 

const ProgressBar = ({ currentStep, goToStep }) => {
  return (
    <div className="progress-bar">
      <div className={`step ${currentStep >= 1 ? 'active' : ''}`} onClick={() => goToStep(1)}>
        <div className="bullet">1</div>
        <p>Seleccionar servicio</p>
      </div>
      <div className={`step ${currentStep >= 2 ? 'active' : ''}`} onClick={() => goToStep(2)}>
        <div className="bullet">2</div>
        <p>Seleccionar horario</p>
      </div>
      <div className={`step ${currentStep >= 3 ? 'active' : ''}`} onClick={() => goToStep(3)}>
        <div className="bullet">3</div>
        <p>Confirmar</p>
      </div>
    </div>
  );
};

export default ProgressBar;
