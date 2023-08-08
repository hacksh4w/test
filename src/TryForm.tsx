import { Button } from '@chakra-ui/button';
import { Box } from '@chakra-ui/layout';
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { useEffect } from 'react';
import { useForm, FieldErrors, useFormState } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema,defaultValues } from './schema';
///import PDFDoc from '../PDFDoc';
//import { PDFViewer } from '@react-pdf/renderer';
import { DevTool } from '@hookform/devtools';
import CInput from './components/CI';
import { FormValues } from './types';

export const TryForm = () => {

  const form = useForm<FormValues>({ 
  mode: 'onTouched', 
  resolver: yupResolver(schema),
  defaultValues: defaultValues, });
   // mode: 'onTouched',  // By default, the validation is triggered on every change of the input value (mode: 'onChange')
                        // The validation of the form inputs will only be triggered when the input is blurred or explicitly marked as touched.

  const { 
    register, 
    control,
    handleSubmit, 
    formState : { errors }, // this errors is conflicting with the input errors need to fix that   
    //try isSubmitting with load from formState
    //watch, 
    getValues, 
    setValue, 
    reset, 
    //trigger 
  } = form; 

  const {
    /*errors : formErrors,
    isDirty,
    touchedFields,
    dirtyFields,
    isValid,
  isSubmitted,  */
    isSubmitSuccessful,
  } = useFormState();  

  // console.log({ formErrors, isDirty, touchedFields, dirtyFields, isValid });
  // console.log({ isSubmitted, isSubmitSuccessful });


  const onSubmit = (data : FormValues) => {
    console.log("Form submitted", data);
  };

  const onError = (formErrors: FieldErrors<FormValues>) => {
    console.log("Form errors", formErrors);
  };

  const onReset = () => {
    reset();
  };

  const handleGetValues = () => {
    console.log("Get values", getValues());  
  };

  const handleSetValue = () => {
    setValue("firstname", "John", {  //not assignable, previously had "firstname" in it
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };  

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();  
      //onReset();
    }
  }, [isSubmitSuccessful, reset]); 

  return (
  <>
  <form onSubmit={handleSubmit(onSubmit, onError)} >  {/*noValidate creates error updation on every step */}
    <Box
      p="4"
      w="100%"
      rounded="10"
      boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;"
    >
      
        <div className ="form-control">
        <CInput
          id="firstName"
          name='firstname'
          label= 'First Name'
          placeholder="First Name"
          errors={errors.firstname}
          register = {register}
          //{...register('firstname')}
        />
        <CInput
          id="lastName"
          label='Last Name'
          placeholder="Last Name"
          register = {register}
          name='lastname'
          errors={errors.lastname}
          //{...register('lastname')}
        />
        <CInput
          id="email"
          label='Email'
          placeholder="Email"
          name='email'
          register = {register}
          type='email'
          errors={errors.email}
          //{...register('email')}
        />
        <CInput
          id="phoneNum"
          label="Phone Number"
          placeholder="Phone Number"
          type='tel'
          name=''
          register = {register}
          errors={errors.phone}
          //{...register('phone')}
        />
        <CInput
          id="address-line-1"
          label ="My Address"
          placeholder="Address"
          name='address1'
          errors={errors.address1}
          register = {register}
          //{...register('address.line1')}
        />

        <CInput
          id="address-line2"
          label ="My Address"
          placeholder="Address"
          name="address2"
          register = {register}
          errors={errors.address2}
          //{...register('address.line2')}
        />
       
        </div>
        </Box>
        {/* Conditional rendering based on formData 
        {formData ? (
            <PDFViewer style={{ width: '100%', height: '100vh' }}>
              <PDFDoc formData={formData} />
            </PDFViewer>
          ) : null} */}
     
          <Button type='submit' colorScheme='teal' align='center' variant='solid' m='3'>
            Button
          </Button>
        </form>
      <DevTool  control={control} />
      </>
  );
}

export default TryForm;