# Galkin_CV — Сайт-визитка на Jekyll

Минималистичный, быстрый и эстетичный персональный сайт с поддержкой тёмной/светлой темы, адаптивной вёрсткой и контентом, управляемым через Markdown.

Развёртывается бесплатно на **GitHub Pages** без дополнительных CI/CD (автосборка GitHub Actions).

---

## 🚀 Быстрый старт

### 1. Клонирование и локальная сборка

```bash
# Клонировать репозиторий
git clone https://github.com/ваш-ник/galkin-cv.git
cd galkin-cv

# Установить Ruby (если нет) через https://rubyinstaller.org
# Затем установить зависимости
bundle install

# Запустить локальный сервер
bundle exec jekyll serve
# Открыть http://localhost:4000
```

### 2. Развёртывание на GitHub Pages

```bash
# Создать репозиторий на GitHub (например, username.github.io)
git remote add origin https://github.com/username/galkin-cv.git
git push -u origin main
```

GitHub Actions автоматически соберёт и опубликует сайт при каждом пуше в `main`.  
Перейдите в **Settings → Pages → Source: Deploy from a branch → main / `/ (root)`**.

---

## 📝 Редактирование контента

Весь контент редактируется **только через Markdown-файлы** — HTML менять не нужно.

| Что изменить         | Файл                         |
|-----------------------|------------------------------|
| Главная страница      | `index.md`                   |
| Обо мне               | `about.md`                   |
| Резюме                | `resume.md`                  |
| Контакты (форму)      | `contact.md`                 |
| Новый кейс            | `_cases/имя-файла.md`        |
| Основные настройки    | `_config.yml`                |

### Добавление нового кейса

```bash
cp _cases/example-case.md _cases/my-new-case.md
# Отредактировать front matter и содержимое
```

Каждый кейс — отдельный `.md` файл в папке `_cases/` со следующими полями в front matter:

```yaml
---
layout: case
title: "Название кейса"
subtitle: "Краткое описание"
date: 2024-01-15
tags: [тег1, тег2]
cover: "cover-image.jpg"   # опционально, картинка в assets/img/cases/
---
```

### Редактирование резюме

Откройте `resume.md` в корне репозитория — это чистый Markdown, макет генерируется автоматически.

---

## 🎨 Кастомизация

### Цветовая схема

В файле `_config.yml` измените переменную `accent_color`:

```yaml
accent_color: "#C0564A"   # терракотовый (по умолчанию)
accent_color: "#2563EB"   # синий вариант
accent_color: "#10B981"   # зелёный вариант
```

Цвет применяется автоматически через CSS Custom Properties.

### Шрифты

Системный стек задан в `_includes/head.html` в секции `body { font-family: ... }`.  
Чтобы добавить внешний шрифт — подключите его через `<link>` в том же файле.

### Соцсети и контакты

В `_config.yml` отредактируйте секцию `social:` — ссылки появятся в футере.  
Email и Telegram на странице контактов меняются в `contact.md`.

### Форма обратной связи

Замените `YOUR_FORM_ID` в `contact.md` на ID формы, созданной на [Formspree.io](https://formspree.io).  
Альтернатива — использовать [Netlify Forms](https://netlify.com/products/forms) или [Formsubmit](https://formsubmit.co).

---

## 📁 Структура проекта

```
├── _config.yml              # Основная конфигурация Jekyll
├── Gemfile                  # Ruby-зависимости
├── index.md                 # Главная страница
├── about.md                 # Страница «Обо мне»
├── resume.md                # Резюме (Markdown)
├── contact.md               # Контакты + форма
├── 404.html                 # Страница 404
├── README.md                # Эта инструкция
│
├── _layouts/
│   ├── default.html         # Базовый layout
│   ├── page.html            # Layout для обычных страниц
│   ├── case.html            # Layout для кейсов
│   └── resume.html          # Layout для резюме
│
├── _includes/
│   ├── head.html            # Секция <head> + критический CSS
│   ├── header.html          # Шапка (навигация, бургер, тема)
│   ├── footer.html          # Футер (копирайт, соцсети)
│   └── favicon.svg          # SVG favicon
│
├── _cases/                  # Кейсы (Jekyll collection)
│   ├── healthcare-redesign.md
│   └── design-system-fintech.md
│
├── assets/
│   ├── css/
│   │   └── style.css        # Дополнительные стили
│   ├── js/
│   │   └── main.js          # Тема + мобильное меню
│   └── img/
│       └── cases/           # Картинки кейсов
│
└── .github/
    └── workflows/
        └── pages.yml        # GitHub Actions workflow
```

---

## ✅ Требования для Lighthouse > 90

-Semantic HTML5 (`<header>`, `<main>`, `<article>`, `<nav>`, `<footer>`)
- Критический CSS встроен в `<head>`, остальное в отдельном файле
- Атрибуты `loading="lazy"` на изображениях
- Минимальный JS (~1 KB, defer)
- ARIA-атрибуты, skip-link, focus-состояния
- Open Graph + Twitter Card мета-теги
- Семантические заголовки h1→h4

---

## 🔧 Возможные улучшения

- Добавить RSS-ленту через `jekyll-feed`
- Интегрировать анимацию при скролле (библиотека AOS или GSAP)
- Добавить мультиязычность (`i18n`)
- Подключить аналитику (Plausible, GA4)
