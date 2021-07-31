---
layout: default
title: Tag Page
permalink: tag-page.html
---

{%- include collecttags.html -%}

<div id="tag-container">
{% for site-tag in allGlobalTags %}
<div id="-{{site-tag}}"> 
<h3> <em>Tag</em>: {{site-tag}} </h3>
  <ul id="ul-{{site-tag}}">
  {% for page in site.pages %}
  {% assign pageTags = page.tags | split: " " %}
  {% for tag in pageTags %}
    {% if site-tag == tag %}
      <li><a href="{{ page.url | relative_url }}">{{page.title}}</a></li>
    {% endif %}
  {% endfor %}
{% endfor %}
</ul>
</div>
{% endfor %}
</div>
{% include snippet-in-page.html content="delete-posts-not-in-query-string.js" %}
