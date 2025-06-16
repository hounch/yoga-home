[![wakatime](https://wakatime.com/badge/github/hounch/yoga-home.svg)](https://wakatime.com/badge/github/hounch/yoga-home)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Инструкция по настройке Decap CMS (без npm)
## 1. Подключение Decap CMS через CDN
Добавьте в файл public/admin/index.html:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Content Manager</title>
  
  <!-- Подключение Decap CMS -->
  <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
  
  <!-- Подключение редактора Markdown -->
  <script src="https://unpkg.com/netlify-cms-editor-component-image@^1.0.0/dist/netlify-cms-editor-component-image.js"></script>
</head>
<body>
  <script>
    CMS.registerEditorComponent(window['netlify-cms-editor-component-image']);
  </script>
</body>
</html>
```
## 2. Размещение конфигурационного файла
Создайте файл public/admin/config.yml с содержимым:

```yaml
backend:
  name: git-gateway
  branch: main

media_folder: "public" # Папка для загрузки изображений

collections:
  - name: "classes"
    label: "Направления"
    file: "src/content/sections/classes.yml"
    fields:
      - { label: "Заголовок", name: "title", widget: "string" }
      - { label: "Описание", name: "description", widget: "text" }
      - label: "Карточки направлений"
        name: "cards"
        widget: "list"
        fields:
          - { label: "Фото", name: "imageSrc", widget: "image" }
          - { label: "Название", name: "title", widget: "string" }
          - { label: "Тип", name: "type", widget: "string", default: "группа" }
          - { label: "Стоимость", name: "cost", widget: "string", default: "от 400 р" }
          - { label: "Описание", name: "description", widget: "text" }
          - { label: "Длительность", name: "duration", widget: "string", default: "1ч" }
          - { label: "CSS класс", name: "className", widget: "string", required: false }

  - name: "studio"
    label: "Студия"
    file: "src/content/sections/studio.yml"
    fields:
      - { label: "Заголовок", name: "title", widget: "string" }
      - { label: "Описание", name: "description", widget: "text" }
      - label: "Фотографии"
        name: "photos"
        widget: "list"
        fields:
          - { label: "Фото", name: "imageSrc", widget: "image" }

  - name: "events"
    label: "События"
    file: "src/content/sections/events.yml"
    fields:
      - { label: "Заголовок", name: "title", widget: "string" }
      - label: "Особенности"
        name: "features"
        widget: "list"
        fields:
          - { label: "Текст", name: "text", widget: "string" }
      - label: "Фотографии мероприятий"
        name: "eventPhotos"
        widget: "list"
        fields:
          - { label: "Фото", name: "imageSrc", widget: "image" }
```
## 3. Настройка аутентификации
Перейдите на Netlify

Добавьте свой сайт через "Add new site" → "Import an existing project"

В разделе Site settings → Identity включите Identity service

В разделе Identity → Registration выберите "Invite only"

В разделе Services → Git Gateway нажмите "Enable Git Gateway"

## 4. Доступ к админ-панели
Ваш сайт должен быть размещен на Netlify

Откройте в браузере: https://ваш-сайт.netlify.app/admin

Войдите с помощью приглашения (Netlify отправит вам email)

## 5. Редактирование контента
После входа вы увидите разделы:

- Направления - редактирование классов йоги

- Студия - управление фотографиями студии

- События - редактирование мероприятий

Для редактирования:

- Нажмите на нужную секцию

- Измените данные в полях

- Загрузите изображения через интерфейс

- Сохраните изменения

## 6. Важные замечания
Пути изображений:

- Все изображения сохраняются в папку /public

- В контенте используйте пути вида /image.jpg

Структура файлов:

```txt
public/
  admin/
    index.html    # Админ-панель
    config.yml    # Конфигурация CMS
src/
  content/
    sections/
      classes.yml # Данные направлений
      studio.yml  # Данные студии
      events.yml  # Данные событий
```

## 7. Пример редактирования направления
Откройте раздел "Направления"

Вы увидите структуру:

Основной заголовок и описание

Список карточек направлений

Для изменения карточки:

Измените текст в полях

Загрузите новое изображение

Добавьте/удалите карточки

Сохраните изменения
