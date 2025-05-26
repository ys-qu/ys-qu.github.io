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
  <a href="#year-2023">2023</a>
  <a href="#year-2021">2021</a>
  <a href="#year-2020">2020</a>
  <a href="#year-2019">2019</a>
  <a href="#year-2018">2018</a>
  <a href="#year-2017">2017</a>
  <a href="#year-2016">2016</a>
  <a href="#year-2015">2015</a>
</div>

<h4 style="text-align: left;">Honors & Awards</h4>

<div class="honors-container">
  <h5 id="year-2023" style="text-align: left;">2023</h5>
  <ul class="awards-list">
    <li><strong>Best Presentation Award, 3rd Annual Conference of Next-Generation Transportation Systems (NGTS-3), West Lafayette, USA </strong> <a href="{{ '/assets/honors/2023-Best-Presentation-Award.pdf' | relative_url }}" target="_blank">[Certificate]</a> 
      <div class="award-images">
        <div class="row">
          <div class="col-md-6">
            <img class="img-fluid rounded z-depth-1" src="{{ '/assets/honors/2023-Best-Presentation-Award-Photo.jpg' | relative_url }}" style="width: 100%; height: 350px; object-fit: contain;" loading="lazy">
            <!-- <p>NGTS-3 Best Presentation Award Certificate</p> -->
          </div>
        </div>
      </div>
    </li>
    <li>Student Research Grants Competition (SRGC) Award, University of Wisconsin-Madison (USD $1,500)</li>
  </ul>
</div>

<div class="honors-container">
  <h5 id="year-2021" style="text-align: left;">2021</h5>
  <ul class="awards-list">
    <li><strong>"Qinglan Plan" Competition Award, Guangzhou, China (RMB ¥50,000)</strong> <a href="{{ 'https://www.panyu.gov.cn/tgl/qkgsxj/content/post_6903583.html' | relative_url }}" target="_blank">[News Links]</a> <br>
    <span class="award-description">Awarded to students with high potential for commercial translation of their research.</span></li>
    <li><strong>Outstanding Master's Degree Graduates Award, Guangdong Province, China (≈ 1/340) </strong> <a href="{{ '/assets/honors/2021-outstanding-graduate-guangdong-province.jpg' | relative_url }}" target="_blank">[Certificate]</a>  <br>
    <span class="award-description">The highest graduate student honor, awarded to one graduate student with outstanding research potential and promise.</span></li>
  </ul>
</div>

<div class="honors-container">
  <h5 id="year-2020" style="text-align: left;">2020</h5>
  <ul class="awards-list">
    <li><strong>Special Funds Project for Science and Technology Innovation Strateg Award, Guangdong Province, China (RMB ¥60,000) </strong><a href="{{ 'https://www.gdcyl.org/xxb/ShowArticle.asp?ArticleID=241940' | relative_url }}" target="_blank">[News Links]</a> <br>
    <span class="award-description">Awarded to students with very strong research potential (Key project, No. pdjh2020a0030).</span></li>
    <li><strong> "Win in Guangzhou" Competition Award, Guangzhou, China (RMB ¥50,000 + ¥100,000 startup fund)</strong> <a href="{{ 'https://www.gz.gov.cn/zwgk/zdly/jycy/gzdt/content/mpost_6999222.html' | relative_url }}" target="_blank">[News Links]</a> <br>
    <span class="award-description">Awarded to the young entrepreneur with promise of business success.</span></li>
    <li>National Scholarship for Graduate Student, China (RMB ¥20,000) <a href="{{ '/assets/honors/2020-national-scholarship.jpg' | relative_url }}" target="_blank">[Certificate]</a></li>
    <li>"Young Entrepreneur in Guangdong" Competition Award, Huizhou, China (RMB ¥30,000) <a href="{{ 'https://baijiahao.baidu.com/s?id=1672187346796437301&wfr=spider&for=pc' | relative_url }}" target="_blank">[News Links]</a> <br>
    <span class="award-description">Awarded to the young entrepreneur with promise of business success.</span></li>
  </ul>
</div>

<div class="honors-container">
  <h5 id="year-2019" style="text-align: left;">2019</h5>
  <ul class="awards-list">
    <li>National Scholarship for Graduate Student, China (RMB ¥20,000) <a href="{{ '/assets/honors/2019-national-scholarship.jpg' | relative_url }}" target="_blank">[Certificate]</a></li>
    <li><strong>Graduate Student Academic Competition Award, SCUT (RMB ¥20,000)</strong><br>
    <span class="award-description">Awarded to students with very strong research potential (Key project, No. j2tw201904005).</span></li>
    <li>Science and Innovation Scholarships for Outstanding Graduate Students (RMB ¥2500 * 3) 
    <span class="award-description">Awarded for three consecutive years in 2019-2021 (three times).</span></li>
    <li>Top 100 PhD and Postdoctoral Innovation Achievements Award, Guangdong Province, China <a href="{{ '/assets/honors/2019-100-PhD-and-Postdoctoral-Innovation.pdf' | relative_url }}" target="_blank">[Certificate]</a> </li>
  </ul>
