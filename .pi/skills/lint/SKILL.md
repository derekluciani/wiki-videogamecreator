---
name: wiki-lint
description: Run this skill when the user asks to check the content quality of the wiki.
disable-model-invocation: false
---

Use this skill as an instruction set. Follow the workflow in order.

## Workflow

1. The user will periodically ask the LLM to run a content quality health-check. Look for:
  - contradictions introduced by the wiki's organization or paraphrasing;
  - source-derived disagreements that are not yet preserved visibly and consistently across the relevant pages (do not resolve them or choose a winner)
  - claims explicitly corrected or revised by their original source (recency or disagreement alone does not supersede trusted material)
  - orphan pages with no inbound links
  - important concepts mentioned but lacking their own page
  - missing cross-references
  - internal coverage gaps evident from the curated corpus.

   The wiki's knowledge boundary is the user's curated inputs. Do not search for or recommend external material unless the user explicitly requests it.
2. Report back with changes to make, but only if necessary.
