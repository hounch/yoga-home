# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added
- 📁 YAML управление контентом в папке `content/`
  - Тренеры (`content/trainers/`)
  - Разовые занятия (`content/single-classes/`) 
  - Абонементы (`content/subscriptions/`)
- 📁 Админ панель Decap CMS (`src/app/admin/`)
- 📁 API endpoints для YAML данных (`src/app/api/`)
- 📁 Библиотека для чтения YAML файлов (`src/lib/`)
- 📦 Зависимость `gray-matter` для парсинга YAML

### Changed
- 📝 Обновлен `carousel.tsx` для работы с API вместо хардкода
- 📝 Обновлен `constants/index.tsx` - удален хардкод CardData4-6

### Migration
- Данные тренеров, занятий и абонементов перенесены из JavaScript констант в YAML файлы
- Добавлена возможность управления контентом через админ панель 