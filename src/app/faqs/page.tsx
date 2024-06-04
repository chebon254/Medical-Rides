"use client"
import React, { useState } from 'react';

const FAQAccordion: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h6 className="text-lg text-indigo-600 font-medium text-center mb-2">
            FAQs
          </h6>
          <h2 className="text-6xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem]">
            Frequently asked questions
          </h2>
        </div>

        <div className="accordion-group" data-accordion="default-accordion">
          <div
            className={`accordion py-8 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl ${openAccordion === 'one' ? 'accordion-active:bg-indigo-50' : 'hover:bg-indigo-50'
              }`}
            id="basic-heading-one-with-arrow"
          >
            <button
              className={`accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left ${openAccordion === 'one' ? 'accordion-active:font-medium accordion-active:text-indigo-600' : 'hover:text-indigo-600'
                }`}
              onClick={() => toggleAccordion('one')}
              aria-controls="basic-collapse-one-with-arrow"
            >
              <h5 className="font-semibold text-2xl">What is non-emergency medical transportation?</h5>
              <svg
                className={`text-gray-500 transition duration-500 group-hover:text-indigo-600 ${openAccordion === 'one' ? 'accordion-active:text-indigo-600 accordion-active:rotate-180' : ''
                  }`}
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            {openAccordion === 'one' && (
              <div
                id="basic-collapse-one-with-arrow"
                className="accordion-content w-full px-0 overflow-hidden"
                aria-labelledby="basic-heading-one-with-arrow"
                style={{ maxHeight: '250px' }}
              >
                <p className="text-lg text-gray-900 leading-6">
                  Non-emergency medical transportation (NEMT) refers to transportation services for individuals who require assistance getting to and from healthcare facilities but do not require immediate emergency medical care.
                </p>
              </div>
            )}
          </div>

          <div
            className={`accordion py-8 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl ${openAccordion === 'two' ? 'accordion-active:bg-indigo-50' : 'hover:bg-indigo-50'
              }`}
            id="basic-heading-two-with-arrow"
          >
            <button
              className={`accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left ${openAccordion === 'two' ? 'accordion-active:font-medium accordion-active:text-indigo-600' : 'hover:text-indigo-600'
                }`}
              onClick={() => toggleAccordion('two')}
              aria-controls="basic-collapse-two-with-arrow"
            >
              <h5 className="font-semibold text-2xl">Who is eligible for Medicaid transportation services?</h5>
              <svg
                className={`text-gray-500 transition duration-500 group-hover:text-indigo-600 ${openAccordion === 'two' ? 'accordion-active:text-indigo-600 accordion-active:rotate-180' : ''
                  }`}
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            {openAccordion === 'two' && (
              <div
                id="basic-collapse-two-with-arrow"
                className="accordion-content w-full px-0 overflow-hidden"
                aria-labelledby="basic-heading-two-with-arrow"
                style={{ maxHeight: '250px' }}
              >
                <p className="text-lg text-gray-900 leading-6">
                  Eligibility for Medicaid transportation services varies by state. In general, individuals enrolled in Medicaid who have a medical appointment or need transportation to receive medical care may be eligible for these services. It is recommended to check with your local Medicaid office for specific eligibility criteria.
                </p>
              </div>
            )}
          </div>

          <div
            className={`accordion py-8 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl ${openAccordion === 'three' ? 'accordion-active:bg-indigo-50' : 'hover:bg-indigo-50'
              }`}
            id="basic-heading-three-with-arrow"
          >
            <button
              className={`accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left ${openAccordion === 'three' ? 'accordion-active:font-medium accordion-active:text-indigo-600' : 'hover:text-indigo-600'
                }`}
              onClick={() => toggleAccordion('three')}
              aria-controls="basic-collapse-three-with-arrow"
            >
              <h5 className="font-semibold text-2xl">How do I schedule a ride for Medicaid transportation?</h5>
              <svg
                className={`text-gray-500 transition duration-500 group-hover:text-indigo-600 ${openAccordion === 'three' ? 'accordion-active:text-indigo-600 accordion-active:rotate-180' : ''
                  }`}
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            {openAccordion === 'three' && (
              <div
                id="basic-collapse-three-with-arrow"
                className="accordion-content w-full px-0 overflow-hidden"
                aria-labelledby="basic-heading-three-with-arrow"
                style={{ maxHeight: '250px' }}
              >
                <p className="text-lg text-gray-900 leading-6">
                  To schedule a ride for Medicaid transportation, please use our convenient online booking system or call our dedicated hotline. Our team will assist you in scheduling the transportation based on your needs and availability.
                </p>
              </div>
            )}
          </div>

          <div
            className={`accordion py-8 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl ${openAccordion === 'four' ? 'accordion-active:bg-indigo-50' : 'hover:bg-indigo-50'
              }`}
            id="basic-heading-four-with-arrow"
          >
            <button
              className={`accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left ${openAccordion === 'four' ? 'accordion-active:font-medium accordion-active:text-indigo-600' : 'hover:text-indigo-600'
                }`}
              onClick={() => toggleAccordion('four')}
              aria-controls="basic-collapse-four-with-arrow"
            >
              <h5 className="font-semibold text-2xl">What are the safety measures in place during transportation?</h5>
              <svg
                className={`text-gray-500 transition duration-500 group-hover:text-indigo-600 ${openAccordion === 'four' ? 'accordion-active:text-indigo-600 accordion-active:rotate-180' : ''
                  }`}
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            {openAccordion === 'four' && (
              <div
                id="basic-collapse-four-with-arrow"
                className="accordion-content w-full px-0 overflow-hidden"
                aria-labelledby="basic-heading-four-with-arrow"
                style={{ maxHeight: '250px' }}
              >
                <p className="text-lg text-gray-900 leading-6">
                  Our top priority is the safety and well-being of our passengers. We have implemented rigorous safety protocols, including regular vehicle sanitization, mandatory mask-wearing for drivers and passengers, and compliance with all health guidelines. Our vehicles are equipped with safety features to ensure a secure ride.
                </p>
              </div>
            )}
          </div>

          {/* Add additional accordion sections as needed */}
          <div
            className={`accordion py-8 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl ${openAccordion === 'five' ? 'accordion-active:bg-indigo-50' : 'hover:bg-indigo-50'
              }`}
            id="basic-heading-five-with-arrow"
          >
            <button
              className={`accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left ${openAccordion === 'five' ? 'accordion-active:font-medium accordion-active:text-indigo-600' : 'hover:text-indigo-600'
                }`}
              onClick={() => toggleAccordion('five')}
              aria-controls="basic-collapse-five-with-arrow"
            >
              <h5 className="font-semibold text-2xl">How much does Medicaid transportation cost?</h5>
              <svg
                className={`text-gray-500 transition duration-500 group-hover:text-indigo-600 ${openAccordion === 'five' ? 'accordion-active:text-indigo-600 accordion-active:rotate-180' : ''
                  }`}
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            {openAccordion === 'five' && (
              <div
                id="basic-collapse-five-with-arrow"
                className="accordion-content w-full px-0 overflow-hidden"
                aria-labelledby="basic-heading-five-with-arrow"
                style={{ maxHeight: '250px' }}
              >
                <p className="text-lg text-gray-900 leading-6">
                  The cost of Medicaid transportation may vary depending on factors such as distance, duration, and specific Medicaid guidelines. We strive to provide affordable transportation services and work closely with Medicaid to ensure the best possible rates for our clients.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;