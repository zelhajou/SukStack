/**
 * SukStack Logo Downloader
 * 
 * This script downloads logos for tools in the data files and saves them
 * directly to the docs/public/logos directory with consistent paths.
 * 
 * Usage: node download-logos.js [data-file.json]
 * Example: node download-logos.js data/devops-infrastructure/source-control.json
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// Configuration
const BASE_DIR = process.cwd();
const DOCS_DIR = path.join(BASE_DIR, 'docs');
const PUBLIC_DIR = path.join(DOCS_DIR, 'public');
const LOGOS_DIR = path.join(PUBLIC_DIR, 'logos');

/**
 * Normalize category name for file paths
 * Convert 'devops-infrastructure' to 'devops' for consistency
 */
function normalizeCategory(category) {
  // Map specific categories to their normalized form
  const categoryMap = {
    'devops-infrastructure': 'devops'
  };
  
  return categoryMap[category] || category;
}

/**
 * Ensure a directory exists, creating it if necessary
 */
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    console.log(`📁 Creating directory: ${dirPath}`);
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`✅ Directory created: ${dirPath}`);
  }
}

/**
 * Download an image from a URL to a local file path
 */
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    // Ensure the directory exists
    const dir = path.dirname(filepath);
    ensureDir(dir);
    
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download image: ${response.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(filepath);
      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        resolve(filepath);
      });

      fileStream.on('error', (err) => {
        fs.unlink(filepath, () => {}); // Delete the file if error
        reject(err);
      });
    }).on('error', reject);
  });
}

/**
 * Create a placeholder SVG image with text
 */
function createPlaceholder(text, filepath) {
  // Ensure the directory exists
  const dir = path.dirname(filepath);
  ensureDir(dir);
  
  const svgContent = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="#f0f0f0" />
  <text x="50" y="50" font-family="Arial" font-size="12" fill="#333" text-anchor="middle" dominant-baseline="middle">${text}</text>
</svg>`;
  
  try {
    fs.writeFileSync(filepath, svgContent);
    console.log(`✅ Created placeholder at ${filepath}`);
    return filepath;
  } catch (error) {
    console.error(`❌ Error creating placeholder: ${error.message}`);
    return null;
  }
}

/**
 * Process a single tool to download its logo
 */
async function processToolLogo(tool, category, subcategory) {
  if (!tool.logo || !tool.logo.domain) {
    console.log(`⏭️  No logo information for ${tool.name}, skipping`);
    return { status: 'skipped', tool: tool.name };
  }

  // Normalize category for file paths
  const normalizedCategory = normalizeCategory(category);
  
  // Determine the output directory and file paths
  const logoDir = path.join(LOGOS_DIR, normalizedCategory, subcategory);
  ensureDir(logoDir);

  // Update the logo path in the tool data to use the normalized category
  tool.logo.path = `/logos/${normalizedCategory}/${subcategory}/${tool.id}.png`;

  // Get the full file path
  const outputPngPath = path.join(PUBLIC_DIR, tool.logo.path.replace(/^\//, ''));
  const outputSvgPath = outputPngPath.replace(/\.png$/, '.svg');

  // Skip if file already exists
  if (fs.existsSync(outputPngPath)) {
    console.log(`👍  Logo already exists for ${tool.name}: ${outputPngPath}`);
    return { status: 'exists', tool: tool.name, path: outputPngPath };
  }

  try {
    // Try to download from primary domain
    const url = `https://logo.clearbit.com/${tool.logo.domain}`;
    console.log(`⬇️  Downloading logo for ${tool.name} from ${url}...`);
    await downloadImage(url, outputPngPath);
    console.log(`✅  Successfully downloaded logo for ${tool.name} to ${outputPngPath}`);
    return { status: 'success', tool: tool.name, path: outputPngPath };
  } catch (error) {
    console.log(`❌  Failed to download logo for ${tool.name} from primary domain: ${error.message}`);
    
    // Try alternative domains if available
    if (tool.logo.alternatives && tool.logo.alternatives.length > 0) {
      for (const altDomain of tool.logo.alternatives) {
        try {
          const altUrl = `https://logo.clearbit.com/${altDomain}`;
          console.log(`🔄  Trying alternative domain ${altDomain}...`);
          await downloadImage(altUrl, outputPngPath);
          console.log(`✅  Successfully downloaded logo for ${tool.name} from alternative domain ${altDomain} to ${outputPngPath}`);
          return { 
            status: 'success-alternative', 
            tool: tool.name, 
            domain: altDomain, 
            path: outputPngPath 
          };
        } catch (altError) {
          console.log(`❌  Failed to download logo from alternative domain ${altDomain}: ${altError.message}`);
        }
      }
    }

    // Create placeholder as last resort
    console.log(`🖼️  Creating placeholder for ${tool.name}`);
    const placeholderCreated = createPlaceholder(tool.name, outputSvgPath);
    
    if (!placeholderCreated) {
      return { status: 'error', tool: tool.name };
    }
    
    // Create default placeholder if it doesn't exist
    const defaultPlaceholder = path.join(LOGOS_DIR, 'default-placeholder.svg');
    if (!fs.existsSync(defaultPlaceholder)) {
      createPlaceholder('?', defaultPlaceholder);
    }
    
    // Copy default placeholder to PNG path if it exists
    if (fs.existsSync(defaultPlaceholder)) {
      try {
        fs.copyFileSync(defaultPlaceholder, outputPngPath);
        console.log(`✅ Copied default placeholder to ${outputPngPath}`);
      } catch (copyError) {
        console.error(`❌ Error copying default placeholder: ${copyError.message}`);
      }
    }
    
    return { status: 'placeholder', tool: tool.name, path: outputSvgPath };
  }
}

