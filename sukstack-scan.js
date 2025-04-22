const fs = require('fs');
const path = require('path');

// Function to read all code files in the project
function scanSukStackProject(rootDir) {
  const projectMap = {};
  
  // Directories to ignore
  const ignoreDirs = ['node_modules', '.git', 'dist', 'cache', '.vitepress/cache'];
  
  // Files to ignore
  const ignoreFiles = [
    'package-lock.json',
    '.DS_Store',
    'sukstack-scan.js',
    'sukstack-project.json',
    'markdown'
  ];
  
  // File extensions to include
  const includeExtensions = [
    '.json', 
    '.js', 
    '.mts', 
    '.ts', 
    '.md', 
    '.jsx', 
    '.tsx', 
    '.css'
  ];
  
  function processDirectory(dirPath, relativePath = '') {
    try {
      const items = fs.readdirSync(dirPath);
      
      for (const item of items) {
        // Skip ignored files
        if (ignoreFiles.includes(item)) continue;
        
        const fullPath = path.join(dirPath, item);
        const itemRelativePath = path.join(relativePath, item);
        
        try {
          const stats = fs.statSync(fullPath);
          
          if (stats.isDirectory()) {
            // Skip ignored directories
            if (ignoreDirs.some(dir => item === dir || itemRelativePath.includes(dir))) continue;
            
            processDirectory(fullPath, itemRelativePath);
          } else {
            // Only process files with specific extensions
            const ext = path.extname(item).toLowerCase();
            
            if (includeExtensions.includes(ext)) {
              try {
                // Skip large files (over 2MB)
                if (stats.size > 2 * 1024 * 1024) {
                  projectMap[itemRelativePath] = "File too large to include";
                  continue;
                }
                
                const content = fs.readFileSync(fullPath, 'utf8');
                projectMap[itemRelativePath] = content;
              } catch (err) {
                console.error(`Error reading file ${fullPath}:`, err);
                projectMap[itemRelativePath] = `Error reading file: ${err.message}`;
              }
            }
          }
        } catch (statErr) {
          console.error(`Error accessing ${fullPath}:`, statErr);
        }
      }
    } catch (dirErr) {
      console.error(`Error reading directory ${dirPath}:`, dirErr);
    }
  }
  
  processDirectory(rootDir);
  return projectMap;
}

// Execute the scan in the current directory
const projectRoot = process.cwd();
console.log(`Starting SukStack project scan at: ${projectRoot}`);

const projectFiles = scanSukStackProject(projectRoot);

// Calculate some stats
const fileCount = Object.keys(projectFiles).length;
const totalSize = Object.values(projectFiles)
  .reduce((sum, content) => sum + (typeof content === 'string' ? content.length : 0), 0);

// Write the result to a JSON file
fs.writeFileSync(
  'sukstack-project.json', 
  JSON.stringify(projectFiles, null, 2),
  'utf8'
);

console.log(`SukStack project scan completed!`);
console.log(`- Files scanned: ${fileCount}`);
console.log(`- Total content size: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
console.log(`Project source code has been saved to sukstack-project.json`);