import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
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
