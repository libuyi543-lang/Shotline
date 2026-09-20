# Shotline

> **"Give every shot a compelling narrative reason."**  
> A structured story-to-shot workflow for cinematic AI video creation: from dramatic beats and shot purposes to cut logic and production-grade video prompts.

[🎬 Live Interactive Studio](https://libuyi543-lang.github.io/Shotline/) · [📖 中文说明 (Chinese)](README.md) · [⚡ Quickstart](docs/quickstart.md) · [📝 Shot Breakdown Example](examples/changan-shot-breakdown.md)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Zero-Setup Prototype](https://img.shields.io/badge/Web%20Demo-No%20Login%20%2F%20No%20Key-success)](https://libuyi543-lang.github.io/Shotline/)
[![Prompt Standards](https://img.shields.io/badge/Prompt-Midjourney%20%7C%20Runway%20%7C%20Luma-orange)](prompts/)

![Shotline storyboard workspace](docs/images/shotline-demo.png)

> 💡 **Project Scope**: A structured story/storyboard toolkit plus an in-browser interactive prototype. Zero setup, no API key needed. Focuses on **shot sequencing, prompt parameter synchronization, and JSON export**, allowing creators to audit narrative logic before spending video generation credits.

---

## 🎯 Key Capabilities

1. **Dramatic Beat to Scene Architecture**: Breaks down abstract ideas into central questions, character desires, and three-act beats before generating visuals.
2. **Cinematic Shot Planning**: Systematically guides framing, camera movement, spatial axis consistency, and cut motivation.
3. **Cross-Model Prompt Protocols**: Ready-to-use prompt blueprints tested across ChatGPT, Claude, and AI video generators.
4. **Zero-Dependency Web Studio**: Try sample shot lists, reorder sequences, tweak parameters, and export clean JSON without logging in.

## ⚡ Try It in 60 Seconds

Run the interactive studio locally with standard Python:

```bash
git clone https://github.com/libuyi543-lang/Shotline.git
cd Shotline
python3 -m http.server 4317 --bind 127.0.0.1 --directory demo
# Open http://127.0.0.1:4317 in your browser
```

Check out [docs/project-notes.md](docs/project-notes.md) and [CONTRIBUTING.md](CONTRIBUTING.md) for details. Licensed under [MIT](LICENSE).
