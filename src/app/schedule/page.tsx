"use client"
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/navigation';

function Schedule() {

    const router = useRouter();

    const handlePrivatePayment = () => {
        router.push('/payment-schedule');
    };

    const handleMedicaidSchedule = () => {
        router.push('/medicaid-schedule');
    };
    return (
        <div className="min-h-screen bg-slate-50">
            <Navbar />
            <main className="px-4 py-16 text-center sm:py-20">
                <h1 className="font-manrope text-3xl font-bold text-slate-900 sm:text-4xl">Choose Your Ride Option</h1>
                <p className="mx-auto mt-3 max-w-md text-slate-500">Select how you would like to arrange your transportation</p>

                <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-2">

                    <button
                        onClick={handleMedicaidSchedule}
                        className="group card p-8 text-left transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-xl hover:shadow-teal-600/10 focus:outline-none focus:ring-4 focus:ring-teal-500/20"
                    >
                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 text-white shadow-lg shadow-teal-600/25">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                            </svg>
                        </span>
                        <h2 className="mt-5 font-manrope text-xl font-bold text-slate-900">Schedule with Medicaid</h2>
                        <p className="mt-2 text-sm leading-relaxed text-slate-500">Book your ride through Medicaid for covered transportation services.</p>
                        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 transition-transform duration-300 group-hover:translate-x-1">
                            Get started
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </span>
                    </button>

                    <button
                        onClick={handlePrivatePayment}
                        className="group card p-8 text-left transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl hover:shadow-amber-500/10 focus:outline-none focus:ring-4 focus:ring-amber-500/20"
                    >
                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-white shadow-lg shadow-amber-500/25">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                            </svg>
                        </span>
                        <h2 className="mt-5 font-manrope text-xl font-bold text-slate-900">Private Pay</h2>
                        <p className="mt-2 text-sm leading-relaxed text-slate-500">Enjoy a hassle-free ride with private payment. Secure and convenient options available.</p>
                        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-600 transition-transform duration-300 group-hover:translate-x-1">
                            Book &amp; pay online
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </span>
                    </button>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default Schedule;
