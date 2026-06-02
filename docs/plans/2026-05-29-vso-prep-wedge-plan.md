# ClaimNCO VSO-Prep Wedge Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task only if Zach explicitly asks. Do not run Codex, approve Codex output, commit Codex changes, or push unless Zach directs it.

**Goal:** Turn the prototype from a general VA-claims helper into a distinct VSO-prep tool where a veteran can enter possible conditions, map evidence gaps, and generate a useful VSO-ready prep packet.

**Architecture:** Keep the current static/PWA prototype: `index.html`, `styles.css`, and `app.js`. Do not add auth, backend storage, document upload, rating prediction, or automated VA filing. Improve the client-side state model, guided forms, Ask NCO scenario cards, readiness dashboard, and VSO summary output.

**Tech Stack:** Static HTML/CSS/JavaScript PWA in `/Users/zd/projects/claimnco-prototype`; GitHub Pages deployment; local/mock state only.

---

## North Star

ClaimNCO should answer:

```text
Where am I?
What possible conditions am I organizing?
What evidence do I have?
What evidence is missing?
What should I ask a VSO/accredited representative?
```

The next prototype milestone is:

> A veteran can enter 1–3 possible conditions, mark what evidence they have, identify gaps, and generate a VSO-ready prep summary useful enough to bring to a real appointment.

## Anti-NVLSP Guardrail

Do **not** build a benefit/eligibility identifier. NVLSP owns that lane better than us.

ClaimNCO's lane:

- condition organization,
- evidence mapping,
- missing-evidence flags,
- plain-English next steps,
- VSO/accredited-helper prep,
- safe Ask NCO routing.

If the user does not know what benefits/conditions may apply, route with complementary language:

> If you are unsure what benefits or conditions may apply, a VSO or tools like NVLSP's VA Benefit Identifier can help identify possibilities. ClaimNCO can help you organize those possibilities into evidence gaps and VSO questions.

---

## Roles

### Zach

- Product owner and veteran-tester lens.
- Decide whether the prototype feels like “getting squared away” or like homework.
- Review the final VSO summary and answer: “Would I actually bring this to a VSO?”
- Gather feedback from 2–3 veterans or VSOs once this milestone is live.

### Kestrel / Hermes

- Keep the product lane tight: VSO prep, not NVLSP clone.
- Review Codex changes against ClaimNCO research, safety boundaries, and source-backed wording.
- Check for banned language: guarantees, rating prediction, legal advice, “claim this,” or “maximize benefits.”
- Maintain docs and convert feedback into the next plan.

### Codex

- Implement the UI and prototype behavior only after Zach approves/runs the prompt.
- Work inside `/Users/zd/projects/claimnco-prototype`.
- Keep it static and local/mock-state only.
- Summarize changed files and manual test results.

---

## Task 1: Reframe the Welcome Screen Around the VSO Prep Packet

**Objective:** Make the first screen immediately communicate that ClaimNCO organizes claim info for VSO/readiness, not benefit identification.

**Files:**
- Modify: `index.html`
- Modify: `app.js`
- Modify: `styles.css`
- Test: `TESTING.md`

**Implementation details:**

Update welcome/start copy to emphasize:

```text
Get organized before you file, meet a VSO, or respond to VA.
```

Primary CTA:

```text
Build my VSO prep packet
```

Secondary microcopy:

```text
ClaimNCO does not tell you what to claim, predict ratings, submit claims, or replace accredited help. It helps organize what you know, what is missing, and what to ask next.
```

Add two start choices after the CTA or on the Stage screen:

```text
I know some conditions I want to organize
I'm not sure what conditions or benefits may apply
```

If the user selects `I'm not sure`, show the complementary NVLSP/VSO routing card rather than trying to identify benefits.

**Verification:**

- Open `index.html` locally.
- Confirm the first screen does not imply ClaimNCO identifies benefits or recommends claims.
- Confirm the primary CTA says `Build my VSO prep packet` or equivalent.
- Confirm the “not sure what applies” path routes to VSO/NVLSP complement language.

---

## Task 2: Upgrade the Condition Data Model

**Objective:** Structure every possible condition around the claim-readiness model.

**Files:**
- Modify: `app.js`

**Implementation details:**

