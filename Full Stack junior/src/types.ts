
export interface Service {
    id: number;
    name: string;
    description: string;
    category: string;
  }
  
  export interface Reservation {
    id: number;
    dateTime: string;
    service: Service;
  }
  
  