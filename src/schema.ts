import * as yup from 'yup';
const fieldRequired =  `This field is Required!`;   //instead of this, try label
const canOnlyContain = `can only contains alphabates`;
const schema = yup.object().shape({
  firstName: yup
    .string()
    .trim()
    .required(fieldRequired)
    .matches(/^[a-z ,.'-]+$/i, `First Name ${canOnlyContain}`),
  lastName: yup
    .string()
    .trim()
    .required(fieldRequired)
    .matches(/^[a-z ,.'-]+$/i, `Last Name ${canOnlyContain}`),
  email: yup
    .string()
    .email('Email is not valid')
    .trim()
    .required(fieldRequired),
  address: yup  //find way to do it for each line of address
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
    .required(fieldRequired),
  address2: yup
    .string()
    .trim(),
  address3: yup
    .string()
    .trim(),
  phone: yup
    .string()
    .trim()
    .required(fieldRequired), 
  age : yup
  .number()
  .required(fieldRequired),
  dob : yup
  .date()
  .required(),

});

export { schema };