/**
 * Process a JSON data file to download all tool logos
 */
async function processDataFile(filePath) {
  try {
    console.log(`\n📄 Processing data file: ${filePath}`);
    
    // Read and parse the JSON file
    let fileContent;
    try {
      fileContent = fs.readFileSync(filePath, 'utf8');
    } catch (readError) {
      console.error(`❌ Error reading file ${filePath}: ${readError.message}`);
      return null;
    }
    
    let data;
    try {
      data = JSON.parse(fileContent);
    } catch (parseError) {
      console.error(`❌ Error parsing JSON from ${filePath}: ${parseError.message}`);
      return null;
    }
    
    if (!data.tools || !Array.isArray(data.tools) || data.tools.length === 0) {
      console.log(`⚠️  No tools found in ${filePath}, skipping`);
      return null;
    }
    
    // Extract category and subcategory from data
    const category = data.category;
    const subcategory = data.subcategory;
    
    if (!category || !subcategory) {
      console.error(`❌ Missing category or subcategory in ${filePath}`);
      return null;
    }
    
    // Normalize category for file paths (for display purposes in logs)
    const normalizedCategory = normalizeCategory(category);
    
    console.log(`📦 Original Category: ${category}, Using: ${normalizedCategory}, Subcategory: ${subcategory}`);
    console.log(`🔢 Found ${data.tools.length} tools to process`);
    
    // Create results tracking object
    const results = {
      success: 0,
      "success-alternative": 0,
      placeholder: 0,
      exists: 0,
      skipped: 0,
      error: 0
    };
    
    // Ensure the docs, public, and logos directories exist
    ensureDir(DOCS_DIR);
    ensureDir(PUBLIC_DIR);
    ensureDir(LOGOS_DIR);
    
    // Ensure the category and subcategory directories exist (with normalized category)
    const categoryDir = path.join(LOGOS_DIR, normalizedCategory);
    ensureDir(categoryDir);
    
    const subcategoryDir = path.join(categoryDir, subcategory);
    ensureDir(subcategoryDir);
    
    // Process each tool
    for (const tool of data.tools) {
      console.log(`\n🔍 Processing logo for ${tool.name}...`);
      const result = await processToolLogo(tool, category, subcategory);
      
      if (result) {
        results[result.status] = (results[result.status] || 0) + 1;
      
        // Log result with icon
        let icon = '⚙️';
        if (result.status === 'success') icon = '✅';
        if (result.status === 'success-alternative') icon = '🔄';
        if (result.status === 'placeholder') icon = '🖼️';
        if (result.status === 'exists') icon = '👍';
        if (result.status === 'skipped') icon = '⏭️';
        if (result.status === 'error') icon = '❌';
        
        console.log(`${icon} ${result.tool}: ${result.status}`);
      }
    }
    
    // Save the updated JSON with logo paths
    if (results.success > 0 || results["success-alternative"] > 0 || results.placeholder > 0) {
      try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
        console.log(`💾 Updated JSON file with logo paths: ${filePath}`);
      } catch (writeError) {
        console.error(`❌ Error updating JSON file: ${writeError.message}`);
      }
    }
    
    // Print summary for this file
    console.log(`\n=== ${path.basename(filePath)} Summary ===`);
    console.log(`✅ Downloaded: ${results.success || 0}`);
    console.log(`🔄 Alternative domain: ${results["success-alternative"] || 0}`);
    console.log(`🖼️ Placeholders: ${results.placeholder || 0}`);
    console.log(`👍 Already exists: ${results.exists || 0}`);
    console.log(`⏭️ Skipped (no logo info): ${results.skipped || 0}`);
    console.log(`❌ Errors: ${results.error || 0}`);
    console.log('=================================\n');
    
    return results;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return null;
  }
}

