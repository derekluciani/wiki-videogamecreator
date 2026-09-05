---
name: wiki-ingest
description: Run this skill when the user asks to ingest a new document into the wiki.
disable-model-invocation: false
---

If the user asks to ingest a document from the `/raw` directory, proceed to `Workflow 1`. Ingest raw sources one at a time.
If the user asks to ingest a document from the `/outputs` directory, proceed to `Workflow 2`.

Both workflows distribute *synthesis* into the wiki's synthesis pages. They never create a page that merely mirrors a single document. Every page that takes content from a source must list that source by title in its footer-level `Sources` section; do not add inline citation markers (see `AGENTS.md`).

## Workflow 1 — ingest a `/raw` source

1. Read the document and prepare an exhaustive ingestion preview that includes:
   - the source's identified themes;
   - the distinct material to preserve;
   - the existing wiki pages that would change;
   - any proposed new pages, page splits/merges, recategorization, or other structural reorganization;
   - anything judged redundant or unrelated that would not be carried into the wiki;
   - once the dedicated pseudo-theory page exists, any supported addition, revision, or challenge the source could contribute to it.
2. Present the ingestion preview to the user and recommend whether each theme should be folded into existing wiki page(s) or added as a net-new page in the `/wiki` directory. Explain how any proposed structural reorganization benefits the reader. Ask for user approval before modifying the wiki.
3. If a net-new page is created, use a renamed copy of `html_template.html` for consistent styling, then structure the content per the page-structure convention in `AGENTS.md`.
4. Integrate the source-faithful synthesis and add the immutable `/raw` source by title to each affected page's footer-level `Sources` section, linking to the source file in `/raw`. Do not add inline citation markers.
5. If necessary, update `index.html` with a new `listing` (Title, one-line summary, link to page) in the appropriate category.
6. Update all existing cross-references and `Related pages` sections across the wiki.
7. Append an `entry` to `log.html`. Name the ingested raw filename and every synthesis page affected. Ensure the latest entry is added to the top of the list.

## Workflow 2 — promote an `/outputs` draft

1. Read the draft. (Do not re-present its takeaways — the content was already reviewed with the user during the query that produced it.) Prepare an exhaustive promotion preview that identifies:
   - the existing wiki pages that would change;
   - any proposed new pages, page splits/merges, recategorization, or other structural reorganization;
   - any material judged redundant or unrelated that would not be promoted.
2. Present the promotion preview and recommend where each part of the draft should be integrated. Explain how any proposed structural reorganization benefits the reader. Ask for user approval before modifying the wiki.
3. If a net-new page is created, use a renamed copy of `html_template.html` for consistent styling, then structure the content per the page-structure convention in `AGENTS.md`.
4. Integrate the source-faithful synthesis. Preserve the draft's originating `/raw` sources as title-only links in each affected page's footer-level `Sources` section, removing inline citation markers if present.
5. If necessary, update `index.html` with a new `listing` (Title, one-line summary, link to page) in the appropriate category.
6. Update all existing cross-references and `Related pages` sections across the wiki.
7. Append an `entry` to `log.html`. Ensure the latest entry is added to the top of the list.
8. Delete the original `/outputs` draft file — the wiki page and log entry are now the source of truth.
