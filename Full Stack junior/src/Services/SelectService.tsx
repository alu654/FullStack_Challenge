import React, { useState, useEffect } from 'react';
import { Service } from '../types';
import './SelectService.css';

interface SelectServiceProps {
  services: Service[];
  onServiceSelect: (service: Service) => void;
  selectedCategory?: string | null;
}

const SelectService: React.FC<SelectServiceProps> = ({ services, onServiceSelect, selectedCategory }) => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(selectedCategory ?? null);

  useEffect(() => {
    setExpandedCategory(selectedCategory ?? null);
  }, [selectedCategory]);

  const handleCategoryClick = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const handleServiceClick = (service: Service) => {
    onServiceSelect(service);
    const previousActive = document.querySelector('.service-item.active');
    if (previousActive) {
      previousActive.classList.remove('active');
    }
    const current = document.getElementById(`service-item-${service.id}`);
    if (current) {
      current.classList.add('active');
    }
  };
  
  const handleServiceDescriptionClick = (service: Service) => {
    handleServiceClick(service);
  };

  const servicesByCategory = services.reduce((acc: Record<string, Service[]>, service) => {
    acc[service.category] = acc[service.category] || [];
    acc[service.category].push(service);
    return acc;
  }, {});

  return (
    <div className="select-service-container">
      <h2 className="select-service-title">Seleccionar categoría</h2>
      {Object.keys(servicesByCategory).map((category) => (
        <div key={category} className="category-container">
          <button className="category-button" onClick={() => handleCategoryClick(category)}>
            {category}
          </button>
          {expandedCategory === category && (
            <div className="service-list">
              {servicesByCategory[category].map((service) => (
                <div key={service.id} className="service-item">
                  <button className="service-button" onClick={() => handleServiceClick(service)}>
                    {service.name}
                  </button>
                  <p className="service-description" onClick={() => handleServiceDescriptionClick(service)}>
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default SelectService;
