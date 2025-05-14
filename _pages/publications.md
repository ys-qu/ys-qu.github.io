---
layout: page
permalink: /publications/
title: Publications
description: 
years: [2025, 2024, 2023, 2022]
nav: true
nav_order: 4
---

<style>
/* Year navigation sidebar styles */
.year-nav {
  position: fixed;
  left: 40px;
  top: 50%;
  transform: translateY(-50%);
  background-color: white;
  padding: 15px;
  border-radius: 12px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  border: 1px solid rgba(var(--global-theme-color-rgb), 0.15);
}

.year-nav a {
  display: block;
  padding: 8px 25px;
  margin: 6px 0;
  color: var(--global-theme-color);
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.2s ease;
  font-size: 1em;
  text-align: center;
  position: relative;
  background-color: transparent;
}

.year-nav a:hover {
  background-color: rgba(var(--global-theme-color-rgb), 0.1);
}

.year-nav a.active {
  background-color: var(--global-theme-color);
  color: white;
  font-weight: 500;
}

@media (max-width: 768px) {
  .year-nav {
    display: none;
  }
}
</style>

<!-- Year navigation sidebar -->
<div class="year-nav">
  {% for y in page.years %}
    <a href="#year-{{y}}">{{y}}</a>
  {% endfor %}
</div>

The list below may not be up to date, please check <a href="https://scholar.google.com/citations?user=RgO7ppoAAAAJ&hl=en">Google Scholar</a> for my latest publications.

---

<div class="publications">
{% for y in page.years %}
  <h2 class="year" id="year-{{y}}">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}] %}
{% endfor %}
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const yearLinks = document.querySelectorAll('.year-nav a');
  
  // Set first year as active by default
  yearLinks[0].classList.add('active');
  
  // Update active state on scroll
  function updateActiveYear() {
    const scrollPosition = window.scrollY;
    const yearSections = document.querySelectorAll('.year');
    
    yearSections.forEach((section, index) => {
      const sectionTop = section.offsetTop - 100;
      const sectionBottom = sectionTop + section.offsetHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        yearLinks.forEach(link => link.classList.remove('active'));
        yearLinks[index].classList.add('active');
      }
    });
  }
  
  // Update active state on click
  yearLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      yearLinks.forEach(l => l.classList.remove('active'));
      e.target.classList.add('active');
    });
  });
  
  window.addEventListener('scroll', updateActiveYear);
  updateActiveYear();
});
</script>