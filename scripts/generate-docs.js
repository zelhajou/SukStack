/**
 * SukStack Documentation Generator
 * 
 * This script generates markdown pages based on JSON data structure.
 * It works with consolidated tools JSON files and checks if logo files exist.
 * 
 * Usage: node scripts/generate-docs.js [options] [categories...]
 * Options:
 *   --force     Force overwrite of existing files
 *   --verbose   Show detailed output during generation
 *   --all       Process all available categories (default if no categories specified)
 * 
 * Example: 
 *   node scripts/generate-docs.js --force                  # Processes all categories
 *   node scripts/generate-docs.js --force devops-infrastructure cloud  # Process specific categories
 */

const path = require('path');
const fs = require('fs');

// Parse command-line arguments
const args = process.argv.slice(2);
const options = {
  force: args.includes('--force'),
  verbose: args.includes('--verbose'),
  all: args.includes('--all')
};

// Extract category arguments (non-option arguments)
const categoryArgs = args.filter(arg => !arg.startsWith('--'));

// Configuration
const DEFAULT_PLACEHOLDER = '/logos/default-placeholder.svg';
const DOCS_DIR = 'docs';
const PUBLIC_DIR = path.join(DOCS_DIR, 'public');

// Logging function that respects verbose setting
function log(message, always = false) {
  if (always || options.verbose) {
    console.log(message);
  }
}

/**
 * Ensure a directory exists, creating it if necessary
 */
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    log(`📁 Creating directory: ${dirPath}`);
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

/**
 * Write file if it doesn't exist or if force option is enabled
 */
function writeFileIfNeeded(filePath, content) {
  if (!fs.existsSync(filePath) || options.force) {
    fs.writeFileSync(filePath, content, 'utf8');
    log(`📝 Generated: ${filePath}`, true);
  } else {
    log(`⏭️ Skipped (already exists): ${filePath}`);
  }
}

/**
 * Check if a logo file exists, return placeholder path if not
 */
