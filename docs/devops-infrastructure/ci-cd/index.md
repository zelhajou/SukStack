# Continuous Integration & Continuous Delivery

CI/CD tools automate the building, testing, and deployment of code changes, enabling faster and more reliable software delivery with fewer manual steps.

## CI Platforms & Services

Complete platforms for automating builds, tests, and deployment pipelines

| Tool | Logo | Description |
|------|------|-------------|
| [Azure Pipelines](https://azure.microsoft.com/en-us/services/devops/pipelines/) | ![Azure Pipelines Logo](/logos/devops/ci-cd/azure-pipelines.png) | CI/CD service from Microsoft Azure that works with any language, platform, and cloud with support for containers and Kubernetes deployments |
| [CircleCI](https://circleci.com) | ![CircleCI Logo](/logos/devops/ci-cd/circleci.png) | Cloud-based CI/CD platform that automates the software development process with fast testing and custom workflows for any language or framework |
| [GitHub Actions](https://github.com/features/actions) | ![GitHub Actions Logo](/logos/devops/ci-cd/github-actions.png) | CI/CD solution built directly into GitHub that allows automating workflows in response to repository events like pushes, pull requests, and releases |
| [GitLab CI/CD](https://docs.gitlab.com/ee/ci/) | ![GitLab CI/CD Logo](/logos/devops/ci-cd/gitlab-ci.png) | Built-in CI/CD system in GitLab that supports continuous integration, delivery, and deployment with automatic pipeline configuration via .gitlab-ci.yml files |
| [Jenkins](https://jenkins.io) | ![Jenkins Logo](/logos/devops/ci-cd/jenkins.png) | Open-source automation server that enables developers to build, test, and deploy their software with extensive plugin ecosystem and customization options |
| [TeamCity](https://www.jetbrains.com/teamcity/) | ![TeamCity Logo](/logos/devops/ci-cd/teamcity.png) | Powerful and user-friendly continuous integration server from JetBrains that supports various build tools and version control systems |
| [Travis CI](https://travis-ci.com) | ![Travis CI Logo](/logos/devops/ci-cd/travis-ci.png) | Hosted continuous integration service used to build and test software projects hosted on GitHub and Bitbucket with simple configuration and quick setup |

## Build Automation Tools

Tools for compiling, building, and packaging software

| Tool | Logo | Description |
|------|------|-------------|
| [Apache Maven](https://maven.apache.org/) | ![Apache Maven Logo](/logos/devops/ci-cd/maven.png) | Build automation tool primarily for Java projects that describes project structure, dependencies, and build process in XML |
| [Gradle](https://gradle.org/) | ![Gradle Logo](/logos/devops/ci-cd/gradle.png) | Build automation system that uses Groovy or Kotlin DSL instead of XML, making build scripts shorter and more readable with incremental builds |
| [npm](https://www.npmjs.com/) | ![npm Logo](/logos/devops/ci-cd/npm.png) | Package manager for JavaScript that helps manage dependencies and run scripts for Node.js applications |

## Deployment & Release Tools

Specialized tools for deploying code to production and managing releases

| Tool | Logo | Description |
|------|------|-------------|
| [Argo CD](https://argoproj.github.io/argo-cd/) | ![Argo CD Logo](/logos/devops/ci-cd/argocd.png) | Declarative GitOps continuous delivery tool for Kubernetes that automates the deployment of applications following the GitOps principles |
| [Flagger](https://flagger.app/) | ![Flagger Logo](/logos/devops/ci-cd/flagger.png) | Progressive delivery tool that automates canary releases and A/B testing for Kubernetes applications |
| [Spinnaker](https://spinnaker.io/) | ![Spinnaker Logo](/logos/devops/ci-cd/spinnaker.png) | Open-source, multi-cloud continuous delivery platform built by Netflix and Google for releasing software changes with confidence |

## Testing Frameworks & Tools

Tools for automated testing as part of the CI/CD pipeline

| Tool | Logo | Description |
|------|------|-------------|
| [Jest](https://jestjs.io/) | ![Jest Logo](/logos/devops/ci-cd/jest.png) | JavaScript testing framework from Facebook with a focus on simplicity, works with TypeScript, Node, React, Angular, and more |
| [JUnit](https://junit.org/) | ![JUnit Logo](/logos/devops/ci-cd/junit.png) | Simple framework for writing and running automated tests in Java with annotations to identify test methods |
| [Selenium](https://www.selenium.dev/) | ![Selenium Logo](/logos/devops/ci-cd/selenium.png) | Framework for automating web browsers used for testing web applications across various browsers and platforms |


## Best Practices

- **Build once, deploy many times** to ensure the same artifact is promoted across environments
- **Automate everything** including builds, tests, and deployments to reduce human error
- **Test early and often** with a combination of unit, integration, and end-to-end tests
- **Implement trunk-based development** with short-lived feature branches for faster integration
- **Use feature flags** to deploy inactive code that can be enabled without a new deployment
- **Maintain a deployment pipeline** with staging environments that mirror production
- **Practice blue/green deployments** to reduce downtime and risk during releases

## Integration with DevOps Workflows

Modern tools integrate seamlessly with other DevOps components to create efficient software delivery pipelines:

- **Source Control** triggers builds automatically when code is pushed
- **Infrastructure as Code** provisions consistent environments for testing and deployment
- **Container Registries** store versioned Docker images for deployment
- **Monitoring Tools** provide feedback on application performance after deployment
- **Issue Tracking** links releases to resolved tickets and features

## Resources

### Articles

- [CI/CD Pipeline: A Complete Guide](https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment)

### Books

- [The DevOps Handbook](https://itrevolution.com/book/the-devops-handbook/)
- [Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation](https://continuousdelivery.com/)

### Documentations

- [Google Cloud CI/CD Documentation](https://cloud.google.com/solutions/continuous-integration)

