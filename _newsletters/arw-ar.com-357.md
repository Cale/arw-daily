---
layout: shell-arw-ar.com.njk
---
{% for links in collections.links %}
    {% if links.data.linktype == 'link' and links.data.issue == 357 %}
        <p style="font-family: Helvetica, Arial, sans-serif;"><strong><span style="font-size: 18px; color: rgb(241, 89, 42)"><a href="{{ links.url | url }}" style="font-weight: inherit; color: rgb(241, 89, 42); font-family: Helvetica, Arial, sans-serif;" target="_blank">{{ links.data.title }}</a></span></strong><br>{{ links.data.excerpt }}<br><span style="color: rgb(26, 109, 143)">{{ links.data.source }}</span></p>
    {% endif %}
{% endfor %}

<h1 style="font-size: 20px; font-weight: bold; margin: 10px 0 0 0; padding: 0; color: #1a6d8f; font-family: Helvetica, Arial, sans-serif;">Video</h1>

{% for links in collections.links %}
    {% if links.data.linktype == 'video' and links.data.issue == 357 %}
        <p style="font-family: Helvetica, Arial, sans-serif;"><strong><span style="font-size: 18px; color: rgb(241, 89, 42)"><a href="{{ links.url | url }}" style="font-weight: inherit; color: rgb(241, 89, 42); font-family: Helvetica, Arial, sans-serif;" target="_blank">{{ links.data.title }}</a></span></strong><br>{{ links.data.excerpt }}<br><span style="color: rgb(26, 109, 143)">{{ links.data.source }}</span></p>
    {% endif %}
{% endfor %}