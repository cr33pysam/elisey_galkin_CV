---
layout: default
title: Кейсы
---

## Мои кейсы

{% assign casePages = site.pages | where_exp: "p", "p.path contains 'cases/'" %}
{% if casePages.size > 0 %}
<ul class="case-list">
  {% for page in casePages %}
    {% unless page.name == 'index.md' %}
    <li>
      <a href="{{ page.url | relative_url }}">{{ page.title }}</a>
    </li>
    {% endunless %}
  {% endfor %}
</ul>
{% else %}
<p>Пока нет кейсов.</p>
{% endif %}
