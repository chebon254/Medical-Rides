import React from 'react'
import Image from 'next/image';

function AboutPage() {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <h6 className="text-lg text-indigo-600 font-medium text-center mb-2">
                        About Us
                    </h6>
                    <h2 className="text-6xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem]">
                        Peak Elite Medical Medride
                    </h2>
                </div>
                <div className="flex flex-col items-center justify-center p-4">
                    <div className="max-w-4xl mx-auto">
                        <p className="text-lg text-gray-600 mb-8">
                            A veteran-owned and operated local Colorado business dedicated to providing reliable Medicaid Transportation in Colorado Springs and neighboring counties. Our goal is to ensure convenient and affordable transportation for clients, supporting their access to healthcare facilities and medical appointments.
                        </p>
                        <p className="text-lg text-gray-600 mb-8">
                            By offering safe and punctual services, we aim to improve the lives of patients and beneficiaries, minimizing missed appointments and providing essential care.
                        </p>
                        <p className="text-lg text-gray-600 mb-8">
                            Choose Peak Elite Medical Medride, a veteran-owned and operated business, for dependable Medicaid Transportation that prioritizes the well-being of our community.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutPage