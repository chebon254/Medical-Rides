import React, { useContext, useState } from 'react'
import Autocomplete from './Autocomplete'
import Cars from './Cars'
import Cards from './Cards'
import { useRouter } from 'next/navigation'
import { SelectedCarAmountContext } from '@/context/SelectedCarAmountContext'
import FormDetails from './FormDetails'

function Booking() {
  const { carAmount, setCarAmount } = useContext(SelectedCarAmountContext);
  const router:any = useRouter();
  return (
    <div>
        <h2 className='font-manrope text-[20px] font-semibold text-slate-900'>Booking</h2>
        <FormDetails />
        <Autocomplete />
        <Cars />
        <Cards />
        <button
          className={`w-full font-semibold p-2 rounded-lg mt-4 transition-colors ${carAmount === 0 || !carAmount ? 'bg-slate-200 text-slate-400' : 'bg-amber-500 hover:bg-amber-600 text-slate-900'}`}
          disabled={carAmount === 0 || !carAmount}
          onClick={() => router.push('/payment')}
        >
          Schedule Ride
        </button>
    </div>
  )
}

export default Booking