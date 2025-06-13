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

// Функции для получения данных из YAML
export function getCardData4() {
	return getContentData('trainers');
}

export function getCardData5() {
	return getContentData('single-classes');
}

export function getCardData6() {
	return getContentData('subscriptions');
} 