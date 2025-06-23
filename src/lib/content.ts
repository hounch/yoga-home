import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import yaml from 'js-yaml';

function getContentData(folder: string) {
	const contentDirectory = path.join(process.cwd(), 'content', folder);

	if (!fs.existsSync(contentDirectory)) {
		return [];
	}

	const fileNames = fs.readdirSync(contentDirectory);
	const allData = fileNames.map((fileName) => {
		const filePath = path.join(contentDirectory, fileName);
		const fileContents = fs.readFileSync(filePath, 'utf8');

		let data: Record<string, unknown>;
		let content = '';

		// Проверяем расширение файла
		if (fileName.endsWith('.yml') || fileName.endsWith('.yaml')) {
			// Для YAML файлов
			data = yaml.load(fileContents) as Record<string, unknown>;
			content = (data.description as string) || '';
		} else {
			// Для Markdown файлов (обратная совместимость)
			const parsed = matter(fileContents);
			data = parsed.data;
			content = parsed.content.trim();
		}

		return {
			...data,
			description: content,
			// Для обратной совместимости добавляем поля
			imageSrc: data.image,
			title: data.name,
			order: (data.order as number) || 0,
		};
	});

	// Сортировка по полю order
	return allData.sort((a: Record<string, unknown>, b: Record<string, unknown>) => (a.order as number) - (b.order as number));
}

// Универсальная функция для получения данных секций
export function getSectionData(name: string) {
	switch (name) {
		case 'trainers':
			return getContentData('trainers');
		case 'single-classes':
			return getContentData('single-classes');
		case 'subscriptions':
			return getContentData('subscriptions');
		default:
			throw new Error(`Unknown section: ${name}`);
	}
}

// Функции для получения данных из YAML (сохраняем для обратной совместимости)
export function getCardData4() {
	return getContentData('trainers');
}

export function getCardData5() {
	return getContentData('single-classes');
}

export function getCardData6() {
	return getContentData('subscriptions');
} 