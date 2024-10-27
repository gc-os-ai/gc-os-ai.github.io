---
layout: default
title: Home
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
            <div>
                <h3 class="text-2xl font-bold mb-2 group-hover:text-white">
                    {{ post.title }}
                </h3>
                <p class="mb-4 group-hover:text-white line-clamp-3">
                    {{ post.description }}
                </p>
                <div>
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
    {% for involvement_opportunity in site.involvement_opportunities %}
      {% capture post_content %}
        <h3 class="text-2xl font-bold mb-2 group-hover:text-white">
          {{ involvement_opportunity.title }}
        </h3>
        <ul class="mb-4 group-hover:text-white list-disc list-inside">
          {% for item in involvement_opportunity.list_items %}
            <li>{{ item }}</li>
          {% endfor %}
        </ul>
        <span class="font-semibold group-hover:text-white">Learn more</span>
      {% endcapture %}
      
      {% include card.html 
        url=post.url
        content=post_content
      %}
    {% endfor %}
    </div>
</div>