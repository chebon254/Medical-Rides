import { SignIn } from "@clerk/nextjs";
import React from "react";

export default function Page() {
  return (
    <>
      <div className="bg-gray-100 flex items-center justify-center h-screen">
        <div className="rounded shadow-md w-full sm:w-96">
            <SignIn path="/sign-in"/>
        </div>
    </div>
    </>
  );
}