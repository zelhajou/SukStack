/**
 * SukStack Enhanced Documentation Generator
 * 
 * This script generates comprehensive markdown pages based on the split JSON data files.
 * 
 * Usage: node scripts/generate-docs.js --category=<category> --subcategory=<subcategory> [options]
 * Options:
 *   --force     Force overwrite of existing files
 *   --verbose   Show detailed output during generation
 * 
 * Example: node scripts/generate-docs.js --category=devops-infrastructure --subcategory=source-control --force
 */

const path = require('path');
const fs = require('fs');
const { aggregateSubcategoryData } = require('./utils/data-aggregator');

// Parse command-line arguments
const args = process.argv.slice(2);
const options = {
  force: args.includes('--force'),
  verbose: args.includes('--verbose')
};

// Extract category and subcategory from command line
const categoryParam = args.find(arg => arg.startsWith('--category='))?.split('=')[1];
const subcategoryParam = args.find(arg => arg.startsWith('--subcategory='))?.split('=')[1];

if (!categoryParam || !subcategoryParam) {
  console.error('Please specify category and subcategory');
  console.error('Usage: node scripts/generate-docs.js --category=devops-infrastructure --subcategory=source-control [options]');
  process.exit(1);
}

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

// Main function
async function generateDocs() {
  try {
    log(`🔄 Generating docs for ${categoryParam}/${subcategoryParam}`, true);

    // Aggregate data from our new structure
    const data = await aggregateSubcategoryData(categoryParam, subcategoryParam);
    
    // Create output directory structure
    const docsDir = 'docs';
    const outputDir = path.join(docsDir, categoryParam);
    const sectionDir = path.join(outputDir, subcategoryParam);
    
    // Ensure directories exist
    ensureDir(docsDir);
    ensureDir(outputDir);
    ensureDir(sectionDir);
    
    // Generate parent category index.md if categoryInfo is provided
    if (data.categoryInfo) {
      const parentIndexMarkdown = generateParentIndexPage(data.categoryInfo, categoryParam);
      const parentIndexFile = path.join(outputDir, 'index.md');
      
      writeFileIfNeeded(parentIndexFile, parentIndexMarkdown);
    }
    
    // Generate the subcategory index page (overview)
    const indexMarkdown = generateOverviewPage(data);
    const indexFile = path.join(sectionDir, 'index.md');
    writeFileIfNeeded(indexFile, indexMarkdown);
    
    // Generate detailed section pages
    if (data.sections && data.sections.length > 0) {
      data.sections.forEach(section => {
        const sectionFolder = path.join(sectionDir, section.id);
        ensureDir(sectionFolder);
        
        const sectionMarkdown = generateSectionPage(section, data.tools, data);
        const sectionFile = path.join(sectionFolder, 'index.md');
        writeFileIfNeeded(sectionFile, sectionMarkdown);
      });
    }
    
    log('\n✅ Documentation generation completed successfully!', true);
  } catch (error) {
    console.error(`❌ Error generating documentation: ${error.message}`);
    console.error(error.stack);
    process.exit(1);
  }
}

/**
 * Generate the parent category index page
 */
function generateParentIndexPage(categoryInfo, categoryId) {
  let content = `# ${categoryInfo.title || 'Category Overview'}\n\n`;
  
  if (categoryInfo.description) {
    content += `${categoryInfo.description}\n\n`;
  }
  
  // Add subcategories section if available
  if (categoryInfo.subcategories && categoryInfo.subcategories.length > 0) {
    content += '## Key Categories\n\n';
    
    // Some subcategories might not have complete information, so we just show what we have
    categoryInfo.subcategories.forEach(subcategoryId => {
      content += `### [${subcategoryId}](/${categoryId}/${subcategoryId}/)\n\n`;
    });
  }
  
  // Add key benefits section if available
  if (categoryInfo.keyBenefits && categoryInfo.keyBenefits.length > 0) {
    content += '## Key Benefits\n\n';
    categoryInfo.keyBenefits.forEach(benefit => {
      content += `- ${benefit}\n`;
    });
    content += '\n';
  }
  
  // Add any additional sections from the categoryInfo
  if (categoryInfo.additionalSections) {
    for (const [title, sectionContent] of Object.entries(categoryInfo.additionalSections)) {
      content += `## ${title}\n\n${sectionContent}\n\n`;
    }
  }
  
  return content;
}

