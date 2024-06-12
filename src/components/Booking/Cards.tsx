"use client"
import React, { useState } from 'react'
import CardsList from '../Data/CardsList'
import Image from 'next/image'

function Cards() {
    const [activeIndex, setActiveindex] = useState<any>()
    return (
        <div className='mt-3'>
            <h2 className='font-semibold'>Payment Options</h2>
            <div className='grid grid-cols-4 mt-2 h-[45px]'>
                {CardsList.map((item, index) => (
                    <div key={index} className={`rounded-md h-[38] w-[60px] 
                    border-[1px] flex items-center 
                    justify-center 
                    cursor-pointer 
                    hover:border-yellow-400 
                    hover:scale-110 transition-all ${activeIndex==index?'border-yellow-400 border-[2px]':null}`}
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