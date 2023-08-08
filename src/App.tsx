// import React from 'react'
import Pages from "./Pages";
import TryForm from "./TryForm";
import { useForm, FormProvider } from "react-hook-form";
import { FormValues } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";

export default function App() {
  const form = useForm<FormValues>({
    mode: "onTouched",
    resolver: yupResolver(schema),
  }); // By default, the validation is triggered on every change of the input value (mode: 'onChange')

  return (
    <div>
      <FormProvider {...form}>
        <TryForm />
      </FormProvider>
      {/* <Pages /> */}
    </div>
  );
}
