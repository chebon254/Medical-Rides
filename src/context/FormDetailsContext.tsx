import React, { createContext, useState, ReactNode } from 'react';

export type FormDetailsType = {
  name: string;
  phone: string;
  pickUpDate: string;
  pickUpTime: string;
  returnTime: string;
  tripType: 'oneWay' | 'twoWay';
};

export type FormDetailsContextType = {
  formDetails: FormDetailsType;
  setFormDetails: React.Dispatch<React.SetStateAction<FormDetailsType>>;
};

export const FormDetailsContext = createContext<FormDetailsContextType | null>(null);

export const FormDetailsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [formDetails, setFormDetails] = useState<FormDetailsType>({
    name: '',
    phone: '',
    pickUpDate: '',
    pickUpTime: '',
    returnTime: '',
    tripType: 'oneWay',
  });

  return (
    <FormDetailsContext.Provider value={{ formDetails, setFormDetails }}>
      {children}
    </FormDetailsContext.Provider>
  );
};