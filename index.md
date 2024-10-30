---
layout: default
title: Home
nav: false 
---

<div class="relative z-10 container mx-auto py-20 bg-cover bg-center">
    <h1 class="text-6xl text-gcos-green font-bold">
        {{ "AI owned by you" | upcase }}
        <br />
        <span class="hidden sm:inline-block pl-8 md:pl-12 lg:pl-16">{{ "governed democratically" | upcase }}</span>
        <span class="sm:hidden">{{ "governed democratically" | upcase }}</span>
        <br />
        <span class="hidden md:inline-block pl-16 lg:pl-32">{{ "for the benefit of society" | upcase }}</span>
        <span class="md:hidden">{{ "for the benefit of society" | upcase }}</span>
    </h1>
</div>

<div class="container mx-auto py-12">
  <div class="flex flex-wrap -mx-4">
    {% assign articles = site.posts | where:"category", "article" %}
    {% assign articles = articles | slice: 0, 3 %}
    {% for post in articles %}
    {% capture post_content %}
    <div class="flex flex-col h-32">
      <h3 class="text-2xl font-bold mb-2 group-hover:text-white overflow-hidden" style="-webkit-line-clamp: 2; display: -webkit-box; -webkit-box-orient: vertical;">
        {{ post.title }}
      </h3>
      <p class="mb-4 group-hover:text-white overflow-hidden flex-grow" style="-webkit-line-clamp: 2; display: -webkit-box; -webkit-box-orient: vertical;">
        {{ post.content | strip_html }}
      </p>
      <div class="mt-auto">
        <span class="font-semibold group-hover:text-white">{{ include.read_more_text | default: "Read more" }}</span>
      </div>
    </div>
    {% endcapture %}
    {% include card.html
      content=post_content
      url=post.url
    %}
    {% endfor %}
  </div>
</div>

## Get involved with Open Source AI @ GC.OS
{: .text-4xl .font-bold}

<div class="container mx-auto py-12">
    <div class="flex flex-wrap -mx-4">
        {% for opportunity in site.involvement_opportunities %}
      {% capture opportunity_content %}
        <h3 class="text-2xl font-bold mb-2 group-hover:text-white">
          {{ opportunity.title }}
        </h3>
        <ul class="mb-4 group-hover:text-white list-disc list-inside">
          {% for item in opportunity.list_items %}
            <li>{{ item }}</li>
          {% endfor %}
        </ul>
        <span class="font-semibold group-hover:text-white">Learn more</span>
      {% endcapture %}
      
      {% include card.html 
        url=opportunity.permalink
        content=opportunity_content
      %}
    {% endfor %}
    </div>
</div>

## Our Projects
{: .text-4xl .font-bold}

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
      </div>
        {% endcapture %}
        {% include card.html 
        url='/open-source-ai'
        content=project_content
      %}
      {% endfor %}
    </div>
</div>