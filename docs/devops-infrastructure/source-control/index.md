# Source Control Management Systems

Essential tools for tracking and managing changes to code repositories. Source control systems enable developers to collaborate efficiently, maintain code history, and manage releases.

## Git Repository Hosting Platforms

Services that host Git repositories with additional collaboration features

| Tool | Logo | Description |
|------|------|-------------|
| [Azure DevOps](https://dev.azure.com) | ![Azure DevOps Logo](/logos/devops/source-control/azure-devops.png) | Microsoft's suite of development tools including Git repositories, CI/CD pipelines, agile boards, and artifact management |
| [Bitbucket](https://bitbucket.org) | ![Bitbucket Logo](/logos/devops/source-control/bitbucket.png) | Git repository management solution that's built for professional teams with features for code review, pull requests, and CI/CD integration |
| [Gitea](https://gitea.io) | ![Gitea Logo](/logos/devops/source-control/gitea.png) | Lightweight, self-hosted Git service written in Go, designed to be the easiest, fastest way to set up a self-hosted Git service |
| [GitHub](https://github.com) | ![GitHub Logo](/logos/devops/source-control/github.png) | Web-based hosting service for Git repositories offering collaboration features like pull requests, actions for CI/CD, project boards, and security scanning |
| [GitLab](https://gitlab.com) | ![GitLab Logo](/logos/devops/source-control/gitlab.png) | Web-based DevOps platform that provides Git repository management with CI/CD pipelines, issue tracking, and extensive DevOps features in a complete application |

## Distributed Version Control Systems

Systems that give each developer a complete copy of the repository

| Tool | Logo | Description |
|------|------|-------------|
| [Git](https://git-scm.com) | ![Git Logo](/logos/devops/source-control/git.png) | Free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency |
| [Mercurial](https://www.mercurial-scm.org) | ![Mercurial Logo](/logos/devops/source-control/mercurial.png) | Free, distributed source control management tool that efficiently handles projects of any size with a simple and intuitive interface |

## Centralized Version Control Systems

Traditional systems with a single central repository

| Tool | Logo | Description |
|------|------|-------------|
| [Apache Subversion](https://subversion.apache.org) | ![Apache Subversion Logo](/logos/devops/source-control/subversion.png) | Open-source version control system known for its reliability, simplicity and enterprise-focused features like path-based authorization |
| [Perforce Helix Core](https://www.perforce.com/products/helix-core) | ![Perforce Helix Core Logo](/logos/devops/source-control/perforce.png) | Enterprise-class version control system designed for large files, large repos, and large numbers of users with advanced security and performance |

## Specialized Version Control Tools

Solutions for specific requirements or industries

| Tool | Logo | Description |
|------|------|-------------|
| [Plastic SCM](https://www.plasticscm.com) | ![Plastic SCM Logo](/logos/devops/source-control/plastic-scm.png) | Version control system focused on graphics, game development, and large binary files with strong branching and merging capabilities |


## Best Practices

- **Commit frequently** with clear, descriptive messages that explain why changes were made
- **Branch strategically** with a consistent workflow like Gitflow or trunk-based development
- **Review code** through pull/merge requests before integrating into shared branches
- **Automate testing** with pre-commit hooks or CI pipelines to maintain code quality
- **Tag releases** to create clear markers for deployed versions
- **Maintain a clean history** through techniques like rebasing or squashing when appropriate
- **Document conventions** for your team regarding branching, commit messages, and workflow

## Integration with DevOps Workflows

Modern tools integrate seamlessly with other DevOps components to create efficient software delivery pipelines:

- **Continuous Integration** automatically builds and tests code on commit
- **Continuous Delivery** deploys validated code to staging environments
- **Infrastructure as Code** tracks infrastructure definitions alongside application code
- **Security Scanning** identifies vulnerabilities during the commit process
- **Code Quality Tools** enforce standards and catch potential issues early

## Resources

### Documentations

- [Git Documentation](https://git-scm.com/doc)

### Articles

- [Comparing Version Control Systems](https://www.atlassian.com/git/tutorials/what-is-version-control)
- [Git Branching Strategies](https://nvie.com/posts/a-successful-git-branching-model/)

### Books

- [Pro Git Book](https://git-scm.com/book/en/v2)

