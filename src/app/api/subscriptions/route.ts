import { NextResponse } from 'next/server';
import { getCardData6 } from '@/lib/content';

export async function GET() {
	try {
		const subscriptions = getCardData6();
		return NextResponse.json(subscriptions);
	} catch {
		return NextResponse.json({ error: 'Failed to fetch subscriptions' }, { status: 500 });
	}
} 