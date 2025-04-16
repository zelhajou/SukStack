---
layout: home

hero:
  name: SukStack
  text: The Complete Development Ecosystem Reference
  tagline: A comprehensive index of development tools, frameworks, libraries, and technologies.
  actions:
    - theme: brand
      text: Explore DevOps Tools
      link: /devops-infrastructure/source-control/
    - theme: alt
      text: View on GitHub
      link: https://github.com/yourusername/sukstack

features:
  - icon: 🚀
    title: Comprehensive
    details: Covering all aspects of modern development from DevOps to Mobile, Frontend to Data Science
  - icon: 🔍
    title: Detailed Comparison
    details: Compare similar tools within each category to make informed technology choices
  - icon: 📊
    title: Up-to-date Information
    details: Community-driven content with regular updates to reflect the latest in technology
  - icon: 🌐
    title: Open Source
    details: Free and open-source knowledge base for the development community
---

## What is SukStack?

SukStack is a comprehensive index of tools and technologies across the entire software development ecosystem. It helps developers, architects, and teams discover and compare different tools to make informed technology choices.

## Categories

<div class="category-grid">
  <div class="category-card">
    <h3>🔧 DevOps & Infrastructure</h3>
    <p>Tools for CI/CD, version control, monitoring, and infrastructure automation</p>
    <a href="/devops-infrastructure/source-control/">Explore DevOps →</a>
  </div>
  
  <div class="category-card">
    <h3>☁️ Cloud Computing</h3>
    <p>Cloud platforms, services, and related tools</p>
    <a href="/cloud/">Explore Cloud →</a>
  </div>
  
  <div class="category-card">
    <h3>🌐 Web Development</h3>
    <p>Frontend and backend frameworks, libraries, and tools</p>
    <a href="/web-development/">Explore Web →</a>
  </div>
  
  <div class="category-card">
    <h3>📊 Data Technologies</h3>
    <p>Databases, analytics tools, data processing platforms</p>
    <a href="/data/">Explore Data →</a>
  </div>
  
  <div class="category-card">
    <h3>🔒 Security</h3>
    <p>Security tools, frameworks, and best practices</p>
    <a href="/security/">Explore Security →</a>
  </div>
  
  <div class="category-card">
    <h3>📱 Mobile Development</h3>
    <p>Mobile development frameworks and tools</p>
    <a href="/mobile/">Explore Mobile →</a>
  </div>
</div>

<style>
.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 2rem;
}

.category-card {
  padding: 20px;
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  transition: transform 0.2s, box-shadow 0.2s;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.category-card h3 {
  margin-top: 0;
}

.category-card a {
  display: inline-block;
  margin-top: 1rem;
  font-weight: 500;
}
</style>