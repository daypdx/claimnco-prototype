# ClaimNCO Prototype

Brand line:

> Get your VA claim squared away.

This is a static, clickable prototype for the first-time filer MVP.

North star:

> Where am I, what do I need, what is missing, and what should I ask a VSO?

Open `index.html` in a browser. The prototype uses sample data only and does not:

- submit VA claims,
- store documents,
- require sign-in,
- upload sensitive records,
- predict ratings,
- create a paid claims marketplace,
- perform complex representative matching,
- run a full legal workflow,
- provide legal or medical advice.

Live prototype:

- https://daypdx.github.io/claimnco-prototype/

## Personal PWA Testing

The GitHub Pages version is installable as a basic Progressive Web App. On iPhone, open the live prototype in Safari, tap Share, then choose `Add to Home Screen`. On Android Chrome, open the live prototype and choose `Install app` or `Add to Home screen`.

The goal is to test the first flow:

1. Welcome
2. Process stage
3. Claim basics
4. Conditions
5. Evidence checklist
6. Readiness dashboard
7. VSO help
8. VSO prep summary

If the user selects `I already submitted a claim` or `I got a decision`, the prototype now routes to a separate placeholder path instead of the first-time-prep flow.

## Brand Assets

The prototype uses the ClaimNCO icon from `assets/brand/claimnco-icon-concept.svg` as the centered welcome mark and browser tab icon. The banner asset is reserved for documents and sharing materials.

## v0.2 Addition

The prototype now includes a dedicated VSO Help screen based on the updated research repo. It lets a user:

- save a ZIP code or city/state search area,
- open VA's official accredited representative search,
- open the VA OGC accreditation database,
- review national VSO options without rankings or guarantees,
- choose a VSO option to include in the summary,
- generate questions for an accredited representative.

## v0.3 Addition

The prototype now includes `Ask NCO`, a guided bottom-sheet assistant available from the app header throughout the flow. It is separate from the numbered readiness flow and uses prepared, source-backed answer cards instead of open AI chat. Each answer includes:

- a plain answer,
- why it matters,
- a next step,
- things to check,
- a VSO question,
- official source links or human-help routing.
