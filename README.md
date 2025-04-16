# SukStack

SukStack is a comprehensive index of development tools and technologies across the entire ecosystem.

## Getting Started

1. Clone this repository
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm run docs:dev
```

## Available Scripts

- `npm run docs:dev` - Start the development server
- `npm run docs:build` - Build for production
- `npm run docs:preview` - Preview the production build
- `npm run logo:download` - Download logos for tools
- `npm run generate:docs` - Generate documentation pages
- `npm run validate:data` - Validate data files against schemas
- `npm run migrate:data` - Migrate data to the new structure

## Project Structure

- `data/` - Tool data in JSON format
- `docs/` - VitePress documentation site
- `scripts/` - Utility scripts for managing the index
- `schemas/` - JSON schemas for data validation
- `templates/` - Template files for creating new entries

## Adding a New Tool

1. Create a JSON file in the appropriate category directory
2. Run the logo downloader: `npm run logo:download`
3. Generate documentation: `npm run generate:docs`
4. Preview your changes: `npm run docs:dev`

IT 