// types.ts
export interface FormValues {
    firstname: string;
    lastname: string;
    email: string;
    caste: string;
    religion: string;
    community: string;
    nativity: string;
    taluk: string;
    address1: string;
    address2: string;
    dob: Date | null ;
    annualIncome : number;
    phone: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
   // resolver: Resolver<FormValues> | undefined
  }
  