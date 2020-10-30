---
layout: page.njk 
---
<h1>Leggere a distanza</h1>
<p>PROFESSIONE CENERENTOLA professione cenerentola PROFESSIONE CENERENTOLA professione cenerentola 
PROFESSIONE CENERENTOLA professione cenerentola PROFESSIONE CENERENTOLA professione cenerentola</p>

{%- for activity in collections.leggeredistanza -%}
<h3>{{ activity.data.title }}</h3>
<p>{{ activity.data.summary }}</p>
<p class="ending-link">
    <a href="{{ activity.url | url }}">Scopri</a>
</p>
{%- endfor -%}

