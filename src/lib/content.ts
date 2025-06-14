import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

function getContentData(folder: string) {
	const contentDirectory = path.join(process.cwd(), 'content', folder);

	if (!fs.existsSync(contentDirectory)) {
		return [];
	}

	const fileNames = fs.readdirSync(contentDirectory);
	const allData = fileNames.map((fileName) => {
		const filePath = path.join(contentDirectory, fileName);
		const fileContents = fs.readFileSync(filePath, 'utf8');
		const { data, content } = matter(fileContents);

		return {
			...data,
			description: content.trim(),
			// Для обратной совместимости добавляем поля
			imageSrc: data.image,
			title: data.name,
			order: data.order || 0,
		};
	});

	// Сортировка по полю order
	return allData.sort((a: any, b: any) => a.order - b.order);
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