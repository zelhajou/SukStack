/**
 * Get the logo path for a tool
 * @param {string} category - The tool category (e.g., devops)
 * @param {string} subcategory - The tool subcategory (e.g., source-control)
 * @param {string} id - The tool ID (e.g., github)
 * @returns {string} The logo path to use in markdown
 */
export function getLogoPath(category, subcategory, id) {
  return `/public/logos/${category}/${subcategory}/${id}.png`;
}

/**
 * Get formatted HTML for a tool logo with fallback
 * @param {string} category - The tool category
 * @param {string} subcategory - The tool subcategory
 * @param {string} id - The tool ID
 * @param {string} name - The tool name for alt text
 * @returns {string} HTML for the image tag
 */
export function getLogoHtml(category, subcategory, id, name) {
  const path = getLogoPath(category, subcategory, id);
  return `<img src="${path}" alt="${name} Logo" class="tool-logo" onerror="this.onerror=null;this.src='/public/logos/default-placeholder.svg';">`;
}
