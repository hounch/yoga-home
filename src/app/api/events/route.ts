import { NextResponse } from "next/server";
import { getCardData3 } from "@/lib/content";

export async function GET() {
  try {
    const events = getCardData3();
    return NextResponse.json(events);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch events" },
      { status: 500 }
    );
  }
}
