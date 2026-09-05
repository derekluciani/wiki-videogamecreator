## Wiki Purpose

- **Video Game Creator** is a knowledge instrument that converts the user's curated game-creation sources into an evolving, source-faithful network of synthesis pages.
- Its primary payoff is deeper understanding: it recaptures more material than a reader can practically remember in a form optimized for comprehension, browsing, and relearning.
- Optimization comes primarily from organization, consolidation, layered presentation, and cross-linking—not from deleting detail.
- The wiki covers anything in the curated corpus that materially improves understanding of how games are conceived, designed, built, experienced, tested, positioned, sold, or culturally adopted. This may include relevant psychology, technology, art, production, business, and sociology.
- The corpus mirrors the material the user provides. It does not manufacture balance across topics or fill gaps with outside knowledge.

## Intended Reader

- Assume the reader is a creative and commercially minded solo game creator interested in every aspect of video game creation.
- The resource should remain valuable to any video game creator, regardless of experience level.
- Preserve each source's original genre, platform, audience, team, budget, production, and commercial context. Do not infer or add adaptations for solo creators.
- Do not add background explanations that the source does not provide. When the corpus already contains useful background, connect it through in-body links to the relevant synthesis page.
- Creative ambition and commercial viability are legitimate, coequal concerns. Do not automatically subordinate one to the other.
- Remain extremely neutral across genres, platforms, production styles, and business models.

## Personal Long-Term Goal

Over time, the curator hopes patterns in the corpus will support an emergent pseudo-theory connecting video game genre trends with human psychological needs. This is a personal aspiration, not an organizing doctrine, coverage constraint, prescribed formula, or general forcing function for the wiki.

- Do not create a pseudo-theory page until the corpus contains enough relevant source material to support substantive content.
- Once created, treat it as a living cross-source synthesis page and assess every newly ingested source for a supported addition, revision, or challenge.
- Its interpretations must arise from patterns in the curated corpus.
- A one-line note beneath its title must state that the page contains provisional, emergent cross-source interpretation. It does not require repeated labels separating observation from interpretation.
- This is the only wiki page allowed to develop novel cross-source interpretations. Every proposed update still requires the user's approval through the ingestion workflow.

## Knowledge and Trust Boundaries

- Only the user's curated inputs may contribute knowledge to the wiki. Do not silently add outside information, conduct external research, or recommend outside sources unless the user explicitly requests it.
- Treat every curated source as already trusted enough to contribute. Do not routinely grade evidence quality or attach evidence-strength labels.
- Preserve explicit uncertainty when a source expresses it, and preserve disagreement when sources conflict.
- Recency alone does not supersede trusted material. Retain older and newer guidance unless a newer source is explicitly a correction or revision of the older source.
- Ordinary synthesis pages and ordinary query outputs must not invent reasons, implications, conclusions, reconciliations, contextual explanations, or missing connective logic.

## Wiki Structural Model

The wiki is a graph of theme-based synthesis pages derived from raw documents. Raw documents are inputs and references, never pages of their own.

### `/raw`

A directory of source documents (articles, papers, transcripts, images, data files, and similar material) curated by the user.

- The LLM may read but never modify raw files. The user owns this layer entirely.
- Ingest one raw source at a time.
- If the user later removes a raw file, retain its synthesized material and existing reference. Ignore raw-file location status; do not remove content or emit lint warnings solely because the file is missing.

### `/wiki`

A directory of mutable HTML synthesis pages owned and maintained by the LLM. The LLM is responsible for:

1. Creating and updating synthesis pages when sources are ingested.
2. Maintaining navigation, in-body cross-links, and related-page links.
3. Keeping organization and source-derived content consistent.
4. Suggesting structural reorganization whenever it would benefit the reader, then waiting for user approval before applying it.

### `/outputs`

A directory for substantive query artifacts that the user explicitly chooses to save. Query answers are not saved automatically.

### `/skills`

A directory of repeatable workflow instructions invoked by the user.

## Synthesis Policy

### Preservation first

- A synthesis page should normally eliminate the need to reopen its raw sources. Raw files remain provenance records, but the reader is not expected to revisit them.
- When uncertain whether a source detail may matter later, retain it.
- Preserve every distinct actionable recommendation together with its stated conditions, rationale, caveats, examples, and failure modes.
- Preservation is more important than stylistic consistency. Minimize transformation of substantive wording and detail.
- Make practical advice easy to scan without converting it into newly invented principles, workflows, conclusions, or universal rules.
- For interviews, panels, podcasts, and other multi-speaker sources, retain speaker attribution wherever it is available and meaningful, especially for disagreements or differing experiences.
- Preserve dates, eras, platform states, and tool versions in the body when the source makes that context materially relevant. Do not infer unstated time limitations.

### Permitted consolidation and omission

- Consolidate advice only when it is substantively equivalent. Preserve meaningful variations and retain every contributing source in the page footer.
- Remove repetition when multiple sources present a genuinely equivalent point or a clear explicit pattern.
- Omit only content that is clearly redundant, incidental, or unrelated to the wiki's broad game-creation scope.
- Incidental material includes non-substantive advertisements, sponsorship messages, navigation text, repeated introductions, transcription artifacts, and off-topic conversation. Preserve anecdotes, examples, qualifications, and tangents when they contain game-creation knowledge.
- Never “fill gaps.” When sources conflict, preserve their positions without inventing a reconciliation. Reconcile only if the reconciliation itself is explicitly present in the curated sources.

### Connections without duplication

- When material applies to multiple themes, place its full treatment on the page where it fits best.
- Include enough substantive context on other applicable pages for them to remain understandable, then add an in-body link to the fuller treatment.
- Prefer clear contextual cross-links over wholesale duplication or context-free references.

