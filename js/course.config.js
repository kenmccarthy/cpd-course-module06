/* ==========================================================================
   Course config — single source of truth for per-course/per-institution
   identity. Edit this file (or run `python3 scripts/init_course.py`) when
   reusing this repo as a template for a new course.

   Consumed by:
     - js/core.js         (storeKey, finalQuiz, masteryScore, activities)
     - imsmanifest.xml     (kept in sync by scripts/init_course.py, not read
                            at runtime — SCORM manifests are static XML)
     - scripts/build_scorm.py (courseSlug -> dist/<slug>-scorm12.zip)

   Must load BEFORE js/core.js in index.html.
   ========================================================================== */
window.CourseConfig = {
  courseTitle: "Standing Over Your Decisions",
  courseSlug: "standing-over-your-decisions",
  institution: "South East Technological University (SETU)",

  // localStorage key for learner progress/state. Change this if you reuse
  // this repo for a new course served from the same origin/path as an old
  // one, so learners don't inherit stale progress.
  storeKey: "standing-decisions-v1",

  // Lifelong Learning at SETU annual colour year. Drives the accent trio,
  // gradients and hero panels. One of: "2026/27", "2027/28", "2028/29".
  programmeYear: "2026/27",

  // Shown under the course title on the overview page.
  courseSubtitle: "Engage confidently in academic governance and quality assurance",

  // Shown on the overview and in the opening section. Free text.
  pitchLevel: "NFQ Level 8",

  // Lifelong Learning at SETU campaign tagline. Set showTagline: false to hide.
  tagline: "LEARN MORE. GO FURTHER.",
  showTagline: true,

  // Final-quiz question ids, in order. These are the data-kc values of the
  // knowledge checks that make up the graded quiz.
  //
  // LEAVE THIS EMPTY for a reflection-led course with no graded quiz (as this
  // one is). With no final quiz the course reports SCORM "completed" rather
  // than "passed"/"failed", no score is sent, and <adlcp:masteryscore> should
  // be omitted from imsmanifest.xml.
  //
  // To add a graded quiz: list the ids here (e.g. ["f1","f2","f3","f4"]), mark
  // each of those knowledge checks with data-final in index.html, and restore
  // <adlcp:masteryscore> in the manifest.
  finalQuiz: [],

  // Final-quiz pass mark, as a percentage (0-100). Only used when finalQuiz is
  // non-empty. Mirrors <adlcp:masteryscore> in imsmanifest.xml — keep in sync.
  masteryScore: 75,

  // Interactive activities the results dashboard counts as "explored", by the
  // id each widget emits on interaction.complete. Keep in step with the widgets
  // present in index.html — a course that drops or adds one edits this list,
  // and nothing else needs to change.
  activities: [
    "levels-tabs",          // QA focus at Levels 7, 8 and 9 (Section 2)
    "descriptors-match",    // match assessment descriptors to a level (Section 2)
    "board-accordion",      // Programme Boards: what the Regulations say (Section 3)
    "rules-tabs",           // numbers and rules to know (Section 3)
    "exam-scenario",        // the anomalous module mean (Section 3)
    "examiner-tabs",        // what externals do, don't do, need (Section 4)
    "examiner-flip",        // responding to an external examiner (Section 4)
    "judgement-accordion",  // judgement before, during, after (Section 5)
    "marking-highlight",    // critical analysis or description (Section 5)
    "pitfalls-accordion",   // five common pitfalls (Section 6)
    "morepitfalls-accordion", // four more from the Regulations (Section 6)
    "pitfalls-match"        // match scenarios to pitfalls (Section 6)
  ]
};
