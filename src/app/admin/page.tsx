'use client';

import { useEffect } from 'react';

export default function AdminPage() {
	useEffect(() => {
		// Загружаем Decap CMS
		const script = document.createElement('script');
		script.src = 'https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js';
		script.onload = () => {
			// Добавляем небольшую задержку для полной загрузки CMS
			setTimeout(() => {
				if (window.CMS) {
					// Принудительно инициализируем CMS с нашей конфигурацией
					try {
						window.CMS.init({
							config: {
								backend: {
									name: 'test-repo'
								},
								load_config_file: false, // Отключаем загрузку внешнего config.yml
								media_folder: 'public/images',
								public_folder: '/images',
								collections: [
									{
										name: 'trainers',
										label: 'Тренеры',
										folder: 'content/trainers',
										create: true,
										slug: '{{slug}}',
										fields: [
											{ label: 'Имя', name: 'name', widget: 'string' },
											{ label: 'Фото', name: 'image', widget: 'image' },
											{ label: 'Порядок', name: 'order', widget: 'number', default: 1 },
											{ label: 'Описание', name: 'body', widget: 'markdown' }
										]
									},
									{
										name: 'single-classes',
										label: 'Разовые занятия',
										folder: 'content/single-classes',
										create: true,
										slug: '{{slug}}',
										fields: [
											{ label: 'Название', name: 'name', widget: 'string' },
											{ label: 'Цена', name: 'cost', widget: 'string' },
											{ label: 'Порядок', name: 'order', widget: 'number', default: 1 },
											{ label: 'Описание', name: 'body', widget: 'markdown' }
										]
									},
									{
										name: 'subscriptions',
										label: 'Абонементы',
										folder: 'content/subscriptions',
										create: true,
										slug: '{{slug}}',
										fields: [
											{ label: 'Название', name: 'name', widget: 'string' },
											{ label: 'Цена', name: 'cost', widget: 'string' },
											{ label: 'Порядок', name: 'order', widget: 'number', default: 1 },
											{ label: 'Описание', name: 'body', widget: 'markdown' }
										]
									}
								]
							}
						});
					} catch (error) {
						console.error('Ошибка инициализации CMS:', error);
					}
				}
			}, 500); // Задержка 500мс для полной загрузки
		};

		document.head.appendChild(script);

		return () => {
			// Очистка при размонтировании
			if (document.head.contains(script)) {
				document.head.removeChild(script);
			}
		};
	}, []);

	return (
		<div style={{ minHeight: '100vh' }}>
			<div id="nc-root"></div>
		</div>
	);
}

// Типизация для TypeScript
declare global {
	interface Window {
		CMS: any;
	}
} 