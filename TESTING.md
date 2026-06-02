# ClaimNCO Prototype Testing Guide

Brand line:

> Get your VA claim squared away.

Use fake/sample information only. Do not enter SSNs, claim numbers, banking information, full medical records, or private identifiers.

ClaimNCO is a claim-prep and VSO-readiness prototype. It does not submit claims, store documents, identify benefits, make entitlement decisions, recommend what to claim, estimate VA percentages, or replace VA.gov or accredited help.

## VSO-Packet Test Script

Use this script with a veteran, VSO, or reviewer.

1. Open the prototype.
2. Click `Build my VSO prep packet`.
3. Optionally open the reviewer guide and copy the feedback questions.
4. Review the `Already have possible conditions?` handoff card.
5. Add one fake condition.
6. Mark one evidence area as `Have it`.
7. Mark one evidence area as `Not sure` or `Need it`.
8. Add one question for VSO.
9. Add one fake evidence item and tag what it supports.
10. Generate the VSO prep summary.
11. Answer: Would this make a VSO appointment easier?

## Quick Self-Test

Goal: Confirm the main flow works from start to finish.

1. Open `http://localhost:8080` after running the local server.
2. Click `Build my VSO prep packet`.
3. Continue through `Stage` and `Basics`.
4. On `Conditions`, confirm the handoff card says possible conditions can come from a VSO, VA letter, medical records, symptoms, or another checklist.
5. Test every handoff-card action:
   - `Add possible condition` opens the condition form.
   - `Prepare VSO questions` navigates to the VSO prep dashboard.
   - `Find accredited help` navigates to VSO Help.
   - `I already have notes` opens Ask NCO with the possible-conditions card.
6. Add or edit a condition.
   - Confirm the card shows current symptoms/diagnosis.
   - Confirm it shows service event/exposure/aggravation.
   - Confirm it shows possible connection and work/life impact.
   - Confirm it shows evidence status and VSO questions.
7. Open the evidence checklist.
8. Change at least one evidence status.
   - Confirm a visible message says the evidence status was saved.
9. Add one evidence item.
   - Confirm support tags are available.
   - Confirm helper copy says evidence matters because of what it helps prove.
   - Confirm no upload/storage claim is introduced.
10. Continue to the VSO prep dashboard.
   - Confirm labels use `Looks organized`, `Mostly organized`, `Missing important evidence`, or `Ask VSO before filing`.
   - Confirm it does not show outcome language, ratings, or what to claim.
   - Confirm document gaps are grouped by condition so newly added conditions are visible.
11. Open VSO Help.
12. Save a fake ZIP/city.
    - Confirm the `What will go into the summary` panel shows the saved search area.
13. Select one VSO option with `Use in summary`.
   - Confirm the selected card is visually highlighted and the button says `Selected for summary`.
14. Generate the VSO prep summary.
    - Also test typing a ZIP/city and tapping Generate without the save button; the typed search area should still appear in the summary.
15. Confirm the summary includes:
    - stage,
    - Intent to File status,
    - VA.gov access/sign-in status,
    - VSO search area or selected option,
    - conditions to discuss,
    - evidence the veteran has,
    - evidence missing / not sure,
    - documents to gather,
    - questions for VSO,
    - safety reminder.
16. Copy the summary and confirm visible feedback appears.
17. Open the reviewer guide from the summary and confirm it opens feedback mode.
18. Download the text summary and confirm a `.txt` file is created.
19. Click `Start a new fake test`.
    - Confirm the first tap only arms the reset.
    - Confirm the second tap resets the prototype to the welcome screen with sample data.

## Reviewer Guide Self-Test

Use this before sending the prototype to a VSO, veteran, or helper.

1. Open the prototype.
2. Open `For reviewers`, then click `VSO reviewer guide`.
3. Confirm it explains what is being tested.
4. Click `Copy feedback questions`.
5. Confirm a visible feedback message appears.
6. Click `Start reviewer walk-through`.
7. Confirm the app returns to the Welcome screen.
8. Reopen the guide and click `Jump to sample summary`.
9. Confirm the app opens the VSO Summary screen.
10. Click back and confirm the guide can be exited.

## Ask NCO Self-Test

Use this to confirm the guided assistant stays helpful without becoming open-ended advice.

1. Open `Ask NCO`.
2. Confirm the panel opens and closes from the header.
3. Select `I don't know what to claim`.
4. Confirm the answer says ClaimNCO does not decide what to claim and routes to a VSO or complementary resource.
5. Select `I already have possible conditions`.
6. Confirm the answer says those tools may identify possibilities and ClaimNCO organizes next steps.
7. Confirm it does not tell the user what to claim.
8. Test these scenarios:
   - `I need an increase`
   - `I already submitted`
   - `A condition was denied`
   - `I never went to sick call`
   - `I can't sign in to VA.gov / Login.gov / ID.me`
   - `I got a VA letter`
   - `I missed a C&P exam`
   - `I got 0%`
   - `My issue was deferred`
9. Confirm every answer includes:
   - plain answer,
   - why it matters,
   - next safe step,
   - things to check,
   - question to ask a VSO,
   - official source or routing note.

## Success Criteria

The prototype is working if a tester can:

- understand that ClaimNCO builds a VSO-prep packet,
- understand that possible conditions can come from a VSO, VA letter, medical records, symptoms, or another checklist,
- understand that ClaimNCO is not VA, legal guidance, medical guidance, or a representative,
- add 1-3 possible conditions,
- identify at least one evidence gap,
- add at least one evidence item with support tags,
- generate a useful VSO prep summary,
- explain what they would ask a VSO next,
- complete the flow without entering sensitive identifiers.

## Manual QA

Run locally:

```bash
cd /Users/zd/projects/claimnco-prototype
python3 -m http.server 8080
```

Open:

```text
http://localhost:8080
```

Check:

- Browser console has no errors.
- Main flow works on desktop width.
- Main flow works around phone width.
- Ask NCO opens/closes from every screen.
- Ask NCO has safe cards for not sure what to claim, possible conditions, increase prep, already filed, and denied/decision letter.
- Reviewer guide opens, copies feedback questions, starts a walk-through, and jumps to the sample summary.
- Primary action buttons stay visible near the bottom of the phone frame.
- Save feedback appears as a visible toast and an inline saved banner.
- Add condition works.
- Add evidence item works.
- Readiness dashboard updates.
- VSO summary copies or shows fallback copy guidance.
- VSO summary downloads as a plain text file.
- `Start a new fake test` requires a second confirmation tap before reset.
- External official links open.
- No sensitive upload/storage claim appears.

## Known Prototype Limits

- No account system.
- No backend.
- No database.
- No VA integration.
- No real local VSO database.
- No document upload.
- No saved data after refresh.
- No benefit identification.
- No rating calculation.
- No automated filing.
