import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { PrismaClient } from '@prisma/client';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as any, {
  typescript: true,
  apiVersion: '2024-04-10',
});

const prisma = new PrismaClient();

export async function POST(request: any) {
  const sig = request.headers.get('stripe-signature')!;
  const buf = await request.text();

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      buf,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.log(`Webhook Error: ${err.message}`);
    return NextResponse.json({ error: 'Webhook error' }, { status: 400 });
  }

  if (event.type === 'payment_intent.succeeded') {
    const paymentIntent = event.data.object as Stripe.PaymentIntent;

    const {
      name, phone, pickUpDate, pickUpTime, returnTime,
      sourceAddress, destinationAddress, sourceCoordinates, destinationCoordinates
    } = paymentIntent.metadata;

    try {
      await prisma.booking.updateMany({
        where: { paymentIntentId: paymentIntent.id },
        data: {
          rideStatus: "paid"
        },
      });
    } catch (error: any) {
      console.error('Error updating booking to paid:', error);
      return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }
  }

  return NextResponse.json({ received: true }, { status: 200 });
}
