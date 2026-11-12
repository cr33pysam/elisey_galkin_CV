# Galkin_CV — Portfolio Site

## Структура папок

```
Galkin_CV/
├── _config.yml              # Настройки Jekyll + шрифты
├── index.html               # Главная (redirect на about или Hero)
├── about.md                 # Обо мне  ← редактируйте здесь
├── resume.md                # Резюме    ← редактируйте здесь
├── style.css                # Все стили
├── script.js                # Тема, меню, scroll-анимации
├── _layouts/
│   └── default.html         # Базовый шаблон
├── _includes/
│   ├── head.html            # <head>: мета, шрифты, CSS
│   ├── header.html          # Шапка с навигацией и переключателем темы
│   └── footer.html          # Футер
└── _cases/                  # Кейсы ← каждый .md = отдельный кейс
    ├── _index.md
    └── case-1.md            # Пример кейса
```

---

## Как добавить новый кейс

1. Скопируйте `_cases/case-1.md` в `_cases/case-2.md`
2. Отредактируйте YAML-фронт-маттер и контент в Markdown
3. Обновите `_cases/_index.md` — добавьте ссылку на новый кейс

---

## Как обновить резюме через GitHub Web Interface

### Резюме (`resume.md`)
1. Зайдите на страницу репозитория → откройте `resume.md`
2. Нажмите карандаш (✏️) для редактирования
3. Измените текст Markdown (опыт, образование, навыки)
4. Прокрутите вниз → **Sign out** → **Commit changes**
5. Через ~1-2 минуты GitHub Pages обновится

### Кейсы (`_cases/`)
Аналогично — создавайте новые `.md` файлы прямо в браузере через кнопку «Add file» → «Create new file».

### Разделы
`about.md`, `_cases/*.md` редактируются тем же способом.
