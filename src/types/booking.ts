export interface Booking {
    id: number;
    name: string;
    phone: string;
    amount: GLfloat;
    pickUpDate: string;
    pickUpTime: string;
    sourceAddress: string;
    destinationAddress: string;
    sourceLongitude: GLfloat;
    sourceLatitude: GLfloat;
    destinationLongitude: GLfloat;
    destinationLatitude: GLfloat;
    paymentIntentId?: string; // Add paymentIntentId field
    rideStatus:string;
  }
  