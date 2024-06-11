"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const paymentIntent = searchParams.get("payment_intent");

  useEffect(() => {
    if (paymentIntent) {
      router.push("/success");
    }
  }, [router, paymentIntent]);

  return (
    <div className="h-[80vh] flex items-center px-20 pt-20 flex-col">
      <h1 className="text-4xl text-center">
        Payment successful. One of our specialist will contact you. 
      </h1>
    </div>
  );
};

export default Page;