# ClaimNCO Prototype

Brand line:

> Get your VA claim squared away.

ClaimNCO is a static, clickable prototype for the claim-prep and VSO-readiness layer around the VA disability process. It helps a veteran organize possible conditions, evidence gaps, VA letters, documents to gather, and questions to ask a VSO or VA-accredited representative.

North star:

> Where am I? What possible conditions am I organizing? What evidence do I have? What evidence is missing? What should I ask a VSO?

ClaimNCO is not a benefit identifier. If a veteran is unsure what may apply, ClaimNCO routes them toward accredited help and official VA resources, then helps organize possible conditions into condition cards, evidence gaps, documents to bring, and VSO questions.

This prototype uses sample/local state only and does not:

- submit VA claims,
- store documents,
- require sign-in,
- upload sensitive records,
- estimate VA percentages,
- recommend what to claim,
- make entitlement decisions,
- replace VA.gov or accredited help,
- provide diagnosis or treatment direction,
- act as legal guidance or representation.

Live prototype:

- https://daypdx.github.io/claimnco-prototype/

Local test:

```bash
cd /Users/zd/projects/claimnco-prototype
python3 -m http.server 8080
```

Open:

```text
http://localhost:8080
```

## Main Flow

The goal is to test whether a veteran can build a VSO-ready prep summary:

1. Welcome
2. Process stage
3. Claim basics
4. Possible conditions
5. Evidence checklist
6. VSO prep dashboard
7. VSO help
8. VSO prep summary

The strongest artifact is the copied VSO prep summary. It should include stage, Intent to File status, VA.gov access, VSO search/selection, conditions to discuss, evidence the veteran has, evidence gaps, documents to gather, questions for a VSO, and safety reminders.

## Possible Conditions Handoff

The prototype keeps ClaimNCO's lane focused on prep, not identifying benefits. The handoff is:

1. If the veteran does not know what may apply, send them toward a VSO, accredited representative, or official VA source.
2. If they already have possible conditions from a VSO, VA letter, medical records, symptoms, or another checklist, bring those possibilities into ClaimNCO as condition cards.
3. ClaimNCO turns those cards into evidence gaps, documents to gather, and questions for a VSO/accredited representative.

## No-Cost Prototype Hardening

The prototype now supports local-only packet actions that do not require capital, accounts, servers, or storage:

- copy the VSO prep summary,
- download a plain text summary file,
- print the summary from the device,
- reset the prototype back to fake sample data after a second confirmation tap,
- open a VSO reviewer guide with a copyable feedback script.
- keep primary action buttons visible at the bottom of the phone frame.
- show persistent inline save feedback after key actions.
- auto-save a typed VSO search area when the tester generates the summary.

These actions are intentionally simple. They make the prototype more testable without adding sensitive document storage, email delivery, VA integration, or paid infrastructure.

## Reviewer Guide

The Welcome and Summary screens include `VSO reviewer guide`. This opens a local-only feedback mode with:

- what the reviewer is testing,
- a five-minute walk-through,
- copyable feedback questions,
- quick jumps back into the prototype or sample summary.

The guide is meant for VSO, veteran, or accredited-helper feedback. It does not send responses anywhere.

## Ask NCO

`Ask NCO` is a guided bottom-sheet assistant available from the app header throughout the flow. It uses prepared answer cards instead of open AI chat. Each answer includes:

- a plain answer,
- why it matters,
- a next safe step,
- things to check,
- a VSO question,
- official source links or accredited-help routing.

Ask NCO includes a path for people who already have possible conditions from a VSO, VA letter, medical records, symptoms, or another checklist and now need to organize evidence gaps and VSO questions.

Current guided cards include:

- not sure what to claim,
- already have possible conditions,
- increased rating prep,
- already filed and waiting,
- denied/decision letter routing.

## PWA Basics

The GitHub Pages version is installable as a basic Progressive Web App. On iPhone, open the live prototype in Safari, tap Share, then choose `Add to Home Screen`. On Android Chrome, open the live prototype and choose `Install app` or `Add to Home screen`.
