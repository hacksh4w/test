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
import { FieldError } from 'react-hook-form'

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
    error?: FieldError;
}

const Input: React.FC<InputProps> = ({ name, label, error = null, ...rest }) => {
    return (
        <FormControl isInvalid={!!error}>
            {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChakraInput 
                name={name}                 
                id={name} 
                focusBorderColor="pink.500" 
                bgColor="gray.900" 
                variant="filled"
                _hover={{
                  bgColor: 'gray.900'
                }}
                size="lg"
                {...rest}
            />
            {error && (
                <FormErrorMessage>
                    {error.message}
                </FormErrorMessage>
            )}
            
        </FormControl>
    );
}

export default Input;
