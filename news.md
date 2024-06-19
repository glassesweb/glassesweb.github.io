---
title: 新闻
layout: news
description: News
---

<div class="container pt-5 pb-5">
  <div class="row">
    <div class="col-12">
      {% for news in site.news %}
      <div class="news-item mb-4 p-3 border rounded shadow-sm">
        <h2 class="news-title">
          <a href="{{ news.url }}" class="text-decoration-none text-dark">{{ news.title }}</a>
        </h2>
        <p class="news-description">{{ news.description }}</p>
      </div>
      {% endfor %}
    </div>
  </div>
</div>

<style>
  .news-item {
    background-color: #f9f9f9;
    transition: transform 0.2s ease-in-out;
  }
  .news-item:hover {
    transform: scale(1.02);
  }
  .news-title a:hover {
    color: #007bff;
  }
</style>
