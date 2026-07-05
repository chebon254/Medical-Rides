"use client";
import React, { Suspense, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const PageContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const paymentIntent = searchParams ? searchParams.get("payment_intent") : null;

  useEffect(() => {
    if (paymentIntent) {
      router.push("/success");
    }
  }, [router, paymentIntent]);

  return (
    <div className="h-[80vh] flex items-center px-20 pt-20 flex-col">
      <h1 className="text-4xl text-center">
        Payment successful. One of our specialists will contact you.
      </h1>
    </div>
  );
};

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageContent />
    </Suspense>
  );
};

export default Page;
