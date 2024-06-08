import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { id, rideStatus } = await request.json();
    const updatedBooking = await prisma.booking.update({
      where: { id: Number(id) },
      data: { rideStatus },
    });
    return NextResponse.json(updatedBooking, { status: 200 });
  } catch (error) {
    console.error("Error updating booking status:", error);
    return NextResponse.json({ error: "Failed to update booking status" }, { status: 500 });
  }
}
