---
title: 招聘信息
layout: jobs
description: Jobs
---

<div class="container pt-5 pb-5">
  <div class="row">
    <div class="col-12">
      {% for jobs in site.jobs %}
      <div class="job-listing mb-4 p-3 border rounded shadow-sm">
        <h2 class="job-title">
          <a href="{{ jobs.url }}" class="text-decoration-none text-dark">{{ jobs.title }}</a>
        </h2>
        <p class="job-description">{{ jobs.description }}</p>
      </div>
      {% endfor %}
    </div>
  </div>
</div>

<style>
  .job-listing {
    background-color: #f9f9f9;
    transition: transform 0.2s ease-in-out;
  }
  .job-listing:hover {
    transform: scale(1.02);
  }
  .job-title a:hover {
    color: #007bff;
  }
</style>