Update condition objects to support these fields:

```js
{
  id: "back-pain",
  name: "Back condition",
  currentCondition: "Pain, stiffness, trouble standing for long periods",
  diagnosisStatus: "Not sure",
  serviceEvent: "Lift injury during deployment",
  connectionTheory: "Symptoms started after injury and continued after service",
  severityImpact: "Missed work, limited driving",
  evidence: {
    currentCondition: "Have it",
    serviceEvent: "Not sure",
    nexusLink: "Need to ask VSO",
    severityImpact: "Need to add notes",
    layBuddy: "Need to request it"
  },
  evidenceItems: [],
  vsoQuestions: []
}
```

Add constants for status options:

```js
const evidenceStatusOptions = ["Have it", "Need it", "Not sure", "Need to ask VSO"];
```

Add evidence support tags:

```js
const evidenceSupportTags = [
  "Current condition",
  "Service event/exposure",
  "Nexus/link",
  "Severity/current impact",
  "Treatment history",
  "VA request",
  "Decision/review issue",
  "Lay/buddy statement"
];
```

**Verification:**

- Existing sample conditions still render.
- No console errors in browser dev tools.
- Adding a mock condition produces the new fields or safe defaults.

---

## Task 3: Upgrade Condition Cards and the Add/Edit Condition Flow

**Objective:** Make condition cards teach the useful structure without feeling like a legal form.

**Files:**
- Modify: `app.js`
- Modify: `styles.css`

**Implementation details:**

Each condition card should show these labels:

```text
What is wrong now?
What happened in service?
Why might it be connected?
How does it affect work/life?
Evidence status
Questions for VSO
```

Add or update the condition form fields:

```text
Condition name
Current symptoms or diagnosis
What happened in service / exposure / aggravation
Why you think it may be connected
Work/life impact
```

Keep wording non-legal and veteran-friendly. Do not say the app determines service connection.

**Verification:**

- Add a fake condition.
- Edit or review it.
- Confirm the card makes gaps obvious without predicting approval.
- Confirm an older/low-tech user would not need to know the word “nexus” to start.

---

## Task 4: Add Evidence Tagging by What the Evidence Supports

**Objective:** Teach the key ClaimNCO concept: evidence matters because of what it proves.

**Files:**
- Modify: `app.js`
- Modify: `styles.css`
- Modify: `TESTING.md`

**Implementation details:**

When adding an evidence item, capture:

```text
Evidence item name
Where it is / how to get it
Status: Have it / Need it / Not sure
What it supports: [tags]
Notes
```

Tag options:

- Current condition
- Service event/exposure
- Nexus/link
- Severity/current impact
- Treatment history
- VA request
- Decision/review issue
- Lay/buddy statement

Add helper text:

```text
You do not need to upload the document here. Just track what it supports and where to find it.
```

**Verification:**

- Add fake evidence item.
- Select at least two support tags.
- Confirm it appears under the selected condition.
- Confirm no file upload or storage claim is introduced.

---

## Task 5: Improve the Readiness Dashboard Around Gaps, Not Scores

**Objective:** Show what to review first without implying approval odds.

**Files:**
- Modify: `app.js`
- Modify: `styles.css`

**Implementation details:**

For each condition, compute and display:

```text
Looks organized
Mostly organized
Missing important evidence
Ask VSO before filing
```

Base this on evidence statuses across:

- current condition,
- service event/exposure,
- nexus/link,
- severity/current impact,
- lay/buddy support if relevant.

Never display:

- approval percentage,
- rating estimate,
- “strong claim,”
- “weak claim,”
- “you should claim this.”

Add dashboard sections:

```text
Review first
Looks more organized
Questions to ask
Documents to gather
```

**Verification:**

- Set one sample condition to have missing nexus/link.
- Confirm it appears in `Review first`.
- Confirm language says `Ask VSO before filing`, not `low approval chance`.

---

## Task 6: Build VSO Prep Summary v2

**Objective:** Make the VSO summary the prototype’s strongest artifact.

**Files:**
- Modify: `app.js`
- Modify: `styles.css`
- Modify: `TESTING.md`

**Implementation details:**

Summary should include:

