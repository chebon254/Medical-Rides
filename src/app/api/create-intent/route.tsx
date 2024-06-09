import { NextResponse } from "next/server";
import Stripe from "stripe";
import { PrismaClient } from "@prisma/client";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as any, {
  typescript: true,
  apiVersion: "2024-04-10",
});

const prisma = new PrismaClient();

export async function POST(request: any) {
  const data: any = await request.json();
  const { amount, name, phone, pickUpDate, pickUpTime, returnTime, sourceAddress, destinationAddress, sourceCoordinates, destinationCoordinates } = data;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Number(amount),
      currency: "USD",
      metadata: {
        name,
        phone,
        pickUpDate,
        pickUpTime,
        returnTime,
        sourceAddress,
        destinationAddress,
        sourceCoordinates: JSON.stringify(sourceCoordinates),
        destinationCoordinates: JSON.stringify(destinationCoordinates)
      }
    });

    await prisma.booking.create({
      data: {
        name,
        phone,
        amount: Number(amount) / 100, // Add amount field
        pickUpDate: new Date(pickUpDate),
        pickUpTime,
        returnTime,
        sourceAddress,
        destinationAddress,
        sourceLongitude: parseFloat(sourceCoordinates.lng),
        sourceLatitude: parseFloat(sourceCoordinates.lat),
        destinationLongitude: parseFloat(destinationCoordinates.lng),
        destinationLatitude: parseFloat(destinationCoordinates.lat),
        paymentIntentId: paymentIntent.id
      },
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret }, { status: 200 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 400 });
  }
}
