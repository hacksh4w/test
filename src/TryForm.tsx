import { Button } from '@chakra-ui/button';
import { Box } from '@chakra-ui/layout';
import { useEffect } from 'react';
import { useForm, FieldErrors, useFormState } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
//import CustomInput from './components/CustomInput';
///import PDFDoc from '../PDFDoc';
//import { PDFViewer } from '@react-pdf/renderer';
import CInput from './components/CI';

type FormValues = {
    firstname: string;
    lastname: string;
    email: string;
    channel: string;
    address: {
      line1: string;
      line2: string;
    };
    age: number;
    dob: Date;
    phone: {
      number: string;
    }[];
  };


export const TryForm = () => {

  const form = useForm<FormValues>();
  const { 
    register, 
    control, 
    handleSubmit, 
    formState : { error : formErrors }, // this errors is conflicting with the input errors need to fix that 
    watch, 
    getValues, 
    setValue, 
    reset, 
    trigger } = form; 

  const {
    errors,
    isDirty,
    touchedFields,
    dirtyFields,
    isValid,
    isSubmitting,
    isSubmitted,
    isSubmitSuccessful,
    submitCount,
  } = useFormState();

  console.log({ errors, isDirty, touchedFields, dirtyFields, isValid });
  console.log({ isSubmitting, isSubmitted, isSubmitSuccessful, submitCount });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted", data);
  };

  const onError = (errors: FieldErrors<FormValues>) => {
    //console.log("Form errors", errors);
  };

  const onReset = () => {
    reset();
  };

  const handleGetValues = () => {
    console.log("Get values", getValues("username"));
  };

  const handleSetValue = () => {
    setValue("username", "", {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <Box
      p="8"
      w="800px"
      rounded="10"
      boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;"
    >
      <form onSubmit={handleSubmit(onSubmit, onError)} >
        <div className ="form-control">
        <CInput
          //name="firstName"
          placeholder="First Name"
          error={errors.firstname}
          {...register('firstname')}
        />
        <CInput
          //name="lastName"
          placeholder="Last Name"
          error={errors.lastname}
          {...register('lastname')}
        />
        <CInput
         // name="email"
          placeholder="Email"
          error={errors.email}
          {...register('email')}
        />
        <CInput
          //name="phone"
          label="Phone Number"
          placeholder="Phone Number"
          error={errors.phone}
          {...register('phone')}
        />
        <CInput
          //name="address"
          label ="My Address"
          placeholder="Address"
          error={errors.address}
          {...register('address')}
        />
        <Button type="submit" colorScheme="blue" my="3">
          submit
        </Button>
        </div>
      </form>
    {/*}  <DevTool />
        {/* Conditional rendering based on formData 
        {formData ? (
            <PDFViewer style={{ width: '100%', height: '100vh' }}>
              <PDFDoc formData={formData} />
            </PDFViewer>
          ) : null} */}
    </Box>
  );
}

export default TryForm;