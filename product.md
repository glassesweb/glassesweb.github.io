---
title: 产品
layout: product
description: Product
---

<div class="container pt-5 pb-5">
  <div class="row">
    <div class="col-12">
      {% for product in site.products %}
      <div class="product-item mb-4 p-3 border rounded shadow-sm">
        <h2 class="product-title">
          <a href="{{ product.url }}" class="text-decoration-none text-dark">{{ product.title }}</a>
        </h2>
        <p class="product-description">{{ product.description }}</p>
      </div>
      {% endfor %}
    </div>
  </div>
</div>

<style>
  .product-item {
    background-color: #f9f9f9;
    transition: transform 0.2s ease-in-out;
  }
  .product-item:hover {
    transform: scale(1.02);
  }
  .product-title a:hover {
    color: #007bff;
  }
</style>