/**
 * Create default placeholder SVG
 */
function createDefaultPlaceholder() {
  ensureDir(LOGOS_DIR);
  
  const defaultPath = path.join(LOGOS_DIR, 'default-placeholder.svg');
  if (!fs.existsSync(defaultPath)) {
    createPlaceholder('?', defaultPath);
    console.log('🖼️ Created default placeholder');
  }
  return defaultPath;
}

/**
 * Find all JSON files in a directory and its subdirectories
 */
function findJsonFiles(dirPath) {
  const results = [];
  
  if (!fs.existsSync(dirPath)) {
    console.error(`❌ Directory not found: ${dirPath}`);
    return results;
  }
  
  // Read all items in the directory
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const itemPath = path.join(dirPath, item);
      const stats = fs.statSync(itemPath);
      
      if (stats.isDirectory()) {
        // Recursively process subdirectories
        const subResults = findJsonFiles(itemPath);
        results.push(...subResults);
      } else if (item.endsWith('.json')) {
        // Add JSON files to the results
        results.push(itemPath);
      }
    }
  } catch (error) {
    console.error(`❌ Error reading directory ${dirPath}: ${error.message}`);
  }
  
  return results;
}

/**
 * Main function
 */
async function main() {
  try {
    console.log('🚀 SukStack Logo Downloader');
    console.log('=======================');
    
    // Create base directories
    ensureDir(DOCS_DIR);
    ensureDir(PUBLIC_DIR);
    ensureDir(LOGOS_DIR);
    
    // Create default placeholder
    createDefaultPlaceholder();
    
    // Check command line arguments
    const args = process.argv.slice(2);
    let filesToProcess = [];
    
    if (args.length === 0) {
      // No arguments, search for all JSON files in the data directory
      const dataDir = path.join(BASE_DIR, 'data');
      console.log(`🔍 Searching for all JSON files in ${dataDir}...`);
      filesToProcess = findJsonFiles(dataDir);
      console.log(`📚 Found ${filesToProcess.length} JSON files`);
    } else {
      // Specific file or directory provided
      const targetPath = path.resolve(args[0]);
      
      if (fs.existsSync(targetPath)) {
        const stats = fs.statSync(targetPath);
        
        if (stats.isDirectory()) {
          // Process all JSON files in the specified directory
          console.log(`🔍 Searching for JSON files in ${targetPath}...`);
          filesToProcess = findJsonFiles(targetPath);
          console.log(`📚 Found ${filesToProcess.length} JSON files`);
        } else if (targetPath.endsWith('.json')) {
          // Process a single JSON file
          filesToProcess = [targetPath];
          console.log(`📄 Processing single file: ${targetPath}`);
        } else {
          console.error('❌ Specified path is not a JSON file or directory');
          process.exit(1);
        }
      } else {
        console.error(`❌ Path not found: ${targetPath}`);
        process.exit(1);
      }
    }
    
    // Process all files
    const totalResults = {
      success: 0,
      "success-alternative": 0,
      placeholder: 0,
      exists: 0,
      skipped: 0,
      error: 0,
      processed: 0,
      failed: 0
    };
    
    for (const file of filesToProcess) {
      const results = await processDataFile(file);
      
      if (results) {
        totalResults.success += results.success || 0;
        totalResults["success-alternative"] += results["success-alternative"] || 0;
        totalResults.placeholder += results.placeholder || 0;
        totalResults.exists += results.exists || 0;
        totalResults.skipped += results.skipped || 0;
        totalResults.error += results.error || 0;
        totalResults.processed++;
      } else {
        totalResults.failed++;
      }
    }
    
    // Print overall summary
    console.log('\n🏁 ===== OVERALL SUMMARY =====');
    console.log(`✅ Downloaded: ${totalResults.success}`);
    console.log(`🔄 Alternative domain: ${totalResults["success-alternative"]}`);
    console.log(`🖼️ Placeholders: ${totalResults.placeholder}`);
    console.log(`👍 Already exists: ${totalResults.exists}`);
    console.log(`⏭️ Skipped (no logo info): ${totalResults.skipped}`);
    console.log(`❌ Errors: ${totalResults.error}`);
    console.log(`📊 Processed files: ${totalResults.processed}`);
    console.log(`❌ Failed files: ${totalResults.failed}`);
    console.log('===========================');
    
  } catch (error) {
    console.error('❌ Error in main function:', error.message);
    process.exit(1);
  }
}

// Run the script
main();