import { Input } from '@chakra-ui/input';
import { Text } from '@chakra-ui/layout';
import { UseFormRegister } from 'react-hook-form';

interface ErrorMessages {
    [key: string]: {
      message: string;
    };
  }
  
  interface CustomInputProps {   //using interface as spread types can only be created from objects
    name: string;
    placeholder: string;
    errors: ErrorMessages;
    register: UseFormRegister<FormData>; // Use the correct type for the `register` function from react-hook-form
  } 

function CustomInput({ name, placeholder, errors, register } : CustomInputProps) {
  return (
    <>
    
    <label htmlFor={name}> {name}</label>
      <Input
        placeholder={placeholder}
        variant="filled"
        {...register(name, {
            required: { value: true, message: `${name} is required` },
          })}
        mt="2"

        //how to validate type with props??
      />
      {errors && errors[name] && (
        <Text color="red" fontSize="smaller" pl="1">
          {errors[name].message}
        </Text>
      )}
    </>
  );
}

export default CustomInput;