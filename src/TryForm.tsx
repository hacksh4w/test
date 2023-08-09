import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/react";
import { useState } from "react";
//import { Select } from "@chakra-ui/react";
import { useEffect } from "react";
import { useForm, FieldErrors, useFormState } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import PDFDoc from './PDFDoc'
import { PDFViewer } from '@react-pdf/renderer';
import { DevTool } from "@hookform/devtools";
import CInput from "./components/CI";
import { FormValues } from "./types";
const defaultValues: FormValues = {
  studName: "",
  email: "",
  caste: "",
  religion: "",
  community: "",
  nativity: "",
  taluk: "",
  annualIncome: 0,
  dob : new Date(),
  //dob: null, // Set to the desired default date
  phone: 0,
  gName : "",
  occupation : "",
  gEmail : "",
  gPhoneNum : 0,
  permAddress1 : "",
  permAddress2 : "",
  permAddress3 : "",
  pin : 0,
  district : "",
  state : "",
  presAddress1 : "",
  presAddress2 : "",
  presAddress3 : "", 
  presPin : 0,
  presDistrict : "",
  presState : "",
  qualifyingExam : "",
  qualifyingBoard : "",
  instituteName : "",
  regNumQualExam : 0,  
//  percentage : 
  passYear : 0,
  rollNumKeam : 0,
  appNumKeam : 0,
 // allotted branch :   <Select />

};


