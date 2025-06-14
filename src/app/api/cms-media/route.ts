import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const UPLOADS_DIR = path.join(process.cwd(), 'public', 'uploads');

export async function POST(request: NextRequest) {
	try {
		const formData = await request.formData();
		const file = formData.get('file') as File;

		if (!file) {
			return NextResponse.json({ error: 'No file provided' }, { status: 400 });
		}

		// Создаем директорию если её нет
		if (!fs.existsSync(UPLOADS_DIR)) {
			fs.mkdirSync(UPLOADS_DIR, { recursive: true });
		}

		// Генерируем уникальное имя файла
		const timestamp = Date.now();
		const fileExtension = path.extname(file.name);
		const fileName = `${timestamp}${fileExtension}`;
		const filePath = path.join(UPLOADS_DIR, fileName);

		// Сохраняем файл
		const bytes = await file.arrayBuffer();
		const buffer = Buffer.from(bytes);
		fs.writeFileSync(filePath, buffer);

		// Возвращаем URL файла
		const fileUrl = `/uploads/${fileName}`;

		return NextResponse.json({
			url: fileUrl,
			name: fileName,
			size: file.size
		});

	} catch (error) {
		console.error('Error uploading file:', error);
		return NextResponse.json({ error: 'Failed to upload file' }, { status: 500 });
	}
} 