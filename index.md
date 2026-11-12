---
layout: default
title: Home
permalink: /
---

<div class="hero-glow-wrap">
<div class="container">
<section class="hero-section">
  <div class="hero">
    <p class="hero-eyebrow">Portfolio · CV · Blog</p>
    <h1 class="hero-title">Привет,&nbsp;я<br><span class="gradient-text">Имя Фамилия</span></h1>
    <p class="hero-subtitle">Дизайнер&nbsp;&amp;&nbsp;разработчик из Москвы.<br>Создаю эстетичные интерфейсы и чистый код.</p>
    <div class="hero-actions">
      <a href="{{ '/resume' | prepend: site.baseurl }}" class="btn btn--primary">Скачать резюме</a>
      <a href="{{ '/about' | prepend: site.baseurl }}" class="btn btn--ghost">Обо мне →</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="section-header">
    <p class="section-eyebrow">Избранные проекты</p>
    <h2 class="section-title">Кейсы</h2>
  </div>
  <div class="cases-grid">
    {% assign cases = site.cases | sort: 'date' | reverse %}
    {% for case in cases limit: 6 %}
    <a href="{{ case.url | prepend: site.baseurl }}" class="case-card reveal{% cycle '', ' reveal-delay-1', ' reveal-delay-2' %}">
      <div class="case-card__media" style="background: {{ case.cover_color | default: 'var(--bg-2)' }};">
        {% if case.cover_emoji %}<span class="case-card__emoji">{{ case.cover_emoji }}</span>{% endif %}
      </div>
      <div class="case-card__body">
        <p class="case-card__tag">{{ case.tag }}</p>
        <h3 class="case-card__title">{{ case.title }}</h3>
        <p class="case-card__desc">{{ case.excerpt | default: case.description }}</p>
      </div>
    </a>
    {% endfor %}
  </div>
  <div class="section-more">
    <a href="{{ '/cases/' | prepend: site.baseurl }}" class="link-arrow">Все проекты →</a>
  </div>
</section>

<section class="section section--alt">
  <div class="container">
    <div class="split">
      <div class="reveal">
        <p class="section-eyebrow">Обо мне</p>
        <h2 class="section-title">Немного о моём пути</h2>
        <p class="lead">Несколько лет занимаюсь дизайном и разработкой. Верю, что хороший продукт рождается на стыке эстетики и технического совершенства.</p>
      </div>
      <div class="reveal">
        <a href="{{ '/about' | prepend: site.baseurl }}" class="card card--quote">
          <p>«Дизайн — это не то, как вещь выглядит, а то, как она работает.»</p>
          <cite>— Стив Джобс</cite>
        </a>
      </div>
    </div>
  </div>
</section>

</div>
</div>
