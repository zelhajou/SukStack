import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'

/**
 * Loads all category data from the data/categories directory
 * @returns {Object} Object with category ID as key and category data as value
 */
function loadCategories() {
  const categoriesDir = path.resolve('data/categories')
  const categories = {}
  
  if (!fs.existsSync(categoriesDir)) {
    console.warn('Categories directory not found:', categoriesDir)
    return categories
  }
  
  const files = fs.readdirSync(categoriesDir)
  
  for (const file of files) {
    if (file.endsWith('.json')) {
      try {
        const categoryData = JSON.parse(fs.readFileSync(path.join(categoriesDir, file), 'utf8'))
        categories[categoryData.id] = categoryData
      } catch (error) {
        console.error(`Error loading category from ${file}:`, error.message)
      }
    }
  }
  
  return categories
}

/**
 * Loads all subcategory data for a specific category
 * @param {string} categoryId The ID of the category
 * @returns {Object} Object with subcategory ID as key and subcategory data as value
 */
function loadSubcategories(categoryId) {
  const subcategoriesDir = path.resolve('data/subcategories', categoryId)
  const subcategories = {}
  
  if (!fs.existsSync(subcategoriesDir)) {
    console.warn(`Subcategories directory not found for ${categoryId}:`, subcategoriesDir)
    return subcategories
  }
  
  const files = fs.readdirSync(subcategoriesDir)
  
  for (const file of files) {
    if (file.endsWith('.json')) {
      try {
        const subcategoryData = JSON.parse(fs.readFileSync(path.join(subcategoriesDir, file), 'utf8'))
        subcategories[subcategoryData.id] = subcategoryData
      } catch (error) {
        console.error(`Error loading subcategory from ${file}:`, error.message)
      }
    }
  }
  
  return subcategories
}

/**
 * Generates a sidebar entry for a specific category
 * @param {Object} category The category data
 * @param {Object} subcategoriesMap Map of subcategory ID to subcategory data
 * @returns {Object} Sidebar entry for the category
 */
function generateCategorySidebar(category, subcategoriesMap) {
  const sidebarEntry = {
    text: category.title,
    link: `/${category.id}/`,
    collapsed: true,
    items: []
  }
  
  // Add subcategories if available
  if (category.subcategories && category.subcategories.length > 0) {
    for (const subcategoryId of category.subcategories) {
      const subcategory = subcategoriesMap[subcategoryId]
      
      if (subcategory) {
        const subcategoryEntry = {
          text: subcategory.title,
          link: `/${category.id}/${subcategoryId}/`,
          collapsed: true,
          items: []
        }
        
        // Add sections if available
        if (subcategory.sections && subcategory.sections.length > 0) {
          for (const section of subcategory.sections) {
            subcategoryEntry.items.push({
              text: section.title,
              link: `/${category.id}/${subcategoryId}/${section.id}/`
            })
          }
        }
        
        sidebarEntry.items.push(subcategoryEntry)
      }
    }
  }
  
  return sidebarEntry
}

/**
 * Builds the sidebar configuration from all categories and subcategories
 * @returns {Array} Complete sidebar configuration
 */
function buildSidebar() {
  const sidebar = [
    {
      text: 'Overview',
      items: [
        { text: 'Introduction', link: '/overview' },
        { text: 'All Categories', link: '/categories' }
      ]
    }
  ]
  
  // Load all categories
  const categories = loadCategories()
  
  // Sort categories by title
  const sortedCategoryIds = Object.keys(categories).sort((a, b) => 
    categories[a].title.localeCompare(categories[b].title)
  )
  
  // Process each category
  for (const categoryId of sortedCategoryIds) {
    const category = categories[categoryId]
    const subcategoriesMap = loadSubcategories(categoryId)
    
    sidebar.push(generateCategorySidebar(category, subcategoriesMap))
  }
  
  return sidebar
}

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
      { text: 'Categories', link: '/categories' }
    ],
    
    // Dynamically generated sidebar
    sidebar: buildSidebar(),
    
    // Social links
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zelhajou/sukstack' }
    ],
    
    // Footer
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present SukStack Contributors'
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