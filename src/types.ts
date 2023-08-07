// types.ts
export interface FormValues {
    firstname: string;
    lastname: string;
    email: string;
    channel: string;
    address: {
      line1: string;
      line2: string;
    };
    age: number;
    dob: Date;
    phone: number;
  }
  