export const TryForm = () => {
  const form = useForm<FormValues>({
    mode: "onTouched",
    resolver: yupResolver(schema),
    defaultValues :defaultValues,
  });

  const [showPDF, setShowPDF] = useState(false);
  const [pdfValues, setPdfValues] = useState<FormValues>();
  // mode: 'onTouched',  // By default, the validation is triggered on every change of the input value (mode: 'onChange')
  // The validation of the form inputs will only be triggered when the input is blurred or explicitly marked as touched.
  const {
    register,
    control,
    handleSubmit,
    formState: { errors }, // this errors is conflicting with the input errors need to fix that
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


  const onError = (formErrors: FieldErrors<FormValues>) => {
    console.log("Form errors", formErrors);
  };  

  const onReset = () => {
    reset();
  };

  const handleGetValues = () => {
    console.log("Get values", getValues());
  };
// Use this to pass todays date as dob default value and show error after touching and it shows todays date, or maybe put an age bar of 5 years
  const handleSetValue = () => {
    setValue("studName", "Subru", {
      //not assignable, previously had "firstname" in it
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted", data);
    handleGetValues()
    console.log(pdfValues);
    //might set input form values
    //setValue(data);

    // Show the PDF viewer
    setShowPDF(true);
    setPdfValues(data);
  };


  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      //onReset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <form 
        onSubmit={handleSubmit(onSubmit // )}
          , onError )}
        style={{
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: "100px",
        }}
      >
        {" "}
        {/*noValidate creates error updation on every step */}
        <div className="form-control" style={{ width: "85vw" }}>
          <Flex
            direction={["column", "row"]}
            //spacing='36px'
            alignItems="flex-start"
            justifyContent="center"
            w="100%"
          >
            <Box
              p="4"
              w="100%"
              rounded="10"
              bg="cyan.200"
              m="3"
              //boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;"
            >
              <CInput
                id="studName"
                name="studName"
                label="Full Name"
                placeholder="Name"
                errors={errors.studName}
                register={register}
                //{...register('studName')}
              />
              <CInput
                id="dob"
                label="Date of Birth"
                placeholder="Date of Birth"
                register={register}
                name="dob"
                errors={errors.dob}
                type='date'
                //{...register('dob')}
              />
              <CInput
                id="caste"
                label="Caste"
                placeholder="Caste"
                name="caste"
                register={register}
                type="caste"
                errors={errors.caste}
                //{...register('caste')}
              />
              <CInput
                id="religion"
                label="Religion"
                placeholder="Religion"
                name="religion"
                register={register}
                type="religion"
                errors={errors.religion}
                //{...register('religion')}
              />
              <CInput
                id="Community"
                name="community"
                label="Community"
                placeholder="Community"
                errors={errors.community}
                register={register}
                //{...register('community')}
              />
            </Box>
            <Box
              p="4"
              w="100%"
              rounded="10"
              bg="cyan.200"
              m="3"
              //boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;"
            >
              <CInput
                id="nativity"
                name="nativity"
                label="Nativity"
                placeholder="Nativity"
                errors={errors.nativity}
                register={register}
                //{...register('nativity')}
              />
              <CInput
                id="Taluk"
                name="taluk"
                label="Taluk"
                placeholder="Taluk"
                errors={errors.taluk}
                register={register}
                //{...register('taluk')}
              />
              <CInput
                id="email"
                label="Email"
                placeholder="Email"
                name="email"
                register={register}
                type="email"
                errors={errors.email}
                //{...register('email')}
              />
              <CInput
                id="phoneNum"
                label="Phone Number"
                placeholder="Phone Number"
                type="tel"
                name="phone"
                register={register}
                errors={errors.phone}
                //{...register('phone')}
              />
              <CInput
                id="annualIncome"
                label="Annual Income"
                placeholder="Annual Income"
                type="number"
                name="annualIncome"
                register={register}
                errors={errors.annualIncome}
                //{...register('annualIncome')}
              />
            </Box>
          </Flex>
          <Flex>
            <Box
              p="4"
              w="100%"
              rounded="10"
              bg="cyan.200"
              m="3"
              //boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;"
            >
              {" "}
              Father's/Gaurdians Details
              <CInput
                id="gName"
                label="Guardian Name"
                placeholder="Guardian Name"
                name="gName"
                register={register}
                type="gName"
                errors={errors.gName}
                //{...register('gName')}
              />
              <CInput
                id="occupation"
                label="Occupation"
                placeholder="Occupation"
                name="occupation"
                register={register}
                type="occupation"
                errors={errors.occupation}
                //{...register('occupation')}
              />
              <CInput
                id="gEmail"
                label="Guaridian Email"
                placeholder="Email"
                name="gEmail"
                register={register}
                type="gEmail"
                errors={errors.gEmail}
                //{...register('gEmail')}
              />
              <CInput
                id="gPhoneNum"
                label="Parent's Phone Number"
                placeholder="Parent's Phone Number"
                type="tel"
                name="gPhoneNum"
                register={register}
                errors={errors.gPhoneNum}
                //{...register('gPhoneNum')}
              />
            </Box>{" "}
          </Flex>
          <Flex direction={["column", "row"]} w="100%">
            <Box
              p="4"
              w="50%"
              rounded="10"
              m="3"
              bg="cyan.200"
              //boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;"
            >
              {" "}
              <h3>Permanent Address</h3>
              <CInput
                id="permAddressLine1"
                label="My Address Line 1"
                placeholder="Address Line 1"
                name="permAddress1"
                errors={errors.permAddress1}
                register={register}
                //{...register('address.line1')}
              />
              <CInput
                id="permAddressLine2"
                label="My Address Line 2"
                placeholder="Address Line 2"
                name="permAddress2"
                register={register}
                errors={errors.permAddress2}
                //{...register('address.line2')}
              />
              <CInput
                id="permAddressLine3"
                label="My Address Line 3"
                placeholder="Address Line 3"
                name="permAddress3"
                register={register}
                errors={errors.permAddress3}
                //{...register('address.line3')}
              />
              <CInput
                id="pin"
                label="PIN Code"
                placeholder="Enter you PIN"
                name="pin"
                register={register}
                type="number"
                errors={errors.pin}
                //{...register('pin')}
              />
              <CInput
                id="District"
                label="District"
                placeholder="District"
                name="district"
                register={register}
                type="district"
                errors={errors.district}
                //{...register('district')}
              />
              <CInput
                id="state"
                label="State"
                placeholder="State"
                name="state"
                register={register}
                type="state"
                errors={errors.state}
                //{...register('state')}
              />
            </Box>
            <Box
              p="4"
              w="50%"
              rounded="10"
              bg="cyan.200"
              m="3"
              //boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;"
            >
              {" "}
              <h3>Present Address Details</h3>
              <CInput
                id="pres-address-line-1"
                label="My Address Line 1"
                placeholder="Address Line 1"
                name="presAddress1"
                errors={errors.presAddress1}
                register={register}
                //{...register('address.line1')}
              />
              <CInput
                id="pres-address-line2"
                label="My Address Line 2"
                placeholder="Address Line 2"
                name="presAddress2"
                register={register}
                errors={errors.presAddress2}
                //{...register('address.line2')}
              />
              <CInput
                id="pres-address-line3"
                label="My Address Line 3"
                placeholder="Address Line 3"
                name="presAddress3"
                register={register}
                errors={errors.presAddress3}
                //{...register('address.line3')}
              />
              <CInput
                id="presPin"
                label="PIN"
                placeholder="PIN"
                name="presPin"
                register={register}
                type="number"
                errors={errors.presPin}
                //{...register('pin')}
              />
              <CInput
                id="presDistrict"
                label="District"
                placeholder="District"
                name="presDistrict"
                register={register}
                type="string"
                errors={errors.presDistrict}
                //{...register('district')}
              />
              <CInput
                id="presState" //change this name
                label="State"
                placeholder="State"
                name="presState"
                register={register}
                type="string"
                errors={errors.presState}
                //{...register('state')}
              />
            </Box>
          </Flex>
          <Flex direction={["column", "row"]} w="100%">
            <Box
              p="4"
              m="3"
              w="100%"
              rounded="10"
              bg="cyan.200"
              //boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;"
            >
              {" "}
              <h2> Qualifying Examination Details</h2>
              <CInput
                id="qualifyingExam"
                name="qualifyingExam"
                label="Qualifying Exam"
                placeholder="Qualifying Exam"
                errors={errors.qualifyingExam}
                register={register}
                //{...register('qualifyingExam')}
              />
              <CInput
                id="qualifyingBoard"
                label="Qualifying Board"
                placeholder="Qualifying Board"
                register={register}
                name="qualifyingBoard"
                errors={errors.qualifyingBoard}
                //{...register('qualifyingBoard')}
              />
              <CInput
                id="instituteName"
                label="Institution Name"
                placeholder="Institution Name"
                name="instituteName"
                register={register}
                type="instituteName"
                errors={errors.instituteName}
                //{...register('instituteName')}
              />
            </Box>
            <Box
              p="4"
              m="3"
              w="100%"
              rounded="10"
              bg="cyan.200"
              //boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;"
            >
              {" "}
              <h2> Qualifying Examination Details</h2>
              <CInput
                id="regNumQualExam"
                name="regNumQualExam"
                label="Registered number of qualifying Exam"
                placeholder="Enter your number"
                errors={errors.regNumQualExam}
                register={register}
                //{...register('regNumQualExam')}
              />


              <CInput
                id="percentage"
                name="percentage"
                label="Percentage"
                placeholder="Percentage"
                errors={errors.percentage}
                register={register}
                //{...register('percentage')}
              />
              <CInput
                id="passYear"
                name="passYear"
                label="Qualifying Year"
                placeholder="passYear"
                errors={errors.passYear}
                register={register}
                //{...register('passYear')}
              />
            </Box>
          </Flex>
        </div>
        {/* Conditional rendering based on formData 
        {formData ? (
            <PDFViewer style={{ width: '100%', height: '100vh' }}>
              <PDFDoc formData={formData} />
            </PDFViewer>
          ) : null} */}
        <Button type="submit" 
          colorScheme="teal" variant="solid" m="3"
        >
          Button
        </Button>
        
      </form>
      <DevTool control={control} />
      
        {/* Conditional rendering based on formData */}
          {pdfValues ? (
            <PDFViewer style={{ width: '100%', height: '100vh' }}>
              <PDFDoc inputValues={pdfValues} />
            </PDFViewer>
          ) : null}
      
      {/* Render the PDFPage if showPDF is true */}
      {/*showPDF && <PDFDoc inputValues = { pdfValues} />}
  */}
    </>
  );
};

export default TryForm;