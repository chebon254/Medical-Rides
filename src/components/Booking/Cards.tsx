"use client"
import React, { useState } from 'react'
import CardsList from '../Data/CardsList'
import Image from 'next/image'

function Cards() {
    const [activeIndex, setActiveindex] = useState<any>()
    return (
        <div className='mt-3'>
            <h2 className='font-semibold text-slate-700 text-sm'>Payment Options</h2>
            <div className='grid grid-cols-4 mt-2 h-[45px] gap-2'>
                {CardsList.map((item, index) => (
                    <div key={index} className={`rounded-md h-[38] w-[60px]
                    border flex items-center
                    justify-center
                    cursor-pointer
                    hover:border-teal-500
                    hover:scale-110 transition-all ${activeIndex==index?'border-teal-500 border-2':'border-slate-300'}`}
                    onClick={()=>setActiveindex(index)}>
                        <Image src={item.image}
                            alt='Payment Option'
                            width={36}
                            height={50}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cards