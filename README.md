# Standing Over Your Decisions — SETU CPD

**Module 6** of the SETU Continuing Professional Development series, *Standing Over
Your Decisions: Engage Confidently in Academic Governance and Quality Assurance*. A
clean, modern, self-paced SCORM 1.2 course built as a **standalone static site** — no
build step, no server framework, no external dependencies (brand fonts are
self-hosted, JS is vanilla).

Built from the *Standing Over Your Decisions — On-demand learning script* (Unit 6),
and styled to the **SETU Online Course Brand Guide** and the *Lifelong Learning at
SETU Design Toolkit*. The script is anchored to the **SETU Academic Regulations for
Taught Programmes 2026-2027, Version 4.0**, and the course cites its clause numbers
throughout (see *Clause chips* below).

Derived from [`kenmccarthy/cpd-course-template`](https://github.com/kenmccarthy/cpd-course-template),
which carries the reusable shell (navigation, Rise layer, SCORM plumbing, animations,
accessibility conventions).

**Audience:** Academic staff who sit on, or will be asked to contribute to, Programme
Boards, Exam Boards and external-examiner processes.
**Pitch level:** NFQ Levels 7, 8 and 9, with Level 8 as the worked example.
**Runtime:** ~30 minutes, 7 sections.

## Sibling modules

| Module | Course | Repository |
|---|---|---|
| 1 | Understanding Module Descriptors | [`cpd-course-module01`](https://github.com/kenmccarthy/cpd-course-module01) |
| 2 | Teaching Online | [`cpd-course-module02`](https://github.com/kenmccarthy/cpd-course-module02) |
| 3 | From Module Descriptor to Teaching Plan | [`cpd-course-module03`](https://github.com/kenmccarthy/cpd-course-module03) |
| 4 | Assessment that Works | [`cpd-course-module04`](https://github.com/kenmccarthy/cpd-course-module04) |
| 5 | Building Your Module | [`cpd-course-module05`](https://github.com/kenmccarthy/cpd-course-module05) |
| 6 | Standing Over Your Decisions | this repo |

The shell is shared; each module keeps its own `storeKey`, so a learner's progress in
one never collides with another even when both are served from the same origin.

## Course outline

| Section | Topic | Time |
|--------:|-------|-----:|
| 1 | Welcome and orientation | 2 min |
| 2 | Why quality assurance matters | 5 min |
| 3 | Programme Boards and Exam Boards | 7 min |
| 4 | The External Examiner | 5 min |
| 5 | Academic judgement | 5 min |
| 6 | Common QA pitfalls and how to avoid them | 4 min |
| 7 | Summary and reflection | 2 min |

Sections are numbered **1–7** everywhere the learner sees them. Internally each
`<section class="lesson">` keeps a 0-based `data-lesson` id (`0`–`6`) — that id is what
`localStorage` progress and the SCORM bookmark use.

### Theory covered

Harvey and Green's multiple meanings of quality (1993) · Harvey and Newton on
quality evaluation (2007) · Biggs's constructive alignment (1996) · Sadler on the
indeterminacy of preset criteria and academic judgement · Bloxham and Boyd on effective
assessment (2007) · the European Standards and Guidelines (ESG, 2015) · QQI's
legislation and guidelines · the National Forum's work on assessment and
enhancement-led QA · generative AI and academic integrity.

### Clause chips

Regulation clause numbers appear as small chips (`<span class="clause">`). Each carries
a screen-reader-only "Regulations section" prefix, omitted where the surrounding text
already says "section(s)". Inside attribute values (scenario feedback, match
explanations) the chip is a plain "section x" so the markup stays valid. All clause
numbers are as given in the script; check them against the current published
Regulations before release.

## Checks, reflections and completion

The script has **one knowledge check** (marking evidence, single-answer) and **eight
reflection fields** (the opening prompt, five section prompts, and three action-plan
fields). It asks for neither a graded quiz nor a pass mark. So:

- `finalQuiz` in `js/course.config.js` is **empty**; nothing is graded.
- The course reports SCORM **`completed`**, never `passed`/`failed`, and **sends no
  score**. `<adlcp:masteryscore>` is omitted from `imsmanifest.xml`.
- The knowledge check is written as a `cmi.interactions.n` entry (`kc1`).
- The opening reflection is echoed back to the learner in the closing section.

## Interactions (all native, no libraries)

| Activity | Section | Type |
|---|---|---|
| The levels (`levels-tabs`) | 2 | Tabs: Level 7, 8, 9; defaults to Level 8 |
| **Which level does each descriptor belong to?** (`descriptors-match`) | 2 | Drag, tap or keyboard sort; six items, three levels; a "why each one fits" panel follows every check |
| Programme Boards (`board-accordion`) | 3 | Five-panel accordion |
| Marks, bands, deferrals (`rules-tabs`) | 3 | Three tabs |
| **What would you do?** (`exam-scenario`) | 3 | Three-option scenario with graded verdicts |
| What the External Examiner does (`examiner-tabs`) | 4 | Tabs |
| **Practise a response** (`examiner-flip`) | 4 | Three flip cards: a comment on the front, a model response on the back |
| Academic judgement (`judgement-accordion`) | 5 | Accordion: before, during, after |
| **Marking practice** (`marking-highlight`) | 5 | Sentence-by-sentence highlight: description vs critical analysis, then the expert's annotation |
| Knowledge check | 5 | Single answer with retry |
| Pitfalls (`pitfalls-accordion`, `morepitfalls-accordion`) | 6 | Two accordions |
| **Where is the trap?** (`pitfalls-match`) | 6 | Sort of four scenarios |
| Reflections | 1–7 | Eight ungraded prompts, exportable |

All twelve activities are listed in `activities`, so the dashboard reports
*Activities explored* out of 12.

### New in this module

Two generic widgets were added to the shell for this course and are documented in
their blocks in `js/app.js` / `js/interactions.js`:

- **Highlight** (`[data-highlight="KEY"]`) — a passage split into sentence buttons and
  a group of marking tools. Clicking a sentence applies the selected tool (clicking
  again with the same tool clears it). *Reveal* locks the passage and tags every
  sentence with visible text — right, wrong or missed — so the result never relies
  on colour, scores "N of M", lists a reason per sentence from `data-why`, and shows
  an optional expert panel (`[data-hl-expert]`). Progress persists, and it emits
  `<KEY>-highlight`.
- **Match reveal** (`[data-matchreveal]` inside a `[data-match]`) — a "why each fits"
  panel shown after every check and hidden on reset.

Also added: `.steps` (vertical numbered cards), `.rubric` tables, `.clause` chips and
the `.layers` staircase diagram.

## Rise-style learner experience (Lifelong Learning at SETU look)

The template follows the Articulate Rise pattern and the *Lifelong Learning at SETU
Design Toolkit* (see `docs/design-toolkit.md`):

- **Course overview page** — the front door: a Slate Grey hero with a gradient
  **U-shape** panel (title, subtitle, tagline "LEARN MORE. GO FURTHER."), a large
  cropped **gradient crest**, a *Start / Continue* button, and **lesson cards**
  showing duration and live status (not started / in progress / completed) with a
  progress bar. Also reachable from the sidebar's "Course overview" item.
- **Hero banner per lesson** — every lesson opens with the *same treatment as the
  overview*: a Slate Grey block with a gradient **U-panel** (eyebrow "Section N of 7",
  title, read time), the large cropped **gradient crest**, and a progress strip on
  the right (one segment per section, completed ones in Grass Green) with a
  "N of 7 sections completed" line. The eyebrow and strip are rendered by
  `js/rise.js` from `Course.SECTIONS`, so the counts are never hand-typed. To add a
  cover photo, place `<img class="hero__bg" src="assets/…" alt="">` as the first
  child of the `.hero` element — it sits behind the crest at reduced opacity.
- **Continue-button reveal** — lesson content is paced in chunks separated by
  `<div class="gate" data-gate></div>` markers. Each *Continue* reveals the next chunk
  with a staggered entrance and scrolls to it; the lesson's Next/Previous bar appears
  only after the last gate. Progress through the gates persists and feeds the lesson
  cards. `Course.rise.revealAll(lessonEl)` opens a lesson fully (testing/accessibility).
- **Horizontal slide transitions** — lessons slide in from the right (forward) or the
  left (back) with a crossfade; a plain swap under `prefers-reduced-motion`. The
  outgoing lesson is pinned at the scroll position the learner was reading (so that
  part is what slides away), the scroll reset is instant rather than smooth, and
  blocks already in view settle at once instead of staggering in on top of the slide —
  one motion per page change, no judder.
- **Rise block layout** — a wider 900px content column for full-bleed blocks, with prose
  held to a ~70-character measure for readability.

### Programme colour year

`programmeYear` in `js/course.config.js` selects the Lifelong Learning accent trio
(always on Slate Grey + White). It drives section accents, tints, mesh gradients,
heroes and cards:

| Year | Accent trio |
|---|---|
| `"2026/27"` (default) | Heather Purple · Sunset Red · Clover Pink |
| `"2027/28"` | Barrow Blue · Suir Blue · Grass Green |
| `"2028/29"` | Sea Green · Sunrise Yellow · Suir Blue |

Section accents cycle through the trio via `data-accent="1|2|3"` on each lesson.
Semantic colours stay fixed (Grass Green = correct, Sunset Red = incorrect).

### Tagline font

The campaign tagline uses **Compressa Condensed Black**, a licensed face. Drop
`assets/fonts/compressa.woff2` into the repo to enable it; until then it falls back to
DM Sans Bold. Set `showTagline: false` in the config to hide the tagline entirely.

### Icons

All UI icons come from a single **inline SVG sprite** at the top of `index.html`
(24px line icons adapted from Lucide, ISC licence) — no emoji, no icon font, no
external requests, so they render identically on every OS and LMS. Use one with

```html
<svg class="icon" aria-hidden="true" focusable="false"><use href="#i-check"></use></svg>
```

or from JavaScript with `Course.icon("check")`. Icons are decorative (the adjacent
text carries the meaning); add new `<symbol id="i-…">` entries to the sprite as
needed. Sizing follows the surrounding font size (`.icon` = 1.05em) with a few
context overrides in `css/styles.css` under *Icons + accessibility utilities*.

## Accessibility

The template is built to WCAG 2.1 AA and audited with axe-core (no violations
across the overview, lessons and the dark theme). Conventions to keep when
authoring new courses:

- **Landmarks & skip link** — `<main id="scroll">`, `<nav aria-label="Course
  sections">`, and a "Skip to course content" link that appears on keyboard focus.
- **Page changes are announced** — a visually hidden live region (`#a11yStatus`)
  receives "Section N of 7: …", "Course overview", "More of this section revealed"
  etc. via `Course.announce(text)`; focus moves to the new lesson's `<h1>` (or the
  newly revealed chunk after *Continue*) so screen-reader and keyboard users land on
  the new content. The active navigation item carries `aria-current="page"`.
- **Real widget semantics** — the tab explorers are ARIA tab lists (roving tabindex,
  ←/→/Home/End); the accordion buttons expose `aria-expanded`/`aria-controls`;
  knowledge-check options are grouped under their question, and the
  multiple-response options are `role="checkbox"` with `aria-checked`; feedback and
  scores are `role="status"`; reflection textareas are labelled by their prompt;
  matching tokens are keyboard-operable buttons and every placement/removal is
  announced.
- **Hotspots by keyboard** — each hotspot is a real `<button>` wrapping the part of
  the mock-up it marks, with `aria-pressed`; every find is announced and collected
  into a list, and "Show me the rest" is there for anyone who would rather read
  than hunt.
- **Results never rest on colour** — after a multiple-response check every option
  says what it was ("Good practice — correct choice", "Not good practice", "Good
  practice — you missed this one"), and the interaction map labels each verdict
  ("Strong fit", "Partial fit", "Weak fit") with an icon and text.
- **Native form controls** — the interaction map uses `<select>` elements, each with
  a visible `<label>`.
- **Label in Name** (WCAG 2.5.3) — each lesson card on the overview takes its
  accessible name from its visible content rather than a separate `aria-label`.
- **Keyboard** — everything works without a mouse: `Esc` closes the mobile menu
  (focus returns to the menu button), the global ←/→ page shortcuts stay out of the
  way of controls, and `:focus-visible` rings are visible on every colour (white on
  slate/gradients, accent elsewhere).
- **Contrast** — text tokens and the sidebar's white-on-slate opacities meet 4.5:1;
  colour is never the only signal (correct/incorrect also show a tick/cross and text).
- **Motion** — every animation and transition, including the slide between lessons,
  is disabled under `prefers-reduced-motion`.
- **Structure** — one `<h1>` per lesson, headings step by one level, figures are
  `role="img"` with a text alternative, decorative art is `aria-hidden`.

## SCORM 1.2 packaging

The course ships ready to package for an LMS. A single **SCO** (`index.html`) and
an `imsmanifest.xml` are included; `js/scorm.js` maps the course onto the SCORM
1.2 data model. It is a **no-op when no LMS is present**, so the same files still
run standalone from `file://`.

**Build the uploadable zip:**

```bash
python3 scripts/build_scorm.py
# -> dist/<course-slug>-scorm12.zip  (manifest at the root)
```

Upload that zip to your LMS, or to <https://cloud.scorm.com> to validate.

**What it reports**

| SCORM (CMI) field | Meaning |
|---|---|
| `cmi.core.lesson_status` | **`completed`** for this course (reflection-led, no graded quiz). With a `finalQuiz` configured it reports `passed` / `failed` instead |
| `cmi.core.score.raw` | Not sent for this course. With a graded quiz: final-quiz percentage (min 0, max 100) |
| `cmi.core.lesson_location` | Bookmark — the section the learner was on |
| `cmi.suspend_data` | Compact resume state (visited sections, Continue-gate progress, answers, activities). Kept **well under the SCORM 1.2 ~4 KB cap**; reflections are **excluded** (private, and local only) |
| `cmi.core.session_time` | Time on task |
| `cmi.interactions.n` | One entry per knowledge-check answer — see *Analytics* |

**Test the adapter offline:** append `?scorm=mock` to the URL to inject a mock
LMS that logs every SCORM call to an in-memory store (used by the automated tests).

## Analytics

Per the chosen design, the **LMS is the analytics store**: every knowledge-check
answer is written as a `cmi.interactions.n` entry, so completion
and per-question results appear in the LMS's own reporting — no third-party
scripts, no external calls, and nothing that breaks the standalone/offline
property. Reflection prompts report only that a note was saved and how long it
was, never its text.

- **Event bus** — all interactions emit typed events through `js/core.js`
  (`section.view`, `knowledge_check.answer`, `interaction.complete`,
  `quiz.complete`, `course.complete`, …). SCORM and analytics subscribe to these.
- **Dev event inspector** — append `?debug=1` to see a live on-screen log of
  every event (and whether an LMS is connected).
- **Optional self-hosted sink** — for non-LMS hosting, set
  `Course.analytics.endpoint = "https://…"` to POST events via `sendBeacon`.
  Disabled by default.

## Running it

It's static, so any of these work:

```bash
# Simplest: just open the file
open index.html            # macOS   (or double-click it)

# Or serve it (recommended for a shared/hosted copy)
python3 -m http.server 8000
# then visit http://localhost:8000
```

Deploy by copying the whole folder to any static host (GitHub Pages, Netlify,
an LMS file area, a shared drive, etc.).

## File structure

```
.
├── index.html                 # all course content + interactive markup (+ inline icon sprite)
├── imsmanifest.xml            # SCORM 1.2 package manifest (single SCO)
├── css/styles.css             # SETU design tokens, layout, components, animations
├── js/
│   ├── course.config.js       # per-course identity (title, slug, institution, storeKey, pass mark, activities)
│   ├── core.js                # state store and the event bus (foundation)
│   ├── scorm.js               # SCORM 1.2 adapter (+ ?scorm=mock test harness)
│   ├── analytics.js           # dev event inspector + optional endpoint sink
│   ├── animations.js          # scroll-reveal, count-ups, self-building diagrams
│   ├── confetti.js            # brand-coloured canvas confetti
│   ├── interactions.js        # hotspots, interaction map, highlight (+ checklist / scenario chooser)
│   ├── dashboard.js           # results dashboard + export-my-notes
│   ├── rise.js                # overview page, lesson cards, Continue-reveal
│   └── app.js                 # navigation, progress, theme, core widgets
├── scripts/
│   ├── build_scorm.py         # builds dist/<slug>-scorm12.zip
│   └── init_course.py         # interactive setup for a new course's identity
└── assets/
    ├── MONO_WHITE.png         # official SETU reversed (white) logo — used in the UI
    ├── MONO_BLACK.png         # official SETU mono-black logo (for light backgrounds)
    ├── RGB.png                # official SETU full-colour logo
    └── fonts/                 # self-hosted DM Sans + Inter (variable WOFF2)
```

Load order in `index.html`: `course.config → core → scorm → analytics →
animations → confetti → interactions → dashboard → rise → app`. `course.config.js`
must load before `core.js` (which reads `window.CourseConfig`), and
`scorm.js` runs early so it can restore `suspend_data` into the shared state
before the widgets read it.

## Logos

The official SETU logo files are used directly. The interface shows
`assets/MONO_WHITE.png` (the reversed/white lockup) in the sidebar and mobile
top bar, both of which sit on Slate Grey. `MONO_BLACK.png` and `RGB.png` are
kept in `assets/` for use on light backgrounds (e.g. print, certificates, or a
light header if you add one). Clear space is preserved around the logo and it is
displayed well above the 60px minimum.

`assets/favicon.png` is used as the browser-tab icon. `assets/setu-symbol.png`
(the official SETU "U" symbol) is used everywhere the course shows its "U"
motif — the cover graphic, the small eyebrow icon on each section, and the
watermark behind statement panels — via a CSS `mask-image` on the `.cover__u`,
`.u-mark`, and `.u-watermark` classes in `css/styles.css`, so it's still tinted
with `currentColor` (white on Slate, accent colours, dark-mode-aware) rather
than baked in as a fixed-colour image.


## Placeholders / items needing your input

Marked in-course with a bracketed note where a learner would see the gap.

- **Links** — the script supplies no URLs for: the Regulations PDF (Section 1),
  Supporting Documents 4 and 5 (Section 4), the Academic Council report templates
  (Section 3), and the institution's own documents (resources). Each is a visible
  `[Add …]` note; nothing has been guessed.
- **Production note** (resources) — verify current editions and links, and check the
  clause numbers against the current Regulations, before publishing.
- **Sadler** — the script cites Sadler (2010) in the text and Sadler (2009) in
  the references. The course uses **2010** in both places; confirm which is intended.
- **"Unit 4 Section 5"** — the script cross-refers to a unit by number; the course
  names the section by title instead.
- **Timing** — if testing shows the course overruns 30 minutes, the script's own
  advice is to trim the level sort in Section 2.
- **Hero banner** — the overview and section heroes use the gradient crest, as in the
  other modules; add approved imagery via `<img class="hero__bg">` if you want it.

### Written during the build because the script didn't supply it

Derived from the script's guidance but not taken from it, so please read them.

- **Three of the six level descriptors** — *Applies an established technique to a
  familiar, well-defined case*; *Evaluates evidence and justifies a recommendation for
  an unfamiliar problem*; *Synthesises advanced sources to make an original contribution
  to a specialised question* — and the sort's **answer key and "why each fits" text**.
- **The Level 8 marking paragraph**, its sentence-by-sentence key and the expert's
  annotation (Section 5).
- **Two of the three External Examiner comments** and their model responses (the
  flip cards, Section 4).
- **Two pitfall scenarios** — the bereavement mark-raise and the staff-room
  disclosure (Section 6) — and their feedback.

### Deliberate deviations from the script

- The script's long "numbered cards" are a **vertical `.steps` list**, not a
  horizontal scroll (better on narrow screens and for keyboard users).
- Where the script says "accordion, three tabs", the course uses **tabs**.

## Brand fonts

DM Sans and Inter (both open-source, and both named in the SETU guide) are
self-hosted as variable WOFF2 files under `assets/fonts/`, so the course renders
with the correct brand typography **offline and with no external requests**. If
you ever need additional weights/styles, add the WOFF2s and extend the
`@font-face` block at the top of `css/styles.css`.

All diagrams called for in the script (the wireframe, the threaded discussion, the
three types of interaction, the five stages) are rendered as inline SVG or CSS in
the SETU palette, so they stay crisp and theme-aware without external images.

## A note on dark mode

The SETU guide describes a white-background identity. An optional, restrained
**slate-based dark theme** is included as a learner accessibility feature (toggle
in the sidebar). The default is the on-brand light theme; the dark theme keeps
Slate Grey and the approved accents.

## Credits

A one-line credit sits at the very end of the last section
(`<p class="credits">` in `index.html`, styled at the end of `css/styles.css`):
*Developed by the Department of Lifelong Learning and the Centre for Academic
Practice with assistance from ChatGPT and Claude Code. © 2026, SETU.* Edit it in
place if the wording changes.
