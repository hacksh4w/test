{/*//import { Input, Text } from '@chakra-ui/react';
import { FieldError } from 'react-hook-form'
import { Input, InputProps as ChakraInputProps, FormErrorMessage } from "@chakra-ui/react"

interface InputProps extends ChakraInputProps {
    name: string;
    placeholder?: string;
    label?: string;
    error?: FieldError;
}

const CInput: React.FC<InputProps> = ({name, label, placeholder, error = null, ...rest}) => {
  return (
    <div className="form-control">
      <label htmlFor={label}>{label}</label>
      <Input type="text" id={name} placeholder={placeholder} {...rest} />
      { !!error && (
                <FormErrorMessage>
                    {error.message}
                </FormErrorMessage>
            )}
    </div>
  );
};

export default CInput;

*/}

import { Input as ChakraInput, FormLabel, FormControl, InputProps as ChakraInputProps, FormErrorMessage } from "@chakra-ui/react"
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'
import { UseFormRegister } from 'react-hook-form';
import { FormValues } from '../types';
import { forwardRef } from "@chakra-ui/react";
interface InputProps extends ChakraInputProps {
    //name: string;
    name :  keyof FormValues;
    req ?: string;
    label?: string;
    placeholder?: string;
    register: UseFormRegister<FormValues>;
    errors?: FieldError | undefined;
    type?: 'email'| 'text' | 'tel'| string;
    //errors?: FieldError | Merge<FieldError, FieldErrorsImpl> | undefined;
}

//const CInput: React.FC<InputProps> = 
   //name, label, register = () => {}, req, error = null, ...rest
    
   //forwardRef(({ label, register = () => {}, req, placeholder, errors = null, ...rest}, ref)=>{
    const CInput: React.FC<InputProps> = forwardRef(({ name,type, label, register = () => {}, placeholder, errors = null, ...rest }, ref) => {
        ///const name = rest.name; // Extract the "name" prop from "rest"
        return (
          <FormControl isInvalid={!!errors}>
            {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChakraInput
              name={name as string}
              id={name as string}
              placeholder={placeholder}
              focusBorderColor="pink.500"
              bgColor="gray.900"
              isRequired={true}
              type={type}
              variant="filled"
              _hover={{
                bgColor: 'gray.900'
              }}
             // {...register(name)}
             {...(name && register(name, { required: rest.required }))}
             {...rest}
            />
            {errors && (
              <FormErrorMessage>
                {errors.message?.toString()} {/* Decide if it should be error or errors */}
              </FormErrorMessage>
            )}
          </FormControl>
        );
            })
export default CInput;
