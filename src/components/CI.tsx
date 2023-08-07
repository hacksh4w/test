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
import { forwardRef } from "@chakra-ui/react";
interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
    placeholder?: string;
   errors?: FieldError | Merge<FieldError, FieldErrorsImpl> | undefined;
}

const CInput: React.FC<InputProps> = 
    forwardRef(({ name , label, placeholder, errors = null,  ...rest }, ref)=>{
        return (
            <FormControl isInvalid={!!errors}>
                {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
                <ChakraInput 
                    name={name}                 
                    id={name} 
                    placeholder={placeholder}
                    focusBorderColor="pink.500" 
                    bgColor="gray.900" 
                    variant="filled"
                    _hover={{
                      bgColor: 'gray.900'
                    }}
                    size="lg"
                    {...rest}
                />
                {errors && (
                    <FormErrorMessage>
                        {errors.message?.toString()}   {/*decide if it shud be error or errors */}
                    </FormErrorMessage>
                )}
                
            </FormControl>
        );
    })

export default CInput;
