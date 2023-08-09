// import React from 'react'
import TryForm from "./TryForm";
import { useForm, FormProvider } from "react-hook-form";
import { FormValues } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { PDFViewer } from '@react-pdf/renderer';
import PDFDoc from "./PDFDoc";

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
    {/*}  <PDFViewer>
          <PDFDoc />
  </PDFViewer>  */}

    </div>
  );
}
