---
layout: default
title: Главная
---

<section class="hero">
  <h1>Привет! Я {{ site.title | split: '|' | last | strip }}</h1>
  <p class="hero-subtitle">Frontend-разработчик · Дизайнер интерфейсов</p>

  <nav class="social-links" aria-label="Соцсети">
    <a href="https://github.com/" target="_blank" rel="noopener">GitHub</a>
    <a href="mailto:you@email.com">Email</a>
    <a href="https://t.me/username" target="_blank" rel="noopener">Telegram</a>
  </nav>
</section>

<section class="cases-section">
  <h2>Мои кейсы</h2>
  <ul class="case-list">
    {% for case in site.static_files %}
      {% if case.path contains '/cases/' and case.extname == '.md' %}
        <li>
          <a href="{{ case.path | relative_url }}">{{ case.name | replace: '.md', '' }}</a>
        </li>
      {% endif %}
    {% endfor %}
  </ul>
</section>
