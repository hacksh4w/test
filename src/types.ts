// types.ts
export interface FormValues {
    studName: string;
    email: string;
    bloodg: string;
    appno: string;
    allotment: string;
    rank: number;
    rollno: string;
    gender: string;
    // bloodGrp :   <Select /> 
    caste: string;
    religion: string;
    community: string;
    nativity: string;
    taluk: string;
    dob: Date | null ;
    annualIncome : number;
    phone: number;
    gName : string;
    occupation : string;
    gEmail : string;
    gPhoneNum : number;
    permAddress1 : string;
    permAddress2 : string;
    permAddress3 : string;
    pin : number;
    district : string;
    state : string;
    presAddress1 : string;
    presAddress2 : string;
    presAddress3 : string; 
    presPin : number;
    presDistrict : string;
    presState : string;
    qualifyingExam : string;
    qualifyingBoard : string;
    instituteName : string;
    regNumQualExam : number ;  
    percentage : number; 
    passYear : number;
    rollNumKeam : number;
    appNumKeam : number;
   // allotted branch :   <Select />

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
   // resolver: Resolver<FormValues> | undefined
  }
  