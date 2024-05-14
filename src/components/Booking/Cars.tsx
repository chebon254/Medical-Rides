"use client"
import React, { useContext, useState } from 'react'
import CarsList from '../Data/CarsList'
import Image from 'next/image'
import { DirectionDataContext } from '@/context/DirectionDataContext';
import { CarAmountContext } from "@/context/CarAmountContext";

// Cars component
function Cars() {
  const [selectedCar, setSelectedCar] = useState<any>();
  const { directionData, setDirectionData } = useContext(DirectionDataContext);
  const { carAmount, setCarAmount } = useContext(CarAmountContext);
  const [showWarning, setShowWarning] = useState(false);

  const getCost = (charges: any) => {
    return (charges * (directionData?.routes[0]?.distance || 0) * 0.000621371192).toFixed(0);
  }

  const handleCarSelection = (index: number, item: any) => {
    setSelectedCar(index);
    const cost = parseInt(getCost(item.charges));
    if (cost > 0) {
      setCarAmount(cost);
      localStorage.setItem('carAmount', cost.toString());
    } else {
      setShowWarning(true);
    }
    console.log('Cost:', cost);
    console.log('After setCarAmount:', carAmount);
  }

  const closeWarning = () => {
    setShowWarning(false);
  }

  return (
    <div className='mt-3'>
      <h2 className='font-semibold'>Select Car</h2>
      <div className='grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 m-1 p-2'>
        {CarsList.map((item, index) => (
          <div
            key={index}
            className={`m-2 p-2 border-[1px] rounded-md hover:border-yellow-400 cursor-pointer ${index == selectedCar ? 'border-yellow-400 border-[2px]' : null}`}
            onClick={() => handleCarSelection(index, item)}
          >
            <Image src={item.image} alt='Car' width={260} height={'100'} className='w-full' />
            <h2 className='text-[12px] text-gray-500 font-medium'>
              {item.name}
              {directionData?.routes ? <span className='float-right text-black'>${getCost(item.charges)}</span> : null}
            </h2>
          </div>
        ))}
      </div>

      {/* Warning popup */}
      {showWarning && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Error</h3>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={closeWarning}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <p className="text-gray-700">Enter current and destination location</p>
          </div>
        </div>
      )}
    </div>
  )
}
export default Cars;