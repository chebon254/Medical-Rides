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
    <div className='mt-3 space-y-1'>
      <div className="my-3 relative z-0">
        <label className="relative z-0 text-sm font-medium text-slate-700 mb-1 block">Name</label>
        <input
          type="text"
          name="name"
          className="bg-white px-3 py-2 relative z-0 border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 w-full rounded-md outline-none transition-shadow"
          value={formDetails.name}
          onChange={handleChange}
        />
      </div>
      <div className="my-3 relative z-0">
        <label className="relative z-0 text-sm font-medium text-slate-700 mb-1 block">Phone</label>
        <input
          type="text"
          name="phone"
          className="bg-white px-3 py-2 relative z-0 border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 w-full rounded-md outline-none transition-shadow"
          value={formDetails.phone}
          onChange={handleChange}
        />
      </div>
      <div className="my-3 relative z-0">
        <label className="relative z-0 text-sm font-medium text-slate-700 mb-1 block">Pick Up Date</label>
        <input
          type="date"
          name="pickUpDate"
          className="bg-white px-3 py-2 relative z-0 border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 w-full rounded-md outline-none transition-shadow"
          value={formDetails.pickUpDate}
          onChange={handleChange}
        />
      </div>
      <div className="my-3 relative z-0">
        <label className="relative z-0 text-sm font-medium text-slate-700 mb-1 block">Pick up Time</label>
        <input
          type="time"
          name="pickUpTime"
          className="bg-white px-3 py-2 relative z-0 border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 w-full rounded-md outline-none transition-shadow"
          value={formDetails.pickUpTime}
          onChange={handleChange}
        />
      </div>
      <div className="my-3 relative z-0">
        <label className="relative z-0 text-sm font-medium text-slate-700 mb-1 block">Return Time</label>
        <input
          type="time"
          name="returnTime"
          className="bg-white px-3 py-2 relative z-0 border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 w-full rounded-md outline-none transition-shadow"
          value={formDetails.returnTime}
          onChange={handleChange}
        />
      </div>
      <div>
        <div className="flex items-center ps-4 border border-slate-200 rounded-md">
          <input
            id="bordered-radio-1"
            type="radio"
            value="twoWay"
            name="tripType"
            className="w-4 h-4 text-teal-600 bg-slate-100 border-slate-300 focus:ring-teal-500"
            checked={formDetails.tripType === 'twoWay'}
            onChange={handleChange}
          />
          <label htmlFor="bordered-radio-1" className="w-full py-3 ms-2 text-sm font-medium text-slate-700">
            Two way
          </label>
        </div>
        <div className="flex items-center ps-4 border border-slate-200 rounded-md">
          <input
            id="bordered-radio-2"
            type="radio"
            value="oneWay"
            name="tripType"
            className="w-4 h-4 text-teal-600 bg-slate-100 border-slate-300 focus:ring-teal-500"
            checked={formDetails.tripType === 'oneWay'}
            onChange={handleChange}
          />
          <label htmlFor="bordered-radio-2" className="w-full py-3 ms-2 text-sm font-medium text-slate-700">
            One way
          </label>
        </div>
      </div>
    </div>
  );
}

export default FormDetails;