```text
ClaimNCO VSO Prep Summary

Stage:
Intent to File:
VA.gov access:
VSO search area / selected option:

Conditions to discuss:
1. [Condition]
   Current symptoms/diagnosis:
   Service event/exposure/aggravation:
   Possible connection to service:
   Work/life impact:
   Evidence I have:
   Evidence I need / not sure about:
   Questions for VSO:

Documents to gather:
Questions for VSO:
Official/help reminders:
```

Add default VSO questions when fields are missing:

```text
What evidence would best support this condition?
Does this look like an original, secondary, increase, or supplemental issue?
Should I file now, submit/confirm Intent to File, or gather more first?
What should I avoid uploading twice or without context?
```

Include boundary language:

```text
This summary is for organization only. ClaimNCO is not VA, a VSO, an attorney, or an accredited representative.
```

**Verification:**

- Complete main flow.
- Generate summary.
- Copy summary.
- Paste into a text editor.
- Confirm it is useful without exposing SSN/claim number/medical records.

---

## Task 7: Add “Use with NVLSP / VSO / Other Checklist” Flow

**Objective:** Explicitly position ClaimNCO as complementary to benefit identifiers.

**Files:**
- Modify: `app.js`
- Modify: `styles.css`

**Implementation details:**

Add an Ask NCO scenario or stage card:

```text
I used NVLSP, a VSO, or another checklist and have possible conditions.
```

Answer structure:

```text
What this means:
Those tools may help identify possible benefits or claims. ClaimNCO helps organize what to discuss next.

What to do here:
Enter each possible condition as a condition card. Then mark what evidence you have, what is missing, and what to ask a VSO.

What not to assume:
A possible condition is not a guaranteed claim, rating, or approval.

Question to ask VSO:
Which of these possible conditions are ready to file, and which need more evidence or a different claim path?
```

**Verification:**

- Open Ask NCO.
- Select the new scenario.
- Confirm it routes to condition cards and does not duplicate NVLSP’s benefit-identification job.

---

## Task 8: Add Highest-Value Ask NCO Missing Scenarios

**Objective:** Cover the real veteran panic moments without becoming open-ended legal advice.

**Files:**
- Modify: `app.js`
- Modify: `TESTING.md`

**Add these scenario cards:**

1. `I never went to sick call.`
2. `I cannot sign in to VA.gov / Login.gov / ID.me.`
3. `VA asked me for evidence or a form.`
4. `I missed a C&P exam.`
5. `I got 0%.`
6. `My issue was deferred.`
7. `I used NVLSP/VSO and have possible conditions.`

Each card should include:

```text
plain
why
next
checks[]
vso
sourceLabel
sourceUrl
routing when needed
actions[]
```

**Safety requirements:**

- Do not choose an appeal path with confidence.
- Do not say what the veteran should claim.
- Do not predict ratings.
- Route complex denial, effective-date, reduction, MST/PTSD, TDIU, and legal disputes to accredited help.

**Verification:**

- Open Ask NCO and click each new scenario.
- Confirm each has a plain answer, checks, next step, VSO question, and source/routing.
- Confirm no scenario tells the user to exaggerate, minimize, or say exact C&P phrases.

---

## Task 9: Update Testing Guide and Add a VSO-Packet Test Script

**Objective:** Make testing focus on whether the output would help a real VSO interaction.

**Files:**
- Modify: `TESTING.md`
- Modify: `README.md`

**Implementation details:**

Add a test script:

```text
1. Open prototype.
2. Build my VSO prep packet.
3. Add one fake condition.
4. Mark one evidence item as Have it.
5. Mark one evidence item as Not sure / Need it.
6. Add one question for VSO.
7. Generate VSO prep summary.
8. Answer: Would this make a VSO appointment easier?
```

Add success criteria:

- Tester understands ClaimNCO is not VA/NVLSP/legal advice.
- Tester can generate summary without help.
- Tester can identify at least one evidence gap.
- Summary is specific enough to bring to a VSO.
- Summary does not include sensitive identifiers.
- App feels calming, not like a benefits exam.

**Verification:**

- Run the script yourself with fake data.
- Update README if the main flow changed.

---

## Task 10: Manual QA and Safety Review

**Objective:** Verify the prototype works and stays inside the intended lane.

