import { DirectionDataContext } from '@/context/DirectionDataContext';
import React, { useContext } from 'react'

function DistanceTime() {
    const { directionData } = useContext(DirectionDataContext);

    if (!directionData?.routes) return null;

    const miles = (directionData.routes[0]?.distance * 0.000621371192).toFixed(1);
    const minutes = (directionData.routes[0]?.duration / 60).toFixed(0);

    return (
        <div className="flex items-center gap-3 rounded-full border border-slate-200/60 bg-white/95 px-4 py-2 shadow-lg shadow-slate-900/10 backdrop-blur">
            <div className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-teal-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                </svg>
                <span className="text-sm font-bold text-slate-900">{miles}<span className="ml-0.5 font-medium text-slate-500">mi</span></span>
            </div>
            <span className="h-4 w-px bg-slate-200" />
            <div className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-teal-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-bold text-slate-900">{minutes}<span className="ml-0.5 font-medium text-slate-500">min</span></span>
            </div>
        </div>
    )
}

export default DistanceTime
