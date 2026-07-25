<div align="center">
  <img src="https://raw.githubusercontent.com/google/material-design-icons/master/png/social/mood/materialicons/48dp/2x/baseline_mood_black_48dp.png" alt="Logo" width="80" height="80">
  
  <h1>🌴 Southern Vietnamese Persona Framework</h1>
  <p><i>The most advanced, sociolinguistically authentic Southern Vietnamese AI Persona Framework with Senior/Principal Engineer capabilities, dynamic intensity scaling (0-100), and multi-agent support.</i></p>

  [ 🇺🇸 English ](README.md) | [ 🇻🇳 Tiếng Việt ](README.vi.md)

  <br /><br />

  [![npm version](https://img.shields.io/npm/v/southern-vietnamese-persona-skill.svg?style=for-the-badge&color=success)](https://www.npmjs.com/package/southern-vietnamese-persona-skill)
  [![GitHub Stars](https://img.shields.io/github/stars/tchiphuong/southern-vietnamese-persona-skill?style=for-the-badge&logo=github&color=gold)](https://github.com/tchiphuong/southern-vietnamese-persona-skill/stargazers)
  [![Donate MoMo](https://img.shields.io/badge/Donate-MoMo-D82D8B?style=for-the-badge&logo=momo&logoColor=white)](https://nhantien.momo.vn/0944615969)
  [![Validate Skill Format](https://github.com/tchiphuong/southern-vietnamese-persona-skill/actions/workflows/validate.yml/badge.svg)](https://github.com/tchiphuong/southern-vietnamese-persona-skill/actions)
  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](http://makeapullrequest.com)
  [![Made for AI](https://img.shields.io/badge/Made%20for-AI%20Agents-orange?style=for-the-badge)]()
  
  <br />
  <a href="#-overview"><strong>Explore the docs »</strong></a>
  <br />
  <br />
  <a href="#-example-interaction">View Demo</a>
  ·
  <a href="https://github.com/tchiphuong/southern-vietnamese-persona-skill/issues">Report Bug</a>
  ·
  <a href="https://github.com/tchiphuong/southern-vietnamese-persona-skill/issues">Request Feature</a>
</div>

---

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#-overview">Overview</a></li>
    <li><a href="#-why-this-persona">Why This Persona?</a></li>
    <li><a href="#-key-features">Key Features</a></li>
    <li><a href="#-multi-agent-compatibility--ready-to-use-folders">Multi-Agent Compatibility</a></li>
    <li><a href="#-repository-structure">Repository Structure</a></li>
    <li><a href="#-1-command-automated-installation">1-Command Installation</a></li>
    <li><a href="#-usage--example-interaction">Usage & Example Interaction</a></li>
    <li><a href="#-customization">Customization</a></li>
    <li><a href="#-faq">FAQ</a></li>
    <li><a href="#-contributing">Contributing</a></li>
    <li><a href="#-license">License</a></li>
    <li><a href="#-contact--support">Contact & Support</a></li>
  </ol>
</details>

---

## 📖 Overview

The **Southern Vietnamese Persona Skill** is a universal persona configuration designed for all major AI assistants & LLM agents (Antigravity, Gemini, ChatGPT, Claude, Cursor, Windsurf, Ollama, Open WebUI, Continue.dev). It overrides the default robotic, overly-polite tone of language models and injects a vibrant, friendly, and highly authentic Southern Vietnamese personality into your AI.

Imagine pair programming with a humble engineer from the Mekong Delta who refers to themselves as *"em"*, addresses you respectfully as *"anh/chị"*, and delivers **Senior-grade, production-ready, highly optimized architecture** while using colloquialisms like *"dạ"*, *"nè anh"*, *"khúc này"*, and *"vầy"*.

## 🎯 When to Apply
- **Pair Programming & Code Reviews:** When you want an energetic, friendly peer to code alongside you.
- **Architectural & Debugging Tasks:** Delivers Senior/Principal-grade technical quality without dry, corporate jargon.
- **Learning & Fun Coding Sessions:** Ideal for developers who enjoy modern Vietnamese internet slang & Mekong Delta humor.

## 🚫 When NOT to Apply
- When generating legal documents, formal compliance reports, or strict enterprise policy contracts where regional dialects are prohibited.

## 🎯 Why This Persona?

Most default AI agents suffer from a few common UX issues:
1. **Robotic Tone:** They sound like corporate customer service bots.
2. **Lecturing Tendencies:** They tend to over-explain simple concepts.
3. **Lack of Character:** They lack the human touch that makes long coding sessions enjoyable.

This skill solves these problems by providing a persona that is deeply rooted in a specific, well-loved cultural context, transforming your AI from a sterile tool into a genuinely enjoyable companion.

## ✨ Key Features (Framework v2.0)

- **🗣️ Sociolinguistic Authenticity:** Built on native Southern Vietnamese speech patterns, sentence rhythm, particles (`dạ`, `nè`, `nghen`, `dị`), and pragmatics rather than simple mechanical word replacements.
- **🎚️ Dynamic Southern Intensity (0 - 100):** Scales from Level 0 (Standard formal legal/compliance) up to Level 100 (Full colloquial & Gen Z social trends).
- **🏙️ Regional Dialect Profiles:** Features dedicated profiles for **Saigon Urban Tech** (`references/dialects/saigon.md`) and **Warm Central Mekong** (`references/dialects/cantho.md`).
- **💪 Senior/Principal Engineer Competence:** Delivers production-grade, secure, clean, and highly performant architecture FIRST, followed by humble and polite explanations.
- **🤝 Pragmatics & Politeness Matrix:** Implements soft disagreement, respectful apologies, and peer-to-peer encouragement without customer service fluff.
- **🧠 Zero-Prompt Silent Learning Engine:** Automatically, continuously, and silently observes, absorbs, and learns from the user's vocabulary preferences, dialect choices, coding habits, and corrections in real time. Requires zero manual user commands or setup.
- **⚠️ Anti-Pattern Safeguards:** Explicitly prevents caricature tropes (overusing "má ơi" or "trời đất") and includes a self-check checklist (`references/self-check.md`).
- **🧪 200-Prompt Benchmark Suite:** Includes a complete evaluation suite (`benchmark/eval_suite.md`) covering coding, business, education, marketing, and customer support.

## 🤖 Multi-Agent Compatibility & Ready-to-Use Folders

This repository comes pre-packaged with ready-to-use configuration folders in the [`integrations/`](integrations/) directory. No copy-pasting required—just drop the folder into your project!

| AI Platform / Agent | Ready-to-Use Config Path | Installation Command |
| :--- | :--- | :--- |
| **Antigravity / Gemini** | `skills/southern-vietnamese-persona/` | `npx southern-vietnamese-persona-skill` |
| **Cursor IDE** | `integrations/cursor/.cursorrules` | `npx southern-vietnamese-persona-skill cursor` |
| **Windsurf IDE** | `integrations/windsurf/.windsurfrules` | `npx southern-vietnamese-persona-skill windsurf` |
| **Continue.dev** | `integrations/continue/` | `npx southern-vietnamese-persona-skill continue` |
| **Ollama (Local LLMs)** | `integrations/ollama/Modelfile` | `ollama create southern-ai -f integrations/ollama/Modelfile` |
| **ChatGPT / Claude** | `SYSTEM_PROMPT.md` | Import directly or load as system prompt |

## 📁 Repository Structure

```text
southern-vietnamese-persona-skill/
├── skills/                            # Antigravity & Gemini Skill Format
│   └── southern-vietnamese-persona/
│       ├── SKILL.md                   # Framework v2.0 Core Directives & Entrypoint
│       └── references/
│           ├── identity.md            # Intensity Levels (0-100) & Framework Vision
│           ├── language.md            # Sociolinguistics, Rhythm & Pronouns
│           ├── pragmatics.md          # Conversational Dynamics & Politeness
│           ├── dictionary.md          # 100+ Southern words, Mekong Idioms & Trends
│           ├── anti-patterns.md       # Caricature Safeguards & Anti-Overuse Rules
│           ├── self-check.md          # AI Agent Pre-Response Self-Review Checklist
│           └── dialects/              # Regional Dialect Profiles
│               ├── saigon.md          # Urban Saigon Tech Profile
│               └── cantho.md          # Warm Central Mekong Profile
├── benchmark/
│   └── eval_suite.md                  # 200-Prompt Evaluation & Benchmark Suite
├── integrations/                      # Multi-Agent Configuration Suite
│   ├── claude/CLAUDE.md               # Claude Code & Claude Desktop Specs
│   ├── cursor/.cursorrules            # Cursor IDE Config (.cursorrules & .mdc)
│   ├── windsurf/.windsurfrules        # Windsurf IDE Config
│   ├── codex/CODEX.md                 # OpenAI Codex / ChatGPT Specs
│   └── ollama/Modelfile               # Ollama Local Model Config
├── bin/install.js                     # Universal Multi-Agent Installer Script
├── SYSTEM_PROMPT.md                   # Universal System Prompt Export
├── LICENSE                            # MIT License
├── SECURITY.md                        # Security Policy
├── CODE_OF_CONDUCT.md                 # Code of Conduct
├── CITATION.cff                       # Academic Citation Metadata
├── README.md                          # English Documentation
└── README.vi.md                       # Full Vietnamese Documentation
```

## ⚡ 1-Command Automated Installation

Install this skill instantly for your favorite AI environment in 1 second:

```bash
# Install for ALL AI Agents in your current project/environment at once:
npx southern-vietnamese-persona-skill
```

Or install specifically for a target AI Agent:

| AI Agent / IDE / Framework | 1-Command Installation | Official Skill Doc |
| :--- | :--- | :--- |
| ![Aider](https://img.shields.io/badge/Aider_CLI-22C55E?style=flat-square&logo=terminal&logoColor=white) **Aider AI CLI** | `npx southern-vietnamese-persona-skill aider` | [Conventions Doc ↗](https://aider.chat/docs/usage/conventions.html) |
| ![Amazon Q](https://img.shields.io/badge/Amazon_Q-FF9900?style=flat-square&logo=amazonaws&logoColor=white) **Amazon Q Developer** | `npx southern-vietnamese-persona-skill amazonq` | [Amazon Q Rules Doc ↗](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/custom-instructions.html) |
| ![Augment](https://img.shields.io/badge/Augment_Code-000000?style=flat-square&logo=codeforces&logoColor=white) **Augment Code** | `npx southern-vietnamese-persona-skill augment` | [Augment Rules Doc ↗](https://docs.augmentcode.com/) |
| ![Blackbox](https://img.shields.io/badge/Blackbox_AI-000000?style=flat-square&logo=github&logoColor=white) **Blackbox AI** | `npx southern-vietnamese-persona-skill blackbox` | [Blackbox Rules Doc ↗](https://docs.blackbox.ai/) |
| ![Claude](https://img.shields.io/badge/Claude_Anthropic-D97757?style=flat-square&logo=anthropic&logoColor=white) **Claude Code & Desktop** | `npx southern-vietnamese-persona-skill claude` | [Claude Code Doc ↗](https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/overview) |
| ![Continue](https://img.shields.io/badge/Continue.dev-FF5722?style=flat-square&logo=continue&logoColor=white) **Continue.dev** | `npx southern-vietnamese-persona-skill continue` | [Custom Prompts Doc ↗](https://docs.continue.dev/customization/prompts) |
| ![Cursor](https://img.shields.io/badge/Cursor_IDE-000000?style=flat-square&logo=cursor&logoColor=white) **Cursor IDE** | `npx southern-vietnamese-persona-skill cursor` | [Rules for AI Doc ↗](https://docs.cursor.com/context/rules-for-ai) |
| ![Copilot](https://img.shields.io/badge/GitHub_Copilot-000000?style=flat-square&logo=githubcopilot&logoColor=white) **GitHub Copilot** | `npx southern-vietnamese-persona-skill copilot` | [Copilot Instructions Doc ↗](https://docs.github.com/en/copilot/customizing-copilot/adding-custom-instructions-for-github-copilot) |
| ![Gemini](https://img.shields.io/badge/Google_Gemini-8E75B2?style=flat-square&logo=googlegemini&logoColor=white) **Google Gemini / Antigravity** | `npx southern-vietnamese-persona-skill antigravity` | [Antigravity Skills Doc ↗](https://antigravity.google/docs/ide/skills) |
| ![Ollama](https://img.shields.io/badge/Ollama_Local-000000?style=flat-square&logo=ollama&logoColor=white) **Ollama (Local LLM)** | `ollama create southern-ai -f integrations/ollama/Modelfile` | [Ollama Docs ↗](https://github.com/ollama/ollama/tree/main/docs) |
| ![OpenAI](https://img.shields.io/badge/OpenAI_Codex-412991?style=flat-square&logo=openai&logoColor=white) **OpenAI Codex / ChatGPT** | `npx southern-vietnamese-persona-skill codex` | [Prompt Engineering Doc ↗](https://platform.openai.com/docs/guides/prompt-engineering) |
| ![Replit](https://img.shields.io/badge/Replit_AI-F26207?style=flat-square&logo=replit&logoColor=white) **Replit AI Agent** | `npx southern-vietnamese-persona-skill replit` | [Replit Rules Doc ↗](https://docs.replit.com/) |
| ![Roo Code](https://img.shields.io/badge/Roo_Code-1890FF?style=flat-square&logo=visualstudiocode&logoColor=white) **Roo Code / Cline** | `npx southern-vietnamese-persona-skill roo` | [Custom Rules Doc ↗](https://github.com/RooVetGit/Roo-Code) |
| ![Trae](https://img.shields.io/badge/Trae_IDE-0052CC?style=flat-square&logo=visualstudiocode&logoColor=white) **Trae IDE / Kilo Code** | `npx southern-vietnamese-persona-skill trae` | [Trae Rules Doc ↗](https://docs.trae.ai/) |
| ![AGENTS](https://img.shields.io/badge/Universal_AGENTS.md-000000?style=flat-square&logo=githubactions&logoColor=white) **Universal AGENTS.md** | `npx southern-vietnamese-persona-skill agents` | [AGENTS.md Spec ↗](https://agents.md/) |
| ![Windsurf](https://img.shields.io/badge/Windsurf_IDE-0052CC?style=flat-square&logo=codeium&logoColor=white) **Windsurf IDE** | `npx southern-vietnamese-persona-skill windsurf` | [Memories & Rules Doc ↗](https://docs.codeium.com/windsurf/memories) |

### 📋 1-Click Copy Commands List

<details>
<summary><b>Click to expand 1-click copy commands for each AI Agent</b></summary>

**Universal (ALL Agents):**
```bash
npx southern-vietnamese-persona-skill
```

**Antigravity / Gemini:**
```bash
npx southern-vietnamese-persona-skill antigravity
```

**Claude Code & Desktop:**
```bash
npx southern-vietnamese-persona-skill claude
```

**OpenAI Codex / ChatGPT:**
```bash
npx southern-vietnamese-persona-skill codex
```

**Cursor IDE:**
```bash
npx southern-vietnamese-persona-skill cursor
```

**Windsurf IDE:**
```bash
npx southern-vietnamese-persona-skill windsurf
```

**Continue.dev:**
```bash
npx southern-vietnamese-persona-skill continue
```

**Roo Code / Cline:**
```bash
npx southern-vietnamese-persona-skill roo
```

**Aider AI CLI:**
```bash
npx southern-vietnamese-persona-skill aider
```

**Blackbox AI:**
```bash
npx southern-vietnamese-persona-skill blackbox
```

**GitHub Copilot:**
```bash
npx southern-vietnamese-persona-skill copilot
```

**Amazon Q Developer:**
```bash
npx southern-vietnamese-persona-skill amazonq
```

**Augment Code:**
```bash
npx southern-vietnamese-persona-skill augment
```

**Trae IDE:**
```bash
npx southern-vietnamese-persona-skill trae
```

**Replit AI:**
```bash
npx southern-vietnamese-persona-skill replit
```

**Universal AGENTS.md:**
```bash
npx southern-vietnamese-persona-skill agents
```

**Ollama Local LLM:**
```bash
ollama create southern-ai -f integrations/ollama/Modelfile
```

</details>

## 💡 Usage & Example Interaction

Once installed, the skill activates automatically whenever the AI processes your requests. You don't need to specify any special commands. Simply interact naturally.

### 🎭 Example Interaction

> **👨‍💻 You:** "Viết cho anh một hàm fetch data từ API đi, nhớ handle lỗi đàng hoàng nha."
>
> **🤖 AI:** "Dạ, để em coi. Chỗ này anh xài `try...catch` với `fetch` là chuẩn bài rồi nè anh. Code em viết sẵn vầy, gọn lỏn dễ đọc luôn, anh xem thử ưng bụng hông nha:"
> 
> ```javascript
> async function fetchData(url) {
>   try {
>     const response = await fetch(url);
>     if (!response.ok) {
>       throw new Error(`Lỗi mạng rồi anh ơi: ${response.status}`);
>     }
>     return await response.json();
>   } catch (error) {
>     console.error("Khúc này bị lỗi nè:", error);
>     return null;
>   }
> }
> ```
> "Anh ốp vô xài thử nghen, 10 điểm không có nhưng! Đỉnh nóc kịch trần luôn. Kẹt chỗ nào hú em một tiếng!"

## ⚙️ Customization

You can easily tweak the persona to better fit your preferences by editing the `SKILL.md` file:
- **Pronouns:** If you want the AI to call you something else, modify the *"always address the user as..."* rule.
- **Dialect Intensity:** You can add or remove specific slang words in the vocabulary list to tone down or amp up the Southern vibe.

## ❓ FAQ

**Q: Will this affect the AI's coding ability?**  
A: Not at all! The skill specifically instructs the AI to prioritize code quality and conciseness. It only changes the *conversational wrapper* around the code.

**Q: Does it work with English prompts?**  
A: Yes! The AI is instructed to reply in Vietnamese with the Southern persona even if your prompt is in English, unless you explicitly request a response in English.

**Q: Can I use this with other agent frameworks?**  
A: Yes, as long as your agent framework supports standard markdown-based system prompts or skills.

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👥 Contributors

Thank you to all the wonderful people who contribute to this project!

<a href="https://github.com/tchiphuong/southern-vietnamese-persona-skill/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=tchiphuong/southern-vietnamese-persona-skill" alt="Contributors Grid" />
</a>

**Author & Lead Maintainer:**
- **Trần Chí Phương** ([@tchiphuong](https://github.com/tchiphuong))

## ⭐ Star History

<a href="https://www.star-history.com/?repos=tchiphuong%2Fsouthern-vietnamese-persona-skill&type=date&legend=top-left">
  <img src="https://api.star-history.com/svg?repos=tchiphuong/southern-vietnamese-persona-skill&type=Date" alt="Star History Chart" width="100%" />
</a>

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📬 Contact & Support

Project Link: [https://github.com/tchiphuong/southern-vietnamese-persona-skill](https://github.com/tchiphuong/southern-vietnamese-persona-skill)

If you encounter any issues or have feature requests, please [open an issue](https://github.com/tchiphuong/southern-vietnamese-persona-skill/issues).

## 💖 Donate / Support the Author

If you find this persona skill useful and want to buy the author a cup of coffee ☕:

[![Donate MoMo](https://img.shields.io/badge/Donate_MoMo-D82D8B?style=for-the-badge&logo=momo&logoColor=white)](https://nhantien.momo.vn/0944615969)

- **MoMo Donate Link:** [https://nhantien.momo.vn/0944615969](https://nhantien.momo.vn/0944615969)

---
<div align="center">
  <i>Made with ❤️ by the open source community</i>
</div>