**Files:**
- Review: `index.html`
- Review: `styles.css`
- Review: `app.js`
- Review: `README.md`
- Review: `TESTING.md`

**Commands:**

If no build system exists, serve locally with Python:

```bash
cd /Users/zd/projects/claimnco-prototype
python3 -m http.server 8080
```

Open:

```text
http://localhost:8080
```

Manual checks:

- Browser console has no errors.
- Start flow works on desktop width.
- Start flow works around iPhone width.
- Ask NCO opens/closes from every screen.
- Add condition works.
- Add evidence item works.
- Readiness dashboard updates.
- VSO summary copies.
- External official links open.
- No sensitive upload/storage claim appears.

Safety copy search:

Search for banned language:

```text
guarantee
approval chance
maximize
win your claim
you should claim
rating prediction
we represent
legal advice
```

Expected: none, or only in disclaimers explaining what ClaimNCO does not do.

---

## Codex Prompt for Zach to Use

Paste this into Codex only when ready:

```text
You are working in /Users/zd/projects/claimnco-prototype.

Goal:
Implement the next ClaimNCO prototype milestone: make the prototype clearly about building a VSO-prep packet, not identifying benefits like NVLSP.

Read first:
- README.md
- TESTING.md
- app.js
- index.html
- styles.css
- docs/plans/2026-05-29-vso-prep-wedge-plan.md

Product lane:
ClaimNCO is a claim-prep, evidence-organization, plain-English explanation, and VSO-readiness tool. Do not build a benefit identifier, rating predictor, legal advice bot, automated VA filing flow, or document upload/storage system.

Implement these tasks:
1. Reframe the welcome/start flow around “Build my VSO prep packet.”
2. Add a complementary “I’m not sure what conditions/benefits may apply” path that routes to VSO/NVLSP guidance without duplicating NVLSP.
3. Upgrade condition cards to collect: current symptoms/diagnosis, service event/exposure/aggravation, possible connection, work/life impact, evidence status, and VSO questions.
4. Add evidence item tagging by what the evidence supports: current condition, service event/exposure, nexus/link, severity/current impact, treatment history, VA request, decision/review issue, lay/buddy statement.
5. Improve the readiness dashboard around gaps and VSO questions, not scores or approval odds.
6. Build VSO Prep Summary v2 with stage, Intent to File status, VA.gov access, VSO search area/selected option, condition summaries, evidence have/missing, documents to gather, and questions for VSO.
7. Add Ask NCO scenario: “I used NVLSP, a VSO, or another checklist and have possible conditions.”
8. Add or strengthen Ask NCO scenarios for: never went to sick call, VA.gov/Login.gov/ID.me trouble, missed C&P exam, 0% rating, and deferred issue.
9. Update README.md and TESTING.md with the new VSO-packet test script.

Constraints:
- Static app only. No backend, auth, database, VA integration, document uploads, or permanent sensitive storage.
- Use fake/sample data only.
- Preserve PWA basics.
- Keep language veteran-friendly and short.
- No legal advice, medical advice, ratings, approval predictions, or “claim this” recommendations.
- Route complex/uncertain cases to accredited VSO/representative help.

After editing:
- Run a local manual test with python3 -m http.server 8080 or equivalent.
- Check the browser console for errors.
- Summarize changed files, how to test, and any known limitations.
```

---

## Zach Review Checklist After Codex Finishes

Ask these questions before accepting the work:

- Does this feel like getting squared away, or like homework?
- Is the VSO summary good enough to bring to a real appointment?
- Does the app avoid acting like NVLSP/a benefit identifier?
- Is it clear ClaimNCO is not VA, not legal advice, and not a representative?
- Does it help a veteran know what is missing?
- Does it generate useful questions instead of pretending to know the answer?
- Could an older low-tech veteran follow the flow?
- Could a recently separated veteran use it on a phone?

## Definition of Done

This milestone is done when:

- The main path is clearly `Build my VSO prep packet`.
- A user can create/edit at least one condition card.
- A user can tag evidence by what it supports.
- The readiness dashboard highlights gaps without scoring the claim.
- The VSO summary is copyable and useful.
- Ask NCO has a safe complementary NVLSP/VSO scenario.
- Testing docs match the new flow.
- No unsafe/legal/rating-prediction language is introduced.
