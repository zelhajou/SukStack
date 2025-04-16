/**
 * Data Validator
 * 
 * Validates all data files against their schemas.
 * 
 * Usage: node scripts/validators/validate-data.js
 */

const fs = require('fs');
const path = require('path');
const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const ajv = new Ajv({allErrors: true});
addFormats(ajv);

// Load schemas
function loadSchemas() {
  const schemasDir = path.resolve(__dirname, '../../schemas');
  const categorySchema = require(path.join(schemasDir, 'category.schema.json'));
  const subcategorySchema = require(path.join(schemasDir, 'subcategory.schema.json'));
  const toolSchema = require(path.join(schemasDir, 'tool.schema.json'));

  return {
    category: ajv.compile(categorySchema),
    subcategory: ajv.compile(subcategorySchema),
    tool: ajv.compile(toolSchema)
  };
}

// Validate a directory of JSON files against a schema
function validateDirectory(directory, validate, type) {
  try {
    const files = fs.readdirSync(directory);
    const jsonFiles = files.filter(file => file.endsWith('.json'));
    
    let valid = true;
    let totalFiles = 0;
    let validFiles = 0;
    
    for (const file of jsonFiles) {
      totalFiles++;
      const filePath = path.join(directory, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      let data;
      
      try {
        data = JSON.parse(fileContent);
      } catch (error) {
        console.error(`❌ Invalid JSON in ${filePath}: ${error.message}`);
        valid = false;
        continue;
      }
      
      const isValid = validate(data);
      if (!isValid) {
        console.error(`❌ ${type} validation failed for ${filePath}:`);
        console.error(validate.errors);
        valid = false;
      } else {
        validFiles++;
      }
    }
    
    console.log(`✅ Validated ${validFiles}/${totalFiles} ${type} files`);
    return valid;
  } catch (error) {
    console.error(`Error validating ${directory}: ${error.message}`);
    return false;
  }
}

// Main validation function
function validateAll() {
  try {
    const schemas = loadSchemas();
    const baseDir = path.resolve(__dirname, '../../data');
    
    console.log('🔍 Validating data files...');
    
    // Validate categories
    const categoriesDir = path.join(baseDir, 'categories');
    const categoriesValid = fs.existsSync(categoriesDir) ? 
      validateDirectory(categoriesDir, schemas.category, 'category') : 
      true;
    
    // Validate subcategories (requires finding all subcategory directories)
    let subcategoriesValid = true;
    const subcategoriesDir = path.join(baseDir, 'subcategories');
    
    if (fs.existsSync(subcategoriesDir)) {
      const categoryDirs = fs.readdirSync(subcategoriesDir);
      
      for (const category of categoryDirs) {
        const subcategoryDir = path.join(subcategoriesDir, category);
        if (fs.statSync(subcategoryDir).isDirectory()) {
          const dirValid = validateDirectory(
            subcategoryDir,
            schemas.subcategory,
            'subcategory'
          );
          subcategoriesValid = subcategoriesValid && dirValid;
        }
      }
    }
    
    // Validate tools (requires finding all tool directories)
    let toolsValid = true;
    const toolsDir = path.join(baseDir, 'tools');
    
    if (fs.existsSync(toolsDir)) {
      const toolCategoryDirs = fs.readdirSync(toolsDir);
      
      for (const category of toolCategoryDirs) {
        const categoryDir = path.join(toolsDir, category);
        if (fs.statSync(categoryDir).isDirectory()) {
          const subcategories = fs.readdirSync(categoryDir);
          
          for (const subcategory of subcategories) {
            const toolDir = path.join(categoryDir, subcategory);
            if (fs.statSync(toolDir).isDirectory()) {
              const dirValid = validateDirectory(
                toolDir,
                schemas.tool,
                'tool'
              );
              toolsValid = toolsValid && dirValid;
            }
          }
        }
      }
    }
    
    if (categoriesValid && subcategoriesValid && toolsValid) {
      console.log('✅ All data files are valid');
      return true;
    } else {
      console.error('❌ Some data files failed validation');
      return false;
    }
  } catch (error) {
    console.error(`Error during validation: ${error.message}`);
    return false;
  }
}

// Run validation if this script is executed directly
if (require.main === module) {
  const valid = validateAll();
  process.exit(valid ? 0 : 1);
}

module.exports = { validateAll };