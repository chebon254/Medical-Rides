// @ts-nocheck
"use client"
import { SelectedCarAmountContext } from '@/context/SelectedCarAmountContext';
import { SourceCoordiContext } from '@/context/SourceCoordiContext';
import { DestinationCoordiContext } from '@/context/DestinationCoordiContext';
import { FormDetailsContext } from '@/context/FormDetailsContext';
import { useAddressContext } from '@/context/AddressContext';
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

function CheckoutForm() {
    const stripe: any = useStripe();
    const elements = useElements();
    const { carAmount } = useContext(SelectedCarAmountContext);
    const { sourceCoordinates } = useContext(SourceCoordiContext);
    const { destinationCoordinates } = useContext(DestinationCoordiContext);
    const formDetailsContext = useContext(FormDetailsContext);
    const { sourceAddress, destinationAddress } = useAddressContext();
    const [isLoading, setIsLoading] = useState(false);

    if (!formDetailsContext) {
        throw new Error('FormDetailsContext is not available');
    }

    const { formDetails } = formDetailsContext;

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        if (elements == null) {
            return;
        }
        setIsLoading(true);
        const { error: submitError } = await elements.submit();
        if (submitError) {
            return;
        }

        const res = await fetch("/api/create-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                amount: carAmount * 100, // convert carAmount to cents
                name: formDetails.name,
                phone: formDetails.phone,
                pickUpDate: formDetails.pickUpDate,
                pickUpTime: formDetails.pickUpTime,
                returnTime: formDetails.returnTime,
                sourceAddress: sourceAddress,
                destinationAddress: destinationAddress,
                sourceCoordinates: sourceCoordinates,
                destinationCoordinates: destinationCoordinates,
            }),
        });

        const sec = await res.json();

        const { error } = await stripe.confirmPayment({
            clientSecret: sec.clientSecret,
            elements,
            confirmParams: {
                return_url: "http://localhost:3000/success"
            }
        });

        setIsLoading(false);

        if (error) {
            toast.error(error.message);
        }

    };

    const paymentElementOptions = {
        layout: "tabs",
    };

    return (
        <div className='flex flex-col justify-start items-center w-full p-4 h-screen'>
            <h2 className='text-black font-bold m-2'>Checkout</h2>
            <p className="amount-price">${carAmount}</p>
            <form onSubmit={handleSubmit} className='max-w-md'>

                <PaymentElement options={paymentElementOptions}/>
                <button
                    disabled={isLoading || !stripe || !elements}
                    id="submit"
                    className="flex items-center justify-center border text-lg font-semibold px-5 py-3 border-[#1DBF73] bg-[#1DBF73] text-white rounded-md mt-5 w-full"
                >
                    <span id="button-text">
                        {isLoading ? (
                            <div className='w-8'>
                                <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                                <span class="sr-only">Loading...</span>
                            </div>
                        ) : (
                                "Pay now"
                        )}
                    </span>
                </button>
            </form>
            <Toaster />
        </div>
    );
}

export default CheckoutForm;
