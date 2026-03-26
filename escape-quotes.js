#!/usr/bin/env node
/**
 * Escapes single quotes in all .tsx and .ts files
 * Run with: npm run escape-quotes
 */

const fs = require("fs");
const path = require("path");

function getAllFiles(dir, ext = [".ts", ".tsx"]) {
  const files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });

  items.forEach((item) => {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      // Skip node_modules, .next, and other build dirs
      if (
        !["node_modules", ".next", ".git", "dist", "build"].includes(item.name)
      ) {
        files.push(...getAllFiles(fullPath, ext));
      }
    } else if (ext.includes(path.extname(item.name))) {
      files.push(fullPath);
    }
  });

  return files;
}

function escapeQuotesInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, "utf8");
    const originalContent = content;

    // Escape single quotes: ' -> \'
    // This regex looks for single quotes not already escaped
    content = content.replace(/(?<!\\)'/g, "\\'");

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, "utf8");
      console.log(`✓ Escaped quotes in: ${filePath}`);
      return true;
    }
    return false;
  } catch (err) {
    console.error(`✗ Error processing ${filePath}:`, err.message);
    return false;
  }
}

function main() {
  const startDir = process.cwd();
  const files = getAllFiles(startDir);

  console.log(`Found ${files.length} TypeScript files to process...\n`);

  let processed = 0;
  files.forEach((file) => {
    if (escapeQuotesInFile(file)) {
      processed++;
    }
  });

  console.log(`\n✨ Done! Processed ${processed} files.`);
}

main();
