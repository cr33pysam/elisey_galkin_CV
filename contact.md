---
# ============================================================
# Страница контактов — только контактная информация
# Форма удалена: она требовала настройки внешнего сервиса (Formspree)
# ============================================================
layout: page
title: "Контакты"
permalink: /contact/
---

<div class="contact-page">
  <h2>Давайте создадим что-то вместе</h2>
  <p>
    Я всегда открыт к интересным проектам, коллаборациям и просто общению.
    Напишите мне — отвечаю в течение 24 часов.
  </p>

  <ul class="contact-list">
    <li>
      <span class="label">Email</span>
      <a href="mailto:alexey@galkin.dev">alexey@galkin.dev</a>
    </li>
    <li>
      <span class="label">Telegram</span>
      <a href="https://t.me/galkin_dev">@galkin_dev</a>
    </li>
    <li>
      <span class="label">GitHub</span>
      <a href="https://github.com/galkin-dev">github.com/galkin-dev</a>
    </li>
    <li>
      <span class="label">LinkedIn</span>
      <a href="https://linkedin.com/in/galkin-dev">linkedin.com/in/galkin-dev</a>
    </li>
  </ul>

  <p class="meta-note">
    Предпочитаю Telegram или email — отвечаю быстрее всего.
  </p>
</div>

<style>
  .contact-page h2 {
    font-size: 1.6rem;
    margin: 0 0 1rem;
    font-family: Georgia, "Times New Roman", serif;
  }
  .contact-page > p {
    color: var(--muted);
    line-height: 1.7;
    margin: 0 0 2.5rem;
    max-width: 520px;
  }
  .contact-list {
    list-style: none;
    padding: 0;
    margin: 0 0 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .contact-list li {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  .contact-list .label {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--muted);
    font-weight: 600;
  }
  .contact-list a {
    color: var(--accent);
    text-decoration: none;
    font-size: 1.05rem;
    transition: opacity 0.15s;
  }
  .contact-list a:hover { opacity: 0.75; }
  .meta-note {
    font-size: 0.85rem;
    color: var(--muted);
    font-style: italic;
    margin: 0;
  }
</style>
