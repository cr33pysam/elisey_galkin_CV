---
# ============================================================
# Главная страница сайта
# ============================================================
layout: page
title: "Главная"
permalink: /
excerpt: "Привет! Я — Алексей Галкин, разработчик и дизайнер."
---

<section class="hero">
  <span class="hero-label">Разработчик · Дизайнер · Исследователь</span>
  <h1>Создаю цифровые продукты, которые работают</h1>
  <p>
    Привет! Меня зовут Алексей. Я проектирую интерфейсы и пишу код, 
    который решает реальные задачи. Люблю чистый дизайн, 
    производительные системы и истории о том, как это выглядит внутри.
  </p>
  <div class="hero-links">
    <a href="{{ '/cases/' | relative_url }}" class="btn btn-primary">Смотреть кейсы</a>
    <a href="{{ '/contact/' | relative_url }}" class="btn btn-secondary">Связаться со мной</a>
  </div>
</section>

<div class="wrapper">
  <nav aria-label="Основные разделы">
    <p class="section-title">Разделы</p>
    <div class="section-cards">
      <a href="{{ '/about/' | relative_url }}" class="card">
        <div class="card-icon">
          <!-- SVG: user -->
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        </div>
        <h3>Обо мне</h3>
        <p>Мой путь в IT, ценности и подход к работе</p>
      </a>
      <a href="{{ '/cases/' | relative_url }}" class="card">
        <div class="card-icon">
          <!-- SVG: briefcase -->
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
            <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
          </svg>
        </div>
        <h3>Кейсы</h3>
        <p>Проекты с описанием задачи, процесса и результата</p>
      </a>
      <a href="{{ '/resume/' | relative_url }}" class="card">
        <div class="card-icon">
          <!-- SVG: file-text -->
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
            <polyline points="10 9 9 9 8 9"/>
          </svg>
        </div>
        <h3>Резюме</h3>
        <p>Опыт, образование, навыки и инструменты</p>
      </a>
      <a href="{{ '/contact/' | relative_url }}" class="card">
        <div class="card-icon">
          <!-- SVG: mail -->
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        </div>
        <h3>Контакты</h3>
        <p>Я всегда открыт к новым проектам и предложениям</p>
      </a>
    </div>
  </nav>
</div>
