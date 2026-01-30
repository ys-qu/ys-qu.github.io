---
layout: page
title: Awards
permalink: /awards/
description: 
nav: true
nav_order: 6
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

/* Image customization styles */
.award-images {
  margin-top: 15px;
  margin-bottom: 15px;
}

.award-images .row {
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 10px;
  max-width: 80%;
  padding: 0;
}

.award-images .col-md-6 {
  padding-left: 0;
  padding-right: 40px;
  margin-bottom: 10px;
}

.award-images img {
  margin-bottom: 5px;
  height: 300px !important;
  object-fit: cover;
  width: 100%;
}

.award-images p {
  margin-bottom: 0;
  text-align: center;
  margin-top: 10px;
  color: var(--global-text-color-light);
  font-size: 0.9em;
}

.award-images {
  padding-left: 0;
  margin-left: 0;
}

/* 基础样式 */
.honors-container {
  margin-bottom: 5px;
}

.awards-list {
  list-style-type: disc;
  padding-left: 1.5em;
  margin-top: 0;
}

.awards-list li {
  position: relative;
  padding-left: 0.5em;
  margin-bottom: 0.5em;
  padding-bottom: 0.2em;
  border-bottom: none;
  line-height: 1.4;
}

.awards-list li:last-child {
  border-bottom: none;
}

/* 移除悬停效果 */
.awards-list li:hover {
  background-color: transparent;
  padding-left: 0.5em;
  border-radius: 0;
}

/* 移除图标样式 */
.awards-list li:before {
  content: none;
}

.academic-awards li:before {
  content: none;
}

.scholarships-list li:before {
  content: none;
}

.competitions-list li:before {
  content: none;
}

.awards-list li:hover:before {
  transform: none;
}

/* 标题样式 */
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

/* 强调文本 */
.awards-list li strong {
  font-weight: 600;
  letter-spacing: 0.01em;
}

/* 描述文本样式 */
.award-description {
  display: inline-block;
  font-size: 1em;
  color: var(--global-text-color-light, #666);
  font-style: normal;
  margin-top: 0;
  line-height: 1.4;
}

/* 保留但优化br标签 */
.awards-list li br {
  display: block;
  content: "";
  margin: 0;
  line-height: 1;
}

/* 年份标签样式 */
.award-year {
  display: inline-block;
  font-size: 0.85em;
  padding: 2px 8px;
  margin-right: 8px;
  border-radius: 12px;
  font-weight: 500;
  vertical-align: middle;
  background-color: rgba(156, 39, 176, 0.1);
  color: rgba(156, 39, 176, 0.8);
  border: 1px solid rgba(156, 39, 176, 0.2);
}

/* 证书链接样式 */
.awards-list a {
  display: inline-block;
  transition: transform 0.2s;
}

.awards-list a:hover {
  transform: translateY(-1px);
}

/* 响应式调整 */
@media (max-width: 768px) {
  .awards-list li {
    padding-left: 2em;
    padding-bottom: 0.8em;
    margin-bottom: 1em;
  }
  
  h5 {
    font-size: 1.1em;
    padding-left: 0;
  }
}
</style>

<!-- Year navigation sidebar -->
<div class="year-nav">
  <a href="#year-2026">2026</a>
  <a href="#year-2024">2024</a>
  <a href="#year-2023">2023</a>
  <a href="#year-2021">2021</a>
  <a href="#year-2020">2020</a>
  <a href="#year-2019">2019</a>
</div>

<h4 style="text-align: left;">Honors & Awards</h4>

<div class="honors-container">
  <h5 id="year-2026" style="text-align: left;">2026</h5>
  <ul class="awards-list">
    <li>Lyles Teaching Assistant Award, Lyles School of Civil and Construction Engineering, Purude University</li>
  </ul>
</div>

<div class="honors-container">
  <h5 id="year-2024" style="text-align: left;">2024</h5>
  <ul class="awards-list">
    <li>The First-class Academic Scholarship, Beijing University of Technology</li>
    <li>Outstanding Thesis, Beijing University of Technology</li>
    <li>Ren Futian (任福田) Transportation Scholarship, Beijing University of Technology</li>
    <li>One of the Top 100 Outstanding Graduates of BJUT, Beijing University of Technology</li>
  </ul>
</div>

<div class="honors-container">
  <h5 id="year-2023" style="text-align: left;">2023</h5>
  <ul class="awards-list">
    <li>The First-class Academic Scholarship, Beijing University of Technology</li>
  </ul>
</div>

<div class="honors-container">
  <h5 id="year-2022" style="text-align: left;">2022</h5>
  <ul class="awards-list">
    <li>The Second-class Academic Scholarship, Beijing University of Technology</li>
  </ul>
</div>

<div class="honors-container">
  <h5 id="year-2020" style="text-align: left;">2020</h5>
  <ul class="awards-list">
    <li>The First Prize in National Mathematics Competitions, National Mathematical Society</li>
    <li>The First Prize in Liaoning Provincial Mathematics Competitions, Liaoning Provincial Mathematical Society</li>
    <li>The Third Prize in National English Competition for College Students, TEFL China</li>
  </ul>
</div>

<div class="honors-container">
  <h5 id="year-2019" style="text-align: left;">2019</h5>
  <ul class="awards-list">
    <li>The Second Prize in the 28th Dalian University Mathematics Competition for Science and Engineering Majors, Dalian Mathematical Society</li>
    <li>The Second Prize in the 3rd Undergraduate Mathematics Competition, Dalian Jiaotong University</li>
    <li>The Second Prize in National English Competition for College Students, TEFL China</li>
    <li>The First Prize in the School-level Preliminary Round of the 2019 “FLTRP·ETIC Cup” English Reading Contest, Dalian Jiaotong University</li>
    <li>Excellent Award in the “Changtong Cup” Transportation Technology Contest, Dalian Jiaotong University</li>
  </ul>
</div>

<div class="honors-container">
  <h5 id="year-2018" style="text-align: left;">2018</h5>
  <ul class="awards-list">
    <li>The First Prize in the School-level Preliminary Round of the 2018 “FLTRP·ETIC Cup” English Reading Contest, Dalian Jiaotong University</li>
  </ul>
</div>

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
