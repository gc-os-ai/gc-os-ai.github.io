---
layout: default
title: Open Source AI
---

## Open Source Projects Supported by GC.OS
{: .text-4xl .font-bold}

{% include github-icon.html link="https://github.com/username" %}

<div class="container mx-auto py-12">
    <div class="flex flex-wrap -mx-4">
      {% for project in site.projects %}
        {% capture project_content %}
          <div>
      
      <img
        src="{{ project.image }}"
        alt="{{ project.title }}"
        class="w-full h-full object-cover"
      />  

        <p>{{ project.title }}</p>

      </div>
        {% endcapture %}
        {% include card.html 
        url=project.permalink
        content=project_content
      %}
      {% endfor %}
    </div>
</div>
