import { createContext, useState, ReactNode, useContext } from 'react';

interface AddressContextProps {
  sourceAddress: string;
  setSourceAddress: React.Dispatch<React.SetStateAction<string>>;
  destinationAddress: string;
  setDestinationAddress: React.Dispatch<React.SetStateAction<string>>;
}

const AddressContext = createContext<AddressContextProps | undefined>(undefined);

export const AddressProvider = ({ children }: { children: ReactNode }) => {
  const [sourceAddress, setSourceAddress] = useState<string>('');
  const [destinationAddress, setDestinationAddress] = useState<string>('');

  return (
    <AddressContext.Provider value={{ sourceAddress, setSourceAddress, destinationAddress, setDestinationAddress }}>
      {children}
    </AddressContext.Provider>
  );
};

export const useAddressContext = () => {
  const context = useContext(AddressContext);
  if (context === undefined) {
    throw new Error('useAddressContext must be used within an AddressProvider');
  }
  return context;
};
