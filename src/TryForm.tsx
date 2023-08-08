import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import { Stack, Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useForm, FieldErrors, useFormState } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
///import PDFDoc from '../PDFDoc';
//import { PDFViewer } from '@react-pdf/renderer';
import { DevTool } from "@hookform/devtools";
import CInput from "./components/CI";
import { FormValues } from "./types";

export const TryForm = () => {
  const defaultValues: FormValues = {
    firstname: "",
    lastname: "",
    email: "",
    caste: "",
    religion: "",
    community: "",
    nativity: "",
    taluk: "",
    annualIncome: 0,
    address1: "",
    address2: "",
    dob: null, // Set to the desired default date
    phone: 0,
  };

  const form = useForm<FormValues>({
    mode: "onTouched",
    resolver: yupResolver(schema),
    defaultValues, //:defaultValues
  });
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

  const onSubmit = (data: FormValues) => {
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
    setValue("firstname", "John", {
      //not assignable, previously had "firstname" in it
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
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        {" "}
        {/*noValidate creates error updation on every step */}
        <div
          className="form-control"
          // style={{width : '100vw'}}
        >
          <Flex
            direction={["column", "row"]}
            //spacing='36px'
            alignItems="center"
            w="80vw"
            p="3"
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
                id="firstName"
                name="firstname"
                label="First Name"
                placeholder="First Name"
                errors={errors.firstname}
                register={register}
                //{...register('firstname')}
              />
              <CInput
                id="lastName"
                label="Last Name"
                placeholder="Last Name"
                register={register}
                name="lastname"
                errors={errors.lastname}
                //{...register('lastname')}
              />
              <CInput
                id="dob"
                label="dob"
                placeholder="dob"
                register={register}
                name="dob"
                errors={errors.dob}
                type="date"
                pattern="\d{2}-\d{2}-\d{4}"
                //{...register('dob')}
              />
              <CInput
                id="caste"
                label="caste"
                placeholder="caste"
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
            </Box>
            <Box
              p="4"
              w="100%"
              rounded="10"
              bg="cyan.200"
              //boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;"
            >
              <CInput
                id="community"
                name="community"
                label="community"
                placeholder="community"
                errors={errors.community}
                register={register}
                //{...register('community')}
              />
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
                id="taluk"
                name="taluk"
                label="taluk"
                placeholder="taluk"
                errors={errors.taluk}
                register={register}
                //{...register('taluk')}
              />
            </Box>
          </Flex>
          <Box
            p="4"
            w="100%"
            rounded="10"
            bg="cyan.200"
            m="3"
            //boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;"
          >
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
                id="pName"
                label="pName"
                placeholder="pName"
                name="pName"
                register={register}
                type="pName"
                errors={errors.pName}
                //{...register('pName')}
              />
              <CInput
                id="occupation"
                label="occupation"
                placeholder="occupation"
                name="occupation"
                register={register}
                type="occupation"
                errors={errors.occupation}
                //{...register('occupation')}
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
                id="parPhoneNum"
                label="Parent's Phone Number"
                placeholder="Parent's Phone Number"
                type="tel"
                name="parPhoneNum"
                register={register}
                errors={errors.parPhoneNum}
                //{...register('parPhoneNum')}
              />
            </Box>{" "}
          </Flex>
          <Flex direction={["column", "row"]} spacing="36px" w="100%" m="3">
            <Box
              p="4"
              w="100%"
              rounded="10"
              m="3"
              bg="cyan.200"
              //boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;"
            >
              {" "}
              <h3>Permanent Address</h3>
              <CInput
                id="address-line-1"
                label="My Address Line 1"
                placeholder="Address Line 1"
                name="address1"
                errors={errors.address1}
                register={register}
                //{...register('address.line1')}
              />
              <CInput
                id="address-line2"
                label="My Address Line 2"
                placeholder="Address Line 2"
                name="address2"
                register={register}
                errors={errors.address2}
                //{...register('address.line2')}
              />
              <CInput
                id="address-line3"
                label="My Address Line 3"
                placeholder="Address Line 3"
                name="address3"
                register={register}
                errors={errors.address3}
                //{...register('address.line3')}
              />
              <CInput
                id="pin"
                label="PIN"
                placeholder="PIN"
                name="pin"
                register={register}
                type="number"
                errors={errors.pin}
                //{...register('pin')}
              />
              <CInput
                id="District"
                label="district"
                placeholder="district"
                name="district"
                register={register}
                type="district"
                errors={errors.district}
                //{...register('district')}
              />
              <CInput
                id="state"
                label="state"
                placeholder="state"
                name="state"
                register={register}
                type="state"
                errors={errors.state}
                //{...register('state')}
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
              {" "}
              <h3>Present Address Details</h3>
              <CInput
                id="address-line-1"
                label="My Address Line 1"
                placeholder="Address Line 1"
                name="address1"
                errors={errors.address1}
                register={register}
                //{...register('address.line1')}
              />
              <CInput
                id="address-line2"
                label="My Address Line 2"
                placeholder="Address Line 2"
                name="address2"
                register={register}
                errors={errors.address2}
                //{...register('address.line2')}
              />
              <CInput
                id="address-line3"
                label="My Address Line 3"
                placeholder="Address Line 3"
                name="address3"
                register={register}
                errors={errors.address3}
                //{...register('address.line3')}
              />
              <CInput
                id="pin"
                label="PIN"
                placeholder="PIN"
                name="pin"
                register={register}
                type="number"
                errors={errors.pin}
                //{...register('pin')}
              />
              <CInput
                id="District"
                label="district"
                placeholder="district"
                name="district"
                register={register}
                type="district"
                errors={errors.district}
                //{...register('district')}
              />
              <CInput
                id="state"
                label="state"
                placeholder="state"
                name="state"
                register={register}
                type="state"
                errors={errors.state}
                //{...register('state')}
              />
            </Box>
          </Flex>
          <Flex direction={["column", "row"]} spacing="36px" w="100%" m="3">
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
                label="instituteName"
                placeholder="instituteName"
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
                label="regNumQualExam"
                placeholder="regNumQualExam"
                errors={errors.regNumQualExam}
                register={register}
                //{...register('regNumQualExam')}
              />
              <CInput
                id="percentage"
                name="percentage"
                label="percentage"
                placeholder="percentage"
                errors={errors.percentage}
                register={register}
                //{...register('percentage')}
              />
              <CInput
                id="passYear"
                name="passYear"
                label="passYear"
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
        <Button type="submit" colorScheme="teal" variant="solid" m="3">
          Button
        </Button>
      </form>
      <DevTool control={control} />
    </>
  );
};

export default TryForm;
