import React, { useContext } from 'react';
import { FormDetailsContext, FormDetailsContextType } from '@/context/FormDetailsContext';

function FormDetails() {
  const context = useContext<FormDetailsContextType | null>(FormDetailsContext);

  if (!context) {
    throw new Error('FormDetails must be used within a FormDetailsProvider');
  }

  const { formDetails, setFormDetails } = context;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormDetails((prevDetails: any) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div className='mt-3'>
      <div className="my-3 relative z-0">
        <label className="relative z-0">Name</label>
        <input
          type="text"
          name="name"
          className="bg-white p-1 relative z-0 focus:border-yellow-300 border-[1px] w-full rounded-md outline-none"
          value={formDetails.name}
          onChange={handleChange}
        />
      </div>
      <div className="my-3 relative z-0">
        <label className="relative z-0">Phone</label>
        <input
          type="text"
          name="phone"
          className="bg-white p-1 relative z-0 focus:border-yellow-300 border-[1px] w-full rounded-md outline-none"
          value={formDetails.phone}
          onChange={handleChange}
        />
      </div>
      <div className="my-3 relative z-0">
        <label className="relative z-0">Pick Up Date</label>
        <input
          type="date"
          name="pickUpDate"
          className="bg-white p-1 relative z-0 focus:border-yellow-300 border-[1px] w-full rounded-md outline-none"
          value={formDetails.pickUpDate}
          onChange={handleChange}
        />
      </div>
      <div className="my-3 relative z-0">
        <label className="relative z-0">Pick up Time</label>
        <input
          type="time"
          name="pickUpTime"
          className="bg-white p-1 relative z-0 focus:border-yellow-300 border-[1px] w-full rounded-md outline-none"
          value={formDetails.pickUpTime}
          onChange={handleChange}
        />
      </div>
      <div className="my-3 relative z-0">
        <label className="relative z-0">Return Time</label>
        <input
          type="time"
          name="returnTime"
          className="bg-white p-1 relative z-0 focus:border-yellow-300 border-[1px] w-full rounded-md outline-none"
          value={formDetails.returnTime}
          onChange={handleChange}
        />
      </div>
      <div>
        <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
          <input
            id="bordered-radio-1"
            type="radio"
            value="twoWay"
            name="tripType"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
            checked={formDetails.tripType === 'twoWay'}
            onChange={handleChange}
          />
          <label htmlFor="bordered-radio-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900">
            Two way
          </label>
        </div>
        <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
          <input
            id="bordered-radio-2"
            type="radio"
            value="oneWay"
            name="tripType"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
            checked={formDetails.tripType === 'oneWay'}
            onChange={handleChange}
          />
          <label htmlFor="bordered-radio-2" className="w-full py-4 ms-2 text-sm font-medium text-gray-900">
            One way
          </label>
        </div>
      </div>
    </div>
  );
}

export default FormDetails;
