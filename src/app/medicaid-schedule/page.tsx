"use client"; // Remove this line
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
    <div>
      <Navbar />
      <div className="ml-6 mr-6 mt-8">
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-black">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("name")}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-black">
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("phone")}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="pickupDate" className="block mb-2 text-sm font-medium text-black">
            Pick up Date
          </label>
          <input
            type="text"
            id="pickupDate"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("pickupDateTime")}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="pickupTime" className="block mb-2 text-sm font-medium text-black">
            Pick up time
          </label>
          <input
            type="text"
            id="pickupTime"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("pickupTime")}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="pickupAddress" className="block mb-2 text-sm font-medium text-black">
            Pick up Address
          </label>
          <input
            type="text"
            id="pickupAddress"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("pickupAddress")}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="dropoffAddress" className="block mb-2 text-sm font-medium text-black">
            Drop off Address
          </label>
          <input
            type="text"
            id="dropoffAddress"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("dropoffAddress")}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="returnTime" className="block mb-2 text-sm font-medium text-black">
            Return Time
          </label>
          <input
            type="text"
            id="returnTime"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("returnTime")}
          />
        </div>
        <button
          className="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-32 mb-2 dark:focus:ring-yellow-900"
          onClick={handleSubmit(onSubmit)}
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      <Footer />
      </div>
    </div>
  );
};

export default Schedule;
