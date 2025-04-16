# Git Repository Hosting Platforms

Services that host Git repositories with additional collaboration features

## GitHub

<div class="tool-section" id="github">
  <div class="tool-header">
    <div class="logo-name">
      <img src="/logos/devops/source-control/github.png" alt="GitHub Logo" class="tool-logo">
    </div>
    <a href="https://github.com" target="_blank" class="tool-website"><span class="website-text">Website <span class="icon">↗</span></span></a>
  </div>

  <div class="tool-description">
    <p>Web-based hosting service for Git repositories offering collaboration features like pull requests, actions for CI/CD, project boards, and security scanning</p>
  </div>

  <div class="info-block">
    <h3>Key Features</h3>
    <ul>
      <li>Repository hosting with unlimited public repositories</li>
      <li>Pull requests for code review</li>
      <li>GitHub Actions for CI/CD</li>
      <li>Issue tracking and project boards</li>
      <li>GitHub Pages for static site hosting</li>
      <li>GitHub Packages for package management</li>
      <li>Security features including vulnerability scanning</li>
    </ul>
  </div>

  <div class="pros-cons-block">
    <div class="pros-column">
      <h3>Pros</h3>
      <ul>
        <li>Largest community of developers</li>
        <li>Excellent documentation and guides</li>
        <li>Robust API and extensive integrations</li>
        <li>Built-in CI/CD with GitHub Actions</li>
        <li>Free for public repositories and small teams</li>
      </ul>
    </div>
    <div class="cons-column">
      <h3>Cons</h3>
      <ul>
        <li>Paid plans can be expensive for larger teams</li>
        <li>Some enterprise features only available at higher tiers</li>
        <li>Limited built-in project management compared to dedicated tools</li>
      </ul>
    </div>
  </div>

  <div class="info-block">
    <h3>Common Use Cases</h3>
    <ul>
      <li>Open source project hosting</li>
      <li>Team collaboration for software development</li>
      <li>Code review and quality management</li>
      <li>Continuous integration and deployment</li>
      <li>Issue tracking and project management</li>
    </ul>
  </div>

  <div class="tool-footer">
    <div class="footer-item">
      <span class="label">Alternatives:</span> <a href="#gitlab">GitLab</a>, bitbucket, azure-devops
    </div>
    <div class="footer-item">
      <span class="label">Related Tools:</span> git, github-actions, github-pages
    </div>
  </div>
</div>

## GitLab

<div class="tool-section" id="gitlab">
  <div class="tool-header">
    <div class="logo-name">
      <img src="/logos/devops/source-control/gitlab.png" alt="GitLab Logo" class="tool-logo">
    </div>
    <a href="https://gitlab.com" target="_blank" class="tool-website"><span class="website-text">Website <span class="icon">↗</span></span></a>
  </div>

  <div class="tool-description">
    <p>Web-based DevOps platform that provides Git repository management with CI/CD pipelines, issue tracking, and extensive DevOps features in a complete application</p>
  </div>

  <div class="info-block">
    <h3>Key Features</h3>
    <ul>
      <li>Integrated Git repository hosting</li>
      <li>Built-in CI/CD with GitLab Pipelines</li>
      <li>Issue tracking and project management</li>
      <li>Container registry and package repository</li>
      <li>Security scanning and vulnerability management</li>
      <li>Wiki documentation</li>
      <li>Self-hosted and cloud options</li>
    </ul>
  </div>

  <div class="pros-cons-block">
    <div class="pros-column">
      <h3>Pros</h3>
      <ul>
        <li>Complete end-to-end DevOps platform</li>
        <li>Single application for the entire software lifecycle</li>
        <li>Strong CI/CD capabilities built directly into the platform</li>
        <li>Better self-hosted support than many alternatives</li>
        <li>More features in free tier compared to competitors</li>
      </ul>
    </div>
    <div class="cons-column">
      <h3>Cons</h3>
      <ul>
        <li>UI can be complex with steep learning curve</li>
        <li>Performance can be slower than some competitors</li>
        <li>Smaller community than GitHub</li>
        <li>Advanced features require higher-tier plans</li>
      </ul>
    </div>
  </div>

  <div class="info-block">
    <h3>Common Use Cases</h3>
    <ul>
      <li>Enterprise DevOps workflows</li>
      <li>Self-hosted Git repository management</li>
      <li>End-to-end software development lifecycle</li>
      <li>Continuous integration and deployment</li>
      <li>Secure DevOps with built-in security scanning</li>
    </ul>
  </div>

  <div class="tool-footer">
    <div class="footer-item">
      <span class="label">Alternatives:</span> <a href="#github">GitHub</a>, bitbucket, azure-devops
    </div>
    <div class="footer-item">
      <span class="label">Related Tools:</span> git, gitlab-ci, gitlab-runner
    </div>
  </div>
