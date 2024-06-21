title: 客户评价
layout: review
description: Review
---

<div class="container pt-5 pb-5">
  <div class="row">
    <div class="col-12">
      {% for review in site.reviews %}
      <div class="review-item mb-4 p-3 border rounded shadow-sm">
        <h2 class="review-title">
          <a href="{{ review.url }}" class="text-decoration-none text-dark">{{ review.title }}</a>
        </h2>
        <p class="review-description">{{ review.description }}</p>
      </div>
      {% endfor %}
    </div>
  </div>
</div>

<style>
  .review-item {
    background-color: #f9f9f9;
    transition: transform 0.2s ease-in-out;
  }
  .review-item:hover {
    transform: scale(1.02);
  }
  .review-title a:hover {
    color: #007bff;
  }
</style>