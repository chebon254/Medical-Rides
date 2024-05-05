import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      <div className="bg-gray-100 flex items-center justify-center h-screen">
          <div className="rounded shadow-md w-full sm:w-96">
              <SignUp path="/sign-up" />
          </div>
      </div>
    </>
  );
}