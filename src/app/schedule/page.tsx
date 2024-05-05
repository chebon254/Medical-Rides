import Booking from '@/components/Booking/Booking'
import React from 'react'

function schedule() {
  return (
    <div className='p-4'>
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8  container">
            <div className="">
                <Booking />
            </div>
            <div className="col-span-2 order-first md:order-last">
                Map
            </div>
        </div>
    </div>
  )
}

export default schedule