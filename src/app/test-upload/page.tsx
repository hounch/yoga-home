'use client';

import { useState } from 'react';

export default function TestUpload() {
	const [file, setFile] = useState<File | null>(null);
	const [uploading, setUploading] = useState(false);
	const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			setFile(e.target.files[0]);
		}
	};

	const handleUpload = async () => {
		if (!file) return;

		setUploading(true);
		const formData = new FormData();
		formData.append('file', file);

		try {
			const response = await fetch('/api/media', {
				method: 'POST',
				body: formData,
			});

			if (response.ok) {
				const result = await response.json();
				setUploadedUrl(result.url);
				console.log('File uploaded:', result);
			} else {
				console.error('Upload failed');
			}
		} catch (error) {
			console.error('Upload error:', error);
		} finally {
			setUploading(false);
		}
	};

	return (
		<div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
			<h1>Тест загрузки медиафайлов</h1>

			<div style={{ marginBottom: '20px' }}>
				<input type="file" onChange={handleFileChange} accept="image/*" />
			</div>

			<div style={{ marginBottom: '20px' }}>
				<button
					onClick={handleUpload}
					disabled={!file || uploading}
					style={{
						padding: '10px 20px',
						backgroundColor: file ? '#007bff' : '#ccc',
						color: 'white',
						border: 'none',
						borderRadius: '4px',
						cursor: file ? 'pointer' : 'not-allowed'
					}}
				>
					{uploading ? 'Загружаю...' : 'Загрузить файл'}
				</button>
			</div>

			{uploadedUrl && (
				<div style={{ marginTop: '20px' }}>
					<h3>Файл загружен:</h3>
					<p>URL: <a href={uploadedUrl} target="_blank" rel="noopener noreferrer">{uploadedUrl}</a></p>
					<img
						src={uploadedUrl}
						alt="Uploaded file"
						style={{ maxWidth: '300px', height: 'auto', border: '1px solid #ddd' }}
					/>
				</div>
			)}

			<div style={{ marginTop: '40px' }}>
				<h3>Ссылки:</h3>
				<ul>
					<li><a href="/admin">Админка CMS</a></li>
					<li><a href="/">Главная страница сайта</a></li>
					<li><a href="/uploads/test-image.jpg">Тестовое изображение</a></li>
				</ul>
			</div>
		</div>
	);
} 