---
layout: default
title: Tags
permalinks: tags
---

# All Tags

{%- include collecttags.html -%}

<ul>
    {% for tag in allGlobalTags %}
      <li><a href="{{site.baseurl}}/tag-page.html?tag={{tag}}">{{ tag }}</a></li>
    {% endfor %}
</ul>