### Visual and structured material

- Preserve original images, diagrams, tables, datasets, and other assets supplied in `/raw` when they carry substantive information.
- New tables and diagrams may reorganize explicit source content when useful, but they must not add interpretation and must be distinguishable from original assets.
- Novel interpretive visualizations are permitted only on the future pseudo-theory page.

## Information Architecture

- Categories, pages, and page boundaries emerge from themes and patterns in the curated corpus, not from source boundaries or a predefined ontology.
- Create a synthesis page when a theme forms a coherent, reusable subject that a reader might intentionally seek or revisit. Keep narrower material as a section until it can stand on its own.
- Never create a page that merely mirrors or summarizes one raw document.
- Assign each page to one primary index category. Express overlap through in-body links and the `Related pages` footer list rather than duplicate index listings.
- Keep the catalog shallow; do not add nested subcategories.
- Maintain a logical, non-alphabetical catalog order, generally moving from foundational material toward specialized or applied material.
- Categories and pages may be split, merged, renamed, recategorized, or reordered when a better thematic structure emerges. Propose the change and explain its reader benefit during ingestion, then wait for approval.
- When pages are renamed or merged, update all internal links. Do not retain redirect pages for old URLs.
- Do not add full-text search or tables of contents.

## Key Files

### `index.html`

The front door and content-oriented catalog of every synthesis page.

- Title: **Video Game Creator**
- Description: *A source-faithful synthesis of practical and conceptual knowledge for creative, commercially minded solo game creators.*
- Represent every synthesis page with one listing containing its title, one-line summary, and hyperlink.
- Organize listings into emergent, shallow categories in logical rather than alphabetical order.

### `wiki/log.html`

An append-only chronological record with newest entries at the top.

- Entry naming convention: `[YYYY-MM-DD] | Synthesis Title`
- Record every approved ingestion, promotion, page creation, split, merge, rename, recategorization, or substantial synthesis revision.
- Omit purely cosmetic or mechanical fixes.
- Every ingestion entry must name the ingested raw filename and the synthesis pages affected. The log serves as the ingestion ledger.

### `wiki/html_template.html`

A styling reference used when creating synthesis pages. It is not itself a synthesis page or a rigid body schema.

### `wiki/styles.css` and `wiki/wiki-nav.js`

Shared presentation and navigation resources.

## Synthesis Page Structure

Every synthesis page follows this outer structure while allowing its body organization to emerge from its topic:

1. A `<nav class="wiki-nav">` header with `← Return to Index` on the left and the next page in catalog order as `${PAGE_NAME} →` on the right.
   - The final page in catalog order has no next-page link; navigation does not wrap to the first page.
2. An `<h1>` page title.
3. A one-line italic summary directly beneath the title.
4. A body organized with direct, descriptive headings and the structures most appropriate to the source material.
   - Do not impose a standard section schema.
   - Avoid editorial prose. Use neutral, direct language and only the connective text necessary to organize and clarify source material.
   - When sources disagree, preserve the differing positions visibly rather than collapsing or resolving them.
   - Add contextual in-body links where another synthesis page is meaningfully relevant.
5. A root-level `<footer class="markdown-body">`, sibling to `<article class="markdown-body">`, containing:
   - `Sources` as an `<h4>` heading followed by an ordered list.
   - `Related pages` as an `<h4>` heading followed by links to sibling synthesis pages.
   - Related-page entries contain the linked page name only, without descriptions.

## Provenance

- Do not use inline citation markers.
- List every contributing source in the page's footer-level `Sources` section.
- Each source entry displays the source title only, linked to its file in `/raw`.
- Name a source, author, or speaker in the body only when attribution is necessary to preserve a quotation, distinct perspective, disagreement, or multi-speaker context. This is prose attribution, not an inline citation marker.
- Raw documents remain references and never receive standalone wiki pages.

## Paths

- `index.html` lives at the repository root and references synthesis pages as `wiki/<name>.html` and shared styles as `wiki/styles.css`.
- `log.html`, `html_template.html`, `styles.css`, `wiki-nav.js`, and all synthesis pages live in `/wiki`.
- Synthesis pages reference styles as `./styles.css`, sibling pages as `./<name>.html`, the catalog as `../index.html`, and raw sources as `../raw/<file>`.

## Workflow and Approval

- Follow `.pi/skills/ingest/SKILL.md` for exhaustive ingestion previews and promotion previews.
- Before modifying synthesis content, show the themes and distinct material to preserve, affected pages, proposed new pages or structural changes, and anything judged redundant or unrelated. Wait for user approval.
- Follow `.pi/skills/query/SKILL.md` for source-faithful queries. Present the answer first, then ask whether the user wants it saved to `/outputs`.
- Querying and output promotion are secondary capabilities. The primary use of the wiki is reading synthesis pages.
- Follow `.pi/skills/lint/SKILL.md` for quality checks. Lint reports issues rather than silently changing synthesis structure.

## Success Criteria

Success means that the synthesis corpus becomes increasingly complete, navigable, and effective for understanding and relearning the user's curated material.

Healthy growth includes:

- faithful coverage of newly ingested sources;
- preservation of practical details and source context;
- clearer emergent categories and page boundaries;
- strong, meaningful cross-links without wholesale duplication;
- visible preservation of source disagreements;
- reader-benefiting reorganizations approved by the user; and
- an accurate ingestion and change ledger.

Query → output → promotion remains available but is not the definition of success. Novel interpretation is not a general corpus goal outside the future pseudo-theory page.
