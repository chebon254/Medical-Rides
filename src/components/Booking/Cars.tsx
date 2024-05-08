"use client"
import React, { useState } from 'react'
import CarsList from '../Data/CarsList'
import Image from 'next/image'

function Cars() {
    const [selectedCar, setSelectedCar] = useState<any>()
  return (
    <div className='mt-3'>
        <h2 className='font-semibold'>Select Car</h2>
        <div className='grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 m-1 p-2'>
            {CarsList.map((item, index)=>(
                <div key={index} 
                className={`m-2 p-2 border-[1px] rounded-md 
                hover:border-yellow-400 cursor-pointer ${index==selectedCar?'border-yellow-400':null}`}
                onClick={()=>setSelectedCar(index)}>
                    <Image src={item.image}
                    alt='Car'
                    width={260}
                    height={'100'}
                    className='w-full'
                    />
                    <h2 className='text-[12px] text-gray-500 font-medium'>{item.name}<span className='float-right text-black'>${item.charges*5}</span></h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Cars