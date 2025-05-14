---
layout: page
title: Presentations
permalink: /presentations/
description: 
nav: true
nav_order: 2
---

<style>
/* Basic styles */
.talks-container {
  margin-bottom: 15px;
}

.talk-card {
  background: var(--global-bg-color);
  padding: 15px 0px 10px 0px;
  margin-bottom: 15px;
  border-bottom: 1px dashed rgba(var(--global-theme-color-rgb), 0.1);
}

.talk-title {
  font-weight: 600;
  color: var(--global-theme-color);
  margin-bottom: 6px;
  font-size: 1.1em;
}

.talk-venue {
  font-style: italic;
  color: var(--global-text-color-light);
  margin-bottom: 6px;
  font-size: 0.95em;
}

.talk-topic {
  margin-bottom: 10px;
  font-size: 0.95em;
}

.talk-images {
  margin-top: 8px;
  margin-bottom: -5px;
}

/* Image customization variables */
:root {
  --talk-image-height: 300px;
  --talk-image-width: 80%;
  --talk-image-margin: 10px;
  --talk-image-padding: 40px;
}

.talk-images .row {
  margin-left: 0;
  margin-right: 0;
  margin-bottom: var(--talk-image-margin);
  max-width: var(--talk-image-width);
  padding: 0;
}

.talk-images .col-md-6 {
  padding-left: 0;
  padding-right: var(--talk-image-padding);
  margin-bottom: var(--talk-image-margin);
}

.talk-images img {
  margin-bottom: 5px;
  height: var(--talk-image-height) !important;
  object-fit: cover;
  width: 100%;
}

.talk-images p {
  margin-bottom: 0;
}

.talk-images {
  padding-left: 0;
  margin-left: 0;
}

.year-section {
  margin-bottom: 20px;
}

.year-section:last-child .talk-card:last-child {
  border-bottom: none;
}

.year-badge {
  display: inline-block;
  background: var(--global-theme-color);
  color: white;
  padding: 4px 12px;
  border-radius: 15px;
  font-weight: 500;
  margin-bottom: 20px;
}

.talks-list {
  list-style-type: disc;
  padding-left: 1.5em;
}

.talks-list li {
  position: relative;
  padding-left: 0.5em;
  margin-bottom: 0.3em;
  padding-bottom: 0.2em;
  border-bottom: none;
}

.talks-list li:last-child {
  border-bottom: none;
}

/* Remove hover effects */
.talks-list li:hover {
  background-color: transparent;
  padding-left: 0.5em;
  border-radius: 0;
}

/* Icon styles */
.talks-list li:before {
  content: none;
}

.invited-talks li:before {
  content: none;
}

.conference-talks li:before {
  content: none;
}

.workshop-talks li:before {
  content: none;
}

.talks-list li:hover:before {
  transform: none;
}

/* Title styles */
h4 {
  position: relative;
  padding-bottom: 10px;
  margin-bottom: 20px;
  margin-top: 40px;
  color: var(--global-text-color);
  font-size: 1.3em;
  font-weight: 600;
}

h4:first-of-type {
  margin-top: 0;
}

h4:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background: var(--global-theme-color);
  border-radius: 3px;
}

h5 {
  margin-top: 5px;
  margin-bottom: 10px;
  color: var(--global-text-color);
  font-size: 1.05em;
  font-weight: 600;
  padding-left: 0;
  border-left: none;
  position: relative;
  display: inline-block;
  background: linear-gradient(120deg, rgba(33, 150, 243, 0.12), rgba(3, 169, 244, 0.05));
  padding: 5px 12px;
  border-radius: 8px;
  border: 1px solid rgba(33, 150, 243, 0.15);
  box-shadow: 0 2px 4px rgba(33, 150, 243, 0.05);
  transition: all 0.3s ease;
}

h5:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(33, 150, 243, 0.1);
  background: linear-gradient(120deg, rgba(33, 150, 243, 0.18), rgba(3, 169, 244, 0.08));
}

/* Tag styles */
.talk-tag {
  display: inline-block;
  font-size: 0.75em;
  padding: 2px 8px;
  margin-right: 8px;
  border-radius: 12px;
  vertical-align: middle;
}

.invited {
  background-color: rgba(33, 150, 243, 0.1);
  color: rgba(33, 150, 243, 0.8);
  border: 1px solid rgba(33, 150, 243, 0.2);
}

.conference {
  background-color: rgba(76, 175, 80, 0.1);
  color: rgba(76, 175, 80, 0.8);
  border: 1px solid rgba(76, 175, 80, 0.2);
}

.workshop {
  background-color: rgba(255, 152, 0, 0.1);
  color: rgba(255, 152, 0, 0.8);
  border: 1px solid rgba(255, 152, 0, 0.2);
}

/* Date styles */
.talk-date {
  font-size: 0.9em;
  color: var(--global-text-color-light);
  margin-left: 5px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .talks-list li {
    padding-left: 2em;
    padding-bottom: 0.8em;
    margin-bottom: 0.8em;
  }
  
  .talks-list li:hover {
    padding-left: 2.2em;
  }
}

/* Add hover effect for talk titles with links */
.talk-title a:hover {
  border-bottom: 1px solid var(--global-theme-color) !important;
  color: var(--global-theme-color-darker) !important;
}

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
  <a href="#year-2025">2025</a>
  <a href="#year-2024">2024</a>
</div>

<h4 style="text-align: left;">Presentations (e.g., Talks/Lectures)</h4>

