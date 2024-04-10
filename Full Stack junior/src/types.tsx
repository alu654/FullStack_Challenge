export interface Service {
    id: number;
    name: string;
    description: string;
    category: string;
  }
  
  export interface ServicesResponse {
    services: Service[];
  }
  
  export interface Timeslot {
    date: string;
    serviceId: number;
    availableTimeslots: string[];
  }
  
  export type AvailableTimeslots = string[];
