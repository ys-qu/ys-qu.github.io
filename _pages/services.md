---
layout: page
title: Services
permalink: /services/
description: 
nav: true
nav_order: 7
---

<style>
/* 基础样式 */
.services-container {
  margin-bottom: 20px;
}

.conference-item {
  padding: 15px 0px 10px 0px;
  margin-bottom: 15px;
  border-bottom: 1px dashed rgba(var(--global-theme-color-rgb), 0.1);
}

.conference-item:last-child {
  border-bottom: none;
}

.services-list {
  list-style-type: disc;
  padding-left: 1.5em;
}

.services-list li {
  position: relative;
  padding-left: 0.5em;
  margin-bottom: 0.3em;
  padding-bottom: 0.2em;
  border-bottom: none;
}

.services-list li:last-child {
  border-bottom: none;
}

/* 移除悬停效果 */
.services-list li:hover {
  background-color: transparent;
  padding-left: 0.5em;
  border-radius: 0;
}

/* 图标样式 */
.services-list li:before {
  content: none;
}

.academic-services li:before {
  content: none;
}

.community-services li:before {
  content: none;
}

.services-list li:hover:before {
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

/* Image customization variables */
:root {
  --talk-image-height: 300px;
  --talk-image-width: 80%;
  --talk-image-margin: 10px;
  --talk-image-padding: 30px;
}

/* Image styles */
.talk-images {
  margin-top: 8px;
  margin-bottom: -5px;
  padding-left: 0;
  margin-left: 0;
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

/* 服务类型标签 */
.service-type {
  display: inline-block;
  font-size: 0.75em;
  padding: 2px 8px;
  margin-right: 8px;
  border-radius: 12px;
  vertical-align: middle;
}

.reviewer {
  background-color: rgba(33, 150, 243, 0.1);
  color: rgba(33, 150, 243, 0.8);
  border: 1px solid rgba(33, 150, 243, 0.2);
}

.member {
  background-color: rgba(76, 175, 80, 0.1);
  color: rgba(76, 175, 80, 0.8);
  border: 1px solid rgba(76, 175, 80, 0.2);
}

/* 响应式调整 */
@media (max-width: 768px) {
  .services-list li {
    padding-left: 2em;
    padding-bottom: 0.8em;
    margin-bottom: 0.8em;
  }

  .services-list li:hover {
    padding-left: 2.2em;
  }
}
</style>

<h4 style="text-align: left;">Academic Services</h4>

<div class="services-container">
  <h5 style="text-align: left;">Journal Reviewer</h5>
  <ul class="services-list academic-services">
    <li>Neural Networks</li>
    <li>Physica A: Statistical Mechanics and its Applications</li>
    <li>Applied Intelligence</li>
    <li>Journal of Infrastructure Systems</li>
  </ul>
</div>


<div class="services-container">
  <h5 style="text-align: left;">Membership</h5>
  <ul class="services-list academic-services">
    <li>IEEE Student Member</li>
    <li>ASCE AI In Transportation Committee Member</li>
  </ul>
</div>
