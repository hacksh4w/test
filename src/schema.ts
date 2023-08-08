import * as yup from 'yup';
const fieldRequired =  `This field is Required!`;   //instead of this, try label
const canOnlyContain = `can only contains alphabates`;

const schema = yup.object().shape({

  //Personal Details
  studName: yup
    .string()
    .trim()
    .max(30)
    .required(fieldRequired)
    .matches(/^[a-z ,.'-]+$/i, `Name ${canOnlyContain}`),
    //Native Details
  caste: yup
    .string()
    .trim()
    .max(20)
    .required(fieldRequired)
    .matches(/^[a-z ,.'-]+$/i, `First Name ${canOnlyContain}`),
  religion: yup
    .string()
    .max(30)
    .trim()
    .required(fieldRequired)
    .matches(/^[a-z ,.'-]+$/i, `First Name ${canOnlyContain}`),
  community: yup
    .string()
    .trim()
    .max(20)
    .required(fieldRequired)
    .matches(/^[a-z ,.'-]+$/i, `Community ${canOnlyContain}`),
  nativity: yup
    .string()
    .max(20)
    .trim()
    .required(fieldRequired)
    .matches(/^[a-z ,.'-]+$/i, `Nativity ${canOnlyContain}`),
  taluk: yup
    .string()
    .max(30)
    .trim()
    .required(fieldRequired)
    .matches(/^[a-z ,.'-]+$/i, `Taluk ${canOnlyContain}`),
  /* address: yup  //find way to do it for each line of address
    .string()
    .trim()
    .required(fieldRequired)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
      `Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character required`
    ),
  address1: yup
  .string()
    .trim()
    .required(fieldRequired)
    .matches(/^[a-z ,.'-]+$/i, `First Name ${canOnlyContain}`),
  address2: yup
  .string()
    .trim()
    .required(fieldRequired)
    .matches(/^[a-z ,.'-]+$/i, `First Name ${canOnlyContain}`),
  address3: yup
  .string()
    .trim()
    .required(fieldRequired)
    .matches(/^[a-z ,.'-]+$/i, `First Name ${canOnlyContain}`), */

 //Relevent Details
  email: yup
    .string()
    .trim()
    .max(50)
    .email('Email is not valid')
    .required(fieldRequired), 
  phone: yup
    .number()
    .typeError("Please enter a valid phone number") ,
    // .required(fieldRequired),
    // Phone Regex : /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/
    //.string().phone().required();
    //.matches(/^\+918[1-9][0-9]{8,11}$/, 'Must use +91 format')
  annualIncome :yup
    .number()
    .typeError("Please enter a valid phone value") ,
 // .required(fieldRequired),
  dob : yup
  .date()
  //.required(fieldRequired)
  .nullable()
  // .transform(v => (v instanceof Date && !isNaN(v) ? v : null)),
  //.date().transform((curr, orig) => orig === '' ? null : curr).required('Mandatory field message')
  //.date().nullable().required().typeError('Invalid Date') */

  
  // Father/Guardian Details
  ,
  gName : yup
    .string()
    .max(30)
    .trim()
    .required(fieldRequired)
    .matches(/^[a-z ,.'-]+$/i, `First Name ${canOnlyContain}`),
  occupation : yup
    .string()
    .max(30)
    .trim()
    .required(fieldRequired)
    .matches(/^[a-z ,.'-]+$/i, `First Name ${canOnlyContain}`),
  gEmail : yup
    .string()
    .trim()
    .max(50)
    .email('Email is not valid')
    .required(fieldRequired), 
  gPhoneNume : yup
    .string()
    .max(30)
    .trim()
    .required(fieldRequired)
    .matches(/^[a-z ,.'-]+$/i, `First Name ${canOnlyContain}`),

  // Permanent Address Details
  permAddress1 : yup
    .string()
    .max(30)
    .trim()
    .required(fieldRequired)
    .matches(/^[a-z ,.'-]+$/i, `First Name ${canOnlyContain}`),
  permAddress2 : yup
  .string()
  .max(30)
  .trim()
  .required(fieldRequired)
  .matches(/^[a-z ,.'-]+$/i, `First Name ${canOnlyContain}`),
  permAddress3 : yup
  .string()
  .max(30)
  .trim()
  .required(fieldRequired)
  .matches(/^[a-z ,.'-]+$/i, `First Name ${canOnlyContain}`),
  pin : yup
  .string()
  .max(30)
  .trim()
  .required(fieldRequired)
  .matches(/^[a-z ,.'-]+$/i, `First Name ${canOnlyContain}`),
  district : yup
  .string()
  .max(30)
  .trim()
  .required(fieldRequired)
  .matches(/^[a-z ,.'-]+$/i, `First Name ${canOnlyContain}`),
  state : yup
  .string()
  .max(30)
  .trim()
  .required(fieldRequired)
  .matches(/^[a-z ,.'-]+$/i, `First Name ${canOnlyContain}`),

  // Present Address Details
  presAddress1 : yup
  .string()
  .max(30)
  .trim()
  .required(fieldRequired)
  .matches(/^[a-z ,.'-]+$/i, `First Name ${canOnlyContain}`),
  presAddress2 : yup
  .string()
  .max(30)
  .trim()
  .required(fieldRequired)
  .matches(/^[a-z ,.'-]+$/i, `First Name ${canOnlyContain}`),
  presAddress3 : yup
  .string()
  .max(30)
  .trim()
  .required(fieldRequired)
  .matches(/^[a-z ,.'-]+$/i, `First Name ${canOnlyContain}`),
  presPin : yup
  .string()
  .max(30)
  .trim()
  .required(fieldRequired)
  .matches(/^[a-z ,.'-]+$/i, `First Name ${canOnlyContain}`),
  presDistrict : yup
  .string()
  .max(30)
  .trim()
  .required(fieldRequired)
  .matches(/^[a-z ,.'-]+$/i, `First Name ${canOnlyContain}`),
  presState : yup
  .string()
  .max(30)
  .trim()
  .required(fieldRequired)
  .matches(/^[a-z ,.'-]+$/i, `First Name ${canOnlyContain}`),


  //Qualification Exam Details
  qualifyingExam : yup
  .string()
  .max(50)
  .trim()
  .required(fieldRequired)
  .matches(/^[a-z ,.'-]+$/i, `First Name ${canOnlyContain}`),
  qualifyingBoard : yup
  .string()
  .max(20)
  .trim()
  .required(fieldRequired)
  .matches(/^[a-z ,.'-]+$/i, `First Name ${canOnlyContain}`),
  instituteName : yup
  .string()
  .max(80)
  .trim()
  .required(fieldRequired)
  .matches(/^[a-z ,.'-]+$/i, `First Name ${canOnlyContain}`),
 // regNumQualExam : yup

  //percentage : yup

  //passYear : yup  


  
  // KEAM Alottment Specific Details
//  dob : yup
 // dob : yup
  //dob : yup
  // dob : yup


});

//const defaultValues = schema.cast({}); // Use schema.cast to provide default values

export { schema };
// defaultValues };