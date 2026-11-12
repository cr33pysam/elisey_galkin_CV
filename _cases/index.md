---
# ============================================================
# Список всех кейсов — генерируется из коллекции _cases/
# ============================================================
layout: page
title: "Кейсы"
permalink: /cases/
excerpt: "Избранные проекты с описанием задачи, процесса и результата."
---

<div class="wrapper">
  <article class="page-content">
    <header class="page-header">
      <h1>{{ page.title }}</h1>
      <p class="page-excerpt">{{ page.excerpt }}</p>
    </header>

    <div class="cases-list">
      {%- assign sorted_cases = site.cases | sort: 'date' | reverse -%}
      {%- for case in sorted_cases -%}
        <a href="{{ case.url | relative_url }}" class="case-card animate-in">
          <div class="case-card-header">
            <h3>{{ case.title }}</h3>
            <time datetime="{{ case.date }}">{{ case.date | date: "%d %b %Y" }}</time>
          </div>
          {% if case.subtitle %}
            <p>{{ case.subtitle }}</p>
          {% endif %}
          <div class="case-tags">
            {% for tag in case.tags %}
              <span class="tag">{{ tag }}</span>
            {% endfor %}
          </div>
        </a>
      {%- endfor -%}
    </div>
  </article>
</div>