function getLogoPath(logoPath) {
  // If no logo path provided, return default placeholder
  if (!logoPath) {
    return DEFAULT_PLACEHOLDER;
  }
  
  // Check if the logo file exists in the public directory
  const fullPath = path.join(PUBLIC_DIR, logoPath.replace(/^\//, ''));
  
  if (fs.existsSync(fullPath)) {
    return logoPath;
  } else {
    log(`⚠️ Logo not found: ${logoPath}, using placeholder`);
    return DEFAULT_PLACEHOLDER;
  }
}

/**
 * Load a JSON file
 */
function loadJson(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error loading ${filePath}: ${error.message}`);
    return null;
  }
}

/**
 * Find all available categories
 */
function findAllCategories() {
  const categoriesDir = path.join('data', 'categories');
  if (!fs.existsSync(categoriesDir)) {
    console.error(`Categories directory not found: ${categoriesDir}`);
    return [];
  }

  const files = fs.readdirSync(categoriesDir);
  return files
    .filter(file => file.endsWith('.json'))
    .map(file => file.replace('.json', ''));
}

/**
 * Load tools for a subcategory
 */
function loadTools(categoryId, subcategoryId) {
  // Try loading from consolidated file
  const consolidatedFile = path.join('data', 'tools', categoryId, `${subcategoryId}.json`);
  if (fs.existsSync(consolidatedFile)) {
    const data = loadJson(consolidatedFile);
    if (data && data.tools) {
      return data.tools;
    }
  }
  
  return [];
}

/**
 * Generate the category overview page
 */
function generateCategoryPage(category) {
  let content = `# ${category.title}\n\n`;
  
  if (category.description) {
    content += `${category.description}\n\n`;
  }
  
  // Add subcategory links
  content += '## Key Categories\n\n';
  
  if (category.subcategories && category.subcategories.length > 0) {
    category.subcategories.forEach(subcategoryId => {
      // Try to load the subcategory to get its proper title
      const subcategoryFile = path.join('data', 'subcategories', category.id, `${subcategoryId}.json`);
      let title = subcategoryId;
      
      try {
        if (fs.existsSync(subcategoryFile)) {
          const subcategory = loadJson(subcategoryFile);
          if (subcategory && subcategory.title) {
            title = subcategory.title;
          }
        }
      } catch (error) {
        // Ignore errors and use subcategoryId as fallback
      }
      
      content += `### [${title}](/${category.id}/${subcategoryId}/)\n\n`;
    });
  }
  
  // Add key benefits
  if (category.keyBenefits && category.keyBenefits.length > 0) {
    content += '## Key Benefits\n\n';
    category.keyBenefits.forEach(benefit => {
      content += `- ${benefit}\n`;
    });
    content += '\n';
  }
  
  // Add additional sections
  if (category.additionalSections) {
    for (const [title, text] of Object.entries(category.additionalSections)) {
      content += `## ${title}\n\n${text}\n\n`;
    }
  }
  
  return content;
}

/**
 * Generate the subcategory overview page
 */
function generateSubcategoryPage(categoryId, subcategoryId, subcategory, tools) {
  let content = `# ${subcategory.title || 'Technology Overview'}\n\n`;
  
  if (subcategory.description) {
    content += `${subcategory.description}\n\n`;
  }
  
  // If there are sections, create tables for each section
  if (subcategory.sections && subcategory.sections.length > 0) {
    subcategory.sections.forEach(section => {
      // Filter tools for this section
      const sectionTools = tools.filter(tool => tool.type === section.id);
      
      if (sectionTools.length === 0) {
        return; // Skip empty sections
      }
      
      // Add section header with link
      content += `## ${section.title}\n\n`;
      
      if (section.description) {
        content += `${section.description}\n\n`;
      }
      
      // Create table header
      content += '| Tool | Logo | Description |\n';
      content += '|------|------|-------------|\n';
      
      // Sort tools alphabetically
      const sortedTools = [...sectionTools].sort((a, b) => a.name.localeCompare(b.name));
      
      // Add each tool to the table
      sortedTools.forEach(tool => {
        // Get logo path, checking if file exists
        const logoPath = tool.logo && tool.logo.path 
          ? getLogoPath(tool.logo.path)
          : DEFAULT_PLACEHOLDER;
        
        // Add the tool row
        content += `| [${tool.name}](${tool.website}) | ![${tool.name} Logo](${logoPath}) | ${tool.description} |\n`;
      });
      
      content += '\n';
    });
  } else {
    // If no sections, create a single table with all tools
    content += '| Tool | Logo | Description |\n';
    content += '|------|------|-------------|\n';
    
    // Sort tools alphabetically
    const sortedTools = [...tools].sort((a, b) => a.name.localeCompare(b.name));
    
    // Add each tool to the table
    sortedTools.forEach(tool => {
      // Get logo path, checking if file exists
      const logoPath = tool.logo && tool.logo.path 
        ? getLogoPath(tool.logo.path)
        : DEFAULT_PLACEHOLDER;
      
      // Add the tool row
      content += `| [${tool.name}](${tool.website}) | ![${tool.name} Logo](${logoPath}) | ${tool.description} |\n`;
    });
  }
  
  // Add best practices section if available
  if (subcategory.bestPractices && subcategory.bestPractices.length > 0) {
    content += '\n## Best Practices\n\n';
    subcategory.bestPractices.forEach(practice => {
      content += `- ${practice}\n`;
    });
    content += '\n';
  }
  
  // Add integration section if available
  if (subcategory.integrations && subcategory.integrations.length > 0) {
    content += '## Integration with DevOps Workflows\n\n';
    content += 'Modern tools integrate seamlessly with other DevOps components to create efficient software delivery pipelines:\n\n';
    subcategory.integrations.forEach(integration => {
      content += `- ${integration}\n`;
    });
    content += '\n';
  }
  
  // Add resources section if available
  if (subcategory.resources && subcategory.resources.length > 0) {
    content += '## Resources\n\n';
    
    // Group resources by type
    const resourceTypes = {};
    subcategory.resources.forEach(resource => {
      if (!resourceTypes[resource.type]) {
        resourceTypes[resource.type] = [];
      }
      resourceTypes[resource.type].push(resource);
    });
    
    // Display resources by type
    for (const [type, resources] of Object.entries(resourceTypes)) {
      content += `### ${capitalize(type)}s\n\n`;
      resources.forEach(resource => {
        content += `- [${resource.title}](${resource.url})\n`;
      });
      content += '\n';
    }
  }
  
  return content;
}

/**
 * Generate section placeholder page
 */
function generateSectionPage(section, subcategoryTitle, tools) {
  // Filter tools for this section
  const sectionTools = tools.filter(tool => tool.type === section.id);
  
  if (sectionTools.length === 0) {
    return `# ${section.title}\n\nNo tools available in this category.`;
  }
  
  let content = `# ${section.title}\n\n`;
  
  if (section.description) {
    content += `${section.description}\n\n`;
  }
  
  // Create table header
  content += '| Tool | Logo | Description |\n';
  content += '|------|------|-------------|\n';
  
  // Sort tools alphabetically
  const sortedTools = [...sectionTools].sort((a, b) => a.name.localeCompare(b.name));
  
  // Add each tool to the table
  sortedTools.forEach(tool => {
    // Get logo path, checking if file exists
    const logoPath = tool.logo && tool.logo.path 
      ? getLogoPath(tool.logo.path)
      : DEFAULT_PLACEHOLDER;
    
    // Add the tool row
    content += `| [${tool.name}](${tool.website}) | ![${tool.name} Logo](${logoPath}) | ${tool.description} |\n`;
  });
  
  // Back link
  content += `\n[← Back to ${subcategoryTitle}](../)\n`;
  
  return content;
}

/**
 * Capitalize the first letter of a string
 */
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Make sure the default placeholder exists
 */
function ensureDefaultPlaceholder() {
  const placeholderDir = path.join(PUBLIC_DIR, 'logos');
  const placeholderPath = path.join(placeholderDir, 'default-placeholder.svg');
  
  ensureDir(placeholderDir);
  
  if (!fs.existsSync(placeholderPath)) {
    log(`Creating default placeholder at ${placeholderPath}`, true);
    
    const svgContent = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="#f0f0f0" />
  <text x="50" y="50" font-family="Arial" font-size="12" fill="#333" text-anchor="middle" dominant-baseline="middle">?</text>
</svg>`;
    
    fs.writeFileSync(placeholderPath, svgContent, 'utf8');
  }
}

/**
 * Process a subcategory
 */
function processSubcategory(categoryId, subcategoryId) {
  try {
    log(`🔄 Processing ${categoryId}/${subcategoryId}`, true);
    
    // Load subcategory data
    const subcategoryFile = path.join('data', 'subcategories', categoryId, `${subcategoryId}.json`);
    const subcategory = loadJson(subcategoryFile);
    
    if (!subcategory) {
      console.error(`Could not load subcategory data from ${subcategoryFile}`);
      return false;
    }
    
    // Load tools
    const tools = loadTools(categoryId, subcategoryId);
    
    if (tools.length === 0) {
      console.error(`No tools found for ${categoryId}/${subcategoryId}`);
      return false;
    }
    
    // Create output directory structure
    const outputDir = path.join(DOCS_DIR, categoryId);
    const sectionDir = path.join(outputDir, subcategoryId);
    
    // Ensure directories exist
    ensureDir(DOCS_DIR);
    ensureDir(outputDir);
    ensureDir(sectionDir);
    
    // Generate the subcategory page
    const subcategoryContent = generateSubcategoryPage(categoryId, subcategoryId, subcategory, tools);
    const subcategoryFile_Path = path.join(sectionDir, 'index.md');
    writeFileIfNeeded(subcategoryFile_Path, subcategoryContent);
    
    // Generate section pages
    if (subcategory.sections && subcategory.sections.length > 0) {
      subcategory.sections.forEach(section => {
        const sectionFolder = path.join(sectionDir, section.id);
        ensureDir(sectionFolder);
        
        const sectionContent = generateSectionPage(section, subcategory.title, tools);
        const sectionFile = path.join(sectionFolder, 'index.md');
        writeFileIfNeeded(sectionFile, sectionContent);
      });
    }
    
    return true;
  } catch (error) {
    console.error(`Error processing ${categoryId}/${subcategoryId}: ${error.message}`);
    return false;
  }
}

/**
 * Process a category
 */
function processCategory(categoryId) {
  try {
    log(`\n📂 Processing category: ${categoryId}`, true);
    
    // Load category data
    const categoryFile = path.join('data', 'categories', `${categoryId}.json`);
    const category = loadJson(categoryFile);
    
    if (!category) {
      console.error(`Could not load category data from ${categoryFile}`);
      return false;
    }
    
    // Create the category directory if it doesn't exist
    const categoryDir = path.join(DOCS_DIR, categoryId);
    ensureDir(categoryDir);
    
    // Generate the category overview page
    const categoryContent = generateCategoryPage(category);
    const categoryFilePath = path.join(categoryDir, 'index.md');
    writeFileIfNeeded(categoryFilePath, categoryContent);
    
    // Get all subcategories
    const subcategories = category.subcategories || [];
    
    if (subcategories.length === 0) {
      console.error(`No subcategories found for ${categoryId}`);
      return false;
    }
    
    // Process each subcategory
    let success = true;
    for (const subcategoryId of subcategories) {
      const result = processSubcategory(categoryId, subcategoryId);
      success = success && result;
    }
    
    return success;
  } catch (error) {
    console.error(`Error processing category ${categoryId}: ${error.message}`);
    return false;
  }
}

/**
 * Main function
 */
function main() {
  try {
    log('🚀 Starting documentation generation', true);
    
    // Ensure public directory and default placeholder exist
    ensureDir(PUBLIC_DIR);
    ensureDefaultPlaceholder();
    
    let categories = categoryArgs;
    
    // If no categories specified or --all flag used, find all categories
    if (categories.length === 0 || options.all) {
      categories = findAllCategories();
      log(`Found ${categories.length} categories: ${categories.join(', ')}`, true);
    }
    
    if (categories.length === 0) {
      console.error('No categories found to process.');
      process.exit(1);
    }
    
    // Process each specified category
    let success = true;
    for (const categoryId of categories) {
      const result = processCategory(categoryId);
      success = success && result;
    }
    
    if (success) {
      log('\n✅ Documentation generation completed successfully!', true);
    } else {
      log('\n⚠️ Documentation generation completed with errors', true);
    }
  } catch (error) {
    console.error(`❌ Error during documentation generation: ${error.message}`);
    console.error(error.stack);
    process.exit(1);
  }
}

// Execute the main function
main();