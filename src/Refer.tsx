import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Stack } from '@chakra-ui/react';
import * as yup from 'yup';
import ChakraInput from './ChakraInput';
import { FormData } from './FormData'; // Replace 'FormData' with the actual type for your form data.

import 'react-datepicker/dist/react-datepicker.css';

const formDataSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  channel: yup.string().required('Channel is required'),
  // Add other validation schemas for form fields
});

function Hm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(formDataSchema),
  });

  const onSubmit = (data: FormData) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Stack spacing={4}>
        <ChakraInput name="username" placeholder="Username" errors={errors} register={control.register} />
        <ChakraInput name="email" placeholder="Email" errors={errors} register={control.register} />
        <ChakraInput name="channel" placeholder="Channel" errors={errors} register={control.register} />

        {/* Add other ChakraInput components for other form fields */}
        
        <Button colorScheme="blue" type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  );
}

export default Hm;
