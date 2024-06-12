import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { auth } from '@clerk/nextjs/server';

const prisma = new PrismaClient();

export async function GET() {
  const { userId } = auth();

  if (!userId) {
    return NextResponse.json(
      { error: 'Error: No signed in user' },
      { status: 401 },
    );
  }

  try {
    const bookings = await prisma.booking.findMany({
      where: { rideStatus: 'pending' }
    });
    return NextResponse.json(bookings, { status: 200 });
  } catch (error) {
    console.error("Error fetching pending bookings:", error);
    return NextResponse.json({ error: "Failed to fetch pending bookings" }, { status: 500 });
  }
}
