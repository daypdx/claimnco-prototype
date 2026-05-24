# ClaimNCO Prototype Testing Guide

Brand line:

> Get your VA claim squared away.

Use this guide to test the ClaimNCO prototype.

North star:

> Where am I, what do I need, what is missing, and what should I ask a VSO?

Prototype file:

- `index.html`

Live PWA test link:

- https://daypdx.github.io/claimnco-prototype/

Important:

- Use fake/sample information only.
- Do not enter SSNs, claim numbers, medical record details, banking info, or real private records.
- This prototype does not submit anything to VA.
- This prototype does not store documents.

## Quick Self-Test

Goal: Confirm the main flow makes sense from start to finish.

1. Open `index.html` in your browser or use the live PWA test link.
2. Click `Start readiness check`.
3. On the stage screen, choose one:
   - `I have not started yet`
   - `I am gathering evidence`
   - `I am not sure`
   - `I already submitted a claim` or `I got a decision` should still continue into the prototype basics flow; Ask NCO handles those situational explanations.
4. Continue through `Claim Basics`.
   - If VA.gov access is `No` or `I need help with sign-in`, expand the VA.gov sign-in guide sections.
   - Confirm the guide explains what each sign-in item is, what the user may need, and where to go.
5. Review the sample condition cards.
6. Open the evidence checklist.
7. Change at least one evidence status.
8. Continue to the readiness dashboard.
   - Confirm conditions with the clearest evidence gaps appear at the top under `Review first`.
9. Open the VSO Help screen.
10. Enter a fake ZIP code, such as `97201`.
11. Click `Use this search area`.
12. Review the official VA representative search links.
13. Generate the VSO prep summary.
14. Confirm the summary includes:
    - process stage,
    - Intent to File status,
    - VA.gov access status,
    - VSO search area,
    - conditions,
    - evidence status,
    - questions to ask.
15. Open `Ask NCO`.
16. Confirm it opens as a guided assistant panel, not a numbered flow page.
17. Select at least three choices, including one post-decision or uncertain scenario.
18. Confirm each answer includes a plain answer, next step, things to check, VSO question, and source or routing note.
19. Confirm the header `Ask NCO` button is reachable from every main flow screen.

## PWA Self-Test

Use this to confirm the prototype can be tested like an app.

1. Open `https://daypdx.github.io/claimnco-prototype/`.
2. On iPhone Safari, tap Share, then `Add to Home Screen`.
3. On Android Chrome, open the browser menu, then choose `Install app` or `Add to Home screen`.
4. Launch `ClaimNCO` from the home screen.
5. Confirm it opens without the normal browser address bar.
6. Confirm the app title and icon show as `ClaimNCO`.

## Interaction Reliability Self-Test

Use this to confirm every primary tap does something obvious.

1. Restart or refresh the prototype.
2. Click `Start readiness check`.
3. Confirm the app advances from `Welcome` to `Stage`.
4. Click `Continue`.
5. Confirm the app advances from `Stage` to `Basics`.
6. Continue to `Conditions`.
7. Click `Add another condition`.
8. Confirm a simple mock condition form opens with condition name and optional symptoms/notes.
9. Save the mock condition with fake text, or leave it blank to test the `Untitled condition` fallback, and confirm a visible toast says the condition was added.
10. Continue to `Evidence`.
11. Click `Add evidence item name`.
12. Confirm a mock evidence item form opens.
13. Confirm the optional photo/camera picker is a native file picker and says selected images are not uploaded or stored.
14. Save the mock evidence item with fake text, or leave it blank to test the `Untitled evidence item` fallback, and confirm a visible toast says `Evidence item saved. No document uploaded.`
15. Click `Next: Readiness`.
16. Click `Find trusted help`.
17. Enter a fake ZIP code or city/state and click `Use this search area`.
18. Confirm a visible toast says the search area was saved.
19. Click `Use in summary` for one VSO option.
20. Confirm a visible toast appears and the final summary includes that VSO option.
21. Click `Generate VSO prep summary`, then `Copy summary`.
22. Confirm a visible copy feedback message appears.

## Ask NCO Self-Test

Use this to confirm the guided assistant feels helpful without pretending to be live AI.

1. Open `Ask NCO` from the welcome screen or header button.
2. Confirm the panel asks `Let's get you squared away. Where are you in the VA claim process?`
3. Confirm the panel shows the eight starting choices from thinking about filing through not sure.
4. Select `I'm thinking about filing`.
5. Confirm the answer explains Intent to File and links to an official VA source.
6. Select `Start over`.
7. Select `I got a decision`.
8. Confirm the answer does not choose a review strategy, predict an outcome, or promise a result.
9. Scroll the answer content down and back up.
10. Confirm the `Close Ask NCO` button stays visible while the answer content scrolls.
11. Confirm closing the panel returns the user to the same screen.

## What To Look For

While testing, ask:

- Does the prototype answer the north-star questions?
- Do I understand what the app is for within the first minute?
- Does the app feel calming or overwhelming?
- Does Ask NCO feel like a guided helper instead of unsafe open-ended AI advice?
- Could a newly separated 20-year-old use this without already knowing civilian paperwork systems?
- Could an older veteran using only a phone follow this without tiny controls or confusing labels?
- Does the app provide structure without making the user feel like they have failed or been assigned a long chore list?
- Is anything worded like legal, medical, or official VA advice?
- Is it clear that this does not submit a claim?
- Is it clear that VSO/accredited help matters?
- Are the review topics clear without feeling like extra chores?
- Does the VSO prep summary feel useful enough to bring to a real meeting?

## Veteran / VSO Test Script

Use this with a reviewer. Do not explain too much before they start. Watch where they hesitate.

Intro:

> This is an early prototype for ClaimNCO, a VA disability claim-readiness app. It does not submit claims, predict ratings, or replace a VSO. Please use fake information and talk out loud as you try it.

Tasks:

1. Start the readiness check.
2. Choose where you are in the VA claim process.
3. Review or add one condition.
4. Mark what evidence you have or do not have.
5. Find the readiness dashboard.
6. Find trusted VSO/accredited help.
7. Generate a VSO prep summary.
8. Tell me what you would do next after using this app.

Questions after testing:

- What was the clearest part?
- What was confusing?
- Did the app assume you already knew VA, civilian paperwork, taxes, online accounts, or medical-record language?
- Did any screen feel too fast, too dense, or too much like homework?
- Did any wording feel unsafe, too confident, or too official?
- Would this help someone prepare for a VSO meeting?
- What is missing before this would be genuinely useful?
- What should the app avoid doing?

## Success Criteria

The prototype is working if a tester can:

- understand the app's purpose,
- complete the flow without help,
- identify at least one evidence gap,
- understand why accredited help matters,
- generate a useful VSO prep summary,
- use Ask NCO to understand a situation without mistaking it for official or legal advice,
- feel less lost than when they started,
- complete the flow after choosing `Not sure` more than once,
- use the main screens on a phone without getting stuck,
- describe what to do next without feeling judged or overloaded.

## Known Prototype Limits

- No real account system.
- No backend.
- No document upload.
- No real local VSO database.
- No VA integration.
- No rating prediction.
- No saved data after refresh.
