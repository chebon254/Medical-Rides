import { DirectionDataContext } from '@/context/DirectionDataContext';
import React, { useContext } from 'react'

function DistanceTime() {
    const { directionData, setDirectionData } = useContext(DirectionDataContext);

    return directionData?.routes&&(
        <div className='bg-yellow-500 p-3'>
            <h2 className='text-yellow-100 opacity-80 text-[15px]'>
                Distance: <span className='pr-4 font-bold text-black'>{(directionData?.routes[0]?.distance*0.000621371192).toFixed(2)} Miles </span>
                Cost: <span className='font-bold text-black'>${(directionData?.routes[0]?.distance*0.000621371192 * 2).toFixed(0)}</span>
            </h2>
        </div>
    )
}

export default DistanceTime;