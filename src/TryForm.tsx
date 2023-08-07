import { Button } from '@chakra-ui/button';
import { Box } from '@chakra-ui/layout';
import { useEffect } from 'react';
import { useForm, FieldErrors, useFormState } from 'react-hook-form';
import { FormProvider } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
//import CustomInput from './components/CustomInput';
///import PDFDoc from '../PDFDoc';
//import { PDFViewer } from '@react-pdf/renderer';
import { DevTool } from '@hookform/devtools';
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

  const form = useForm<FormValues>({ mode: 'onTouched' }); // By default, the validation is triggered on every change of the input value (mode: 'onChange')
  // The validation of the form inputs will only be triggered when the input is blurred or explicitly marked as touched.
  const { 
    register, 
 //   control,
    handleSubmit, 
    formState : { errors : formErrors }, // this errors is conflicting with the input errors need to fix that 
    //watch, 
    getValues, 
    setValue, 
    reset, 
    //trigger 
  } = form; 

  const {
    errors,
    isDirty,
    touchedFields,
    dirtyFields,
    isValid,
    isSubmitted,
    isSubmitSuccessful,
  } = useFormState();

  console.log({ errors, isDirty, touchedFields, dirtyFields, isValid });
  console.log({ isSubmitted, isSubmitSuccessful });

  const onSubmit = (data : FormValues) => {
    console.log("Form submitted", data);
  };

  const onError = (errors: FieldErrors<FormValues>) => {
    //console.log("Form errors", errors);
  };

  const onReset = () => {
    reset();
  };

  const handleGetValues = (data : FormValues) => {
    console.log("Get values", getValues(data));  //GetValues not defined lol
  };

  const handleSetValue = (data : FormValues) => {
    setValue(data, "", {  //not assignable, previously had "firstname" in it
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
    > <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit, onError)} >
        <div className ="form-control">
        <CInput
          id="firstName"
          placeholder="First Name"
          errors={errors.firstname}
          control={control}
          {...register('firstname')}
        />
        <CInput
          id="lastName"
          placeholder="Last Name"
          errors={errors.lastname}
          control={control}
          {...register('lastname')}
        />
        <CInput
          id="email"
          placeholder="Email"
          errors={errors.email}
          control={control}
          {...register('email')}
        />
        <CInput
          id="phoneNum"
          label="Phone Number"
          placeholder="Phone Number"
          control={control}
          errors={errors.phone}
          {...register('phone')}
        />
        <CInput
          id="address"
          label ="My Address"
          placeholder="Address"
          control={control}
          errors={errors.address}
          {...register('address')}
        />
        <Button type="submit" colorScheme="blue" my="3">
          submit
        </Button>
        </div>
      </form>
      </FormProvider>
      <DevTool />
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