</div>


[← Back to Source Control Management Systems](../)


<style>
/* Tool section styling */
.tool-section {
  margin: 1rem 0 3rem 0;
  background-color: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

/* Tool header */
.tool-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 1.5rem;
  background-color: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
}

.logo-name {
  display: flex;
  align-items: center;
}

.tool-logo {
  width: 48px;
  height: 48px;
  border-radius: 6px;
  object-fit: contain;
}

.tool-website {
  display: inline-block;
  background-color: var(--vp-c-brand);
  border-radius: 4px;
  text-decoration: none !important;
  transition: background-color 0.2s;
}

.website-text {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  color: white !important;
  font-size: 0.9rem;
  font-weight: 500;
}

.tool-website:hover {
  background-color: var(--vp-c-brand-dark);
}

.tool-website .icon {
  margin-left: 5px;
  font-size: 0.8rem;
}

/* Tool description */
.tool-description {
  padding: 1.5rem;
  border-bottom: 1px solid var(--vp-c-divider-light);
  font-size: 1.05rem;
  line-height: 1.6;
}

/* Information blocks */
.info-block {
  padding: 1.5rem;
  border-bottom: 1px solid var(--vp-c-divider-light);
}

.info-block h3 {
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  color: var(--vp-c-text-1);
  padding-bottom: 0.5rem;
  border-bottom: 1px dashed var(--vp-c-divider);
}

.info-block ul {
  margin: 0;
  padding-left: 1.8rem;
}

.info-block li {
  margin-bottom: 0.6rem;
  line-height: 1.5;
}

/* Pros and cons block */
.pros-cons-block {
  display: flex;
  border-bottom: 1px solid var(--vp-c-divider-light);
}

.pros-column, .cons-column {
  flex: 1;
  padding: 1.5rem;
}

.pros-column {
  background-color: rgba(76, 175, 80, 0.05);
  border-right: 1px solid var(--vp-c-divider-light);
}

.cons-column {
  background-color: rgba(244, 67, 54, 0.05);
}

.pros-column h3, .cons-column h3 {
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px dashed var(--vp-c-divider);
}

.pros-column h3 {
  color: #4caf50;
}

.cons-column h3 {
  color: #f44336;
}

.pros-column ul, .cons-column ul {
  margin: 0;
  padding-left: 1.8rem;
}

.pros-column li, .cons-column li {
  margin-bottom: 0.6rem;
  line-height: 1.5;
}

.pros-column li::marker {
  color: #4caf50;
}

.cons-column li::marker {
  color: #f44336;
}

/* Tool footer */
.tool-footer {
  padding: 1.2rem 1.5rem;
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  background-color: var(--vp-c-bg-soft);
}

.footer-item {
  margin-bottom: 0.5rem;
}

.footer-item:last-child {
  margin-bottom: 0;
}

.label {
  font-weight: 600;
}

.tool-footer a {
  color: var(--vp-c-brand);
  text-decoration: none;
}

.tool-footer a:hover {
  text-decoration: underline;
}

/* Responsive */
@media (max-width: 640px) {
  .pros-cons-block {
    flex-direction: column;
  }
  
  .pros-column {
    border-right: none;
    border-bottom: 1px solid var(--vp-c-divider-light);
  }
}
</style>
