import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <div className="relative h-screen">
      <Image
        className="absolute inset-0 object-cover w-full h-full"
        src="/dark_colorado.jpg"
        alt="Mountain Landscape"
        layout="fill"
      />
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full">
          <div className="container mx-auto text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Book your ride from anywhere today!</h1>
            <p className="text-xl mb-8">
              Ride with Confidence: Reliable Non-Emergency Medical Transportation Services at Your Fingertips!
            </p>
            <Link href="/schedule">
                  <button
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 font-semibold py-3 px-6 rounded"
            >
              Schedule a Ride
            </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="py-12 bg-white">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Non Emergency Medicaid</h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Transportation Services
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              We provide a range of transportation services to support your medical needs.
            </p>
          </div>

          <div className="mt-10">
            <ul className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {/* Transportation to and from medical facilities */}
              <li>
                <div className="flex">
                  <div className="flex-shrink-0">
                    {/* Insert transportation icon or image here */}
                    <svg width="20" height="20" viewBox="0 0 20 20" className="fill-current"><path d="M10 19.625C4.6875 19.625 0.40625 15.3125 0.40625 10C0.40625 4.6875 4.6875 0.40625 10 0.40625C15.3125 0.40625 19.625 4.6875 19.625 10C19.625 15.3125 15.3125 19.625 10 19.625ZM10 1.5C5.3125 1.5 1.5 5.3125 1.5 10C1.5 14.6875 5.3125 18.5312 10 18.5312C14.6875 18.5312 18.5312 14.6875 18.5312 10C18.5312 5.3125 14.6875 1.5 10 1.5Z"></path><path d="M8.9375 12.1875C8.71875 12.1875 8.53125 12.125 8.34375 11.9687L6.28125 9.96875C6.0625 9.75 6.0625 9.40625 6.28125 9.1875C6.5 8.96875 6.84375 8.96875 7.0625 9.1875L8.9375 11.0312L12.9375 7.15625C13.1563 6.9375 13.5 6.9375 13.7188 7.15625C13.9375 7.375 13.9375 7.71875 13.7188 7.9375L9.5625 12C9.34375 12.125 9.125 12.1875 8.9375 12.1875Z"></path></svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">Transportation to and from medical facilities</h4>
                    <p className="mt-2 text-base text-gray-500">
                      Reliable transportation for patients to and from medical facilities, ensuring timely arrivals for appointments and treatments.
                    </p>
                  </div>
                </div>
              </li>

              {/* Outpatient clinic visits */}
              <li>
                <div className="flex">
                  <div className="flex-shrink-0">
                    {/* Insert outpatient clinic icon or image here */}
                    <svg width="20" height="20" viewBox="0 0 20 20" className="fill-current"><path d="M10 19.625C4.6875 19.625 0.40625 15.3125 0.40625 10C0.40625 4.6875 4.6875 0.40625 10 0.40625C15.3125 0.40625 19.625 4.6875 19.625 10C19.625 15.3125 15.3125 19.625 10 19.625ZM10 1.5C5.3125 1.5 1.5 5.3125 1.5 10C1.5 14.6875 5.3125 18.5312 10 18.5312C14.6875 18.5312 18.5312 14.6875 18.5312 10C18.5312 5.3125 14.6875 1.5 10 1.5Z"></path><path d="M8.9375 12.1875C8.71875 12.1875 8.53125 12.125 8.34375 11.9687L6.28125 9.96875C6.0625 9.75 6.0625 9.40625 6.28125 9.1875C6.5 8.96875 6.84375 8.96875 7.0625 9.1875L8.9375 11.0312L12.9375 7.15625C13.1563 6.9375 13.5 6.9375 13.7188 7.15625C13.9375 7.375 13.9375 7.71875 13.7188 7.9375L9.5625 12C9.34375 12.125 9.125 12.1875 8.9375 12.1875Z"></path></svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">Outpatient clinic visits</h4>
                    <p className="mt-2 text-base text-gray-500">
                    Convenient consultations and treatments at outpatient clinics, offering specialized care without the need for overnight stays.
                    </p>
                  </div>
                </div>
              </li>

              {/* Mental and Behavioral Health Visits */}
              <li>
                <div className="flex">
                  <div className="flex-shrink-0">
                    {/* Insert mental health icon or image here */}
                    <svg width="20" height="20" viewBox="0 0 20 20" className="fill-current"><path d="M10 19.625C4.6875 19.625 0.40625 15.3125 0.40625 10C0.40625 4.6875 4.6875 0.40625 10 0.40625C15.3125 0.40625 19.625 4.6875 19.625 10C19.625 15.3125 15.3125 19.625 10 19.625ZM10 1.5C5.3125 1.5 1.5 5.3125 1.5 10C1.5 14.6875 5.3125 18.5312 10 18.5312C14.6875 18.5312 18.5312 14.6875 18.5312 10C18.5312 5.3125 14.6875 1.5 10 1.5Z"></path><path d="M8.9375 12.1875C8.71875 12.1875 8.53125 12.125 8.34375 11.9687L6.28125 9.96875C6.0625 9.75 6.0625 9.40625 6.28125 9.1875C6.5 8.96875 6.84375 8.96875 7.0625 9.1875L8.9375 11.0312L12.9375 7.15625C13.1563 6.9375 13.5 6.9375 13.7188 7.15625C13.9375 7.375 13.9375 7.71875 13.7188 7.9375L9.5625 12C9.34375 12.125 9.125 12.1875 8.9375 12.1875Z"></path></svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">Mental and Behavioral Health Visits</h4>
                    <p className="mt-2 text-base text-gray-500">
                    Compassionate support and therapy sessions addressing mental health concerns and promoting well-being in a supportive environment.
                    </p>
                  </div>
                </div>
              </li>

              {/* Physical therapy appointments */}
              <li>
                <div className="flex">
                  <div className="flex-shrink-0">
                    {/* Insert physical therapy icon or image here */}
                    <svg width="20" height="20" viewBox="0 0 20 20" className="fill-current"><path d="M10 19.625C4.6875 19.625 0.40625 15.3125 0.40625 10C0.40625 4.6875 4.6875 0.40625 10 0.40625C15.3125 0.40625 19.625 4.6875 19.625 10C19.625 15.3125 15.3125 19.625 10 19.625ZM10 1.5C5.3125 1.5 1.5 5.3125 1.5 10C1.5 14.6875 5.3125 18.5312 10 18.5312C14.6875 18.5312 18.5312 14.6875 18.5312 10C18.5312 5.3125 14.6875 1.5 10 1.5Z"></path><path d="M8.9375 12.1875C8.71875 12.1875 8.53125 12.125 8.34375 11.9687L6.28125 9.96875C6.0625 9.75 6.0625 9.40625 6.28125 9.1875C6.5 8.96875 6.84375 8.96875 7.0625 9.1875L8.9375 11.0312L12.9375 7.15625C13.1563 6.9375 13.5 6.9375 13.7188 7.15625C13.9375 7.375 13.9375 7.71875 13.7188 7.9375L9.5625 12C9.34375 12.125 9.125 12.1875 8.9375 12.1875Z"></path></svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">Physical therapy appointments</h4>
                    <p className="mt-2 text-base text-gray-500">
                    Tailored rehabilitation programs and exercises administered by skilled therapists to enhance mobility and recover from injuries.
                    </p>
                  </div>
                </div>
              </li>

              {/* Dental Clinics */}
              <li>
                <div className="flex">
                  <div className="flex-shrink-0">
                    {/* Insert dental clinic icon or image here */}
                    <svg width="20" height="20" viewBox="0 0 20 20" className="fill-current"><path d="M10 19.625C4.6875 19.625 0.40625 15.3125 0.40625 10C0.40625 4.6875 4.6875 0.40625 10 0.40625C15.3125 0.40625 19.625 4.6875 19.625 10C19.625 15.3125 15.3125 19.625 10 19.625ZM10 1.5C5.3125 1.5 1.5 5.3125 1.5 10C1.5 14.6875 5.3125 18.5312 10 18.5312C14.6875 18.5312 18.5312 14.6875 18.5312 10C18.5312 5.3125 14.6875 1.5 10 1.5Z"></path><path d="M8.9375 12.1875C8.71875 12.1875 8.53125 12.125 8.34375 11.9687L6.28125 9.96875C6.0625 9.75 6.0625 9.40625 6.28125 9.1875C6.5 8.96875 6.84375 8.96875 7.0625 9.1875L8.9375 11.0312L12.9375 7.15625C13.1563 6.9375 13.5 6.9375 13.7188 7.15625C13.9375 7.375 13.9375 7.71875 13.7188 7.9375L9.5625 12C9.34375 12.125 9.125 12.1875 8.9375 12.1875Z"></path></svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">Dental Clinics</h4>
                    <p className="mt-2 text-base text-gray-500">
                    Comprehensive oral care services ranging from routine check-ups and cleanings to advanced treatments like implants and orthodontics.
                    </p>
                  </div>
                </div>
              </li>

              {/* Hospital Discharges */}
              <li>
                <div className="flex">
                  <div className="flex-shrink-0">
                    {/* Insert hospital discharge icon or image here */}
                    <svg width="20" height="20" viewBox="0 0 20 20" className="fill-current"><path d="M10 19.625C4.6875 19.625 0.40625 15.3125 0.40625 10C0.40625 4.6875 4.6875 0.40625 10 0.40625C15.3125 0.40625 19.625 4.6875 19.625 10C19.625 15.3125 15.3125 19.625 10 19.625ZM10 1.5C5.3125 1.5 1.5 5.3125 1.5 10C1.5 14.6875 5.3125 18.5312 10 18.5312C14.6875 18.5312 18.5312 14.6875 18.5312 10C18.5312 5.3125 14.6875 1.5 10 1.5Z"></path><path d="M8.9375 12.1875C8.71875 12.1875 8.53125 12.125 8.34375 11.9687L6.28125 9.96875C6.0625 9.75 6.0625 9.40625 6.28125 9.1875C6.5 8.96875 6.84375 8.96875 7.0625 9.1875L8.9375 11.0312L12.9375 7.15625C13.1563 6.9375 13.5 6.9375 13.7188 7.15625C13.9375 7.375 13.9375 7.71875 13.7188 7.9375L9.5625 12C9.34375 12.125 9.125 12.1875 8.9375 12.1875Z"></path></svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">Hospital Discharges</h4>
                    <p className="mt-2 text-base text-gray-500">
                    Smooth transitions from hospital to home, ensuring patients receive necessary instructions and support for continued recovery.
                    </p>
                  </div>
                </div>
              </li>

              {/* Medical appointments */}
              <li>
                <div className="flex">
                  <div className="flex-shrink-0">
                    {/* Insert medical appointment icon or image here */}
                    <svg width="20" height="20" viewBox="0 0 20 20" className="fill-current"><path d="M10 19.625C4.6875 19.625 0.40625 15.3125 0.40625 10C0.40625 4.6875 4.6875 0.40625 10 0.40625C15.3125 0.40625 19.625 4.6875 19.625 10C19.625 15.3125 15.3125 19.625 10 19.625ZM10 1.5C5.3125 1.5 1.5 5.3125 1.5 10C1.5 14.6875 5.3125 18.5312 10 18.5312C14.6875 18.5312 18.5312 14.6875 18.5312 10C18.5312 5.3125 14.6875 1.5 10 1.5Z"></path><path d="M8.9375 12.1875C8.71875 12.1875 8.53125 12.125 8.34375 11.9687L6.28125 9.96875C6.0625 9.75 6.0625 9.40625 6.28125 9.1875C6.5 8.96875 6.84375 8.96875 7.0625 9.1875L8.9375 11.0312L12.9375 7.15625C13.1563 6.9375 13.5 6.9375 13.7188 7.15625C13.9375 7.375 13.9375 7.71875 13.7188 7.9375L9.5625 12C9.34375 12.125 9.125 12.1875 8.9375 12.1875Z"></path></svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">Medical appointments</h4>
                    <p className="mt-2 text-base text-gray-500">
                    Expert consultations and diagnostic assessments by healthcare professionals to address medical concerns and promote overall wellness.
                    </p>
                  </div>
                </div>
              </li>

              {/* Prescription pickup */}
              <li>
                <div className="flex">
                  <div className="flex-shrink-0">
                    {/* Insert prescription pickup icon or image here */}
                    <svg width="20" height="20" viewBox="0 0 20 20" className="fill-current"><path d="M10 19.625C4.6875 19.625 0.40625 15.3125 0.40625 10C0.40625 4.6875 4.6875 0.40625 10 0.40625C15.3125 0.40625 19.625 4.6875 19.625 10C19.625 15.3125 15.3125 19.625 10 19.625ZM10 1.5C5.3125 1.5 1.5 5.3125 1.5 10C1.5 14.6875 5.3125 18.5312 10 18.5312C14.6875 18.5312 18.5312 14.6875 18.5312 10C18.5312 5.3125 14.6875 1.5 10 1.5Z"></path><path d="M8.9375 12.1875C8.71875 12.1875 8.53125 12.125 8.34375 11.9687L6.28125 9.96875C6.0625 9.75 6.0625 9.40625 6.28125 9.1875C6.5 8.96875 6.84375 8.96875 7.0625 9.1875L8.9375 11.0312L12.9375 7.15625C13.1563 6.9375 13.5 6.9375 13.7188 7.15625C13.9375 7.375 13.9375 7.71875 13.7188 7.9375L9.5625 12C9.34375 12.125 9.125 12.1875 8.9375 12.1875Z"></path></svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">Prescription pickup</h4>
                    <p className="mt-2 text-base text-gray-500">
                    Convenient access to prescribed medications, facilitating adherence to treatment plans and management of health conditions.
                    </p>
                  </div>
                </div>
              </li>

              {/* other services */}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Why Us!</h2>
            <h2 className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Why Ride With Us</h2>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">Here at Peak Elite we understand that your safety and comfort are our top priorities. That&apos;s why we offer:</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
              <div className="bg-green-500 text-white rounded-full p-2 mr-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Safety Guarantee:</h3>
                <p className="mt-2 text-base text-gray-500">Our drivers are carefully selected and thoroughly trained to ensure that they meet our high safety standards. Our vehicles are equipped with state-of-the-art technology to monitor and ensure the safety of each ride.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
              <div className="bg-red-500 text-white rounded-full p-2 mr-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Fast Pickups:</h3>
                <p className="mt-2 text-base text-gray-500">We know that time is of the essence, especially when it comes to medical appointments. That&apos;s why we pride ourselves on our fast pickup times. Our drivers are trained to arrive promptly and get you to your destination on time.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
              <div className="bg-red-500 text-white rounded-full p-2 mr-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">24/7 Support:</h3>
                <p className="mt-2 text-base text-gray-500">We&apos;re here for you whenever you need us. Our customer support team is available 24/7 to answer your questions, make changes to your reservations, or help you with any other needs you may have.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}