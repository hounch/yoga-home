import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST(request: NextRequest) {
	try {
		const formData = await request.formData();
		const file = formData.get('file') as File;

		if (!file) {
			return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
		}

		// Получаем расширение файла
		const fileExtension = path.extname(file.name);
		const timestamp = Date.now();
		const fileName = `${timestamp}${fileExtension}`;

		// Путь для сохранения
		const uploadsDir = path.join(process.cwd(), 'public/uploads');
		const filePath = path.join(uploadsDir, fileName);

		// Конвертируем файл в buffer и сохраняем
		const bytes = await file.arrayBuffer();
		const buffer = Buffer.from(bytes);

		await writeFile(filePath, buffer);

		// Возвращаем URL для доступа к файлу
		const fileUrl = `/uploads/${fileName}`;

		return NextResponse.json({
			url: fileUrl,
			public_path: fileUrl,
			path: fileUrl
		});

	} catch (error) {
		console.error('Error uploading file:', error);
		return NextResponse.json({ error: 'Failed to upload file' }, { status: 500 });
	}
} 