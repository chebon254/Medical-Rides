import React, { useContext } from 'react'
import Autocomplete from './Autocomplete'
import Cars from './Cars'
import Cards from './Cards'
import { useRouter } from 'next/navigation'
import { SelectedCarAmountContext } from '@/context/SelectedCarAmountContext'
import FormDetails from './FormDetails'

function Booking() {
  const { carAmount } = useContext(SelectedCarAmountContext);
  const router: any = useRouter();
  const isReady = carAmount !== 0 && !!carAmount;

  return (
    <div className="card overflow-hidden">
      <div className="border-b border-slate-100 bg-gradient-to-r from-teal-600 to-teal-500 px-5 py-4 sm:px-6">
        <h2 className="font-manrope text-lg font-bold text-white">Book your ride</h2>
        <p className="text-sm text-teal-50">Private pay &middot; upfront pricing</p>
      </div>

      <div className="space-y-6 p-5 sm:p-6">
        <section className="space-y-3">
          <h3 className="section-title">
            <span className="section-chip">1</span>
            Route
          </h3>
          <Autocomplete />
        </section>

        <section className="space-y-3">
          <h3 className="section-title">
            <span className="section-chip">2</span>
            Trip details
          </h3>
          <FormDetails />
        </section>

        <section className="space-y-3">
          <h3 className="section-title">
            <span className="section-chip">3</span>
            Vehicle
          </h3>
          <Cars />
        </section>

        <section className="space-y-3">
          <h3 className="section-title">
            <span className="section-chip">4</span>
            Payment method
          </h3>
          <Cards />
        </section>

        <div className="space-y-4 border-t border-dashed border-slate-200 pt-4">
          <div className="flex items-baseline justify-between">
            <span className="text-sm font-medium text-slate-500">Estimated fare</span>
            <span className="font-manrope text-2xl font-bold text-slate-900">
              {isReady ? `$${String(carAmount)}` : '—'}
            </span>
          </div>
          <button
            className="btn-primary"
            disabled={!isReady}
            onClick={() => router.push('/payment')}
          >
            Schedule Ride
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Booking
