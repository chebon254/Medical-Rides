"use client"
import React, { useContext } from 'react';
import CheckoutForm from '@/components/Payment/CheckoutForm';
import { SelectedCarAmountContext } from '@/context/SelectedCarAmountContext';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

function Payment() {
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as any);
    const { carAmount, setCarAmount } = useContext(SelectedCarAmountContext);
    const options: any = {
        mode: 'payment',
        amount: carAmount * 100, // convert carAmount to cents
        currency: 'usd',
    };
    return (
        <Elements stripe={stripePromise} options={options}>
            <CheckoutForm />
        </Elements>
    );
}

export default Payment;
