"use client"
import React from 'react';

const services = [
    {
        title: "To and from Home",
        description: "Safe and reliable transportation from your home to healthcare facilities.",
    },
    {
        title: "Medical Appointments",
        description: "Punctual rides to ensure you never miss a medical appointment.",
    },
    {
        title: "Physical Therapy Appointments",
        description: "Convenient transport for all your physical therapy sessions.",
    },
    {
        title: "Vision and Dental Appointments",
        description: "Timely transportation to vision and dental care providers.",
    },
    {
        title: "Dialysis Appointments",
        description: "Dependable rides for regular dialysis treatments.",
    },
    {
        title: "Mental Health Service Appointments",
        description: "Comfortable transport for mental health therapy and consultations.",
    },
];


const NEMTService = () => {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <h6 className="text-lg text-indigo-600 font-medium text-center mb-2">
                        Services
                    </h6>
                    <h2 className="text-6xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem]">
                        Non-Emergency Medical Transportation Services (Medicaid)
                    </h2>
                </div>
                <div className="text-center mb-12">
                    <p className="text-lg text-gray-700">
                        At Peak Elite, we place an unwavering emphasis on delivering exceptional customer service. Specializing in non-emergent medical transportation (NEMT) services for Colorado Springs and its neighboring counties, we are dedicated to our mission of providing punctual, compassionate, and cost-effective transportation solutions to healthcare facilities.
                    </p>
                </div>
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        Services Offered:
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg  hover:shadow-lg transition-shadow duration-300">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                                <p className="text-lg text-gray-700">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="text-center">
                    <p className="text-lg text-gray-700 mb-6">
                        We are here to assist you with your Medicaid transportation needs.
                    </p>
                    <a href="/schedule" className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                        SCHEDULE A RIDE
                    </a>
                </div>
            </div>
        </section>
    );
};

export default NEMTService;
