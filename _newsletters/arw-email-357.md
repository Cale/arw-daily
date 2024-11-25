---
layout: shell-arw-email.njk
---
<h2>Top links</h2>
{% for links in collections.links %}
    {% if links.data.linktype == 'link' and links.data.issue == 357 %}
        <div>
            <h4><a href="{{ links.url | url }}">{{ links.data.title }}</a></h4>
            <p>{{ links.data.excerpt }}</p>
            <span class="date">{{ links.date | formatDate }}</span>
        </div>
    {% endif %}
{% endfor %}

<h2>Video</h2>
{% for links in collections.links %}
    {% if links.data.linktype == 'video' and links.data.issue == 357 %}
        <div>
            <h4><a href="{{ links.url | url }}">{{ links.data.title }} {{ links.data.order }}</a></h4>
            <p>{{ links.data.excerpt }}</p>
            <span class="date">{{ links.date | formatDate }}</span>
        </div>
    {% endif %}
{% endfor %}