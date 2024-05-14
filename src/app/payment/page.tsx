"use client";
import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "@/components/Payment/CheckoutForm";

export default function Payment() {
  const [carAmount, setCarAmount] = useState<number | null>(null);

  useEffect(() => {
    const storedCarAmount = localStorage.getItem("carAmount");
    if (storedCarAmount) {
      setCarAmount(parseInt(storedCarAmount));
    }
  }, []);

  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as any);

  if (carAmount === null) {
    return <div>Please select a car to proceed with payment.</div>;
  }

  const options: any = {
    mode: "payment",
    amount: carAmount * 100,
    currency: "usd",
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
}