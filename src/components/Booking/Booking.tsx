import React from 'react'
import Autocomplete from './Autocomplete'
import Cars from './Cars'
import Cards from './Cards'

function Booking() {
  return (
    <div>
        <h2 className='text-[20px] font-semibold'>Booking</h2>
        <Autocomplete />
        <Cars/>
        <Cards/>
    </div>
  )
}

export default Booking