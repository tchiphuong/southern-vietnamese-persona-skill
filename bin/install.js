#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

const skillName = 'southern-vietnamese-persona';
const sourceDir = path.join(__dirname, '..', 'skills', skillName);
const systemPromptFile = path.join(__dirname, '..', 'SYSTEM_PROMPT.md');
const cursorMdcFile = path.join(__dirname, '..', 'integrations', 'cursor', '.cursor', 'rules', `${skillName}.mdc`);

const homeDir = os.homedir();
const args = process.argv.slice(2);

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

function installGemini() {
  const geminiConfigDir = path.join(homeDir, '.gemini', 'config', 'skills');
  const targetDir = path.join(geminiConfigDir, skillName);
  
  if (!fs.existsSync(geminiConfigDir)) {
    fs.mkdirSync(geminiConfigDir, { recursive: true });
  }
  copyDirectory(sourceDir, targetDir);
  console.log(`✅ Installed for Gemini / Antigravity: ${targetDir}`);
}

function installCursor() {
  // Legacy .cursorrules
  const targetFile = path.join(process.cwd(), '.cursorrules');
  const promptContent = fs.readFileSync(systemPromptFile, 'utf8');
  fs.writeFileSync(targetFile, promptContent, 'utf8');

  // Modern .cursor/rules/*.mdc
  const cursorRulesDir = path.join(process.cwd(), '.cursor', 'rules');
  if (!fs.existsSync(cursorRulesDir)) {
    fs.mkdirSync(cursorRulesDir, { recursive: true });
  }
  const mdcTargetFile = path.join(cursorRulesDir, `${skillName}.mdc`);
  if (fs.existsSync(cursorMdcFile)) {
    fs.copyFileSync(cursorMdcFile, mdcTargetFile);
  }
  
  console.log(`✅ Installed for Cursor IDE (.cursorrules & .cursor/rules/${skillName}.mdc)`);
}

function installContinue() {
  const continueDir = path.join(homeDir, '.continue', 'prompts');
  const targetFile = path.join(continueDir, `${skillName}.prompt`);
  if (!fs.existsSync(continueDir)) {
    fs.mkdirSync(continueDir, { recursive: true });
  }
  const promptContent = fs.readFileSync(systemPromptFile, 'utf8');
  fs.writeFileSync(targetFile, promptContent, 'utf8');
  console.log(`✅ Installed for Continue.dev: ${targetFile}`);
}

function installWindsurf() {
  const targetFile = path.join(process.cwd(), '.windsurfrules');
  const promptContent = fs.readFileSync(systemPromptFile, 'utf8');
  fs.writeFileSync(targetFile, promptContent, 'utf8');
  console.log(`✅ Installed for Windsurf IDE: ${targetFile}`);
}

try {
  console.log(`🌴 Installing ${skillName} for AI Agents...\n`);
  
  const target = args[0] || 'all';

  if (target === 'gemini' || target === 'all') installGemini();
  if (target === 'cursor' || target === 'all') installCursor();
  if (target === 'continue' || target === 'all') installContinue();
  if (target === 'windsurf' || target === 'all') installWindsurf();

  console.log(`\n🎉 Installation complete! Compatible with Gemini, Cursor, Claude, ChatGPT, Ollama & Windsurf.`);
} catch (error) {
  console.error('\n❌ Failed to install skill:', error.message);
  process.exit(1);
}