<h5 id="year-2025" style="text-align: left;">2025</h5>
<div class="talks-container">
  <div class="year-section">

    <div class="talk-card" style="padding-left: 0;">
      <div class="talk-title">
        <a href="/news/2025/I attended the 11th Midwest Workshop on Control and Game Theory (MWCGT) in UIUC!/" style="color: var(--global-theme-color); text-decoration: none; border-bottom: 1px dashed var(--global-theme-color); transition: all 0.3s ease;">
          11th Midwest Workshop on Control and Game Theory (MWCGT) <i class="fas fa-external-link-alt" style="font-size: 0.8em; margin-left: 5px;"></i>
        </a>
      </div>
      <div class="talk-venue">April 26, 2025 | Champaign and Urbana, IL, US</div>
      <div class="talk-topic">
        <strong>Topic:</strong> VL-SAFE: Vision-Language Guided Safety-Aware Reinforcement Learning with World Models for Autonomous Driving

      </div>
      <div class="talk-images">
        <div class="row">
          <div class="col-md-6">
            <img class="img-fluid rounded z-depth-1" src="/assets/img/news/2025/uiuc/poster.jpg" style="width: 100%; height: 350px; object-fit: cover; object-position: center 70%;" loading="lazy">
            <p style="text-align: center; margin-top: 10px; color: var(--global-text-color-light); font-size: 0.9em;">
              Presentation
            </p>
          </div>
          <div class="col-md-6">
            <img class="img-fluid rounded z-depth-1" src="/assets/img/news/2025/uiuc/poster_.png" style="width: 100%; height: 350px; object-fit: cover;" loading="lazy">
            <p style="text-align: center; margin-top: 10px; color: var(--global-text-color-light); font-size: 0.9em;">
              Poster
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="talk-card" style="padding-left: 0;">
      <div class="talk-title">Li Auto Autonomous Driving Team</div>
      <div class="talk-venue">March 14, 2025 | Virtual</div>
      <div class="talk-topic">
        <strong>Topic:</strong> VLM-RL: Vision-Language Models for Reinforcement Learning in Autonomous Driving
      </div>
    </div>

    <div class="talk-card" style="padding-left: 0;">
      <div class="talk-title">
        <a href="/news/2025/I attended the 2025 TRB Annual Meeting!/" style="color: var(--global-theme-color); text-decoration: none; border-bottom: 1px dashed var(--global-theme-color); transition: all 0.3s ease;">
          2025 TRB Annual Meeting <i class="fas fa-external-link-alt" style="font-size: 0.8em; margin-left: 5px;"></i>
        </a>
      </div>
      <div class="talk-venue">January 9, 2025 | Washington, DC, US</div>
      <div class="talk-topic">
        <strong>Topic:</strong> Towards 3D semantic scene completion for autonomous driving: a meta-learning framework empowered by deformable large-kernel attention and Mamba model

      </div>
      <div class="talk-images">
        <div class="row">
          <div class="col-md-6">
            <img class="img-fluid rounded z-depth-1" src="/assets/img/news/2025/trb/group.jpg" style="width: 100%; height: 350px; object-fit: cover; object-position: center 70%;" loading="lazy">
            <p style="text-align: center; margin-top: 10px; color: var(--global-text-color-light); font-size: 0.9em;">
              Group Members
            </p>
          </div>
          <div class="col-md-6">
            <img class="img-fluid rounded z-depth-1" src="/assets/img/news/2025/trb/poster.png" style="width: 100%; height: 350px; object-fit: cover;" loading="lazy">
            <p style="text-align: center; margin-top: 10px; color: var(--global-text-color-light); font-size: 0.9em;">
              Poster
            </p>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>

<h5 id="year-2024" style="text-align: left;">2024</h5>
<div class="talks-container">
  <div class="year-section">
    <div class="talk-card" style="padding-left: 0;">
      <div class="talk-title">
        <a href="/news/2024/I attended the 2024 TRB Annual Meeting!" style="color: var(--global-theme-color); text-decoration: none; border-bottom: 1px dashed var(--global-theme-color); transition: all 0.3s ease;">
          2024 TRB Annual Meeting <i class="fas fa-external-link-alt" style="font-size: 0.8em; margin-left: 5px;"></i>
        </a>
      </div>
      <div class="talk-venue">January 05, 2024 | Washington, DC, US</div>
      <div class="talk-topic">
        <strong>Topic:</strong> TSS-FuseNet: a temporal-spatial-semantic fusion CNN-GRU-GCN network for area-wide long-term traffic forecasting
      </div>
      <div class="talk-images">
        <div class="row">
          <div class="col-md-6">
            <img class="img-fluid rounded z-depth-1" src="/assets/img/news/2024/trb/trb-3.jpg" style="width: 100%; height: 350px; object-fit: cover;" loading="lazy">
            <p style="text-align: center; margin-top: 10px; color: var(--global-text-color-light); font-size: 0.9em;">
              Group Members
            </p>
          </div>
          <div class="col-md-6">
            <img class="img-fluid rounded z-depth-1" src="/assets/img/news/2024/trb/poster.png" style="width: 100%; height: 350px; object-fit: cover;" loading="lazy">
            <p style="text-align: center; margin-top: 10px; color: var(--global-text-color-light); font-size: 0.9em;">
              Poster
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Add JavaScript for active state -->
<script>
document.addEventListener('DOMContentLoaded', function() {
  const yearLinks = document.querySelectorAll('.year-nav a');
  
  // Set first year as active by default
  yearLinks[0].classList.add('active');
  
  // Update active state on scroll
  function updateActiveYear() {
    const scrollPosition = window.scrollY;
    const yearSections = document.querySelectorAll('h5[id^="year-"]');
    
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
