---
# ============================================================
# Страница контактов
# Форма использует Formspree.io (бесплатно до 50 отправок/мес)
# Замените ACTION_URL на ваш endpoint после регистрации на formspree.io
# ============================================================
layout: page
title: "Контакты"
permalink: /contact/
form_action: "https://formspree.io/f/YOUR_FORM_ID"  # замените на свой ID
---

<div class="contact-grid">
  <div class="contact-info">
    <h2>Давайте создадим что-то вместе</h2>
    <p>
      Я всегда открыт к интересным проектам, коллаборациям и просто общению.
      Напишите мне — отвечу в течение 24 часов.
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
      Предпочитаю писать в Telegram или на email — отвечаю быстрее, чем через форму.
    </p>
  </div>

  <div class="contact-form-wrap">
    <form action="{{ page.form_action }}" method="POST" class="contact-form">
      <div class="field">
        <label for="name">Имя</label>
        <input type="text" id="name" name="name" required
               placeholder="Как вас зовут?" autocomplete="name">
      </div>
      <div class="field">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required
               placeholder="your@email.com" autocomplete="email">
      </div>
      <div class="field">
        <label for="subject">Тема</label>
        <input type="text" id="subject" name="subject"
               placeholder="Проект, вопрос, идея…">
      </div>
      <div class="field">
        <label for="message">Сообщение</label>
        <textarea id="message" name="message" rows="6" required
                  placeholder="Расскажите подробнее…"
                  style="resize:vertical;min-height:140px;"></textarea>
      </div>
      <!-- honeypot anti-spam -->
      <input type="text" name="_gotcha" style="display:none">
      <button type="submit" class="btn btn-primary" style="width:100%;justify-content:center;">
        Отправить сообщение
      </button>
    </form>
  </div>
</div>

<style>
  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: start;
  }
  @media (max-width: 768px) {
    .contact-grid { grid-template-columns: 1fr; }
  }
  .contact-info h2 {
    font-size: 1.6rem;
    margin: 0 0 1rem;
    font-family: Georgia, "Times New Roman", serif;
  }
  .contact-info > p {
    color: var(--muted);
    line-height: 1.7;
    margin: 0 0 2rem;
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
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
  .field { display: flex; flex-direction: column; gap: 0.4rem; }
  .field label {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--muted);
    font-weight: 600;
  }
  .field input,
  .field textarea {
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    color: var(--fg);
    font-family: inherit;
    transition: border-color 0.15s, box-shadow 0.15s;
    min-height: 44px;
  }
  .field input:focus,
  .field textarea:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 15%, transparent);
  }
</style>
