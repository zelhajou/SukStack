/**
 * Data aggregator utility for combining split data files
 */
const fs = require('fs').promises;
const path = require('path');

/**
 * Load a JSON file
 * @param {string} filePath - Path to the JSON file
 * @returns {Promise<Object>} - Parsed JSON object
 */
async function loadJson(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error loading ${filePath}: ${error.message}`);
    return null;
  }
}

/**
 * Get all tool files in a directory
 * @param {string} directory - Directory path
 * @returns {Promise<Array<string>>} - Array of file paths
 */
async function getToolFiles(directory) {
  try {
    const files = await fs.readdir(directory);
    return files.filter(file => file.endsWith('.json'));
  } catch (error) {
    console.error(`Error reading directory ${directory}: ${error.message}`);
    return [];
  }
}

/**
 * Aggregate data for a specific subcategory
 * @param {string} category - Category ID
 * @param {string} subcategory - Subcategory ID
 * @returns {Promise<Object>} - Aggregated data
 */
async function aggregateSubcategoryData(category, subcategory) {
  // Base paths
  const basePath = path.resolve(__dirname, '../../data');
  const categoryPath = path.join(basePath, 'categories', `${category}.json`);
  const subcategoryPath = path.join(basePath, 'subcategories', category, `${subcategory}.json`);
  const toolsDir = path.join(basePath, 'tools', category, subcategory);

  // Load category and subcategory data
  const categoryData = await loadJson(categoryPath);
  const subcategoryData = await loadJson(subcategoryPath);

  if (!categoryData || !subcategoryData) {
    throw new Error(`Could not load category or subcategory data for ${category}/${subcategory}`);
  }

  // Load all tools
  const toolFiles = await getToolFiles(toolsDir);
  const tools = [];
  
  for (const file of toolFiles) {
    const tool = await loadJson(path.join(toolsDir, file));
    if (tool) {
      tools.push(tool);
    }
  }

  // Combine the data
  return {
    category: category,
    subcategory: subcategory,
    title: subcategoryData.title,
    description: subcategoryData.description,
    categoryInfo: categoryData,
    sections: subcategoryData.sections,
    tools: tools,
    bestPractices: subcategoryData.bestPractices,
    integrations: subcategoryData.integrations,
    resources: subcategoryData.resources,
    faqs: subcategoryData.faqs,
    glossary: subcategoryData.glossary
  };
}

module.exports = {
  loadJson,
  getToolFiles,
  aggregateSubcategoryData
};