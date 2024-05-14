"use client"
import { CarAmountContext } from '@/context/CarAmountContext';
import { SelectedCarAmountContext } from '@/context/SelectedCarAmountContext';
import { Elements, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useContext, useEffect, useState } from 'react'

function CheckoutForm() {
    const stripe: any = useStripe();
    const elements = useElements();
    const [carAmount, setCarAmount] = useState<number | null>(null);

    useEffect(() => {
        const storedCarAmount = localStorage.getItem("carAmount");
        if (storedCarAmount) {
          setCarAmount(parseInt(storedCarAmount));
        }
      }, []);
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        if (elements == null) {
            return
        }
        const { error: submitError } = await elements.submit();
        if (submitError) {
            return;
        }

        const res = await fetch("api/create-intent", {
            method: "POST",
            body: JSON.stringify({
                amount: carAmount,
            }),
        });

        const sec = await res.json();
        console.log(sec);
        const { error } = await stripe.confirmPayment({
            clientSecret: sec,
            elements,
            confirmParams: {
                return_url: "http://localhost:3000/success"
            }
        })
        
    }
    return (
        <div className='flex flex-col justify-start items-center w-full p-4 h-screen'>
            <h2 className='text-black font-bold m-2'>Checkout</h2>
            <div>
                <h3>Pay Amount: <span>${(carAmount !== null ? (carAmount).toFixed(2) : '0.00')}</span></h3>
            </div>
            <form onSubmit={handleSubmit} className='max-w-md'>
                <PaymentElement />
                <button className='w-full bg-yellow-500 p-2 rounded-lg mt-2' type='submit' disabled={!stripe || !elements}>Pay</button>
            </form>
        </div>
    )
}

export default CheckoutForm