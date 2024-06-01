import React, { useContext } from 'react';
import { FormDetailsContext } from '@/context/FormDetailsContext';

function FormDetails() {
  const context = useContext(FormDetailsContext);

  if (!context) {
    throw new Error('FormDetails must be used within a FormDetailsProvider');
  }

  const { formDetails, setFormDetails } = context;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormDetails((prevDetails) => ({
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
    </div>
  );
}

export default FormDetails;
