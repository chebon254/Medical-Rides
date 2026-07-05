import Link from "next/link";
import React, { ReactNode } from "react";

// Card component and subcomponents
function Card({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={`bg-white shadow-md rounded-lg ${className}`}>{children}</div>;
}

function CardHeader({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={`p-4  ${className}`}>{children}</div>;
}

function CardTitle({ children, className }: { children: ReactNode; className?: string }) {
  return <h2 className={`text-lg font-semibold ${className}`}>{children}</h2>;
}

function CardContent({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}

function CardFooter({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={`p-4  ${className}`}>{children}</div>;
}

// Button component
function Button({ children, asChild = false, className }: { children: ReactNode; asChild?: boolean; className?: string }) {
  if (asChild) {
    return <span className={`inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded ${className}`}>{children}</span>;
  }

  return <button className={`inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded ${className}`}>{children}</button>;
}

// Thank You Page Component
export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            {/* Custom CheckCircle Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-green-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 12l2 2l4-4" />
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>
          <CardTitle className="text-2xl font-bold">Thank You!</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-muted-foreground">
            Your form has been successfully submitted. We appreciate your input and will get back to you soon.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button asChild>
            <Link href="/">Return to Home</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
