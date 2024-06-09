"use client"
import React, { useContext, useEffect, useState } from 'react';
import CheckoutForm from '@/components/Payment/CheckoutForm';
import { SelectedCarAmountContext } from '@/context/SelectedCarAmountContext';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe, Stripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

function Payment() {
    const { carAmount } = useContext(SelectedCarAmountContext);
    const [stripe, setStripe] = useState<Stripe | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function load() {
            const stripeLoaded = await stripePromise;
            setStripe(stripeLoaded);
            setLoading(false); // Set loading to false once Stripe is loaded
        }
        load();
    }, []);

    const options: any = {
        mode: 'payment',
        amount: carAmount * 100, // convert carAmount to cents
        currency: 'usd',
    };

    return (
        <>
            {loading ? (
                <div className="container">
                    <p>Loading...</p> 
                </div>// Show loading text while Stripe is being loaded
            ) : (
                <Elements stripe={stripe} options={options}>
                    <CheckoutForm />
                </Elements>
            )}
        </>
    );
}

export default Payment;
