---
layout: search
title: Search
---
<form action="/zettel/search.html" method="get">
  <label for="search-box">Search</label>
  <input type="text" id="search-box" name="query">
  <!--<input type="submit" value="search">-->
</form>

<br>

<ul id="search-results"></ul>

<script>
  window.store = {
    {% for post in site.pages %}
      "{{ post.url | slugify }}": {
        "title": "{{ post.title | xml_escape }}",
        "author": "{{ post.author | xml_escape }}",
        "category": "{{ post.category | xml_escape }}",
        "content": {{ post.content | strip_html | strip_newlines | jsonify }},
        "url": "{{ post.url | xml_escape }}"
      }
      {% unless forloop.last %},{% endunless %}
    {% endfor %}
  };
</script>
<script src="/zettel/assets/js/lunr.js"></script>
<script src="/zettel/assets/js/search.js"></script>
