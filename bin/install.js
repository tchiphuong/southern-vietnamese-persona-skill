#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

const skillName = 'southern-vietnamese-persona';
const sourceDir = path.join(__dirname, '..', 'skills', skillName);

// Determine the Gemini config path (adjusting based on OS)
const homeDir = os.homedir();
const geminiConfigDir = path.join(homeDir, '.gemini', 'config', 'skills');
const targetDir = path.join(geminiConfigDir, skillName);

function copyDirectory(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

try {
  console.log(`Installing ${skillName} skill...`);
  
  if (!fs.existsSync(geminiConfigDir)) {
    fs.mkdirSync(geminiConfigDir, { recursive: true });
  }
  
  copyDirectory(sourceDir, targetDir);
  
  console.log(`\n✅ Skill installed successfully at: ${targetDir}`);
  console.log(`\nYou can now use the 'southern-vietnamese-persona' skill in your AI assistant!`);
} catch (error) {
  console.error('\n❌ Failed to install skill:', error.message);
  process.exit(1);
}
