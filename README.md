<div align="center">
  <img src="https://raw.githubusercontent.com/google/material-design-icons/master/png/social/mood/materialicons/48dp/2x/baseline_mood_black_48dp.png" alt="Logo" width="80" height="80">
  
  <h1>🌴 Southern Vietnamese Persona Skill</h1>
  <p><i>Breathe life into your AI Assistant with a humble, authentic Southern Vietnamese persona powered by Senior/Principal Engineer level technical expertise.</i></p>

  [![npm version](https://img.shields.io/npm/v/southern-vietnamese-persona-skill.svg?style=for-the-badge&color=success)](https://www.npmjs.com/package/southern-vietnamese-persona-skill)
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
  <a href="https://github.com/tchiphuong/southern-vietnamese-persona/issues">Report Bug</a>
  ·
  <a href="https://github.com/tchiphuong/southern-vietnamese-persona/issues">Request Feature</a>
</div>

---

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#-overview">Overview</a></li>
    <li><a href="#-why-this-persona">Why This Persona?</a></li>
    <li><a href="#-key-features">Key Features</a></li>
    <li>
      <a href="#-installation">Installation</a>
      <ul>
        <li><a href="#method-1-global-installation-via-npx-recommended">Method 1: npm / npx</a></li>
        <li><a href="#method-2-workspace-specific-installation">Method 2: Workspace-Specific</a></li>
        <li><a href="#method-3-manual-global-installation">Method 3: Manual</a></li>
      </ul>
    </li>
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

## 🤖 Multi-Agent Compatibility

| AI Platform / Agent | Support Level | Installation Method |
| :--- | :--- | :--- |
| **Antigravity / Gemini** | 🟢 Native | `npx southern-vietnamese-persona-skill` (or `gemini`) |
| **Cursor IDE** | 🟢 Native | `npx southern-vietnamese-persona-skill cursor` (creates `.cursorrules`) |
| **Windsurf IDE** | 🟢 Native | `npx southern-vietnamese-persona-skill windsurf` (creates `.windsurfrules`) |
| **Continue.dev** | 🟢 Native | `npx southern-vietnamese-persona-skill continue` |
| **ChatGPT / Custom GPTs** | 🟢 Universal | Copy prompt from `SYSTEM_PROMPT.md` |
| **Claude Desktop** | 🟢 Universal | Copy prompt from `SYSTEM_PROMPT.md` |
| **Ollama / Open WebUI** | 🟢 Universal | Copy prompt from `SYSTEM_PROMPT.md` into System Message |

## 🚀 Installation

We offer multiple installation methods depending on your setup and how broadly you want to apply the persona.

### Method 1: Global Installation via npx (Recommended)

The easiest way to install the skill globally is by using `npx`. This automated script will locate your system's AI config directory and securely copy the skill files.

```bash
# Run this command anywhere in your terminal
npx southern-vietnamese-persona-skill
```

### Method 2: Workspace-Specific Installation

If you prefer to keep this persona scoped only to a specific project (e.g., a specific repository), you can install it locally:

1. Create a `.agents` directory at the root of your project.
2. Copy the `skills/southern-vietnamese-persona` directory from this repository into `.agents/skills/`.

Your project structure should look like this:
```text
my-awesome-project/
├── .agents/
│   └── skills/
│       └── southern-vietnamese-persona/
│           └── SKILL.md
├── src/
├── package.json
└── README.md
```

### Method 3: Manual Global Installation

To manually install the skill across all your projects without using npm:

1. Clone or download this repository.
2. Copy the `skills/southern-vietnamese-persona` directory into your global AI config directory:
   - **Windows:** `C:\Users\<username>\.gemini\config\skills\`
   - **macOS / Linux:** `~/.gemini/config/skills/`

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

See how our community is growing! If you like this project, please consider giving it a star.

[![Star History Chart](https://api.star-history.com/svg?repos=tchiphuong/southern-vietnamese-persona-skill&type=Date)](https://star-history.com/#tchiphuong/southern-vietnamese-persona-skill&Date)

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📬 Contact & Support

Project Link: [https://github.com/tchiphuong/southern-vietnamese-persona-skill](https://github.com/tchiphuong/southern-vietnamese-persona-skill)

If you encounter any issues or have feature requests, please [open an issue](https://github.com/tchiphuong/southern-vietnamese-persona-skill/issues).

---
<div align="center">
  <i>Made with ❤️ by the open source community</i>
</div>
