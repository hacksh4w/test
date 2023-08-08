import { Resolver } from "react-hook-form";

// types.ts
export interface FormValues {
    firstname: string;
    lastname: string;
    email: string;
    channel: string;
    address1: string;
    address2: string;
    age: number;
    dob: Date;
    phone: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: Resolver<FormValues> | undefined
  }
  