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

  const setTripType = (tripType: string) => {
    setFormDetails((prevDetails: any) => ({
      ...prevDetails,
      tripType,
    }));
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-1 rounded-xl bg-slate-100 p-1">
        <button
          type="button"
          onClick={() => setTripType('twoWay')}
          className={`flex items-center justify-center gap-1.5 rounded-lg py-2 text-sm font-semibold transition-all duration-200 ${
            formDetails.tripType === 'twoWay'
              ? 'bg-white text-teal-700 shadow-sm'
              : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
          </svg>
          Round trip
        </button>
        <button
          type="button"
          onClick={() => setTripType('oneWay')}
          className={`flex items-center justify-center gap-1.5 rounded-lg py-2 text-sm font-semibold transition-all duration-200 ${
            formDetails.tripType === 'oneWay'
              ? 'bg-white text-teal-700 shadow-sm'
              : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
          One way
        </button>
      </div>

      <div className="relative">
        <label className="form-label">Name</label>
        <svg className="pointer-events-none absolute left-3 top-[34px] h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0" />
        </svg>
        <input
          type="text"
          name="name"
          placeholder="Full name"
          className="form-input pl-9"
          value={formDetails.name}
          onChange={handleChange}
        />
      </div>

      <div className="relative">
        <label className="form-label">Phone</label>
        <svg className="pointer-events-none absolute left-3 top-[34px] h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
        <input
          type="text"
          name="phone"
          placeholder="(719) 000-0000"
          className="form-input pl-9"
          value={formDetails.phone}
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="form-label">Pick-up date</label>
          <input
            type="date"
            name="pickUpDate"
            className="form-input"
            value={formDetails.pickUpDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="form-label">Pick-up time</label>
          <input
            type="time"
            name="pickUpTime"
            className="form-input"
            value={formDetails.pickUpTime}
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <label className="form-label">
          Return time
          {formDetails.tripType === 'oneWay' && (
            <span className="ml-1 normal-case tracking-normal text-slate-400">(round trips only)</span>
          )}
        </label>
        <input
          type="time"
          name="returnTime"
          className="form-input"
          value={formDetails.returnTime}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default FormDetails;
