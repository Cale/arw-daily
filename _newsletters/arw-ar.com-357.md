---

---
<div style="line-height: 1.5; font-weight: normal; font-family: Helvetica, Arial, sans-serif; padding: 0; margin: 0 auto;">

<a href="http://hamweekly.com/?utm_source=amateurradio-com&amp;utm_medium=blog&amp;utm_campaign=header-banner" target="_blank" rel="noopener noreferrer"><img style="margin: 10px 0 20px 0; padding: 0;" src="https://www.amateurradio.com/wp-content/uploads/2018/11/arw-header.gif" alt="Amateur Radio Weekly" width="620" height="107" border="0" /></a>

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

<div style="padding: 20px 40px 10px; width: auto; background-color: #eeeeee; margin: 5px 0px 20px; border: 1px solid #aaaaaa;">

<h1 style="text-align: center; font-size: 20px; font-weight: bold; color: #1a6d8f; font-family: Helvetica, Arial, sans-serif;">Get Amateur Radio Weekly in your inbox.</h1>

<h1 style="text-align: center; font-size: 20px; font-weight: bold;"><a style="font-size: 20px; font-weight: bold; color: #f1592a; font-family: Helvetica, Arial, sans-serif;" title="Sign-up" href="http://hamweekly.com/">Sign-up here</a></h1>

</div>
</div>