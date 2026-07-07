"use client"
import React, { useState } from 'react'
import CardsList from '../Data/CardsList'
import Image from 'next/image'

function Cards() {
    const [activeIndex, setActiveindex] = useState<any>()
    return (
        <div>
            <div className="grid grid-cols-4 gap-2">
                {CardsList.map((item, index) => (
                    <button
                        type="button"
                        key={index}
                        className={`relative flex h-12 items-center justify-center rounded-xl border bg-white transition-all duration-200 hover:border-teal-400 ${
                            activeIndex === index
                                ? 'border-teal-500 ring-2 ring-teal-500/20'
                                : 'border-slate-200'
                        }`}
                        onClick={() => setActiveindex(index)}
                    >
                        {activeIndex === index && (
                            <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-teal-500 text-white shadow">
                                <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                            </span>
                        )}
                        <Image src={item.image}
                            alt={item.name}
                            width={36}
                            height={50}
                        />
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Cards
