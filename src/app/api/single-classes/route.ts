import { NextResponse } from 'next/server';
import { getCardData5 } from '@/lib/content';

export async function GET() {
	try {
		const singleClasses = getCardData5();
		return NextResponse.json(singleClasses);
	} catch {
		return NextResponse.json({ error: 'Failed to fetch single classes' }, { status: 500 });
	}
} 