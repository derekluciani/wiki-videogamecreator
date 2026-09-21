# Voice Mode — Version 1 Implementation Handoff

## Summary

Add a browser-based read-aloud mode so users can listen to the current wiki page. Version 1 uses UI controls only. It does not listen for spoken commands.

## User story

> As a user, I want to listen to the wiki being read to me, similar to an audiobook.

## Version 1 scope

- Read the current wiki page aloud.
- Provide UI controls for:
  - Play
  - Pause / Resume
  - Stop
  - Next section
  - Previous section
  - Playback speed, if practical
- Provide a graceful fallback when browser speech playback is unavailable.

## Desired UI layout

- Add one voice-mode icon button next to the existing text-size controls in the wiki navigation.
- Selecting the icon opens a full-screen modal overlay above the current page.
- The modal should be a complete voice-mode takeover rather than a small inline player.
- Use most of the available modal area for a simple grid of large, voice-only controls.
- The modal must include a clearly identifiable close button.
- Closing the modal returns the user to the page view without stopping playback.
- Playback continues while the modal is closed unless the user explicitly selects the Play/Stop toggle.
- The Play/Stop control should be prominent and large enough to operate comfortably on desktop and mobile.
- The modal should make the voice controls the primary content and avoid reproducing the wiki article for follow-along reading.

## Explicitly out of scope

- Voice commands or microphone input.
- Always-on listening.
- High-quality audiobook production.
- Downloadable or pre-generated audio files.
- Backend or cloud TTS services.
- Continuous automatic playback across every wiki page.
- Changes to raw source files or synthesized wiki content.

## Current application context

The site is a static, no-build HTML/CSS/JavaScript application:

- Shared behavior lives in `wiki/wiki-nav.js`.
- Shared presentation lives in `wiki/styles.css`.
- Wiki pages already load the shared JavaScript file.
- Readable content is contained in `article.markdown-body`.
- Navigation and the source/related-pages footer should not be narrated.
- The existing fixed navigation can hide while scrolling, but the voice-mode icon should remain available wherever the navigation is visible. Playback state must be independent of the modal’s open/closed state.

## Technical direction

Use the browser Web Speech API:

- `window.speechSynthesis`
- `SpeechSynthesisUtterance`

The implementation should:

1. Detect whether speech synthesis is supported.
2. Extract readable content from the current article.
3. Organize content into logical sections, preferably using headings and their following blocks.
4. Split long content into multiple utterances rather than creating one very large utterance.
5. Queue utterances in reading order.
6. Support play, pause, resume, stop, next-section, and previous-section actions.
7. Cancel the active utterance before jumping to another section.
8. Handle `onend`, `onerror`, pause, resume, and cancellation states.
9. Stop and clean up playback when leaving the page.
10. Handle voices loading asynchronously through `voiceschanged` where voice selection is provided.

UI buttons and any future input methods should call the same internal command functions. Voice recognition should not be implemented in this version.

## Narration boundary

This is content narration, not a screen-reader mode. Speech should read the visible content of the article as prose, rather than announcing accessibility metadata or interface semantics.

Narrate:

- Page title and summary
- Visible headings
- Visible paragraphs
- Visible list items
- Visible blockquote text
- Visible table text when it contributes to the article

Do not narrate:

- Navigation links and controls
- Button labels, ARIA labels, roles, or state announcements
- Hidden accessibility text or other DOM metadata
- Image alt text unless it is also presented as visible article content
- The Sources footer
- The Related pages footer
- Decorative or irrelevant interface text

The implementation should avoid reading the same nested list content twice.

## Control accessibility requirements

- Use real buttons with accessible labels.
- Expose play/pause state through appropriate `aria` state.
- Make all controls keyboard accessible.
- Provide visible focus styles.
- Provide a readable status such as “Paused” or “Reading section 2 of 8”.
- Do not autoplay; playback must begin after an explicit user action.
- Preserve usable contrast in light and dark themes.

## Browser and platform limitations

Speech quality and available voices vary by browser and operating system. Speech recognition is not part of this release. Browsers without speech synthesis must retain the normal wiki experience and display an understandable unavailable-state message rather than failing silently.

This feature is browser playback, not a downloadable audiobook. It may not continue reliably after navigation, when the page is closed, or when the device is locked.

## Likely files to change

- `wiki/wiki-nav.js`
- `wiki/styles.css`
- Possibly the shared navigation markup in existing HTML pages and `wiki/html_template.html`, depending on whether controls are injected dynamically or added explicitly.

No backend, package manager, build step, or audio assets are required for this version.

## Acceptance criteria

- A supported browser can open voice mode through a single icon button next to the text-size controls.
- The voice-mode modal takes over the available screen and presents large voice-only controls in a grid.
- A supported browser can start reading the current page through the modal’s prominent Play/Stop control.
- The Play/Stop control stops or starts playback as specified by the current reader state.
- Closing the modal returns to the page without stopping playback.
- Playback continues after the modal is closed until the user selects the Play/Stop control.
- Stop ends playback and resets the reader state.
- Next and Previous section controls move between logical article sections.
- Playback does not narrate navigation or footer content.
- Long wiki pages do not depend on a single oversized utterance.
- Unsupported browsers receive a clear fallback message and retain normal page functionality.
- Controls work with keyboard input and remain usable on mobile layouts.
- Existing text-size controls, navigation behavior, dark mode, and page links continue to work.

## Suggested implementation sequence

1. Add the voice-mode icon beside the existing text-size controls.
2. Add the full-screen modal and large grid-based voice-control layout.
3. Implement article section extraction.
4. Implement speech queueing and play/pause/resume/stop state management.
5. Add next/previous section behavior.
6. Add status text.
7. Add unsupported-browser handling and cleanup on page unload/navigation.
8. Test short pages, long pages, lists, blockquotes, tables, modal open/close behavior, mobile layouts, dark mode, and rapid control interactions.
