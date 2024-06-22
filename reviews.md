---
title: 招聘信息
layout: reviews
description: reviews
---

<div class="container pt-5 pb-5">
  <div class="row">
    <div class="col-12">
      {% for reviews in site.reviews %}
      <div class="review-listing mb-4 p-3 border rounded shadow-sm">
        <h2 class="review-title">
          <a href="{{ reviews.url }}" class="text-decoration-none text-dark">{{ reviews.title }}</a>
        </h2>
        <p class="review-description">{{ reviews.description }}</p>
      </div>
      {% endfor %}
    </div>
  </div>
</div>

<style>
  .review-listing {
    background-color: #f9f9f9;
    transition: transform 0.2s ease-in-out;
  }
  .review-listing:hover {
    transform: scale(1.02);
  }
  .review-title a:hover {
    color: #007bff;
  }
</style>
