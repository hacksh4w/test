// import React from 'react'
import Pages from "./Pages";
import TryForm from "./TryForm";
import { useForm, FormProvider } from "react-hook-form";
export default function App() {
  type FormValues = {
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
    phone: {
      number: string;
    }[];
  };
  const methods = useForm();
  const form = useForm<FormValues>({ mode: 'onTouched' }); // By default, the validation is triggered on every change of the input value (mode: 'onChange')

  return (
    <>
      <FormProvider {...form}>
        <TryForm />
      </FormProvider>
      {/* <Pages /> */}
    </>
  );
}
