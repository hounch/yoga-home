import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const TRAINERS_DIR = path.join(process.cwd(), 'content', 'trainers');

// GET - получить всех тренеров
export async function GET() {
	try {
		if (!fs.existsSync(TRAINERS_DIR)) {
			return NextResponse.json([]);
		}

		const files = fs.readdirSync(TRAINERS_DIR);
		const trainers = files
			.filter(file => file.endsWith('.md'))
			.map(file => {
				const filePath = path.join(TRAINERS_DIR, file);
				const fileContent = fs.readFileSync(filePath, 'utf8');
				const { data, content } = matter(fileContent);

				return {
					name: data.name || '',
					image: data.image || '',
					order: data.order || 1,
					body: content || ''
				};
			})
			.sort((a, b) => a.order - b.order);

		return NextResponse.json(trainers);
	} catch (error) {
		console.error('Error reading trainers:', error);
		return NextResponse.json({ error: 'Failed to read trainers' }, { status: 500 });
	}
}

// POST - создать нового тренера
export async function POST(request: NextRequest) {
	try {
		const { name, image, order, body } = await request.json();

		if (!name) {
			return NextResponse.json({ error: 'Name is required' }, { status: 400 });
		}

		// Создаем директорию если её нет
		if (!fs.existsSync(TRAINERS_DIR)) {
			fs.mkdirSync(TRAINERS_DIR, { recursive: true });
		}

		// Создаем slug из имени
		const slug = name
			.toLowerCase()
			.replace(/[^a-zа-я0-9\s]/gi, '')
			.replace(/\s+/g, '-')
			.replace(/[а-я]/g, (match: string) => {
				const cyrillicToLatin: { [key: string]: string } = {
					'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo',
					'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm',
					'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
					'ф': 'f', 'х': 'h', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'sch',
					'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya'
				};
				return cyrillicToLatin[match] || match;
			});

		const fileName = `${slug}.md`;
		const filePath = path.join(TRAINERS_DIR, fileName);

		// Создаем содержимое файла
		const frontMatter = {
			name,
			image: image || '',
			order: order || 1
		};

		const fileContent = matter.stringify(body || '', frontMatter);

		// Записываем файл
		fs.writeFileSync(filePath, fileContent, 'utf8');

		return NextResponse.json({
			success: true,
			message: 'Trainer created successfully',
			fileName
		});

	} catch (error) {
		console.error('Error creating trainer:', error);
		return NextResponse.json({ error: 'Failed to create trainer' }, { status: 500 });
	}
} 