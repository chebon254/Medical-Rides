"use client";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Schedule = () => {
    const router = useRouter();
    const { register, handleSubmit, reset } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const { submit } = useWeb3Forms({
    access_key: '378de2ec-f6e7-4f1e-9fbe-e35bc39537d2',
    settings: {
      from_name: "Peak Elite Medride",
      subject: "New Schedule Request from your Website",
    },
    onSuccess: (msg, data) => {
        router.push("/thanks");
    },
    onError: (msg, data) => {
      console.error("Form submission error:", data);
    },
  });

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      await submit(data);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
        <div className="mb-8 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Medicaid covered
          </span>
          <h1 className="mt-3 font-manrope text-3xl font-bold text-slate-900 sm:text-4xl">
            Schedule with Medicaid
          </h1>
          <p className="mt-2 text-slate-500">
            Fill in your trip details and we&apos;ll take care of the rest.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="card p-6 sm:p-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Full name"
                className="form-input"
                {...register("name")}
              />
            </div>
            <div>
              <label htmlFor="phone" className="form-label">Phone number</label>
              <input
                type="tel"
                id="phone"
                placeholder="(719) 000-0000"
                className="form-input"
                {...register("phone")}
              />
            </div>
            <div>
              <label htmlFor="pickupDate" className="form-label">Pick-up date</label>
              <input
                type="date"
                id="pickupDate"
                className="form-input"
                {...register("pickupDateTime")}
              />
            </div>
            <div>
              <label htmlFor="pickupTime" className="form-label">Pick-up time</label>
              <input
                type="time"
                id="pickupTime"
                className="form-input"
                {...register("pickupTime")}
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="pickupAddress" className="form-label">Pick-up address</label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3.5 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-teal-500 ring-4 ring-teal-500/15" />
                <input
                  type="text"
                  id="pickupAddress"
                  placeholder="Street address, city"
                  className="form-input pl-9"
                  {...register("pickupAddress")}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="dropoffAddress" className="form-label">Drop-off address</label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3.5 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-[3px] bg-amber-500 ring-4 ring-amber-500/15" />
                <input
                  type="text"
                  id="dropoffAddress"
                  placeholder="Street address, city"
                  className="form-input pl-9"
                  {...register("dropoffAddress")}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="returnTime" className="form-label">Return time</label>
              <input
                type="time"
                id="returnTime"
                className="form-input"
                {...register("returnTime")}
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn-primary mt-7"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                </svg>
                Submitting...
              </>
            ) : (
              <>
                Request my ride
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </>
            )}
          </button>
          <p className="mt-3 text-center text-xs text-slate-400">
            We&apos;ll confirm your booking by phone.
          </p>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Schedule;
