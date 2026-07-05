import React, { useContext } from 'react';
import { DirectionDataContext } from '@/context/DirectionDataContext';

function AdminDistanceTime() {
  const { directionData } = useContext(DirectionDataContext);

  return directionData?.routes && (
    <div className='bg-white/95 backdrop-blur border border-slate-200 rounded-lg shadow-md p-3'>
      <h2 className='text-slate-600 text-[13px]'>
        Distance: <span className='font-bold text-slate-900'>{(directionData?.routes[0]?.distance * 0.000621371192).toFixed(2)} Miles </span>
        Duration: <span className='font-bold text-slate-900'>{(directionData?.routes[0]?.duration / 60).toFixed(0)} Min</span>
      </h2>
    </div>
  )
}

export default AdminDistanceTime;
