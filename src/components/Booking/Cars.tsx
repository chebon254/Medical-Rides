"use client"
import React, { useContext, useState } from 'react';
import CarsList from '../Data/CarsList';
import Image from 'next/image';
import { DirectionDataContext } from '@/context/DirectionDataContext';
import { SelectedCarAmountContext } from '@/context/SelectedCarAmountContext';

// Cars component
function Cars() {
  const [selectedCar, setSelectedCar] = useState<any>();
  const { directionData } = useContext(DirectionDataContext);
  const { setCarAmount } = useContext(SelectedCarAmountContext);

  const getCost = (charges: any) => {
    return (charges * (directionData?.routes[0]?.distance || 0) * 0.000621371192).toFixed(0);
  };

  return (
    <div className='mt-3'>
      <h2 className='font-semibold'>Select Car</h2>
      <div className='grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 m-1 p-2'>
        {CarsList.map((item, index) => (
          <div
            key={index}
            className={`m-2 p-2 border-[1px] rounded-md 
            hover:border-yellow-400 cursor-pointer ${index === selectedCar ? 'border-yellow-400 border-[2px]' : ''}`}
            onClick={() => {
              setSelectedCar(index);
              const cost = getCost(item.charges);
              console.log('Cost:', cost);
              setCarAmount(cost);
            }}
          >
            <Image
              src={item.image}
              alt='Car'
              width={260}
              height={100}
              className='w-full'
            />
            <h2 className='text-[12px] text-gray-500 font-medium'>
              {item.name}
              {directionData?.routes && (
                <span className='float-right text-black'>${getCost(item.charges)}</span>
              )}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cars;
