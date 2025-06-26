import { NextResponse } from "next/server";
import { getCardData2 } from "@/lib/content";

export async function GET() {
	try {
		const studio = getCardData2();
		return NextResponse.json(studio);
	} catch {
		return NextResponse.json(
			{ error: "Failed to fetch studio" },
			{ status: 500 }
		);
	}
}
