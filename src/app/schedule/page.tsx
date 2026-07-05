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
        <>
            <Navbar />
            <main className="text-center py-20 px-4">
                <h1 className="font-manrope text-4xl font-bold text-slate-900">Choose Your Ride Option</h1>
                <p className="mt-4 text-slate-500">Select how you would like to arrange your transportation</p>

                <div className="flex flex-col items-center justify-center mt-10 gap-8 md:flex-row">

                    <div className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-6 rounded-xl w-80 bg-white">
                        <h2 className="font-manrope text-xl font-semibold text-teal-600">Schedule with Medicaid</h2>
                        <p className="mt-2 text-slate-500">Book your ride through Medicaid for covered transportation services.</p>
                        <button
                        onClick={handleMedicaidSchedule}
                        className="mt-4 px-4 py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors">Schedule with Medicaid</button>
                    </div>

                    <div className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-6 rounded-xl w-80 bg-white">
                        <h2 className="font-manrope text-xl font-semibold text-amber-600">Private Pay</h2>
                        <p className="mt-2 text-slate-500">Enjoy a hassle-free ride with private payment. Secure and convenient options available.</p>
                        <button
                        onClick={handlePrivatePayment}
                        className="mt-4 px-4 py-2 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-600 transition-colors">Private Pay</button>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
}

export default Schedule;
