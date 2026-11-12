---
layout: default
title: Projects
permalink: /cases/
---

<div class="container">
  <p class="page-eyebrow">Портфолио</p>
  <h1 class="page-title">Кейсы</h1>

  <div class="cases-grid">
    {% assign cases = site.cases | sort: 'date' | reverse %}
    {% for case in cases %}
    <a href="{{ case.url }}" class="case-card reveal">
      <div class="case-card__media" style="background: {{ case.cover_color | default: 'var(--bg-2)' }};">
        {% if case.cover_emoji %}
        <span class="case-card__emoji">{{ case.cover_emoji }}</span>
        {% endif %}
      </div>
      <div class="case-card__body">
        <p class="case-card__tag">{{ case.tag }}</p>
        <h3 class="case-card__title">{{ case.title }}</h3>
        <p class="case-card__desc">{{ case.excerpt }}</p>
      </div>
    </a>
    {% endfor %}
  </div>
</div>
