import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react';
import { PDFViewer } from '@react-pdf/renderer';
import PDFDoc from './PDFDoc.tsx';
import { FormValues } from './types.ts';


type inputValues = FormValues ;



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <App /> 
        <PDFDoc {...inputValues} />
    </ChakraProvider>
  </React.StrictMode>,
)

      {/*
        <PDFDoc> { inputValues } /> */}