import {
  Input as ChakraInput,
  FormLabel,
  FormControl,
  InputProps as ChakraInputProps,
  FormErrorMessage,
} from "@chakra-ui/react";
import {
  FieldError,
  // FieldErrorsImpl, Merge
} from "react-hook-form";
import { UseFormRegister } from "react-hook-form";
import { FormValues } from "../types";
import { forwardRef } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import React from "react";

interface InputProps extends ChakraInputProps {
  name: keyof FormValues;
  req?: string;
  label?: string;
  items:string[];
  placeholder?: string;
  register: UseFormRegister<FormValues>;
  errors?: FieldError | undefined;
  type?: "email" | "text" | "tel" | "date" | "select" | string;
  pattern?: string;
}
const Options: React.FC<InputProps> = forwardRef(
  (
    {
      name,
    //   type,
      label,
      pattern,
      items,
      register = () => {},
      placeholder,
      errors = null,
      ...rest
    },
    ref
  ) => {
    return (
      <FormControl isInvalid={!!errors}>
        {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
        <Select
          name={name as string}
          id={name as string}
          placeholder={placeholder}
          focusBorderColor="grey.700"
          bgColor="red.200"
          isRequired={true}
          variant="filled"
          _hover={{
            bgColor: "grey.300",
          }}
          {...(name && register(name, { required: rest.required }))}
        //   {...rest}
        >
            {items.map((value, index)=>{
                return(
                    <option value={value} key={index}>{value}</option>
                );
            })}
        </Select>
      </FormControl>
    );
  }
);

export default Options;
