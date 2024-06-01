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
        <h2 className='text-[20px] font-semibold'>Booking</h2>
        <FormDetails />
        <Autocomplete />
        <Cars />
        <Cards />
        <button 
          className={`w-full bg-yellow-400 p-1 rounded-md mt-4 ${carAmount === 0 || !carAmount ? 'bg-gray-200' :null}`} 
          disabled={carAmount === 0 || !carAmount} 
          onClick={() => router.push('/payment')}
        >
          Schedule Ride
        </button>
    </div>
  )
}

export default Booking