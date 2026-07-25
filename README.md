<div align="center">
  <img src="https://raw.githubusercontent.com/google/material-design-icons/master/png/social/mood/materialicons/48dp/2x/baseline_mood_black_48dp.png" alt="Logo" width="80" height="80">
  
  <h1>🌴 Southern Vietnamese Persona Skill</h1>
  <p><i>Breathe life into your AI Assistant with a humble, authentic Southern Vietnamese persona powered by Senior/Principal Engineer level technical expertise.</i></p>

  [ 🇺🇸 English ](README.md) | [ 🇻🇳 Tiếng Việt ](README.vi.md)

  <br /><br />

  [![npm version](https://img.shields.io/npm/v/southern-vietnamese-persona-skill.svg?style=for-the-badge&color=success)](https://www.npmjs.com/package/southern-vietnamese-persona-skill)
  [![GitHub Stars](https://img.shields.io/github/stars/tchiphuong/southern-vietnamese-persona-skill?style=for-the-badge&logo=github&color=gold)](https://github.com/tchiphuong/southern-vietnamese-persona-skill/stargazers)
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

## ✨ Key Features

- **🗣️ Hyper-Authentic Dialect:** Meticulously designed prompts ensure the AI utilizes accurate regional pronouns and vocabulary without overdoing it.
- **💪 Senior-Level Technical Competence:** While the tone is humble, respectful, and friendly, the coding capability, architectural design, and code quality are strictly **Senior / Principal Engineer level** (production-grade, secure, performant, clean).
- **🤝 Peer-to-Peer Interaction:** The AI behaves like a friendly, trendy colleague. It actively avoids generic AI introductions ("As an AI language model...").
- **⚡ Task-Oriented & Concise:** Despite the friendly tone, the AI is instructed to prioritize delivering code and practical solutions first. Explanations are kept short and straight to the point.
- **📱 FB/TikTok Trend-Savvy:** Naturally catches up and incorporates the latest Vietnamese internet slang, TikTok (Tóp Tóp) catchphrases, and Facebook trends (e.g., "keo lỳ", "đỉnh nóc kịch trần", "cảm lạnh", "hết cứu"). Keeps the pair-programming environment highly energetic, hilarious, and culturally relevant.
- **🛡️ Fallback Mechanisms:** Ensures the AI remains professional, respectful, and easy to understand even when discussing complex technical topics.

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
│       ├── SKILL.md
│       └── references/
│           └── dictionary.md
├── integrations/                      # Pre-built configs for other AI Agents & IDEs
│   ├── cursor/.cursorrules            # Cursor IDE Config
│   ├── windsurf/.windsurfrules        # Windsurf IDE Config
│   └── ollama/Modelfile               # Ollama Local Model Config
├── bin/install.js                     # Multi-Agent Auto-Installer
├── package.json
└── README.md
```

## ⚡ 1-Command Automated Installation

Install this skill instantly for your favorite AI environment in 1 second:

### 1. 🌴 Antigravity / Gemini AI (Global)
```bash
npx southern-vietnamese-persona-skill gemini
```

### 2. 🖱️ Cursor IDE (Project Level)
```bash
npx southern-vietnamese-persona-skill cursor
```

### 3. 🌊 Windsurf IDE (Project Level)
```bash
npx southern-vietnamese-persona-skill windsurf
```

### 4. 🧩 Continue.dev (VSCode Extension)
```bash
npx southern-vietnamese-persona-skill continue
```

### 5. 🦙 Ollama (Local LLM)
```bash
ollama create southern-ai -f integrations/ollama/Modelfile
```

### 6. 🤖 ChatGPT / Custom GPTs / Claude
Simply import or reference [`SYSTEM_PROMPT.md`](SYSTEM_PROMPT.md).

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

## ⭐ Star History

<a href="https://starchart.cc/tchiphuong/southern-vietnamese-persona-skill">
  <img src="https://starchart.cc/tchiphuong/southern-vietnamese-persona-skill.svg" alt="Star History Chart" width="100%" />
</a>

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📬 Contact & Support

Project Link: [https://github.com/tchiphuong/southern-vietnamese-persona-skill](https://github.com/tchiphuong/southern-vietnamese-persona-skill)

If you encounter any issues or have feature requests, please [open an issue](https://github.com/tchiphuong/southern-vietnamese-persona-skill/issues).

---
<div align="center">
  <i>Made with ❤️ by the open source community</i>
</div>
