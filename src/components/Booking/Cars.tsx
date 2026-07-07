"use client"
import React, { useContext } from 'react';
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

  return (
    <div className="space-y-2">
      {CarsList.map((item, index) => (
        <div
          key={index}
          className="relative flex items-center gap-4 rounded-2xl border-2 border-teal-500 bg-teal-50/40 p-3 transition-colors"
        >
          <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-teal-500 text-white">
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </span>
          <Image
            src={item.image}
            alt="Car"
            width={120}
            height={70}
            className="w-28 flex-shrink-0 rounded-xl object-contain"
          />
          <div className="min-w-0 flex-1">
            <h2 className="text-sm font-semibold text-slate-900">{item.name}</h2>
            <p className="text-xs text-slate-500">Door-to-door service</p>
            {directionData?.routes ? (
              <p className="mt-1 text-lg font-bold text-teal-700">${String(carAmount)}</p>
            ) : (
              <p className="mt-1 text-xs font-medium text-slate-400">Enter a route to see the fare</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cars;
