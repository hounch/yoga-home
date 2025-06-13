import { NextResponse } from 'next/server';
import { getCardData4 } from '@/lib/content';

export async function GET() {
	try {
		const trainers = getCardData4();
		return NextResponse.json(trainers);
	} catch (error) {
		return NextResponse.json({ error: 'Failed to fetch trainers' }, { status: 500 });
	}
} 