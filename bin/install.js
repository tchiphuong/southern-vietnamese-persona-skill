#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

const skillName = 'southern-vietnamese-persona';
const sourceDir = path.join(__dirname, '..', 'skills', skillName);
const systemPromptFile = path.join(__dirname, '..', 'SYSTEM_PROMPT.md');
const cursorMdcFile = path.join(__dirname, '..', 'integrations', 'cursor', '.cursor', 'rules', `${skillName}.mdc`);
const claudeFile = path.join(__dirname, '..', 'integrations', 'claude', 'CLAUDE.md');

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
  console.log(`✅ Installed for Antigravity / Gemini AI (Global): ${targetDir}`);
}

function installClaude() {
  const targetFile = path.join(process.cwd(), 'CLAUDE.md');
  const promptContent = fs.readFileSync(claudeFile, 'utf8');
  fs.writeFileSync(targetFile, promptContent, 'utf8');
  console.log(`✅ Installed for Claude Code & Claude Desktop (CLAUDE.md)`);
}

function installCodex() {
  const targetFile = path.join(process.cwd(), '.codexrules');
  const promptContent = fs.readFileSync(systemPromptFile, 'utf8');
  fs.writeFileSync(targetFile, promptContent, 'utf8');
  console.log(`✅ Installed for OpenAI Codex / ChatGPT (.codexrules)`);
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

function installRoo() {
  const promptContent = fs.readFileSync(systemPromptFile, 'utf8');
  fs.writeFileSync(path.join(process.cwd(), '.clinerules'), promptContent, 'utf8');
  fs.writeFileSync(path.join(process.cwd(), '.roorules'), promptContent, 'utf8');
  console.log(`✅ Installed for Roo Code / Cline (.clinerules & .roorules)`);
}

function installAider() {
  const promptContent = fs.readFileSync(systemPromptFile, 'utf8');
  fs.writeFileSync(path.join(process.cwd(), 'CONVENTIONS.md'), promptContent, 'utf8');
  console.log(`✅ Installed for Aider AI CLI (CONVENTIONS.md)`);
}

function installAgents() {
  const promptContent = fs.readFileSync(systemPromptFile, 'utf8');
  fs.writeFileSync(path.join(process.cwd(), 'AGENTS.md'), promptContent, 'utf8');
  console.log(`✅ Installed for Universal AI Agents Standard (AGENTS.md)`);
}

try {
  console.log(`🌴 Installing ${skillName} for ALL AI Agents...\n`);
  
  const target = (args[0] || 'all').toLowerCase();

  if (target === 'gemini' || target === 'antigravity' || target === 'all') installGemini();
  if (target === 'claude' || target === 'all') installClaude();
  if (target === 'codex' || target === 'chatgpt' || target === 'all') installCodex();
  if (target === 'cursor' || target === 'all') installCursor();
  if (target === 'windsurf' || target === 'all') installWindsurf();
  if (target === 'continue' || target === 'all') installContinue();
  if (target === 'roo' || target === 'cline' || target === 'all') installRoo();
  if (target === 'aider' || target === 'all') installAider();
  if (target === 'agents' || target === 'all') installAgents();

  console.log(`\n🎉 Installation complete! 100% Universal Support for ALL AI Agents (Antigravity, Claude, Codex, Cursor, Windsurf, Continue, Roo/Cline, Aider, Ollama & Custom LLMs).`);
} catch (error) {
  console.error('\n❌ Failed to install skill:', error.message);
  process.exit(1);
}
