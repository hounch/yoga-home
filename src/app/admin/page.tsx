'use client';

import { useEffect, useRef } from 'react';

export default function AdminPage() {
	const isInitialized = useRef(false);

	useEffect(() => {
		// Предотвращаем повторную инициализацию
		if (isInitialized.current) return;

		// Загружаем Decap CMS скрипт
		const script = document.createElement('script');
		script.src = 'https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js';
		script.onload = () => {
			console.log('Decap CMS loaded successfully');

			if (window.CMS && !isInitialized.current) {
				try {
					// Инициализируем CMS для работы с Git
					window.CMS.init();
					isInitialized.current = true;
				} catch (error) {
					console.error('Error initializing CMS:', error);
				}
			}
		};
		script.onerror = () => {
			console.error('Failed to load Decap CMS');
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
		<>
			<div id="nc-root" style={{ minHeight: '100vh' }}></div>
		</>
	);
}

// Типизация для TypeScript
declare global {
	interface Window {
		CMS: any;
	}
} 