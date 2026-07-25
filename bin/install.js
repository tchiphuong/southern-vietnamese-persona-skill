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

function installBlackbox() {
  const promptContent = fs.readFileSync(systemPromptFile, 'utf8');
  fs.writeFileSync(path.join(process.cwd(), '.blackboxrules'), promptContent, 'utf8');
  console.log(`✅ Installed for Blackbox AI (.blackboxrules)`);
}

function installCopilot() {
  const githubDir = path.join(process.cwd(), '.github');
  if (!fs.existsSync(githubDir)) {
    fs.mkdirSync(githubDir, { recursive: true });
  }
  const promptContent = fs.readFileSync(systemPromptFile, 'utf8');
  fs.writeFileSync(path.join(githubDir, 'copilot-instructions.md'), promptContent, 'utf8');
  console.log(`✅ Installed for GitHub Copilot (.github/copilot-instructions.md)`);
}

function installAmazonQ() {
  const qDir = path.join(process.cwd(), '.amazonq');
  if (!fs.existsSync(qDir)) fs.mkdirSync(qDir, { recursive: true });
  const promptContent = fs.readFileSync(systemPromptFile, 'utf8');
  fs.writeFileSync(path.join(qDir, 'rules.md'), promptContent, 'utf8');
  console.log(`✅ Installed for Amazon Q Developer (.amazonq/rules.md)`);
}

function installAugment() {
  const augDir = path.join(process.cwd(), '.augment');
  if (!fs.existsSync(augDir)) fs.mkdirSync(augDir, { recursive: true });
  const promptContent = fs.readFileSync(systemPromptFile, 'utf8');
  fs.writeFileSync(path.join(augDir, 'instructions.md'), promptContent, 'utf8');
  console.log(`✅ Installed for Augment Code (.augment/instructions.md)`);
}

function installTrae() {
  const promptContent = fs.readFileSync(systemPromptFile, 'utf8');
  fs.writeFileSync(path.join(process.cwd(), '.traerules'), promptContent, 'utf8');
  console.log(`✅ Installed for Trae IDE (.traerules)`);
}

function installReplit() {
  const repDir = path.join(process.cwd(), '.replit');
  if (!fs.existsSync(repDir)) fs.mkdirSync(repDir, { recursive: true });
  const promptContent = fs.readFileSync(systemPromptFile, 'utf8');
  fs.writeFileSync(path.join(repDir, 'instructions.md'), promptContent, 'utf8');
  console.log(`✅ Installed for Replit AI (.replit/instructions.md)`);
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
  if (target === 'blackbox' || target === 'all') installBlackbox();
  if (target === 'copilot' || target === 'github' || target === 'all') installCopilot();
  if (target === 'amazonq' || target === 'amazon' || target === 'all') installAmazonQ();
  if (target === 'augment' || target === 'all') installAugment();
  if (target === 'trae' || target === 'kilo' || target === 'all') installTrae();
  if (target === 'replit' || target === 'all') installReplit();

  console.log(`\n🎉 Installation complete! 100% Universal Support for 17+ AI Agents (Google Gemini, Claude, Codex, Copilot, Cursor, Windsurf, Continue, Roo/Cline, Aider, Blackbox AI, Amazon Q, Augment, Trae, Replit AI, Ollama & Custom LLMs).`);
} catch (error) {
  console.error('\n❌ Failed to install skill:', error.message);
  process.exit(1);
}
