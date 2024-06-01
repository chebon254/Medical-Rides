"use client"
import { createContext, useState, ReactNode } from 'react';

interface FormDetails {
  name: string;
  phone: string;
  pickUpDate: string;
  pickUpTime: string;
  returnTime: string;
}

interface FormDetailsContextProps {
  formDetails: FormDetails;
  setFormDetails: React.Dispatch<React.SetStateAction<FormDetails>>;
}

const defaultFormDetails: FormDetails = {
  name: '',
  phone: '',
  pickUpDate: '',
  pickUpTime: '',
  returnTime: '',
};

export const FormDetailsContext = createContext<FormDetailsContextProps | undefined>(undefined);

export const FormDetailsProvider = ({ children }: { children: ReactNode }) => {
  const [formDetails, setFormDetails] = useState<FormDetails>(defaultFormDetails);

  return (
    <FormDetailsContext.Provider value={{ formDetails, setFormDetails }}>
      {children}
    </FormDetailsContext.Provider>
  );
};