</div>

<div class="honors-container">
  <h5 id="year-2018" style="text-align: left;">2018</h5>
  <ul class="awards-list">
    <li>Graduate Student Academic Competition Award, SCUT (RMB ¥5,000)<br>
    <span class="award-description">Awarded to students with strong research potential (No. j2tw202004010).</span></li>
    <li>2nd Prize Scholarship for Excellent Graduate Student (RMB ¥10,000 * 3)<br>
    <span class="award-description">Awarded for three consecutive years in 2018-2021 (three times).</span></li>
    <li>Outstanding Bachelor's Degree Graduates Award (≈ 10/780)</li>
    <li><strong>Top 10 Outstanding Undergraduate Students Award (≈ 10/40,000) </strong> <br>
    <span class="award-description">The highest undergraduate honor, awarded to the top 10 students with outstanding research potential and prospects.</span></li>
  </ul>
</div>

<div class="honors-container">
  <h5 id="year-2017" style="text-align: left;">2017</h5>
  <ul class="awards-list">
    <li><strong>Special Funds Project for Science and Technology Innovation Strateg Award, Guangdong Province, China (RMB ¥20,000 + ¥10,000) </strong> <br>
    <span class="award-description">Awarded to students with strong research potential (No. phjh2017b0161 & No. phjh2017b0169).</span></li>
    <li>Top 10 Student Leader in Student Government Award (≈ 10/40,000)</li>
    <li>Outstanding Leader in Student Government Award, Guangdong Province, China (≈ 5/40,000)</li>
    <li>Science and Innovation Scholarships for Outstanding Undergraduate Students (Top 1%)</li>
    <li>Outstanding Volunteers Scholarship for Social Work (Top 1%)</li>
    <li>Outstanding Student Leadership Scholarship (Top 1%)</li>
  </ul>
</div>

<div class="honors-container">
  <h5 id="year-2016" style="text-align: left;">2016</h5>
  <ul class="awards-list">
    <li>College Student 'Summer Rural Social Practice' Advanced Individual Award, Guangdong Province, China (≈ 6/40,000)</li>
    <li>Top 10 Student Volunteers for Social Work Award (≈ 10/40,000)</li>
  </ul>
</div>

<div class="honors-container">
  <h5 id="year-2015" style="text-align: left;">2015</h5>
  <ul class="awards-list">
    <li>1st Prize Scholarship for Excellent Undergraduate Student (Top 2%, RMB ¥2500)<br>
    <span class="award-description">Awarded for three consecutive years in 2015-2017 (three times).</span></li>
  </ul>
</div>

<h4 style="text-align: left;">Academic Competitions Awards</h4>

<div class="honors-container">
  <h5 style="text-align: left;">2018</h5>
  <ul class="awards-list">
    <li><strong>The 15th China Graduate Student Mathematical Modeling Competition, China</strong> <a href="{{ '/assets/honors/2018-mathematical-modeling-competition.pdf' | relative_url }}" target="_blank">[Certificate]</a><br>
    National 1st Prize (Top 1.5%).<br>
    <span class="award-description">The competition selected 184 1st prizes from 12,207 projects in China.</span></li>
    <li><strong>The 2018 China College Student' Entrepreneurship Competition, China</strong> <a href="{{ '/assets/honors/2018-student-entrepreneurship-competition.jpg' | relative_url }}" target="_blank">[Certificate]</a><br>
    National 1st Prize (Top 0.08%).<br>
    <span class="award-description">The competition selected 124 1st prizes from more than 150,000 projects in China.</span></li>
  </ul>
</div>

<div class="honors-container">
  <h5 style="text-align: left;">2017</h5>
  <ul class="awards-list">
    <li><strong>The 15th "Challenge Cup" China College Student Academic Science and Technology Works Competition, China</strong> <a href="{{ '/assets/honors/2017-challenge-cup-competition.jpg' | relative_url }}" target="_blank">[Certificate]</a><br>
    National 2nd Prize (Top 0.06%).<br>
    <span class="award-description">The competition selected 315 2nd prizes from more than 600,000 projects in China.</span></li>
  </ul>
</div>

<div class="honors-container">
  <h5 style="text-align: left;">2016</h5>
  <ul class="awards-list">
    <li><strong>The 2nd China International College Students' "Internet+" Innovation and Entrepreneurship Competition, China</strong> <a href="{{ '/assets/honors/2016-internet-entrepreneurship-competition.pdf' | relative_url }}" target="_blank">[Certificate]</a><br>
    National 2nd Prize (Top 0.03%).<br>
    <span class="award-description">The competition selected 115 2nd prizes from more than 110,000 projects in China.</span></li>
    <li><strong>The 2016 China College Student' Entrepreneurship Competition, China</strong> <a href="{{ '/assets/honors/2016-student-entrepreneurship-competition.pdf' | relative_url }}" target="_blank">[Certificate]</a><br>
    National 2nd Prize (Top 0.03%).<br>
    <span class="award-description">The competition selected 262 2nd prizes from more than 120,000 projects in China.</span></li>
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