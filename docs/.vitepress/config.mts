import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SukStack",
  description: "The Complete Development Ecosystem Reference",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    
    // Logo and site title
    logo: '/logo.png',
    siteTitle: 'SukStack',
    
    // Navigation bar with overview pages
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Overview', link: '/overview' },
    ],
    
    // Sidebar with tree-like structure and overview pages
    sidebar: {
      '/': [
        {
          text: 'Overview',
          items: [
            { text: 'Introduction', link: '/overview' },
            { text: 'All Categories', link: '/categories' }
          ]
        },
        {
          text: 'DevOps & Infrastructure',
          link: '/devops-infrastructure/',
          collapsed: false,
          items: [
            { 
              text: 'Source Control',
              link: '/devops-infrastructure/source-control/',
              collapsed: false,
              items: [
                { text: 'Git Platforms', link: '/devops-infrastructure/source-control/git-platform/' },
                { text: 'Distributed VCS', link: '/devops-infrastructure/source-control/distributed-vcs/' },
                { text: 'Centralized VCS', link: '/devops-infrastructure/source-control/centralized-vcs/' },
                { text: 'Specialized Tools', link: '/devops-infrastructure/source-control/specialized-vcs/' }
              ]
            },
            { 
              text: 'CI/CD',
              link: '/devops-infrastructure/ci-cd/',
              collapsed: true,
              items: [
                { text: 'Build Tools', link: '/devops-infrastructure/ci-cd/build-tools/' },
                { text: 'Deployment Platforms', link: '/devops-infrastructure/ci-cd/deployment/' },
                { text: 'Pipeline Tools', link: '/devops-infrastructure/ci-cd/pipelines/' }
              ]
            },
            { 
              text: 'Infrastructure Automation',
              link: '/devops-infrastructure/infrastructure-automation/',
              collapsed: true,
              items: [
                { text: 'IaC Tools', link: '/devops-infrastructure/infrastructure-automation/iac/' },
                { text: 'Configuration Management', link: '/devops-infrastructure/infrastructure-automation/config-management/' }
              ]
            },
            { 
              text: 'Monitoring & Observability',
              link: '/devops-infrastructure/monitoring/',
              collapsed: true,
              items: [
                { text: 'Monitoring Tools', link: '/devops-infrastructure/monitoring/tools/' },
                { text: 'Log Management', link: '/devops-infrastructure/monitoring/logging/' },
                { text: 'APM', link: '/devops-infrastructure/monitoring/apm/' }
              ]
            },
            { 
              text: 'Container Orchestration',
              link: '/devops-infrastructure/containers/',
              collapsed: true,
              items: [
                { text: 'Kubernetes Ecosystem', link: '/devops-infrastructure/containers/kubernetes/' },
                { text: 'Container Runtimes', link: '/devops-infrastructure/containers/runtimes/' }
              ]
            }
          ]
        },
        {
          text: 'Cloud Computing',
          link: '/cloud/',
          collapsed: true,
          items: [
            { 
              text: 'Public Cloud',
              link: '/cloud/public-cloud/',
              collapsed: true,
              items: [
                { text: 'AWS', link: '/cloud/public-cloud/aws/' },
                { text: 'Azure', link: '/cloud/public-cloud/azure/' },
                { text: 'Google Cloud', link: '/cloud/public-cloud/gcp/' }
              ]
            },
            { 
              text: 'Private Cloud',
              link: '/cloud/private-cloud/',
              collapsed: true,
              items: [
                { text: 'OpenStack', link: '/cloud/private-cloud/openstack/' },
                { text: 'VMware', link: '/cloud/private-cloud/vmware/' }
              ]
            },
            { 
              text: 'Serverless',
              link: '/cloud/serverless/',
              collapsed: true,
              items: [
                { text: 'FaaS', link: '/cloud/serverless/faas/' },
                { text: 'BaaS', link: '/cloud/serverless/baas/' }
              ]
            }
          ]
        },
        {
          text: 'Web Development',
          link: '/web-development/',
          collapsed: true,
          items: [
            { 
              text: 'Frontend',
              link: '/web-development/frontend/',
              collapsed: true,
              items: [
                { text: 'Frameworks', link: '/web-development/frontend/frameworks/' },
                { text: 'UI Libraries', link: '/web-development/frontend/ui-libraries/' },
                { text: 'State Management', link: '/web-development/frontend/state-management/' }
              ]
            },
            { 
              text: 'Backend',
              link: '/web-development/backend/',
              collapsed: true,
              items: [
                { text: 'Frameworks', link: '/web-development/backend/frameworks/' },
                { text: 'API Development', link: '/web-development/backend/api/' },
                { text: 'Authentication', link: '/web-development/backend/auth/' }
              ]
            }
          ]
        },
        {
          text: 'Data Technologies',
          link: '/data/',
          collapsed: true,
          items: [
            { 
              text: 'Databases',
              link: '/data/databases/',
              collapsed: true,
              items: [
                { text: 'Relational', link: '/data/databases/relational/' },
                { text: 'NoSQL', link: '/data/databases/nosql/' },
                { text: 'NewSQL', link: '/data/databases/newsql/' }
              ]
            },
            { 
              text: 'Data Processing',
              link: '/data/processing/',
              collapsed: true,
              items: [
                { text: 'Batch Processing', link: '/data/processing/batch/' },
                { text: 'Stream Processing', link: '/data/processing/streaming/' }
              ]
            },
            { 
              text: 'Machine Learning',
              link: '/data/machine-learning/',
              collapsed: true,
              items: [
                { text: 'Frameworks', link: '/data/machine-learning/frameworks/' },
                { text: 'MLOps', link: '/data/machine-learning/mlops/' }
              ]
            }
          ]
        },
        {
          text: 'Security',
          link: '/security/',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/security/' },
            { 
              text: 'Identity & Access',
              link: '/security/identity/',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/security/identity/' },
                { text: 'Authentication', link: '/security/identity/authentication/' },
                { text: 'Authorization', link: '/security/identity/authorization/' }
              ]
            },
            { 
              text: 'Application Security',
              link: '/security/appsec/',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/security/appsec/' },
                { text: 'SAST', link: '/security/appsec/sast/' },
                { text: 'DAST', link: '/security/appsec/dast/' }
              ]
            }
          ]
        },
        {
          text: 'Mobile Development',
          link: '/mobile/',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/mobile/' },
            { 
              text: 'Cross-platform',
              link: '/mobile/cross-platform/',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/mobile/cross-platform/' },
                { text: 'React Native', link: '/mobile/cross-platform/react-native/' },
                { text: 'Flutter', link: '/mobile/cross-platform/flutter/' }
              ]
            },
            { 
              text: 'iOS',
              link: '/mobile/ios/',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/mobile/ios/' },
                { text: 'Swift', link: '/mobile/ios/swift/' },
                { text: 'SwiftUI', link: '/mobile/ios/swiftui/' }
              ]
            }
          ]
        }
      ]
    },
    
    // Social links
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourusername/sukstack' }
    ],
    
    // Footer
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present SukStack Contributors'
    },
    
    // Search
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Search',
            buttonAriaLabel: 'Search documentation'
          },
          modal: {
            noResultsText: 'No results for',
            resetButtonTitle: 'Reset search',
            footer: {
              selectText: 'to select',
              navigateText: 'to navigate',
              closeText: 'to close'
            }
          }
        }
      }
    },
    
    // Default collapsed state
    outline: {
      level: 'deep',
      label: 'On this page'
    },
    
    // Last update
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    }
  },
  
  // Head tags
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['meta', { name: 'og:title', content: 'SukStack: The Complete Development Ecosystem Reference' }],
    ['meta', { name: 'og:description', content: 'A comprehensive index of development tools and technologies' }]
    ],

  ignoreDeadLinks: true
})