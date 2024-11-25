---
title: Ham Radio bank heist, 8.4GHz RX, LongChat text chat, more...
excerpt: Ham Radio bank heist, 8.4GHz RX, LongChat text chat, more...
subject: Ham Radio bank heist, 8.4GHz RX, LongChat text chat, more...
date: 2024-11-23
sourceurl: https://handiham.org/wordpress1/2024/02/04/handiham-57th-anniversary-announcement/
tags:
---
<h2>Top links</h2>
{% for links in collections.links %}
    {% if links.data.linktype == 'link'  %}
        <div>
            <h4><a href="{{ links.url | url }}">{{ links.data.title }}</a></h4>
            <p>{{ links.data.excerpt }}</p>
            <span class="date">{{ links.date | formatDate }}</span>
        </div>
    {% endif %}
{% endfor %}

<h2>Video</h2>
{% for videos in collections.videos | sort(false, false, 'links.data.order') %}
    {% if videos.data.linktype == 'video'  %}
        <div>
            <h4><a href="{{ videos.url | url }}">{{ videos.data.title }} {{videos.data.order}}</a></h4>
            <p>{{ videos.data.excerpt }}</p>
            <span class="date">{{ videos.date | formatDate }}</span>
        </div>
    {% endif %}
{% endfor %}