import { ClerkProvider } from '@clerk/nextjs';

const clerkPub = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default function App({ Component, pageProps }) {
  return (
    <ClerkProvider publishableKey={clerkPub}>
      <Component {...pageProps} />
    </ClerkProvider>
  );
}