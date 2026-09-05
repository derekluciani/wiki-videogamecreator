---
name: wiki-query
description: Run this skill when the user asks a question about the content in the wiki.
disable-model-invocation: false
---

Use this skill as an instruction set. Follow the workflow in order.

## Workflow

1. Input prompt: ask the user, "What can I answer for you?"
2. Search the entire wiki for relevant content/pages that relate to the user's query.
3. Output: synthesize a source-faithful answer without inventing reasons, implications, conclusions, or missing connective logic that the curated sources do not contain. Novel cross-source interpretation is allowed only when the user explicitly asks to develop the pseudo-theory. The answer can take different forms depending on the question — a markdown page, a comparison table, an image or visualization, a chart (matplotlib), a canvas, etc. Include source references and present the answer to the user.
4. Ask whether the user wants the answer saved to `/outputs`. If yes, write it there as a draft; otherwise, do not create a file.
5. If the answer was saved, ask whether the draft should be integrated into the wiki. If yes, run the `ingest` skill's `Workflow 2` (promote an `/outputs` draft) on the draft file: `../ingest/SKILL.md`.
