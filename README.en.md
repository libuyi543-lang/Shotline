# Shotline

Story-first shot planning: explain what each shot does, whose viewpoint it follows, and why the cut happens.

[Try the demo](https://libuyi543-lang.github.io/Shotline/) · [中文](README.md)

![Shotline storyboard workspace](docs/images/shotline-demo.png)

A reusable story/storyboard toolkit plus an editable browser prototype. The demo uses one fixed example; it does not call an AI API, analyze new scenes, or generate video. No sign-up or API key required.

- Develop a story with [workflows](story-writing/workflow.md), [prompts](prompts/story-writing-template.md), and [review checklists](story-writing/checklist.md).
- Plan shots using [purpose, viewpoint and cut logic](storyboard/workflow.md).
- Edit, reorder, reset and export sample shots as JSON in the [prototype](demo/).

Run locally: `python3 -m http.server 4317 --bind 127.0.0.1 --directory demo`.

[Project scope](docs/project-notes.md) · [Contributing](CONTRIBUTING.md) · [MIT license](LICENSE)
