import { SelectedCarAmountContext } from '@/context/SelectedCarAmountContext';
import { UserLocationContext } from '@/context/UserLocationContext';
import { SourceCoordiContext } from '@/context/SourceCoordiContext';
import { DestinationCoordiContext } from '@/context/DestinationCoordiContext';
import { FormDetailsContext } from '@/context/FormDetailsContext';
import { useAddressContext } from '@/context/AddressContext';
import { Elements, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext } from 'react';

function CheckoutForm() {
    const stripe: any = useStripe();
    const elements = useElements();
    const { carAmount } = useContext(SelectedCarAmountContext);
    const { userLocation } = useContext(UserLocationContext);
    const { sourceCoordinates } = useContext(SourceCoordiContext);
    const { destinationCoordinates } = useContext(DestinationCoordiContext);
    const formDetailsContext = useContext(FormDetailsContext);
    const { sourceAddress, destinationAddress } = useAddressContext();

    if (!formDetailsContext) {
        throw new Error('FormDetailsContext is not available');
    }

    const { formDetails } = formDetailsContext;

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        if (elements == null) {
            return;
        }

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
        console.log(sec);

        const { error } = await stripe.confirmPayment({
            clientSecret: sec.clientSecret,
            elements,
            confirmParams: {
                return_url: "http://localhost:3000/success"
            }
        });

        if (error) {
            console.error(error.message);
        }
    };

    return (
        <div className='flex flex-col justify-start items-center w-full p-4 h-screen'>
            <h2 className='text-black font-bold m-2'>Checkout</h2>
            <p className="amount-price">${carAmount}</p>
            <form onSubmit={handleSubmit} className='max-w-md'>
                <PaymentElement />
                <button className='w-full bg-yellow-500 p-2 rounded-lg mt-2' type='submit' disabled={!stripe || !elements}>Pay</button>
            </form>
        </div>
    );
}

export default CheckoutForm;
