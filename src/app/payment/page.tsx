"use client"
import React, { useContext, useEffect, useState } from 'react';
import CheckoutForm from '@/components/Payment/CheckoutForm';
import { SelectedCarAmountContext } from '@/context/SelectedCarAmountContext';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe, Stripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

function Payment() {
    const { carAmount, setCarAmount } = useContext(SelectedCarAmountContext);
    const [stripe, setStripe] = useState<Stripe | null>(null);

    useEffect(() => {
        async function load() {
            const stripeLoaded = await stripePromise;
            setStripe(stripeLoaded);
        }
        load();
    }, []);

    const options: any = {
        mode: 'payment',
        amount: carAmount * 100, // convert carAmount to cents
        currency: 'usd',
    };

    return (
        <Elements stripe={stripe} options={options}>
            <CheckoutForm />
        </Elements>
    );
}

export default Payment;
