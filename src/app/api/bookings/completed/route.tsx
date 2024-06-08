import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const bookings = await prisma.booking.findMany({
      where: { rideStatus: 'completed' }
    });
    return NextResponse.json(bookings, { status: 200 });
  } catch (error) {
    console.error("Error fetching completed bookings:", error);
    return NextResponse.json({ error: "Failed to fetch completed bookings" }, { status: 500 });
  }
}