/**
 * Generate the subcategory overview page with section links and tools tables
 */
function generateOverviewPage(data) {
  let content = `# ${data.title || 'Technology Overview'}\n\n`;
  
  if (data.description) {
    content += `${data.description}\n\n`;
  }
  
  // If there are sections, create tables for each section
  if (data.sections && data.sections.length > 0) {
    data.sections.forEach(section => {
      // Filter tools for this section
      const sectionTools = data.tools.filter(tool => tool.type === section.id);
      
      if (sectionTools.length === 0) {
        return; // Skip empty sections
      }
      
      // Add section header with link to detailed page
      content += `## [${section.title}](${section.id}/)\n\n`;
      
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
        // Get logo path
        const logoPath = tool.logo && tool.logo.path 
          ? tool.logo.path 
          : (tool.logoUrl || '/logos/default-placeholder.svg');
        
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
    const sortedTools = [...data.tools].sort((a, b) => a.name.localeCompare(b.name));
    
    // Add each tool to the table
    sortedTools.forEach(tool => {
      // Get logo path
      const logoPath = tool.logo && tool.logo.path 
        ? tool.logo.path 
        : (tool.logoUrl || '/logos/default-placeholder.svg');
      
      // Add the tool row
      content += `| [${tool.name}](${tool.website}) | ![${tool.name} Logo](${logoPath}) | ${tool.description} |\n`;
    });
  }
  
  // Add best practices section if available
  if (data.bestPractices && data.bestPractices.length > 0) {
    content += '\n## Best Practices\n\n';
    data.bestPractices.forEach(practice => {
      content += `- ${practice}\n`;
    });
    content += '\n';
  }
  
  // Add integration section if available
  if (data.integrations && data.integrations.length > 0) {
    content += '## Integration with DevOps Workflows\n\n';
    content += 'Modern tools integrate seamlessly with other DevOps components to create efficient software delivery pipelines:\n\n';
    data.integrations.forEach(integration => {
      content += `- ${integration}\n`;
    });
    content += '\n';
  }
  
  // Add resources section if available
  if (data.resources && data.resources.length > 0) {
    content += '## Resources\n\n';
    
    // Group resources by type
    const resourceTypes = {};
    data.resources.forEach(resource => {
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
  
  // Add FAQ section if available
  if (data.faqs && data.faqs.length > 0) {
    content += '## Frequently Asked Questions\n\n';
    
    data.faqs.forEach(faq => {
      content += `### ${faq.question}\n\n`;
      content += `${faq.answer}\n\n`;
    });
  }
  
  // Add glossary if available
  if (data.glossary && data.glossary.length > 0) {
    content += '## Glossary\n\n';
    
    data.glossary.forEach(term => {
      content += `**${term.term}**: ${term.definition}\n\n`;
    });
  }
  
  return content;
}

/**
 * Generate a detailed page for a specific section with all tool information
 */
function generateSectionPage(section, tools, parentData) {
  // Filter tools for this section
  const sectionTools = tools.filter(tool => tool.type === section.id);
  
  if (sectionTools.length === 0) {
    return `# ${section.title}\n\nNo tools available in this category.`;
  }
  
  // Sort tools alphabetically
  const sortedTools = [...sectionTools].sort((a, b) => a.name.localeCompare(b.name));
  
  let content = `# ${section.title}\n\n`;
  
  if (section.description) {
    content += `${section.description}\n\n`;
  }
  
  // Generate detailed information for each tool
  sortedTools.forEach(tool => {
    // Get logo path
    const logoPath = tool.logo && tool.logo.path 
      ? tool.logo.path 
      : (tool.logoUrl || '/logos/default-placeholder.svg');
    
    // Tool container - use tool name as the section title
    content += `## ${tool.name}\n\n`;
    content += `<div class="tool-section" id="${tool.id}">\n`;
    
    // Enhanced tool header
    content += `  <div class="tool-header">\n`;
    content += `    <div class="logo-name">\n`;
    content += `      <img src="${logoPath}" alt="${tool.name} Logo" class="tool-logo">\n`;
    content += `    </div>\n`;
    content += `    <a href="${tool.website}" target="_blank" class="tool-website"><span class="website-text">Website <span class="icon">↗</span></span></a>\n`;
    content += `  </div>\n\n`;
    
    // Tool description
    content += `  <div class="tool-description">\n`;
    content += `    <p>${tool.description}</p>\n`;
    content += `  </div>\n\n`;
    
    // Features section
    if (tool.features && tool.features.length > 0) {
      content += `  <div class="info-block">\n`;
      content += `    <h3>Key Features</h3>\n`;
      content += `    <ul>\n`;
      tool.features.forEach(feature => {
        content += `      <li>${feature}</li>\n`;
      });
      content += `    </ul>\n`;
      content += `  </div>\n\n`;
    }
    
    // Pros and cons section with background colors
    if ((tool.pros && tool.pros.length > 0) || (tool.cons && tool.cons.length > 0)) {
      content += `  <div class="pros-cons-block">\n`;
      
      // Pros column
      content += `    <div class="pros-column">\n`;
      content += `      <h3>Pros</h3>\n`;
      content += `      <ul>\n`;
      if (tool.pros && tool.pros.length > 0) {
        tool.pros.forEach(pro => {
          content += `        <li>${pro}</li>\n`;
        });
      } else {
        content += `        <li>No specific pros listed.</li>\n`;
      }
      content += `      </ul>\n`;
      content += `    </div>\n`;
      
      // Cons column
      content += `    <div class="cons-column">\n`;
      content += `      <h3>Cons</h3>\n`;
      content += `      <ul>\n`;
      if (tool.cons && tool.cons.length > 0) {
        tool.cons.forEach(con => {
          content += `        <li>${con}</li>\n`;
        });
      } else {
        content += `        <li>No specific cons listed.</li>\n`;
      }
      content += `      </ul>\n`;
      content += `    </div>\n`;
      
      content += `  </div>\n\n`;
    }
    
    // Use cases section
    if (tool.useCases && tool.useCases.length > 0) {
      content += `  <div class="info-block">\n`;
      content += `    <h3>Common Use Cases</h3>\n`;
      content += `    <ul>\n`;
      tool.useCases.forEach(useCase => {
        content += `      <li>${useCase}</li>\n`;
      });
      content += `    </ul>\n`;
      content += `  </div>\n\n`;
    }
    
    // Additional info footer
    content += `  <div class="tool-footer">\n`;
    
    // Alternatives
    if (tool.alternatives && tool.alternatives.length > 0) {
      // Try to link to alternatives if they exist in our tools list
      const alternativeLinks = tool.alternatives.map(altId => {
        const altTool = tools.find(t => t.id === altId);
        if (altTool) {
          return `<a href="#${altId}">${altTool.name}</a>`;
        }
        return altId;
      });
      
      content += `    <div class="footer-item">\n`;
      content += `      <span class="label">Alternatives:</span> ${alternativeLinks.join(', ')}\n`;
      content += `    </div>\n`;
    }
    
    // Related tools
    if (tool.relatedTools && tool.relatedTools.length > 0) {
      content += `    <div class="footer-item">\n`;
      content += `      <span class="label">Related Tools:</span> ${tool.relatedTools.join(', ')}\n`;
      content += `    </div>\n`;
    }
    
    content += `  </div>\n`;
    content += `</div>\n\n`;
  });
  
  // Back link at the bottom of the page
  content += `\n[← Back to ${parentData.title}](../)\n\n`;
  
  // Add CSS for styling
  content += `
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
`;
  
  return content;
}
/**
 * Capitalize the first letter of a string
 */
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Run the main function
generateDocs();