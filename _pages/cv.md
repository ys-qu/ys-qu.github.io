---
layout: page
permalink: /cv/
title: CV
nav: true
nav_order: 8
description: Latest curriculum vitae.
cv_pdf: CV-Yansong-Qu.pdf
_styles: |
  .cv-embed-wrapper {
    width: 100vw;
    max-width: 1400px;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
    padding: 0 1rem;
  }

  @media (min-width: 1400px) {
    .cv-embed-wrapper {
      margin-left: calc(50% - 700px);
      margin-right: calc(50% - 700px);
    }
  }

  .cv-embed {
    width: 100%;
    height: calc(100vh - 9rem);
    min-height: 900px;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
    background: #f5f5f5;
  }
---

<p style="margin-bottom: 1rem;">
  <a href="{{ '/assets/pdf/CV-Yansong-Qu.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer" class="btn btn-sm z-depth-0" role="button">
    <i class="fa-solid fa-file-pdf"></i> Download PDF
  </a>
</p>

<div class="cv-embed-wrapper">
  <iframe
    class="cv-embed"
    src="{{ '/assets/pdf/CV-Yansong-Qu.pdf' | relative_url }}?v=20260710#view=FitH&toolbar=1"
    title="Yansong Qu CV"
  ></iframe>
</div>
