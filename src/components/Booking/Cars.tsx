"use client"
import React, { useContext, useState } from 'react';
import CarsList from '../Data/CarsList';
import Image from 'next/image';
import { DirectionDataContext } from '@/context/DirectionDataContext';
import { SelectedCarAmountContext } from '@/context/SelectedCarAmountContext';


interface Route {
  distance: number;
}

interface DirectionData {
  routes: Route[];
}

function Cars() {

  const { directionData } = useContext(DirectionDataContext) as { directionData: DirectionData };
  const { carAmount } = useContext(SelectedCarAmountContext);

  const getCost = (charges: number): string => {
    return (charges * (directionData?.routes[0]?.distance || 0) * 0.000621371192).toFixed(0);
  };

  return (
    <div className='mt-3'>
      <div className='grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 m-1 p-2'>
        {CarsList.map((item, index) => (
          <div
            key={index}
            className="m-2 p-3 rounded-xl bg-white transition-colors cursor-pointer border-2 border-teal-500 hover:border-teal-600"
          >
            <Image
              src={item.image}
              alt='Car'
              width={260}
              height={100}
              className='w-full'
            />
            <h2 className='mt-1 text-sm text-slate-600 font-medium'>
              {item.name}
              {directionData?.routes && (
                <span className='float-right text-slate-900 font-semibold'>${carAmount}</span>
              )}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cars;
