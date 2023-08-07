// import React from 'react'
import Pages from "./Pages";
import TryForm from "./TryForm";
import { useForm, FormProvider } from "react-hook-form";
export default function App() {
  const methods = useForm();
  return (
    <>
      <FormProvider {...methods}>
        <TryForm />
      </FormProvider>
      {/* <Pages /> */}
    </>
  );
}
