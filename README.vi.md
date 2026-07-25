<div align="center">
  <img src="https://raw.githubusercontent.com/google/material-design-icons/master/png/social/mood/materialicons/48dp/2x/baseline_mood_black_48dp.png" alt="Logo" width="80" height="80">
  
  <h1>🌴 Southern Vietnamese Persona Framework</h1>
  <p><i>Khung Persona AI Nam Bộ tiên tiến nhất thế giới, kết hợp ngôn ngữ học xã hội chuẩn xác, cấp độ đậm chất vùng miền tùy chỉnh (0-100), năng lực Kỹ sư Senior/Principal và hỗ trợ đa nền tảng AI.</i></p>

  [ 🇺🇸 English ](README.md) | [ 🇻🇳 Tiếng Việt ](README.vi.md)

  <br /><br />

  [![npm version](https://img.shields.io/npm/v/southern-vietnamese-persona-skill.svg?style=for-the-badge&color=success)](https://www.npmjs.com/package/southern-vietnamese-persona-skill)
  [![GitHub Stars](https://img.shields.io/github/stars/tchiphuong/southern-vietnamese-persona-skill?style=for-the-badge&logo=github&color=gold)](https://github.com/tchiphuong/southern-vietnamese-persona-skill/stargazers)
  [![Validate Skill Format](https://github.com/tchiphuong/southern-vietnamese-persona-skill/actions/workflows/validate.yml/badge.svg)](https://github.com/tchiphuong/southern-vietnamese-persona-skill/actions)
  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](http://makeapullrequest.com)
  [![Made for AI](https://img.shields.io/badge/Made%20for-AI%20Agents-orange?style=for-the-badge)]()
  
  <br />
  <a href="#-tổng-quan"><strong>Xem tài liệu hướng dẫn »</strong></a>
  <br />
  <br />
  <a href="#-ví-dụ-giao-tiếp-thực-tế">Xem Demo</a>
  ·
  <a href="https://github.com/tchiphuong/southern-vietnamese-persona-skill/issues">Báo lỗi Bug</a>
  ·
  <a href="https://github.com/tchiphuong/southern-vietnamese-persona-skill/issues">Yêu cầu tính năng</a>
</div>

---

<details>
  <summary>Mục Lục (Table of Contents)</summary>
  <ol>
    <li><a href="#-tổng-quan">Tổng Quan</a></li>
    <li><a href="#-tại-sao-nên-dùng-persona-này">Tại Sao Nên Dùng Persona Này?</a></li>
    <li><a href="#-tính-năng-nổi-bật">Tính Năng Nổi Bật</a></li>
    <li><a href="#-khả-năng-tương-thích-đa-nền-tảng-ai">Khả Năng Tương Thích Đa Nền Tảng AI</a></li>
    <li><a href="#-cấu-trúc-thư-mục">Cấu Trúc Thư Mục</a></li>
    <li><a href="#-cài-đặt-tự-động-1-dòng-lệnh">Cài Đặt Tự Động 1-Dòng Lệnh</a></li>
    <li><a href="#-hướng-dẫn-sử-dụng--ví-dụ-thực-tế">Hướng Dẫn Sử Dụng & Ví Dụ Thực Tế</a></li>
    <li><a href="#-tùy-chỉnh-cấu-hình">Tùy Chỉnh Cấu Hình</a></li>
    <li><a href="#-câu-hỏi-thường-gặp-faq">Câu Hỏi Thường Gặp (FAQ)</a></li>
    <li><a href="#-đóng-góp-cộng-đồng">Đóng Góp Cộng Đồng</a></li>
    <li><a href="#-giấy-phép-bản-quyền">Giấy Phép Bản Quyền</a></li>
    <li><a href="#-liên-hệ--hỗ-trợ">Liên Hệ & Hỗ Trợ</a></li>
  </ol>
</details>

---

## 📖 Tổng Quan

**Southern Vietnamese Persona Skill** là bộ cấu hình Persona toàn năng thiết kế dành cho tất cả các AI Assistants & LLM Agents hàng đầu hiện nay (Antigravity, Gemini, Claude, ChatGPT/Codex, Cursor, Windsurf, Ollama, Open WebUI, Continue.dev, Roo Code/Cline, Aider...). Nó xóa bỏ hoàn toàn giọng điệu robot khô khan, rập khuôn của AI mặc định và thổi vào đó một tính cách Miền Tây Nam Bộ cực kỳ gần gũi, vui tính và chân chất.

Hãy tưởng tượng bạn đang pair-programming với một kỹ sư phần mềm Miền Tây vừa khiêm tốn xưng *"em"* - gọi *"anh/chị"*, vừa giao tiếp mộc mạc bằng các cụm từ *"dạ"*, *"nè anh"*, *"khúc này"*, *"vầy"*, *"mèn đéc ơi"*, nhưng lại sở hữu **trình độ kỹ thuật Senior/Principal Engineer** đỉnh cao, viết code chuẩn production và tối ưu hóa hiệu năng xuất sắc.

## 🎯 Khi Nào Nên Dùng
- **Pair Programming & Code Review:** Khi bạn muốn có một đồng nghiệp AI năng nổ, hài hước cùng lập trình hằng ngày.
- **Tư Vấn Kiến Trúc & Fix Bug:** Cung cấp giải pháp kỹ thuật chuyên sâu, sạch sẽ mà không dùng văn phong lý thuyết khô cứng.
- **Học Tập & Làm Việc Giải Trí:** Dành cho lập trình viên yêu thích tiếng lóng mạng xã hội (Facebook, TikTok, Threads) và phong vị sông nước Nam Bộ.

## 🚫 Khi Nào KHÔNG Nên Dùng
- Khi phát sinh các yêu cầu tạo văn bản pháp lý nghiêm ngặt, hợp đồng tuân thủ doanh nghiệp đòi hỏi ngôn ngữ hành chính chuẩn mực.

## 🎯 Tại Sao Nên Dùng Persona Này?

Các AI Agent mặc định thường dính phải các vấn đề về trải nghiệm người dùng (UX):
1. **Giọng điệu Robot:** Nói chuyện xã giao khô cứng như tổng đài viên CSKH.
2. **Xu hướng Giảng Đạo:** Dễ bị lặp lại các đoạn giải thích dài dòng không cần thiết.
3. **Thiếu Cá Tính:** Thiếu sự kết nối con người để giúp các buổi code dài bớt căng thẳng.

Skill này giải quyết triệt để vấn đề bằng một Persona giàu bản sắc văn hóa, biến trợ lý AI từ một công cụ vô hồn thành một người bạn đồng hành đáng tin cậy.

## ✨ Tính Năng Nổi Bật

- **🗣️ Ngôn Ngữ Chuẩn Nam Bộ:** Prompt được tinh chỉnh tỉ mỉ giúp AI sử dụng đại từ nhân xưng và từ vựng địa phương chuẩn xác mà không bị quá đà.
- **💪 Trình Độ Kỹ Thuật Senior/Principal:** Dù thái độ khiêm tốn và gần gũi, năng lực lập trình, thiết kế hệ thống và chất lượng code bắt buộc phải đạt cấp độ **Senior / Principal Engineer** (sạch sẽ, bảo mật, tối ưu).
- **🤝 Giao Tiếp Ngang Hàng:** AI cư xử như một đồng nghiệp trẻ trung, năng động. Tuyệt đối không dùng câu từ xã giao AI ("Với tư cách là một mô hình ngôn ngữ...").
- **⚡ Trọng Tâm Công Việc & Ngắn Gọn:** Ưu tiên xuất ra code và giải pháp thực tế trước, giải thích giữ ngắn gọn, đi thẳng vào trọng tâm.
- **📱 Nhạy Bắt Trend FB/TikTok/Threads:** Tự động hấp thụ và sử dụng tiếng lóng mới nhất (ví dụ: *"dữ liệu không khớp với server gốc"*, *"giảm sức mạnh con tướng này giúp em"*, *"tuyệt đối điện ảnh"*, *"keo lỳ"*, *"đỉnh nóc kịch trần"*, *"cảm lạnh"*).
- **🛡️ Cơ Chế Bảo Vệ Prompt:** Đảm bảo AI luôn giữ thái độ tôn trọng, chuyên nghiệp và không bị lộ prompt nội bộ.

## 🤖 Khả Năng Tương Thích Đa Nền Tảng AI

Dự án đi kèm các tệp cấu hình sẵn trong thư mục [`integrations/`](integrations/). Không cần copy-paste thủ công—chạy 1 dòng lệnh là xong!

| AI Platform / Agent | Tệp Cấu Hình Sinh Ra | Lệnh Cài Đặt 1-Dòng |
| :--- | :--- | :--- |
| **Antigravity / Gemini** | `~/.gemini/config/skills/southern-vietnamese-persona/` | `npx southern-vietnamese-persona-skill antigravity` |
| **Claude Code & Desktop** | `CLAUDE.md` | `npx southern-vietnamese-persona-skill claude` |
| **OpenAI Codex / ChatGPT** | `.codexrules` | `npx southern-vietnamese-persona-skill codex` |
| **Cursor IDE** | `.cursorrules` & `.cursor/rules/*.mdc` | `npx southern-vietnamese-persona-skill cursor` |
| **Windsurf IDE** | `.windsurfrules` | `npx southern-vietnamese-persona-skill windsurf` |
| **Continue.dev** | `~/.continue/prompts/*.prompt` | `npx southern-vietnamese-persona-skill continue` |
| **Roo Code / Cline** | `.clinerules` & `.roorules` | `npx southern-vietnamese-persona-skill roo` |
| **Aider AI CLI** | `CONVENTIONS.md` | `npx southern-vietnamese-persona-skill aider` |
| **Universal AGENTS.md** | `AGENTS.md` | `npx southern-vietnamese-persona-skill agents` |
| **Ollama (Local LLM)** | Local LLM Persona | `ollama create southern-ai -f integrations/ollama/Modelfile` |

## 📁 Cấu Trúc Thư Mục

```text
southern-vietnamese-persona-skill/
├── skills/                            # Định dạng Skill chuẩn cho Antigravity & Gemini
│   └── southern-vietnamese-persona/
│       ├── SKILL.md                   # Điểm khởi chạy & Chỉ dẫn gốc Framework v2.0
│       └── references/
│           ├── identity.md            # Các cấp độ Southern Intensity (0-100) & Tầm nhìn
│           ├── language.md            # Ngôn ngữ học xã hội, Ngữ điệu & Đại từ nhân xưng
│           ├── pragmatics.md          # Quy tắc ứng xử, từ chối khéo & khen ngợi
│           ├── dictionary.md          # 100+ Từ vựng, Thành ngữ sông nước & Trend mạng
│           ├── anti-patterns.md       # Quy tắc chống biến tấu quá đà & giữ chất Senior
│           ├── self-check.md          # Danh mục tự kiểm tra chất lượng trước khi trả lời
│           └── dialects/              # Profiles Vùng Miền Riêng Biệt
│               ├── saigon.md          # Profile Sài Gòn Đô Thị Công Nghệ
│               └── cantho.md          # Profile Cần Thơ / Trung Tâm Miền Tây Ngọt Ngào
├── benchmark/
│   └── eval_suite.md                  # Bộ Kịch Bản Kiểm Thử 200 Scenarios Đa Ngành
├── integrations/                      # Bộ Cấu Hình Sẵn Cho Đa AI Agents & IDEs
│   ├── claude/CLAUDE.md               # Cấu hình chuẩn cho Claude Code & Claude Desktop
│   ├── cursor/.cursorrules            # Cấu hình cho Cursor IDE (.cursorrules & .mdc)
│   ├── windsurf/.windsurfrules        # Cấu hình cho Windsurf IDE
│   ├── codex/CODEX.md                 # Cấu hình cho OpenAI Codex / ChatGPT
│   └── ollama/Modelfile               # Cấu hình cho Ollama Local Model
├── bin/install.js                     # Trình cài đặt tự động đa nền tảng
├── SYSTEM_PROMPT.md                   # System Prompt Export toàn năng
├── LICENSE                            # Giấy phép bản quyền MIT (Trần Chí Phương)
├── SECURITY.md                        # Chính sách bảo mật mã nguồn
├── CODE_OF_CONDUCT.md                 # Quy tắc ứng xử cộng đồng
├── CITATION.cff                       # Trích dẫn khoa học
├── README.md                          # Tài liệu tiếng Anh
└── README.vi.md                       # Tài liệu tiếng Việt chi tiết 1-đối-1
```

## ⚡ Cài Đặt Tự Động 1-Dòng Lệnh

Cài đặt skill tức thì cho môi trường AI yêu thích của bạn trong 1 giây:

```bash
# Cài đặt cho TẤT CẢ các AI Agents trong dự án hiện tại cùng lúc:
npx southern-vietnamese-persona-skill
```

Hoặc cài đặt riêng cho từng AI Agent cụ thể:

| AI Agent / IDE / Framework | Lệnh Cài Đặt | Tệp Cấu Hình Sinh Ra |
| :--- | :--- | :--- |
| 🌴 **Antigravity / Gemini AI** | `npx southern-vietnamese-persona-skill antigravity` | `~/.gemini/config/skills/southern-vietnamese-persona/` |
| 🧡 **Claude Code & Desktop** | `npx southern-vietnamese-persona-skill claude` | `CLAUDE.md` |
| 🤖 **OpenAI Codex / ChatGPT / Copilot** | `npx southern-vietnamese-persona-skill codex` | `.codexrules` |
| 🖱️ **Cursor IDE** | `npx southern-vietnamese-persona-skill cursor` | `.cursorrules` & `.cursor/rules/*.mdc` |
| 🌊 **Windsurf IDE** | `npx southern-vietnamese-persona-skill windsurf` | `.windsurfrules` |
| 🧩 **Continue.dev (VSCode/JetBrains)** | `npx southern-vietnamese-persona-skill continue` | `~/.continue/prompts/*.prompt` |
| 🦘 **Roo Code / Cline** | `npx southern-vietnamese-persona-skill roo` | `.clinerules` & `.roorules` |
| 🎯 **Aider AI CLI** | `npx southern-vietnamese-persona-skill aider` | `CONVENTIONS.md` |
| 🌐 **Universal AGENTS.md** | `npx southern-vietnamese-persona-skill agents` | `AGENTS.md` |
| 🦙 **Ollama (Local LLM)** | `ollama create southern-ai -f integrations/ollama/Modelfile` | Custom Local LLM Persona |

## 💡 Hướng Dẫn Sử Dụng & Ví Dụ Thực Tế

Sau khi cài đặt, skill sẽ tự động kích hoạt mỗi khi AI xử lý yêu cầu của bạn. Bạn không cần gõ lệnh đặc biệt nào, chỉ cần trò chuyện tự nhiên.

### 🎭 Ví Dụ Thực Tế

> **👨‍💻 Bạn:** "Viết cho anh một hàm fetch data từ API đi, nhớ handle lỗi đàng hoàng nha."
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

## ⚙️ Tùy Chỉnh Cấu Hình

Bạn có thể dễ dàng điều chỉnh Persona cho phù hợp với sở thích cá nhân bằng cách chỉnh sửa tệp `SKILL.md`:
- **Đại từ xưng hô:** Nếu bạn muốn AI gọi bạn bằng danh xưng khác, chỉ cần sửa quy tắc *"always address the user as..."*.
- **Mức độ đậm chất vùng miền:** Bạn có thể thêm hoặc bớt các từ lóng trong tệp từ điển để tăng/giảm chất Nam Bộ.

## ❓ Câu Hỏi Thường Gặp (FAQ)

**Q: Cấu hình này có làm ảnh hưởng đến khả năng viết code của AI không?**  
A: Hoàn toàn không! Skill yêu cầu AI ưu tiên hàng đầu cho chất lượng code và độ tối ưu. Nó chỉ thay đổi *lớp vỏ giao tiếp* xung quanh đoạn code.

**Q: AI có trả lời bằng tiếng Anh nếu tôi hỏi bằng tiếng Anh không?**  
A: Có! AI sẽ phản hồi bằng tiếng Anh nếu bạn yêu cầu, nhưng vẫn giữ tinh thần khiêm tốn và sẵn sàng giúp đỡ.

**Q: Tôi có thể dùng skill này cho các framework AI Agent khác không?**  
A: Có, tất cả các framework AI hỗ trợ file prompt/system prompt bằng Markdown đều tương thích 100%.

## 🤝 Đóng Góp Cộng Đồng

Sự đóng góp của cộng đồng chính là động lực lớn nhất của mã nguồn mở. Mọi đóng góp của bạn đều được **trân trọng sâu sắc**.

1. Fork Dự án
2. Tạo Nhánh Tính năng (`git checkout -b feature/TinhNangMoi`)
3. Commit Thay đổi (`git commit -m 'Thêm tính năng TinhNangMoi'`)
4. Push lên Nhánh (`git push origin feature/TinhNangMoi`)
5. Mở một Pull Request

## ⭐ Star History

<a href="https://www.star-history.com/?repos=tchiphuong%2Fsouthern-vietnamese-persona-skill&type=date&legend=top-left">
  <img src="https://api.star-history.com/svg?repos=tchiphuong/southern-vietnamese-persona-skill&type=Date" alt="Star History Chart" width="100%" />
</a>

## 📄 Giấy Phép Bản Quyền

Phát hành theo giấy phép [MIT License](LICENSE). Bản quyền © 2026 **Trần Chí Phương (tchiphuong)**.

## 📬 Liên Hệ & Hỗ Trợ

Link Dự án: [https://github.com/tchiphuong/southern-vietnamese-persona-skill](https://github.com/tchiphuong/southern-vietnamese-persona-skill)

Nếu bạn gặp phải bất kỳ lỗi nào hoặc muốn đề xuất tính năng mới, vui lòng [mở một Issue](https://github.com/tchiphuong/southern-vietnamese-persona-skill/issues).

---
<div align="center">
  <i>Được làm bằng ❤️ bởi cộng đồng mã nguồn mở</i>
</div>
