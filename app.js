const screens = [
  "Welcome",
  "Stage",
  "Basics",
  "Conditions",
  "Evidence",
  "Readiness",
  "VSO Help",
  "VSO Summary",
];

const resources = [
  ["Eligibility", "https://www.va.gov/disability/eligibility/"],
  ["How to file", "https://www.va.gov/disability/how-to-file-claim/"],
  ["Evidence needed", "https://www.va.gov/disability/how-to-file-claim/evidence-needed/"],
  ["Intent to File", "https://www.va.gov/resources/your-intent-to-file-a-va-claim/"],
  ["VA.gov sign-in", "https://www.va.gov/sign-in/"],
  ["Signing in to VA.gov", "https://www.va.gov/resources/signing-in-to-vagov/"],
  ["Login.gov and ID.me support", "https://www.va.gov/resources/support-for-common-logingov-and-idme-issues"],
  ["Verify your identity", "https://www.va.gov/resources/verifying-your-identity-on-vagov/"],
  ["Find accredited help", "https://www.va.gov/get-help-from-accredited-representative/"],
  ["Verify accreditation", "https://www.va.gov/ogc/apps/accreditation/index.asp"],
  ["Claim status", "https://www.va.gov/claim-or-appeal-status/"],
  ["Upload evidence", "https://www.va.gov/disability/upload-supporting-evidence/"],
  ["VA claim exam", "https://www.va.gov/resources/va-claim-exam/"],
  ["Decision reviews", "https://www.va.gov/decision-reviews/"],
];

const nationalVsoOptions = [
  {
    name: "Disabled American Veterans (DAV)",
    note: "Large VA-recognized VSO network with a public disability-claims focus.",
    url: "https://www.dav.org/get-help-now/va-benefits-help/",
  },
  {
    name: "Veterans of Foreign Wars (VFW)",
    note: "Large national VSO network with claims and separation benefits help.",
    url: "https://www.vfw.org/assistance/va-claims-separation-benefits",
  },
  {
    name: "American Legion",
    note: "Large national VSO network with veteran benefits support.",
    url: "https://www.legion.org/member-services/veterans-services/veterans-benefits",
  },
  {
    name: "Vietnam Veterans of America (VVA)",
    note: "National VA-recognized VSO that may be relevant for Vietnam-era veterans.",
    url: "https://vva.org/what-we-do/veterans-benefits/",
  },
  {
    name: "Paralyzed Veterans of America (PVA)",
    note: "National VSO especially relevant for spinal cord injury, disease, and mobility issues.",
    url: "https://pva.org/find-support/veterans-benefits/",
  },
  {
    name: "AMVETS",
    note: "National VA-recognized service organization with claims assistance resources.",
    url: "https://amvets.org/veterans-services/",
  },
];

const evidenceStatusOptions = ["Have it", "Need it", "Not sure", "Need to ask VSO"];

const evidenceRequirementFields = [
  {
    key: "currentCondition",
    label: "Current condition",
    helper: "Current symptoms, diagnosis, treatment notes, or a clear description of what is wrong now.",
  },
  {
    key: "serviceEvent",
    label: "Service event/exposure",
    helper: "A record, event, injury, exposure, aggravation, deployment detail, or duty history.",
  },
  {
    key: "nexusLink",
    label: "Nexus/link",
    helper: "Something that helps explain why the current issue may be connected to service.",
  },
  {
    key: "severityImpact",
    label: "Severity/current impact",
    helper: "How often it happens, how bad it gets, and how it affects work or daily life.",
  },
  {
    key: "treatmentHistory",
    label: "Treatment history",
    helper: "VA, private, urgent care, prescriptions, therapy, tests, or self-care notes.",
  },
  {
    key: "layBuddy",
    label: "Lay/buddy statement",
    helper: "A personal, spouse, family, coworker, or buddy statement if it helps explain what changed.",
  },
];

const evidenceSupportTags = [
  "Current condition",
  "Service event/exposure",
  "Nexus/link",
  "Severity/current impact",
  "Treatment history",
  "VA request",
  "Decision/review issue",
  "Lay/buddy statement",
];

const defaultVsoQuestions = [
  "What evidence would best support this condition?",
  "Does this look like an original, secondary, increase, or supplemental issue?",
  "Should I file now, submit or confirm Intent to File, or gather more first?",
  "What should I avoid uploading twice or without context?",
];

const askNcoScenarios = [
  {
    id: "dont-know-claim",
    category: "Start here",
    title: "I do not know what to claim.",
    plain: "ClaimNCO does not decide what to claim. It can help you organize symptoms, diagnoses, service events, exposures, treatment, and questions so an accredited helper can review them with you.",
    why: "A VSO or accredited representative can help you discuss possible claim paths. ClaimNCO is the prep layer that turns possibilities into condition cards, evidence gaps, and VSO questions.",
    next: "Write down the problems you want to ask about, add each as a possible condition, and ask a VSO which items need more evidence or a different path.",
    checks: ["Symptoms or diagnoses", "Service events, exposures, injuries, or aggravation", "Current treatment or records", "Work and daily-life impact", "Any prior VA letters or decisions"],
    vso: "Can you help me identify which possible conditions are worth discussing and what evidence each one needs?",
    sourceLabel: "Accredited-help routing",
    sourceUrl: "https://www.va.gov/get-help-from-accredited-representative/",
    routing: "Use official VA sources and accredited help before acting on confusing or time-sensitive issues.",
    actions: [
      { label: "Add possible condition", icon: "plus", screen: 3 },
      { label: "Find accredited help", icon: "user-search", screen: 6 },
    ],
  },
  {
    id: "intent",
    category: "Before filing",
    title: "I am thinking about filing, but I am not ready.",
    plain: "If you are not ready to file the full claim, it may be worth learning about Intent to File first.",
    why: "An Intent to File may help protect a possible effective date while you gather evidence. The full claim still has to be completed through official VA paths.",
    next: "Learn about Intent to File, write down the date, and keep building your condition and evidence list.",
    checks: ["Have I already started anything on VA.gov?", "Do I know which conditions I may claim?", "Do I need time to gather records?"],
    vso: "Should I submit Intent to File while I gather evidence for my full claim?",
    sourceLabel: "Official VA source",
    sourceUrl: "https://www.va.gov/resources/your-intent-to-file-a-va-claim/",
    actions: [
      { label: "Learn Intent to File", icon: "external-link", url: "https://www.va.gov/resources/your-intent-to-file-a-va-claim/" },
      { label: "Start evidence checklist", icon: "folder-check", screen: 4 },
      { label: "Find a VSO", icon: "user-search", screen: 6 },
    ],
  },
  {
    id: "evidence-basics",
    category: "Evidence",
    title: "I am gathering evidence, but I do not know what proves what.",
    plain: "For many original claims, VA looks for a current condition, something that happened in service, a link between them, and how severe the condition is now.",
    why: "Uploading lots of documents can still feel confusing if each document is not tied to a purpose.",
    next: "Use a condition card, then tag evidence by what it supports.",
    checks: ["Current diagnosis or symptoms", "Service event, injury, exposure, or aggravation", "Possible link between service and current condition", "Severity and daily or work impact"],
    vso: "For this condition, what evidence would best support the link between service and my current symptoms?",
    sourceLabel: "Official VA source plus plain-language explanation",
    sourceUrl: "https://www.va.gov/disability/how-to-file-claim/evidence-needed/",
    actions: [
      { label: "Add condition", icon: "plus", screen: 3 },
      { label: "Open evidence checklist", icon: "folder-check", screen: 4 },
      { label: "Ask VSO", icon: "user-search", screen: 6 },
    ],
  },
  {
    id: "submitted-waiting",
    category: "After filing",
    title: "I already submitted and there is no update.",
    plain: "If VA is not asking you for anything right now, you may simply be waiting while VA reviews the claim, gathers records, or schedules exams.",
    why: "No update does not automatically mean something is wrong. The key question is whether VA is waiting on you.",
    next: "Check claim status, watch mail, email, phone messages, and save any submission confirmation.",
    checks: ["Current VA.gov status", "Any VA request or deadline", "Any exam notice", "Current address, phone, and email with VA"],
    vso: "Can you help me confirm whether VA is waiting on me, or whether I am waiting on VA?",
    sourceLabel: "Official VA source",
    sourceUrl: "https://www.va.gov/disability/after-you-file-claim/",
    actions: [
      { label: "Check status", icon: "external-link", url: "https://www.va.gov/claim-or-appeal-status/" },
      { label: "Find a VSO", icon: "user-search", screen: 6 },
    ],
  },
  {
    id: "va-request",
    category: "VA letter",
    title: "VA asked me for evidence or forms.",
    plain: "VA is asking you to send or confirm information before it decides the claim.",
    why: "A VA request can have a deadline. Missing it can delay or affect the claim.",
    next: "Write down the letter date, response deadline, what VA requested, and which condition it relates to.",
    checks: ["Letter date", "Response deadline", "Requested evidence or form", "Condition or claim issue involved", "Whether you understand what VA is asking for"],
    vso: "Can you help me understand exactly what VA is asking for and how I should respond?",
    sourceLabel: "Official VA source",
    sourceUrl: "https://www.va.gov/disability/upload-supporting-evidence/",
    routing: "VSO strongly recommended if the deadline is close or the request is confusing.",
    actions: [
      { label: "Upload evidence guidance", icon: "external-link", url: "https://www.va.gov/disability/upload-supporting-evidence/" },
      { label: "Find a VSO", icon: "user-search", screen: 6 },
    ],
  },
  {
    id: "more-evidence",
    category: "After filing",
    title: "I found more evidence after filing.",
    plain: "If the claim is still open and the evidence is relevant, new, and connected to a claimed condition, it may help to submit it.",
    why: "Not every upload helps. Duplicate or unrelated documents can create clutter.",
    next: "Before uploading, connect the evidence to a condition and the claim element it supports.",
    checks: ["Is it for a condition already claimed?", "Is it new or just a duplicate?", "Does it support diagnosis, service event, nexus, severity, or impact?", "Was this filed as a Fully Developed Claim?"],
    vso: "Should I upload this evidence now, or should I have you review it first?",
    sourceLabel: "Official VA source plus plain-language explanation",
    sourceUrl: "https://www.va.gov/disability/upload-supporting-evidence/",
    routing: "Ask a VSO if you are unsure, especially with Fully Developed Claims or new conditions.",
    actions: [
      { label: "Evidence checklist", icon: "folder-check", screen: 4 },
      { label: "Ask a VSO first", icon: "user-search", screen: 6 },
    ],
  },
  {
    id: "cp-exam",
    category: "C&P exam",
    title: "I have a C&P exam and need to prepare.",
    plain: "A C&P exam helps VA evaluate your condition, service connection, or severity. It is not regular medical treatment.",
    why: "The exam can affect the decision. Attend if possible. If you cannot attend, reschedule as soon as possible.",
    next: "Prepare short notes about symptoms, flare-ups, frequency, severity, treatment, work impact, and daily-life impact.",
    checks: ["Exam date, time, and location or phone/video details", "Conditions being examined", "Symptoms and bad days", "Work and daily-life impact", "Medications, treatment, and assistive devices"],
    vso: "What should I be ready to explain at this C&P exam for my condition?",
    sourceLabel: "Official VA source",
    sourceUrl: "https://www.va.gov/resources/va-claim-exam/",
    routing: "Tell the truth. Be specific. Do not exaggerate. Do not minimize.",
    actions: [
      { label: "VA claim exam info", icon: "external-link", url: "https://www.va.gov/resources/va-claim-exam/" },
      { label: "Find a VSO", icon: "user-search", screen: 6 },
    ],
  },
  {
    id: "missed-exam",
    category: "Urgent",
    title: "I missed a C&P exam.",
    plain: "Act quickly. Contact the exam provider or VA as soon as possible to explain and ask about rescheduling.",
    why: "Missing a required exam without good cause can hurt the claim or cause VA to decide based on the existing record.",
    next: "Call the number on the exam notice, write down who you spoke with, and contact a VSO or accredited representative.",
    checks: ["Exam notice phone number", "Reason you missed it", "Call date and time", "Name of person you spoke with", "Any new appointment or instructions"],
    vso: "I missed my C&P exam. What should I do right now to protect my claim?",
    sourceLabel: "Official VA source plus deadline warning",
    sourceUrl: "https://www.va.gov/resources/va-claim-exam/",
    routing: "Urgent VSO or accredited help recommended.",
    actions: [
      { label: "Find a VSO now", icon: "user-search", screen: 6 },
      { label: "VA claim exam info", icon: "external-link", url: "https://www.va.gov/resources/va-claim-exam/" },
    ],
  },
  {
    id: "pfn",
    category: "After filing",
    title: "My status says Preparation for Notification.",
    plain: "Preparation for Notification means VA is preparing the decision notice. This status alone does not tell you whether the claim was approved or denied.",
    why: "Do not rely on status rumors, payment guesses, or screenshots. The official decision letter controls.",
    next: "Watch for the decision letter on VA.gov and in the mail. Review the actual letter when it arrives.",
    checks: ["Decision letter availability", "Mail and VA.gov messages", "Conditions granted, denied, or deferred", "Ratings, effective dates, and deadlines"],
    vso: "When the decision letter arrives, can you help me review what VA decided and what deadlines matter?",
    sourceLabel: "Official VA source plus plain-language explanation",
    sourceUrl: "https://www.va.gov/decision-reviews/",
    actions: [
      { label: "Decision reviews", icon: "external-link", url: "https://www.va.gov/decision-reviews/" },
      { label: "Find a VSO", icon: "user-search", screen: 6 },
    ],
  },
  {
    id: "denied",
    category: "Decision",
    title: "A condition was denied.",
    plain: "A denial does not always mean the issue is over. The decision letter should explain why VA denied it.",
    why: "The next step depends on the reason: missing diagnosis, missing service event, missing nexus, unclear severity evidence, or possible VA error.",
    next: "Identify the denial reason and save the review deadline. Talk to accredited help before choosing a review path.",
    checks: ["Decision date", "Denial reason", "Evidence VA reviewed", "Review deadline", "Whether you have new and relevant evidence"],
    vso: "Based on the denial reason, what review option should I ask about and what evidence is missing?",
    sourceLabel: "Official VA source",
    sourceUrl: "https://www.va.gov/decision-reviews/",
    routing: "VSO, accredited claims agent, or attorney may be appropriate depending on complexity.",
    actions: [
      { label: "Decision reviews", icon: "external-link", url: "https://www.va.gov/decision-reviews/" },
      { label: "Find accredited help", icon: "user-search", screen: 6 },
    ],
  },
  {
    id: "need-vso",
    category: "Trusted help",
    title: "I need a VSO or accredited help.",
    plain: "You can get help from a VA-accredited VSO representative. VSO help with VA benefit claims is free.",
    why: "Accredited representatives can help prepare, present, and support VA benefit claims. Use VA's official tools to verify help before sharing sensitive information.",
    next: "Search by ZIP code or city/state and prepare a short summary before calling.",
    checks: ["ZIP code or city/state", "Claim stage", "Conditions list", "Evidence gaps", "Questions you want answered"],
    vso: "Can you review where I am, what is missing, and what I should do next?",
    sourceLabel: "Official VA source",
    sourceUrl: "https://www.va.gov/get-help-from-accredited-representative/",
    actions: [
      { label: "Go to VSO help", icon: "user-search", screen: 6 },
      { label: "VA representative search", icon: "external-link", url: "https://www.va.gov/get-help-from-accredited-representative/" },
    ],
  },
  {
    id: "decision-received",
    category: "Decision",
    title: "I got a decision.",
    plain: "The decision letter is the key document. It explains what VA granted, denied, deferred, rated, and what deadlines may apply.",
    why: "A decision can involve ratings, effective dates, denials, deferred issues, or review options. The safest next step depends on the letter, not a status screen or payment guess.",
    next: "Save the decision date, list what was granted or denied, and ask accredited help to review anything confusing or time-sensitive.",
    checks: ["Decision date", "Granted, denied, or deferred conditions", "Ratings and effective dates", "Reason for any denial", "Review deadline"],
    vso: "Can you help me review what VA decided, what deadlines matter, and whether any review option makes sense?",
    sourceLabel: "Official VA source",
    sourceUrl: "https://www.va.gov/decision-reviews/",
    routing: "VSO, accredited claims agent, or attorney may be appropriate for denials, low ratings, effective-date concerns, or complex review choices.",
    actions: [
      { label: "Decision reviews", icon: "external-link", url: "https://www.va.gov/decision-reviews/" },
      { label: "Find accredited help", icon: "user-search", screen: 6 },
    ],
  },
  {
    id: "not-sure",
    category: "Start here",
    title: "I am not sure where I am.",
    plain: "Not sure is a normal place to start. The safest first move is to identify whether you have not filed, already filed, received a VA request, have an exam, or have a decision letter.",
    why: "The right next step changes depending on the stage. Sorting the stage first helps avoid missing a deadline or doing extra work that does not help.",
    next: "Check VA.gov, mail, email, phone messages, and any paperwork you have. If you still are not sure, bring a simple summary to a VSO or accredited representative.",
    checks: ["Any Intent to File or claim confirmation", "Any VA letter or deadline", "Any C&P exam notice", "Any decision letter", "Whether you can sign in to VA.gov"],
    vso: "Can you help me figure out where I am in the process and what I should do next?",
    sourceLabel: "Official VA source plus plain-language routing",
    sourceUrl: "https://www.va.gov/claim-or-appeal-status/",
    routing: "VSO or accredited help is recommended if you have a deadline, decision letter, missed exam, or cannot tell what VA is asking for.",
    actions: [
      { label: "Check claim status", icon: "external-link", url: "https://www.va.gov/claim-or-appeal-status/" },
      { label: "Go to stage questions", icon: "map", screen: 1 },
      { label: "Find a VSO", icon: "user-search", screen: 6 },
    ],
  },
  {
    id: "benefits-not-sure",
    category: "Start here",
    title: "I am not sure what to organize.",
    plain: "Start with plain-language notes: symptoms, diagnoses, service events, exposures, current treatment, VA letters, and problems you want to ask about.",
    why: "ClaimNCO does not identify benefits or tell you what to claim. Its job is to organize possible conditions into evidence gaps and VSO questions.",
    next: "Add one possible condition or question at a time, then ask a VSO or accredited representative which items need more evidence or a different path.",
    checks: ["Any symptoms or problems you want to ask about", "Any service events, exposures, or injuries you remember", "Any VA letters or prior decisions", "Whether you need a VSO to help identify possible paths"],
    vso: "Can you help me identify which possible benefits or conditions may apply before I organize evidence?",
    sourceLabel: "Find accredited help",
    sourceUrl: "https://www.va.gov/get-help-from-accredited-representative/",
    routing: "ClaimNCO keeps the prep organized; accredited help should review unclear or high-stakes questions.",
    actions: [
      { label: "Find accredited help", icon: "user-search", screen: 6 },
      { label: "Add possible condition", icon: "plus", screen: 3 },
    ],
  },
  {
    id: "possible-conditions",
    category: "VSO prep",
    title: "I have possible conditions from a VSO, VA letter, checklist, records, or notes.",
    plain: "Good. Now organize each possible condition so a VSO or accredited representative can review it with less guesswork.",
    why: "A possible condition is only a starting point. VA decisions depend on evidence, claim path, and official review.",
    next: "Turn each possible condition into a condition card. For each one, capture the current condition, service event or exposure, possible link, severity or impact, evidence, and questions for a VSO.",
    checks: ["List of possible conditions", "Current symptoms or diagnosis", "Service event, exposure, or aggravation", "Possible connection to service", "Evidence you already have"],
    vso: "Which of these possible conditions are ready to file, and which need more evidence or a different claim path?",
    sourceLabel: "Official VA source",
    sourceUrl: "https://www.va.gov/disability/how-to-file-claim/evidence-needed/",
    routing: "Use accredited help before acting on confusing or high-stakes claim paths.",
    actions: [
      { label: "Add condition cards", icon: "plus", screen: 3 },
      { label: "Open evidence checklist", icon: "folder-check", screen: 4 },
      { label: "Find a VSO", icon: "user-search", screen: 6 },
    ],
  },
  {
    id: "increase",
    category: "Current rating",
    title: "I need an increase.",
    plain: "If a service-connected condition has worsened, the useful prep is current severity, treatment, flare-ups, work impact, daily-life impact, and what evidence shows the change.",
    why: "Increase discussions are about current severity and impact. ClaimNCO can help organize that story and the questions to ask without estimating an outcome.",
    next: "Create or update a condition card, mark current-severity evidence, and ask accredited help what evidence is useful before filing anything.",
    checks: ["Current symptoms and bad days", "Recent VA or private treatment", "Medication or assistive devices", "Work and daily-life impact", "Any recent exam or decision letter"],
    vso: "For this already service-connected condition, what evidence should I organize before discussing an increase?",
    sourceLabel: "Official VA source",
    sourceUrl: "https://www.va.gov/disability/how-to-file-claim/",
    routing: "Use accredited help if the condition, effective date, unemployability, or review path is confusing.",
    actions: [
      { label: "Add condition card", icon: "plus", screen: 3 },
      { label: "Open evidence checklist", icon: "folder-check", screen: 4 },
      { label: "Find accredited help", icon: "user-search", screen: 6 },
    ],
  },
  {
    id: "no-sick-call",
    category: "Evidence",
    title: "I never went to sick call.",
    plain: "Not having sick-call records does not automatically end the conversation. It means you may need other evidence to explain what happened and what changed.",
    why: "A VSO can help you think through service records, duty history, buddy statements, private treatment, and your own statement without guessing.",
    next: "Write down the event, when it happened, who saw it, what changed after, and what records or statements might support it.",
    checks: ["Service event or exposure", "People who saw the event or symptoms", "Private or VA treatment after service", "Work/life changes", "Buddy or family statement options"],
    vso: "If I did not go to sick call, what evidence can help explain the service event and ongoing symptoms?",
    sourceLabel: "Official VA source",
    sourceUrl: "https://www.va.gov/disability/how-to-file-claim/evidence-needed/",
    routing: "Ask a VSO before assuming missing sick-call records mean nothing can be organized.",
    actions: [
      { label: "Add condition", icon: "plus", screen: 3 },
      { label: "Open evidence checklist", icon: "folder-check", screen: 4 },
    ],
  },
  {
    id: "sign-in-trouble",
    category: "VA.gov access",
    title: "I cannot sign in to VA.gov / Login.gov / ID.me.",
    plain: "Sign-in problems are common and should be handled through official VA, Login.gov, or ID.me support pages.",
    why: "VA.gov access helps you check claim status, letters, evidence requests, and decision documents. It is also identity-protected.",
    next: "Use the official sign-in and support links. If you are stuck, bring the issue to a VSO and ask what can be done without VA.gov access.",
    checks: ["Which account you use", "Email access", "Multifactor method", "Current ID or alternate verification option", "Whether a VSO can help you review next steps"],
    vso: "What can I do for my claim prep while I am still trying to fix VA.gov sign-in?",
    sourceLabel: "Official VA source",
    sourceUrl: "https://www.va.gov/resources/support-for-common-logingov-and-idme-issues/",
    actions: [
      { label: "VA.gov sign-in", icon: "external-link", url: "https://www.va.gov/sign-in/" },
      { label: "Login.gov and ID.me support", icon: "external-link", url: "https://www.va.gov/resources/support-for-common-logingov-and-idme-issues/" },
    ],
  },
  {
    id: "zero-percent",
    category: "Decision",
    title: "I got 0%.",
    plain: "A 0% decision can still matter, but the decision letter controls what VA decided and why.",
    why: "The next step depends on what the letter says about the condition, evidence, effective date, and review options.",
    next: "Save the decision date, read the reasons, and ask accredited help whether more evidence, a review option, or a future increase discussion is appropriate.",
    checks: ["Decision date", "Condition listed at 0%", "Reasons VA gave", "Evidence VA reviewed", "Symptoms and work/life impact since the exam"],
    vso: "Based on this 0% decision, what evidence or review path should I ask about?",
    sourceLabel: "Official VA source",
    sourceUrl: "https://www.va.gov/decision-reviews/",
    routing: "Ask a VSO, accredited claims agent, or attorney before choosing a review path.",
    actions: [
      { label: "Decision reviews", icon: "external-link", url: "https://www.va.gov/decision-reviews/" },
      { label: "Find accredited help", icon: "user-search", screen: 6 },
    ],
  },
  {
    id: "deferred",
    category: "Decision",
    title: "My issue was deferred.",
    plain: "Deferred usually means VA has not made a final decision on that issue yet.",
    why: "VA may need more evidence, records, clarification, or an exam before deciding that issue.",
    next: "Track the deferred condition, watch for VA requests or exam notices, and ask a VSO what evidence may still be needed.",
    checks: ["Which issue was deferred", "Any VA request or exam notice", "Evidence already listed in the decision", "Any deadline", "Current contact information with VA"],
    vso: "What is VA likely waiting on for this deferred issue, and is there evidence I should organize now?",
    sourceLabel: "Official VA source",
    sourceUrl: "https://www.va.gov/claim-or-appeal-status/",
    routing: "Use VA.gov and mail notices for current status, and bring confusing letters to accredited help.",
    actions: [
      { label: "Check claim status", icon: "external-link", url: "https://www.va.gov/claim-or-appeal-status/" },
      { label: "Find a VSO", icon: "user-search", screen: 6 },
    ],
  },
];

const askNcoEntryOptions = [
  { labelHtml: "I don&rsquo;t know what to claim", scenarioId: "dont-know-claim" },
  { labelHtml: "I already have possible conditions", scenarioId: "possible-conditions" },
  { labelHtml: "I&rsquo;m not sure what to organize", scenarioId: "benefits-not-sure" },
  { labelHtml: "I need an increase", scenarioId: "increase" },
  { labelHtml: "I&rsquo;m thinking about filing", scenarioId: "intent" },
  { labelHtml: "I&rsquo;m gathering evidence", scenarioId: "evidence-basics" },
  { labelHtml: "I never went to sick call", scenarioId: "no-sick-call" },
  { labelHtml: "I can&rsquo;t sign in to VA.gov / Login.gov / ID.me", scenarioId: "sign-in-trouble" },
  { labelHtml: "I already submitted", scenarioId: "submitted-waiting" },
  { labelHtml: "I got a VA letter", scenarioId: "va-request" },
  { labelHtml: "I have a C&amp;P exam", scenarioId: "cp-exam" },
  { labelHtml: "I missed a C&amp;P exam", scenarioId: "missed-exam" },
  { labelHtml: "I got a decision", scenarioId: "decision-received" },
  { labelHtml: "A condition was denied", scenarioId: "denied" },
  { labelHtml: "I got 0%", scenarioId: "zero-percent" },
  { labelHtml: "My issue was deferred", scenarioId: "deferred" },
  { labelHtml: "I need a VSO", scenarioId: "need-vso" },
  { labelHtml: "I&rsquo;m not sure", scenarioId: "not-sure" },
];

const initialState = () => ({
  screen: 0,
  stage: "gathering",
  pathwayMode: null,
  basics: {
    filedBefore: "No",
    serviceStatus: "Separated",
    vaGovAccess: "I need help with sign-in",
    intentToFile: "Not sure",
    representative: "Looking for one",
  },
  conditions: [
    {
      id: "back-pain",
      name: "Back condition",
      currentCondition: "Pain, stiffness, trouble standing for long periods",
      diagnosisStatus: "Not sure",
      serviceEvent: "Lift injury during deployment",
      connectionTheory: "Symptoms started after the lift injury and continued after service",
      severityImpact: "Missed work, limited driving",
      evidence: {
        currentCondition: "Have it",
        serviceEvent: "Not sure",
        nexusLink: "Need to ask VSO",
        severityImpact: "Need it",
        treatmentHistory: "Have it",
        layBuddy: "Need it",
      },
      evidenceItems: [
        {
          title: "Private clinic visit notes",
          location: "Private clinic portal",
          status: "Have it",
          supports: ["Current condition", "Treatment history"],
          notes: "Name only. No document stored in prototype.",
        },
      ],
      vsoQuestions: ["What evidence would best explain the link between the lift injury and current back symptoms?"],
    },
    {
      id: "ringing-ears",
      name: "Ringing in ears",
      currentCondition: "Ringing after noise exposure",
      diagnosisStatus: "No",
      serviceEvent: "Weapons and vehicle noise",
      connectionTheory: "Ringing started during service noise exposure and still affects sleep",
      severityImpact: "Trouble sleeping and focusing",
      evidence: {
        currentCondition: "Not sure",
        serviceEvent: "Have it",
        nexusLink: "Need to ask VSO",
        severityImpact: "Need it",
        treatmentHistory: "Not sure",
        layBuddy: "Not sure",
      },
      evidenceItems: [],
      vsoQuestions: ["Should I get a hearing exam or ask about other evidence before filing?"],
    },
  ],
  selectedConditionId: "back-pain",
  vso: {
    searchLocation: "",
    savedOption: "",
  },
  editingCondition: null,
  editingEvidenceItem: false,
  reviewerGuide: false,
  lastFeedback: null,
  resetArmed: false,
  askNco: {
    open: false,
    scenarioId: null,
  },
  reviewTopics: [
    "Intent to File timing",
    "Accredited representative options",
    "Medical records for current condition",
    "Symptom impact notes",
  ],
});

let state = initialState();

const screenEl = document.querySelector("#screen");
const titleEl = document.querySelector("#screenTitle");
const stepLabelEl = document.querySelector("#stepLabel");
const progressShell = document.querySelector(".progress-shell");
const progressEl = document.querySelector("#progressFill");
const backButton = document.querySelector("#backButton");
const askNcoButton = document.querySelector("#askNcoButton");
const resourcesButton = document.querySelector("#resourcesButton");
const drawer = document.querySelector("#resourceDrawer");
const drawerBackdrop = document.querySelector("#drawerBackdrop");
const closeResourcesButton = document.querySelector("#closeResourcesButton");
const resourceList = document.querySelector("#resourceList");
const miniMap = document.querySelector("#miniMap");
const askNcoPanel = document.querySelector("#askNcoPanel");
const askNcoBackdrop = document.querySelector("#askNcoBackdrop");
const askNcoContent = document.querySelector("#askNcoContent");
const closeAskNcoButton = document.querySelector("#closeAskNcoButton");

function icon(name) {
  return `<i data-lucide="${name}" aria-hidden="true"></i>`;
}

function hydrateIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function currentCondition() {
  return state.conditions.find((condition) => condition.id === state.selectedConditionId) || state.conditions[0];
}

function conditionValue(condition, key, fallback = "Not listed") {
  const value = condition[key];
  return value && String(value).trim() ? value : fallback;
}

function evidenceStatus(condition, key) {
  return condition.evidence?.[key] || "Not sure";
}

function evidenceStatusLabel(status) {
  if (status === "Have it") return "Evidence I have";
  if (status === "Need it") return "Need to gather";
  if (status === "Need to ask VSO") return "Ask VSO";
  return "Not sure";
}

function evidenceNeedStatuses() {
  return ["Need it", "Not sure", "Need to ask VSO"];
}

function conditionEvidenceEntries(condition) {
  return evidenceRequirementFields.map((field) => ({
    ...field,
    status: evidenceStatus(condition, field.key),
  }));
}

function conditionVsoQuestions(condition) {
  const custom = condition.vsoQuestions?.filter(Boolean) || [];
  const gapQuestions = conditionEvidenceEntries(condition)
    .filter((entry) => entry.status !== "Have it")
    .map((entry) => `What evidence would help with ${entry.label.toLowerCase()} for ${condition.name}?`);
  return [...new Set([...custom, ...gapQuestions, ...defaultVsoQuestions])];
}

function evidenceItemsFor(condition) {
  return condition.evidenceItems || condition.items || [];
}

function documentsToGather(condition) {
  const gapDocs = conditionEvidenceEntries(condition)
    .filter((entry) => evidenceNeedStatuses().includes(entry.status))
    .map((entry) => `${condition.name}: ${entry.label}`);
  const itemDocs = evidenceItemsFor(condition)
    .filter((item) => item.status !== "Have it")
    .map((item) => `${condition.name}: ${item.title || "Untitled evidence item"}`);
  return [...gapDocs, ...itemDocs];
}

function packetStats() {
  const evidenceEntries = state.conditions.flatMap(conditionEvidenceEntries);
  const evidenceItems = state.conditions.flatMap(evidenceItemsFor);
  const documents = state.conditions.flatMap(documentsToGather);

  return {
    conditions: state.conditions.length,
    have: evidenceEntries.filter((entry) => entry.status === "Have it").length,
    needsReview: evidenceEntries.filter((entry) => entry.status !== "Have it").length,
    evidenceItems: evidenceItems.length,
    documents: documents.length,
    questions: vsoQuestions().length,
  };
}

function resetPrototype() {
  state = initialState();
  state.resetArmed = false;
  state.lastFeedback = "Prototype reset with sample data.";
  render();
  screenEl.scrollTop = 0;
  showToast("Prototype reset with sample data.");
}

function setFeedback(message) {
  state.lastFeedback = message;
}

function setScreen(index) {
  state.askNco.open = false;
  state.askNco.scenarioId = null;
  state.pathwayMode = null;
  state.reviewerGuide = false;
  state.resetArmed = false;
  state.screen = Math.max(0, Math.min(index, screens.length - 1));
  render();
  screenEl.scrollTop = 0;
}

function openAskNco(scenarioId = null) {
  state.askNco.open = true;
  state.askNco.scenarioId = scenarioId;
  renderAskNcoPanel();
  closeAskNcoButton.focus();
}

function nextScreen() {
  setScreen(state.screen + 1);
}

function continueFromStage() {
  if (state.stage === "submitted" || state.stage === "decision") {
    state.pathwayMode = state.stage;
    state.reviewerGuide = false;
    state.editingCondition = null;
    state.editingEvidenceItem = false;
    render();
    screenEl.scrollTop = 0;
    showToast(state.stage === "submitted" ? "After-filing help opened." : "Decision help opened.");
    return;
  }

  nextScreen();
}

function previousScreen() {
  if (state.reviewerGuide) {
    state.reviewerGuide = false;
    render();
    screenEl.scrollTop = 0;
    return;
  }

  if (state.pathwayMode) {
    state.pathwayMode = null;
    render();
    screenEl.scrollTop = 0;
    return;
  }
  setScreen(state.screen - 1);
}

function updateShell() {
  const current = state.pathwayMode
    ? state.pathwayMode === "submitted"
      ? "After Filing"
      : "Decision Help"
    : state.reviewerGuide
      ? "Reviewer Guide"
    : screens[state.screen];
  titleEl.textContent = current === "Welcome" ? "ClaimNCO" : current;
  stepLabelEl.textContent = state.reviewerGuide
    ? "Feedback mode"
    : state.pathwayMode
    ? "Different path"
    : `Step ${state.screen + 1} of ${screens.length}`;
  progressEl.style.width = state.reviewerGuide ? "100%" : `${((state.screen + 1) / screens.length) * 100}%`;
  progressShell.hidden = false;
  backButton.disabled = state.screen === 0 && !state.pathwayMode && !state.reviewerGuide;
  backButton.style.visibility = state.screen === 0 && !state.pathwayMode && !state.reviewerGuide ? "hidden" : "visible";
  askNcoButton.disabled = false;
  askNcoButton.setAttribute("aria-current", "false");
}

function renderMiniMap() {
  miniMap.innerHTML = screens
    .map(
      (screen, index) => `
        <button class="mini-step ${index === state.screen ? "active" : ""}" type="button" data-screen="${index}">
          <span>${index + 1}</span>
          <span>${escapeHtml(screen)}</span>
        </button>
      `,
    )
    .join("");
}

function renderInlineFeedback() {
  if (!state.lastFeedback) return;
  const stack = screenEl.querySelector(".screen-stack");
  if (!stack) return;
  const anchor = stack.querySelector(".hero-block");
  const feedbackHtml = `
    <div class="notice save-banner" role="status" aria-live="polite">
      ${icon("check-circle")}
      <p><strong>Saved to this prototype</strong> ${escapeHtml(state.lastFeedback)}</p>
    </div>
  `;

  if (anchor) {
    anchor.insertAdjacentHTML("afterend", feedbackHtml);
  } else {
    stack.insertAdjacentHTML("afterbegin", feedbackHtml);
  }
}

function renderResources() {
  resourceList.innerHTML = resources
    .map(
      ([label, url]) => `
        <a class="resource-link" href="${url}" target="_blank" rel="noreferrer">
          ${icon("external-link")}
          <span>${label}</span>
        </a>
      `,
    )
    .join("");
}

function inlineResourceItems() {
  const items = [
    ["Evidence needed", "https://www.va.gov/disability/how-to-file-claim/evidence-needed/"],
    ["Intent to File", "https://www.va.gov/resources/your-intent-to-file-a-va-claim/"],
    ["Find accredited help", "https://www.va.gov/get-help-from-accredited-representative/"],
  ];

  if (state.basics.vaGovAccess !== "Yes") {
    items.splice(2, 0, ["VA.gov sign-in help", "https://www.va.gov/resources/support-for-common-logingov-and-idme-issues"]);
  }

  return items;
}

function renderInlineResources(items = inlineResourceItems()) {
  return items
    .map(
      ([label, url]) => `
        <a class="resource-link" href="${url}" target="_blank" rel="noreferrer">
          ${icon("external-link")}
          <span>${label}</span>
        </a>
      `,
    )
    .join("");
}

function renderPossibleConditionsCard() {
  return `
    <section class="info-panel handoff-card">
      <div class="condition-head">
        <div>
          <p class="eyebrow">Condition organizer</p>
          <h3>Already have possible conditions?</h3>
        </div>
        ${icon("route")}
      </div>
      <p>If you already have possible conditions from a VSO, VA letter, medical records, symptoms, or another checklist, ClaimNCO can help organize them into evidence gaps and VSO questions.</p>
      <div class="action-row">
        <button class="button secondary" type="button" data-add-condition>${icon("plus")} Add possible condition</button>
        <button class="button secondary" type="button" data-screen-jump="5">${icon("list-checks")} Prepare VSO questions</button>
        <button class="button secondary" type="button" data-screen-jump="6">${icon("user-search")} Find accredited help</button>
        <button class="button secondary" type="button" data-open-ask-nco data-ask-open-scenario="possible-conditions">${icon("clipboard-list")} I already have notes</button>
      </div>
      <p class="source-note">This is not a recommendation to file anything. Bring the organized packet to a VSO or accredited representative.</p>
    </section>
  `;
}

function reviewerFeedbackText() {
  return [
    "ClaimNCO Reviewer Feedback",
    "",
    "Reviewer role: Veteran / VSO / accredited representative / family helper / other",
    "",
    "1. In one sentence, what do you think ClaimNCO is for?",
    "",
    "2. Would the VSO prep summary make an appointment easier? Why or why not?",
    "",
    "3. What is confusing, missing, or too much?",
    "",
    "4. Which screen felt most useful?",
    "",
    "5. Which screen would make a veteran nervous or uncertain?",
    "",
    "6. Did ClaimNCO clearly avoid telling the user what to claim or promising outcomes?",
    "",
    "7. What would you change before showing this to more veterans?",
    "",
    "Safety note: Use fake/sample information only. Do not enter SSNs, claim numbers, banking information, full medical records, or private identifiers.",
  ].join("\n");
}

function renderReviewerGuide() {
  return `
    <div class="screen-stack">
      <div class="hero-block">
        <p class="eyebrow">Feedback mode</p>
        <h2>VSO reviewer guide.</h2>
        <p>Use this script to test whether ClaimNCO makes a veteran more organized before a VSO or accredited representative appointment.</p>
      </div>

      <div class="notice warning">
        ${icon("lock")}
        <p><strong>Use fake information</strong>This is still a static prototype. Do not enter SSNs, claim numbers, banking information, full medical records, or private identifiers.</p>
      </div>

      <section class="info-panel">
        <h3>What we are testing</h3>
        <ul class="guidance-list">
          <li>${icon("circle-dot")}<span>Can a veteran understand where they are in the process?</span></li>
          <li>${icon("circle-dot")}<span>Can they organize 1-3 possible conditions without feeling told what to claim?</span></li>
          <li>${icon("circle-dot")}<span>Can they mark evidence they have and gaps they need to ask about?</span></li>
          <li>${icon("circle-dot")}<span>Would the final VSO prep summary make an appointment easier?</span></li>
        </ul>
      </section>

      <section class="info-panel">
        <h3>5-minute walk-through</h3>
        <ol class="question-list">
          <li>Click <strong>Build my VSO prep packet</strong>.</li>
          <li>Add or edit one fake condition.</li>
          <li>Mark one evidence area as <strong>Have it</strong>.</li>
          <li>Mark one evidence area as <strong>Need it</strong> or <strong>Not sure</strong>.</li>
          <li>Generate the VSO prep summary.</li>
          <li>Ask: would this help a real VSO appointment?</li>
        </ol>
      </section>

      <section class="info-panel">
        <h3>Feedback questions</h3>
        <pre class="feedback-prompts">${escapeHtml(reviewerFeedbackText())}</pre>
      </section>

      <div class="actions">
        <button class="button primary full" type="button" data-reviewer-start>${icon("play")} Start reviewer walk-through</button>
        <button class="button secondary full" type="button" data-reviewer-summary>${icon("file-text")} Jump to sample summary</button>
        <button class="button secondary full" type="button" data-copy-reviewer-feedback>${icon("copy")} Copy feedback questions</button>
        <button class="button secondary full" type="button" data-close-reviewer-guide>${icon("arrow-left")} Back to prototype</button>
      </div>
    </div>
  `;
}

function renderWelcome() {
  return `
    <div class="screen-stack">
      <div class="hero-block branded-welcome">
        <img class="brand-hero-mark" src="./assets/brand/claimnco-icon-concept.svg" alt="ClaimNCO icon">
        <p class="brand-kicker">ClaimNCO</p>
        <h2>Get organized before your next VA claim step.</h2>
        <p>Understand where you are. Organize what you have. Know what to ask next before filing, meeting a VSO, responding to VA, or reviewing a decision.</p>
      </div>

      <div class="notice">
        ${icon("shield-check")}
        <p><strong>Prototype boundary</strong>ClaimNCO helps organize what you know, what is missing, and what to ask next. It does not tell you what to claim, estimate VA percentages, submit claims, or replace accredited help.</p>
      </div>

      <div class="notice warning">
        ${icon("lock")}
        <p><strong>No sensitive uploads</strong>This first version tracks document names and status only. Do not enter SSNs, claim numbers, banking information, or full medical records.</p>
      </div>

      <div class="actions">
        <button class="button primary full" type="button" data-next>
          ${icon("clipboard-list")} Build my VSO prep packet
        </button>
        <button class="button secondary full" type="button" data-open-ask-nco>
          ${icon("message-circle-question")} Ask NCO
        </button>
        <button class="button secondary full" type="button" data-open-resources>
          ${icon("book-open")} View official VA resources
        </button>
      </div>

      <details class="guide-disclosure reviewer-disclosure">
        <summary>
          <span>For reviewers</span>
          ${icon("chevron-down")}
        </summary>
        <div class="guide-body">
          <p>Open a short script for VSO, veteran, or helper feedback.</p>
          <button class="button secondary full" type="button" data-open-reviewer-guide>
            ${icon("clipboard-check")} VSO reviewer guide
          </button>
        </div>
      </details>
    </div>
  `;
}

function renderStage() {
  const options = [
    ["not-started", "I have not started yet", "Start with the basics and build your condition list."],
    ["intent", "I started an application or Intent to File", "Track timing and continue gathering evidence."],
    ["gathering", "I am gathering evidence", "Organize evidence by condition."],
    ["submitted", "I already submitted a claim", "Review claim status and C&P exam basics."],
    ["decision", "I got a decision", "Decision review choices can be complex."],
    ["unsure", "I am not sure", "The app can help you sort the stage out."],
  ];

  return `
    <div class="screen-stack">
      <div class="hero-block">
        <h2>Where are you right now?</h2>
        <p>Choose the closest answer. Not sure is okay, and you can change this later.</p>
      </div>

      <div class="option-group">
        ${options
          .map(
            ([value, label, note]) => `
              <label class="option-card">
                <input type="radio" name="stage" value="${value}" ${state.stage === value ? "checked" : ""}>
                <span>${label}<small>${note}</small></span>
              </label>
            `,
          )
          .join("")}
      </div>

      <div class="notice">
        ${icon("user-check")}
        <p><strong>Good help matters</strong>If you got a decision or are unsure about review options, talk with a VA-accredited representative or VSO.</p>
      </div>

      <div class="actions">
        <button class="button primary full" type="button" data-stage-continue>${icon("arrow-right")} Continue</button>
      </div>
    </div>
  `;
}

function renderStageBranch() {
  if (state.pathwayMode === "submitted") {
    return `
      <div class="screen-stack">
        <div class="hero-block">
          <h2>Your claim is already filed.</h2>
          <p>This is a different path than claim preparation. The app should help you understand status, VA requests, and exam basics.</p>
        </div>

        <div class="notice">
          ${icon("clipboard-clock")}
          <p><strong>What may happen next</strong>VA may ask for more evidence, request records, or ask you to attend a claim exam. Not everyone needs an exam if VA has enough evidence.</p>
        </div>

        <div class="notice">
          ${icon("search-check")}
          <p><strong>First question</strong>Is VA waiting on you, or are you waiting on VA? Check VA.gov, mail, email, phone messages, and exam notices for requests or deadlines.</p>
        </div>

        <div class="notice warning">
          ${icon("stethoscope")}
          <p><strong>Exam note</strong>A VA claim exam, also called a C&P exam, can include questions, a physical exam, or tests. It may be scheduled only if VA needs more information to decide your claim.</p>
        </div>

        <section class="info-panel">
          <h3>What to look for</h3>
          <ul class="plain-list">
            <li>Current VA.gov claim status.</li>
            <li>Any VA letter asking for evidence, forms, or records.</li>
            <li>Any response deadline or C&P exam appointment.</li>
            <li>Whether your address, phone, and email are current with VA.</li>
            <li>Whether a VSO or accredited representative should review the claim now.</li>
          </ul>
        </section>

        <section class="info-panel">
          <h3>Helpful official links</h3>
          <div class="resource-list">
            <a class="resource-link" href="https://www.va.gov/claim-or-appeal-status/" target="_blank" rel="noreferrer">
              ${icon("external-link")}
              <span>Check claim status</span>
            </a>
            <a class="resource-link" href="https://www.va.gov/disability/after-you-file-claim/" target="_blank" rel="noreferrer">
              ${icon("external-link")}
              <span>What happens after filing</span>
            </a>
            <a class="resource-link" href="https://www.va.gov/disability/upload-supporting-evidence/" target="_blank" rel="noreferrer">
              ${icon("external-link")}
              <span>Upload evidence for a claim</span>
            </a>
            <a class="resource-link" href="https://www.va.gov/resources/va-claim-exam/" target="_blank" rel="noreferrer">
              ${icon("external-link")}
              <span>VA claim exam / C&P exam</span>
            </a>
          </div>
        </section>

        <section class="info-panel">
          <h3>Future app area</h3>
          <p>Later, this path could include an in-app AI explainer for VA letters, status updates, and exam notices. For now, the safer path is official links plus VSO/accredited help.</p>
        </section>

        <div class="actions">
          <button class="button primary full" type="button" data-screen-jump="6">${icon("user-search")} Find VSO/accredited help</button>
          <button class="button secondary full" type="button" data-open-ask-nco>${icon("message-circle-question")} Ask NCO about this</button>
          <button class="button secondary full" type="button" data-clear-pathway>${icon("arrow-left")} Back to stage choices</button>
        </div>
      </div>
    `;
  }

  return `
    <div class="screen-stack">
      <div class="hero-block">
        <h2>You have a decision.</h2>
        <p>This is a different path than claim preparation. The app should help you understand the decision, review options, and what to ask accredited help.</p>
      </div>

      <div class="notice warning">
        ${icon("scale")}
        <p><strong>Decision review choices can be complex</strong>Supplemental Claim, Higher-Level Review, and Board Appeal have different rules. This prototype should not choose a strategy for the user.</p>
      </div>

      <div class="notice">
        ${icon("file-text")}
        <p><strong>The decision letter controls</strong>Use the actual letter to review outcomes, ratings, effective dates, reasons, evidence considered, and any deadlines.</p>
      </div>

      <div class="notice">
        ${icon("user-check")}
        <p><strong>Human help matters here</strong>A VSO, accredited representative, attorney, or claims agent may help review the decision. Attorneys and claims agents may charge fees in some situations.</p>
      </div>

      <section class="info-panel">
        <h3>Bring these points to help</h3>
        <ul class="plain-list">
          <li>Which conditions were granted, denied, or deferred.</li>
          <li>Any rating or effective date that does not look right.</li>
          <li>The reason VA gave for each denial.</li>
          <li>The evidence VA says it reviewed.</li>
          <li>The decision date and any review deadline.</li>
        </ul>
      </section>

      <section class="info-panel">
        <h3>Helpful official links</h3>
        <div class="resource-list">
          <a class="resource-link" href="https://www.va.gov/decision-reviews/" target="_blank" rel="noreferrer">
            ${icon("external-link")}
            <span>Decision reviews and appeals</span>
          </a>
          <a class="resource-link" href="https://www.va.gov/resources/choosing-a-decision-review-option/" target="_blank" rel="noreferrer">
            ${icon("external-link")}
            <span>Choosing a decision review option</span>
          </a>
          <a class="resource-link" href="https://www.va.gov/get-help-from-accredited-representative/" target="_blank" rel="noreferrer">
            ${icon("external-link")}
            <span>Find accredited help</span>
          </a>
        </div>
      </section>

      <section class="info-panel">
        <h3>Future app area</h3>
        <p>Later, this path could include an AI decision-letter explainer and VSO/attorney question builder. For MVP, we keep it focused on official resources and accredited help.</p>
      </section>

      <div class="actions">
        <button class="button primary full" type="button" data-screen-jump="6">${icon("user-search")} Find VSO/accredited help</button>
        <button class="button secondary full" type="button" data-open-ask-nco>${icon("message-circle-question")} Ask NCO about this</button>
        <button class="button secondary full" type="button" data-clear-pathway>${icon("arrow-left")} Back to stage choices</button>
      </div>
    </div>
  `;
}

function renderSignInHelpPrompt() {
  if (state.basics.vaGovAccess === "Yes") {
    return "";
  }

  return `
    <div class="notice warning">
      ${icon("key-round")}
      <p><strong>VA.gov sign-in help</strong>If signing in is a blocker, use this guide to see what each item means, what you may need, and where to go.</p>
    </div>
    <section class="info-panel sign-in-guide" aria-label="VA.gov sign-in guide">
      <details class="guide-disclosure" open>
        <summary>
          <span>1. What account do I need?</span>
          ${icon("chevron-down")}
        </summary>
        <div class="guide-body">
          <p>To sign in to VA.gov, VA says you need a Login.gov or ID.me account.</p>
          <ul>
            <li>Use VA.gov's sign-in page to start.</li>
            <li>Choose Login.gov or ID.me.</li>
            <li>If you do not have one, the sign-in flow will let you create one.</li>
            <li>Check your email inbox and spam folder for confirmation messages.</li>
          </ul>
          <a class="link-button full" href="https://www.va.gov/sign-in/" target="_blank" rel="noreferrer">
            ${icon("external-link")} Go to VA.gov sign-in
          </a>
        </div>
      </details>

      <details class="guide-disclosure">
        <summary>
          <span>2. What should I have ready?</span>
          ${icon("chevron-down")}
        </summary>
        <div class="guide-body">
          <p>Identity verification is usually a one-time process. It protects your benefits information from someone pretending to be you.</p>
          <ul>
            <li>An email address you can open and confirm.</li>
            <li>A password for the account provider you choose.</li>
            <li>A multifactor authentication method, such as text, phone call, authenticator app, security key, landline, or backup codes.</li>
            <li>Identity documents if VA.gov asks you to verify your identity.</li>
            <li>Access to a phone, camera, webcam, in-person option, or mail option may help depending on your situation.</li>
          </ul>
          <a class="link-button full" href="https://www.va.gov/resources/verifying-your-identity-on-vagov/" target="_blank" rel="noreferrer">
            ${icon("external-link")} Learn about identity verification
          </a>
        </div>
      </details>

      <details class="guide-disclosure">
        <summary>
          <span>3. What if I do not have a phone or current ID?</span>
          ${icon("chevron-down")}
        </summary>
        <div class="guide-body">
          <p>VA lists alternate ways to verify identity and set up multifactor authentication.</p>
          <ul>
            <li>Login.gov may offer in-person verification at participating U.S. post offices or address verification by mail.</li>
            <li>ID.me may offer video-call verification or in-person verification at participating UPS Store locations.</li>
            <li>Some MFA methods do not require a mobile phone, such as a security key, landline, or backup codes.</li>
            <li>If you are stuck, use VA's common Login.gov and ID.me support page.</li>
          </ul>
          <a class="link-button full" href="https://www.va.gov/resources/support-for-common-logingov-and-idme-issues/" target="_blank" rel="noreferrer">
            ${icon("external-link")} Get Login.gov and ID.me support
          </a>
        </div>
      </details>

      <details class="guide-disclosure">
        <summary>
          <span>4. Where do I go?</span>
          ${icon("chevron-down")}
        </summary>
        <div class="guide-body">
          <p>Use official VA pages first. These links open in a new tab.</p>
          <div class="resource-list">
            <a class="resource-link" href="https://www.va.gov/sign-in/" target="_blank" rel="noreferrer">
              ${icon("external-link")}
              <span>VA.gov sign-in page</span>
            </a>
            <a class="resource-link" href="https://www.va.gov/resources/signing-in-to-vagov/" target="_blank" rel="noreferrer">
              ${icon("external-link")}
              <span>Signing in to VA.gov</span>
            </a>
            <a class="resource-link" href="https://www.va.gov/resources/support-for-common-logingov-and-idme-issues/" target="_blank" rel="noreferrer">
              ${icon("external-link")}
              <span>Login.gov and ID.me support</span>
            </a>
            <a class="resource-link" href="https://www.va.gov/resources/verifying-your-identity-on-vagov/" target="_blank" rel="noreferrer">
              ${icon("external-link")}
              <span>Verify your identity on VA.gov</span>
            </a>
          </div>
        </div>
      </details>
    </section>
  `;
}

function renderBasics() {
  const groups = [
    ["filedBefore", "Have you ever filed a VA disability claim before?", ["No", "Yes", "Not sure"]],
    ["serviceStatus", "Are you currently serving or already separated?", ["Still serving", "Separated", "Not sure"]],
    ["vaGovAccess", "Can you sign in to VA.gov?", ["Yes", "No", "I need help with sign-in"]],
    ["intentToFile", "Have you submitted Intent to File or started an online claim?", ["Yes", "No", "Not sure"]],
    ["representative", "Are you working with a VSO or accredited representative?", ["Yes", "No", "Looking for one", "Not sure"]],
  ];

  return `
    <div class="screen-stack">
      <div class="hero-block">
        <h2>A few basics</h2>
        <p>A few simple questions help the app focus. Not sure is okay, and we will not ask for sensitive identifiers.</p>
      </div>

      <div class="form-grid">
        ${groups
          .map(
            ([key, question, options]) => `
              <fieldset class="field">
                <legend>${question}</legend>
                <div class="option-group">
                  ${options
                    .map(
                      (option) => `
                        <label class="option-card">
                          <input type="radio" name="${key}" value="${option}" ${state.basics[key] === option ? "checked" : ""}>
                          <span>${option}</span>
                        </label>
                      `,
                    )
                    .join("")}
                </div>
              </fieldset>
            `,
          )
          .join("")}
      </div>

      ${renderSignInHelpPrompt()}

      <div class="actions">
        <button class="button primary full" type="button" data-next>${icon("arrow-right")} Continue</button>
      </div>
    </div>
  `;
}

function conditionCard(condition) {
  const entries = conditionEvidenceEntries(condition);
  const haveCount = entries.filter((entry) => entry.status === "Have it").length;
  const gapCount = entries.length - haveCount;
  const priority = readinessPriority(condition);
  const questions = conditionVsoQuestions(condition).slice(0, 2);

  return `
    <article class="condition-card">
      <div class="condition-head">
        <div>
          <h3>${escapeHtml(condition.name)}</h3>
          <p>${escapeHtml(conditionValue(condition, "currentCondition"))}</p>
        </div>
        <span class="tag ${priority.tone}">${escapeHtml(priority.label)}</span>
      </div>
      <dl class="definition-grid">
        <div class="definition-row">
          <dt>What is wrong now?</dt>
          <dd>${escapeHtml(conditionValue(condition, "currentCondition"))}</dd>
        </div>
        <div class="definition-row">
          <dt>What happened in service?</dt>
          <dd>${escapeHtml(conditionValue(condition, "serviceEvent"))}</dd>
        </div>
        <div class="definition-row">
          <dt>Why might it be connected?</dt>
          <dd>${escapeHtml(conditionValue(condition, "connectionTheory"))}</dd>
        </div>
        <div class="definition-row">
          <dt>Work/life impact</dt>
          <dd>${escapeHtml(conditionValue(condition, "severityImpact"))}</dd>
        </div>
      </dl>
      <div class="tag-row">
        <span class="tag neutral">${haveCount} evidence areas marked have</span>
        <span class="tag caution">${gapCount} evidence gaps/not sure</span>
      </div>
      <section class="small-grid">
        <h4>Questions for VSO</h4>
        <ul class="plain-list compact">
          ${questions.map((question) => `<li>${escapeHtml(question)}</li>`).join("")}
        </ul>
      </section>
      <div class="action-row">
        <button class="button secondary" type="button" data-edit-condition="${condition.id}">${icon("pencil")} Edit</button>
        <button class="button secondary" type="button" data-evidence-condition="${condition.id}">${icon("folder-check")} Evidence</button>
      </div>
    </article>
  `;
}

function renderConditions() {
  return `
    <div class="screen-stack">
      <div class="hero-block">
        <h2>Build condition cards.</h2>
        <p>Already have possible conditions from a VSO, VA letter, medical records, symptoms, or your own notes? Add them here. ClaimNCO organizes the evidence gaps and VSO questions.</p>
      </div>

      ${renderPossibleConditionsCard()}

      <div class="card-list">
        ${state.conditions.map(conditionCard).join("")}
      </div>

      <button class="button secondary full" type="button" data-add-condition>${icon("plus")} Add another condition</button>

      <div class="notice">
        ${icon("list-checks")}
        <p><strong>Each condition gets its own evidence story</strong>Current issue, service event or exposure, possible link, work/life impact, evidence gaps, and VSO questions.</p>
      </div>

      <div class="actions">
        <button class="button primary full" type="button" data-next>${icon("arrow-right")} Continue to evidence</button>
      </div>
    </div>
  `;
}

function renderConditionEditor(condition = null) {
  const isNew = !condition;
  const draft = condition || {
    id: `condition-${Date.now()}`,
    name: "",
    currentCondition: "",
    diagnosisStatus: "Not sure",
    serviceEvent: "",
    connectionTheory: "",
    severityImpact: "",
    evidence: {
      currentCondition: "Not sure",
      serviceEvent: "Not sure",
      nexusLink: "Need to ask VSO",
      severityImpact: "Not sure",
      treatmentHistory: "Not sure",
      layBuddy: "Not sure",
    },
    evidenceItems: [],
    vsoQuestions: [],
  };
  const questionText = (draft.vsoQuestions || []).join("\n");

  return `
    <div class="screen-stack">
      <div class="hero-block">
        <h2>${isNew ? "Add a condition." : "Edit condition."}</h2>
        <p>Use plain words. This is for VSO prep, not a filing recommendation.</p>
      </div>

      <form class="form-grid" data-condition-form data-condition-id="${draft.id}" data-new="${isNew}">
        <div class="field">
          <label for="conditionName">Condition name</label>
          <input id="conditionName" name="name" value="${escapeHtml(draft.name)}" placeholder="Back condition">
        </div>

        <div class="field">
          <label for="currentCondition">Current symptoms or diagnosis</label>
          <textarea id="currentCondition" name="currentCondition" placeholder="Pain, ringing, migraines, sleep issues, diagnosis if known">${escapeHtml(conditionValue(draft, "currentCondition", ""))}</textarea>
        </div>

        <div class="field">
          <label for="serviceEvent">What happened in service / exposure / aggravation?</label>
          <textarea id="serviceEvent" name="serviceEvent" placeholder="Injury, exposure, training, deployment, job duties, or condition made worse">${escapeHtml(conditionValue(draft, "serviceEvent", ""))}</textarea>
        </div>

        <div class="field">
          <label for="connectionTheory">Why do you think it may be connected?</label>
          <textarea id="connectionTheory" name="connectionTheory" placeholder="Started after an event, continued after service, or got worse because of service">${escapeHtml(conditionValue(draft, "connectionTheory", ""))}</textarea>
        </div>

        <div class="field">
          <label for="severityImpact">Work/life impact</label>
          <textarea id="severityImpact" name="severityImpact" placeholder="Work limits, sleep, mobility, focus, family life, daily activities">${escapeHtml(conditionValue(draft, "severityImpact", ""))}</textarea>
        </div>

        <div class="field">
          <label for="vsoQuestions">Questions for VSO</label>
          <textarea id="vsoQuestions" name="vsoQuestions" placeholder="What evidence do I need before filing?">${escapeHtml(questionText)}</textarea>
        </div>

        <div class="actions">
          <button class="button primary full" type="submit">${icon("save")} Save condition</button>
          <button class="button secondary full" type="button" data-cancel-edit>${icon("x")} Cancel</button>
        </div>
      </form>
    </div>
  `;
}

function evidenceOptions(name, value) {
  return evidenceStatusOptions
    .map(
      (option) => `
        <label class="option-card">
          <input type="radio" name="${name}" value="${option}" ${value === option ? "checked" : ""}>
          <span>${option}</span>
        </label>
      `,
    )
    .join("");
}

function renderEvidence() {
  const condition = currentCondition();
  const conditionTabs = state.conditions
    .map(
      (item) => `
        <button class="button ${item.id === condition.id ? "primary" : "secondary"}" type="button" data-select-condition="${item.id}">
          ${escapeHtml(item.name)}
        </button>
      `,
    )
    .join("");

  return `
    <div class="screen-stack">
      <div class="hero-block">
        <h2>Evidence checklist.</h2>
        <p>Evidence matters because of what it helps prove. Track what you have, what is missing, and what to ask a VSO.</p>
      </div>

      <div class="action-row">${conditionTabs}</div>

      <form class="form-grid" data-evidence-form data-condition-id="${condition.id}">
        <h3>${escapeHtml(condition.name)}</h3>
        <div class="notice">
          ${icon("scale")}
          <p><strong>Evidence matters because of what it helps prove</strong>Use these categories to organize the conversation. ClaimNCO does not decide what evidence is enough.</p>
        </div>

        ${conditionEvidenceEntries(condition)
          .map(
            (entry) => `
              <fieldset class="field">
                <legend>${escapeHtml(entry.label)}</legend>
                <p>${escapeHtml(entry.helper)}</p>
                <div class="option-group">${evidenceOptions(entry.key, entry.status)}</div>
              </fieldset>
            `,
          )
          .join("")}

        <div class="notice warning">
          ${icon("lock")}
          <p><strong>Privacy guardrail</strong>Do not upload medical records, SSNs, claim numbers, or banking information in this prototype.</p>
        </div>

        <div class="actions">
          <button class="button secondary full" type="button" data-add-evidence-item>${icon("plus")} Add evidence item name</button>
          <button class="button primary full" type="button" data-save-evidence-next>${icon("arrow-right")} Next: Readiness</button>
        </div>
      </form>

      ${renderEvidenceItems(condition)}
    </div>
  `;
}

function renderEvidenceItems(condition) {
  const items = evidenceItemsFor(condition);
  if (!items.length) {
    return `
      <div class="notice">
        ${icon("file-plus")}
        <p><strong>No evidence items added</strong>You can add a record name, test result, letter, or buddy statement without uploading the actual document.</p>
      </div>
    `;
  }

  return `
    <div class="card-list">
      ${items
        .map(
          (item) => `
            <article class="summary-card">
              <h3>${escapeHtml(item.title)}</h3>
              <div class="tag-row">
                <span class="tag ${item.status === "Have it" ? "neutral" : "caution"}">${escapeHtml(item.status || "Not sure")}</span>
                ${(item.supports || []).map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
              </div>
              <p>${escapeHtml(item.location ? `Where it is: ${item.location}` : "Where it is: Not listed")}</p>
              ${item.notes ? `<p>${escapeHtml(item.notes)}</p>` : ""}
              <p>Name and tags saved for organization only. No file, photo, or sensitive record is stored.</p>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderEvidenceItemEditor() {
  const condition = currentCondition();
  return `
    <div class="screen-stack">
      <div class="hero-block">
        <h2>Add evidence item.</h2>
        <p>You do not need to upload the document here. Just track what it supports and where to find it.</p>
      </div>

      <form class="form-grid" data-evidence-item-form data-condition-id="${condition.id}">
        <div class="field">
          <label for="evidenceTitle">Evidence item name</label>
          <input id="evidenceTitle" name="title" placeholder="Clinic record, test result, or buddy statement">
        </div>

        <div class="field">
          <label for="evidenceLocation">Where it is / how to get it</label>
          <input id="evidenceLocation" name="location" placeholder="VA.gov, private clinic portal, personal notes, ask buddy">
        </div>

        <fieldset class="field">
          <legend>Status</legend>
          <div class="option-group">${evidenceOptions("status", "Not sure")}</div>
        </fieldset>

        <fieldset class="field">
          <legend>What does this evidence support?</legend>
          <p>Pick one or more. Evidence matters because of what it helps prove.</p>
          <div class="option-group">
            ${evidenceSupportTags
              .map(
                (tag) => `
                  <label class="option-card">
                    <input type="checkbox" name="supports" value="${escapeHtml(tag)}">
                    <span>${escapeHtml(tag)}</span>
                  </label>
                `,
              )
              .join("")}
          </div>
        </fieldset>

        <div class="field">
          <label for="evidenceNotes">Notes</label>
          <textarea id="evidenceNotes" name="notes" placeholder="What should I ask the VSO about this?"></textarea>
        </div>

        <div class="field">
          <label for="evidencePhoto">Optional photo/camera picker</label>
          <input id="evidencePhoto" name="photo" type="file" accept="image/*" capture="environment">
          <small>Prototype only. The selected image is not uploaded to VA, stored, or added to the summary.</small>
        </div>

        <div class="notice warning">
          ${icon("lock")}
          <p><strong>No sensitive uploads</strong>Do not select SSNs, claim numbers, banking information, full medical records, or other private documents in this prototype.</p>
        </div>

        <div class="actions">
          <button class="button primary full" type="submit">${icon("save")} Save evidence item name</button>
          <button class="button secondary full" type="button" data-cancel-evidence-item>${icon("x")} Cancel</button>
        </div>
      </form>
    </div>
  `;
}

function evidenceCounts(condition) {
  const values = conditionEvidenceEntries(condition).map((entry) => entry.status);
  return {
    have: values.filter((value) => value === "Have it").length,
    unsure: values.filter((value) => value === "Not sure").length,
    review: values.filter((value) => value === "Need it" || value === "Need to ask VSO").length,
  };
}

function nextAction(condition) {
  if (evidenceStatus(condition, "nexusLink") === "Need to ask VSO") return "Ask VSO before filing";
  const missing = conditionEvidenceEntries(condition).find((entry) => entry.status === "Need it" || entry.status === "Not sure");
  if (missing) return `Review ${missing.label.toLowerCase()}`;
  return "Looks ready to review with accredited help";
}

function readinessPriority(condition) {
  if (evidenceStatus(condition, "nexusLink") === "Need to ask VSO") {
    return {
      rank: 0,
      label: "Ask VSO before filing",
      tone: "alert",
      reason: "The possible link to service needs accredited review.",
    };
  }

  const importantMissing = ["currentCondition", "serviceEvent", "nexusLink"].some((key) =>
    ["Need it", "Not sure"].includes(evidenceStatus(condition, key)),
  );
  if (importantMissing) {
    return {
      rank: 1,
      label: "Missing important evidence",
      tone: "alert",
      reason: "One or more core evidence areas is missing or unclear.",
    };
  }

  const anyGap = conditionEvidenceEntries(condition).some((entry) => entry.status !== "Have it");
  if (anyGap) {
    return {
      rank: 2,
      label: "Mostly organized",
      tone: "caution",
      reason: "Some supporting evidence still needs review.",
    };
  }

  return {
    rank: 3,
    label: "Looks organized",
    tone: "neutral",
    reason: "The main evidence areas are marked as found.",
  };
}

function sortedReadinessConditions() {
  return [...state.conditions].sort((a, b) => {
    const aPriority = readinessPriority(a);
    const bPriority = readinessPriority(b);
    if (aPriority.rank !== bPriority.rank) return aPriority.rank - bPriority.rank;

    const aCounts = evidenceCounts(a);
    const bCounts = evidenceCounts(b);
    return bCounts.unsure + bCounts.review - (aCounts.unsure + aCounts.review);
  });
}

function renderReadiness() {
  const readinessConditions = sortedReadinessConditions();
  const reviewFirst = readinessConditions.filter((condition) => readinessPriority(condition).tone === "alert");
  const moreOrganized = readinessConditions.filter((condition) => readinessPriority(condition).tone !== "alert");
  const allQuestions = state.conditions.flatMap((condition) => conditionVsoQuestions(condition).slice(0, 3));
  const documentGroups = state.conditions
    .map((condition) => ({
      condition,
      documents: documentsToGather(condition),
    }))
    .filter((group) => group.documents.length);
  const readinessCards = (conditions) =>
    conditions
      .map((condition) => {
        const counts = evidenceCounts(condition);
        const priority = readinessPriority(condition);
        return `
          <article class="condition-card readiness-card ${priority.tone === "alert" ? "review-first" : ""}">
            <div class="condition-head">
              <div>
                <h3>${escapeHtml(condition.name)}</h3>
                <p>Evidence: ${counts.have} marked have / ${counts.unsure + counts.review} missing or not sure</p>
              </div>
              <span class="tag ${priority.tone}">${escapeHtml(priority.label)}</span>
            </div>
            <p><strong>${nextAction(condition)}.</strong> ${escapeHtml(priority.reason)}</p>
          </article>
        `;
      })
      .join("");

  return `
    <div class="screen-stack">
      <div class="hero-block">
        <h2>VSO prep dashboard.</h2>
        <p>This shows gaps and questions for a VSO conversation. It is not a score, outcome forecast, or filing recommendation.</p>
      </div>

      <div class="notice">
        ${icon("message-square-check")}
        <p><strong>Ready for a better conversation</strong>Your information is organized enough to start a productive VSO or accredited representative conversation.</p>
      </div>

      <section class="info-panel">
        <h3>Review first</h3>
        <div class="card-list">
          ${reviewFirst.length ? readinessCards(reviewFirst) : `<p>No urgent evidence gaps in the sample state.</p>`}
        </div>
      </section>

      <section class="info-panel">
        <h3>Looks more organized</h3>
        <div class="card-list">
          ${moreOrganized.length ? readinessCards(moreOrganized) : `<p>Conditions move here as evidence gaps get clearer.</p>`}
        </div>
      </section>

      <section class="info-panel">
        <h3>Questions to ask</h3>
        <p>These are conversation starters, not extra requirements.</p>
        <ul class="guidance-list">
          ${allQuestions.slice(0, 6)
            .map(
              (topic) => `
                <li>
                  ${icon("circle-dot")}
                  <span>${escapeHtml(topic)}</span>
                </li>
              `,
            )
            .join("")}
        </ul>
      </section>

      <section class="info-panel">
        <h3>Documents to gather</h3>
        <p>Names only. Gaps are grouped by condition so newly added conditions are visible.</p>
        <div class="document-gap-list">
          ${
            documentGroups.length
              ? documentGroups
                  .map(
                    ({ condition, documents }) => `
                      <article class="gap-group">
                        <h4>${escapeHtml(condition.name)}</h4>
                        <ul class="guidance-list">
                          ${documents
                            .map(
                              (item) => `
                                <li>
                                  ${icon("file-search")}
                                  <span>${escapeHtml(item.replace(`${condition.name}: `, ""))}</span>
                                </li>
                              `,
                            )
                            .join("")}
                        </ul>
                      </article>
                    `,
                  )
                  .join("")
              : `<p>No document gaps listed yet.</p>`
          }
        </div>
      </section>

      <section class="info-panel">
        <h3>Official resources</h3>
        <div class="resource-list">
          ${renderInlineResources()}
        </div>
      </section>

      <div class="actions">
        <button class="button primary full" type="button" data-next>${icon("user-search")} Find trusted help</button>
        <button class="button secondary full" type="button" data-open-ask-nco>${icon("message-circle-question")} Ask NCO about a situation</button>
        <button class="button secondary full" type="button" data-add-condition>${icon("plus")} Add another condition</button>
      </div>

      ${renderBottomNav("Journey")}
    </div>
  `;
}

function vsoQuestions() {
  const conditionQuestions = state.conditions.flatMap((condition) => conditionVsoQuestions(condition).slice(0, 2));

  return [
    "Should I submit Intent to File while gathering evidence?",
    "Does each issue look like an original claim, or is another claim type involved?",
    ...conditionQuestions,
    "Are lay or buddy statements useful for my situation?",
    "Is there anything I should verify before sharing sensitive documents?",
  ];
}

function renderVsoHelp() {
  return `
    <div class="screen-stack">
      <div class="hero-block">
        <h2>Find accredited help.</h2>
        <p>Use official VA sources first. This prototype helps you prepare; it does not rank, endorse, or replace a representative.</p>
      </div>

      <div class="notice">
        ${icon("badge-check")}
        <p><strong>Free VSO help first</strong>VA says accredited VSO representatives can help with VA benefit claims, and VSO claim services are always free.</p>
      </div>

      <form class="form-grid" data-vso-form>
        <div class="field">
          <label for="vsoLocation">ZIP code or city/state</label>
          <input id="vsoLocation" name="searchLocation" value="${escapeHtml(state.vso.searchLocation)}" placeholder="97201 or Portland, OR">
        </div>
        <button class="button primary full" type="submit">${icon("map-pin")} Save search area for summary</button>
      </form>

      <section class="info-panel vso-summary-status">
        <h3>What will go into the summary</h3>
        <ul class="guidance-list">
          <li>
            ${icon(state.vso.searchLocation ? "check-circle" : "circle")}
            <span>Search area: ${escapeHtml(state.vso.searchLocation || "Not saved yet")}</span>
          </li>
          <li>
            ${icon(state.vso.savedOption ? "check-circle" : "circle")}
            <span>VSO option: ${escapeHtml(state.vso.savedOption || "None selected yet")}</span>
          </li>
        </ul>
        <p>Typing a ZIP or city and tapping Generate will also save that search area into the summary.</p>
      </section>

      <div class="notice warning">
        ${icon("map-pinned")}
        <p><strong>Local search is not live yet</strong>This prototype saves your ZIP or city for the summary only. Use VA's official representative search below to find current accredited help.</p>
      </div>

      <section class="info-panel">
        <h3>Official VA search</h3>
        <p>Start with VA's official representative tools, then verify accreditation before sharing sensitive information.</p>
        <div class="resource-list">
          <a class="resource-link" href="https://www.va.gov/get-help-from-accredited-representative/" target="_blank" rel="noreferrer">
            ${icon("external-link")}
            <span>VA accredited representative search</span>
          </a>
          <a class="resource-link" href="https://www.va.gov/ogc/apps/accreditation/index.asp" target="_blank" rel="noreferrer">
            ${icon("external-link")}
            <span>VA OGC accreditation database</span>
          </a>
        </div>
      </section>

      <section class="info-panel">
        <h3>National VSO options</h3>
        <p>These are broad VA-recognized VSO networks, not rankings or outcome promises.</p>
        <div class="card-list">
          ${nationalVsoOptions
            .map(
              (option) => `
                <article class="vso-card ${state.vso.savedOption === option.name ? "selected" : ""}">
                  <div>
                    <h3>${escapeHtml(option.name)}</h3>
                    <p>${escapeHtml(option.note)}</p>
                    ${
                      state.vso.savedOption === option.name
                        ? `<span class="tag neutral">${icon("check")} In summary</span>`
                        : ""
                    }
                  </div>
                  <div class="action-row">
                    <a class="button secondary" href="${option.url}" target="_blank" rel="noreferrer">${icon("external-link")} Website</a>
                    <button class="button ${state.vso.savedOption === option.name ? "primary" : "secondary"}" type="button" data-save-vso="${escapeHtml(option.name)}">
                      ${icon(state.vso.savedOption === option.name ? "check" : "bookmark")}
                      ${state.vso.savedOption === option.name ? "Selected for summary" : "Use in summary"}
                    </button>
                  </div>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>

      <div class="notice warning">
        ${icon("circle-dollar-sign")}
        <p><strong>Fee warning</strong>Accredited attorneys and claims agents may charge fees in some situations. Ask about fees before signing anything.</p>
      </div>

      <div class="notice warning">
        ${icon("shield-alert")}
        <p><strong>Verify first</strong>Be careful with anyone who is not VA-accredited, promises a specific outcome, or asks for unusual fees.</p>
      </div>

      <section class="info-panel">
        <h3>Questions to ask</h3>
        <p>Use these as conversation starters with a VSO or accredited representative.</p>
        <ol class="question-list">
          ${vsoQuestions()
            .map(
              (question) => `
                <li>${escapeHtml(question)}</li>
              `,
            )
            .join("")}
        </ol>
      </section>

      <div class="actions">
        <button class="button primary full" type="button" data-generate-summary>${icon("file-text")} Generate VSO prep summary</button>
      </div>

      ${renderBottomNav("VSO")}
    </div>
  `;
}

function prepSummaryText() {
  const conditionText = state.conditions
    .map((condition, index) => {
      const have = conditionEvidenceEntries(condition)
        .filter((entry) => entry.status === "Have it")
        .map((entry) => `- ${entry.label}`);
      const missing = conditionEvidenceEntries(condition)
        .filter((entry) => entry.status !== "Have it")
        .map((entry) => `- ${entry.label}: ${entry.status}`);
      const items = evidenceItemsFor(condition).map(
        (item) =>
          `- ${item.title || "Untitled evidence item"} (${item.status || "Not sure"}; supports: ${(item.supports || []).join(", ") || "Not tagged"})`,
      );
      const questions = conditionVsoQuestions(condition).slice(0, 5).map((question) => `- ${question}`);

      return [
        `${index + 1}. ${condition.name}`,
        `   Current symptoms/diagnosis: ${conditionValue(condition, "currentCondition")}`,
        `   Service event/exposure/aggravation: ${conditionValue(condition, "serviceEvent")}`,
        `   Possible connection to service: ${conditionValue(condition, "connectionTheory")}`,
        `   Work/life impact: ${conditionValue(condition, "severityImpact")}`,
        "   Evidence I have:",
        have.length ? have.join("\n") : "   - Not listed",
        "   Evidence I need / not sure about:",
        missing.length ? missing.join("\n") : "   - None listed",
        "   Evidence item names:",
        items.length ? items.join("\n") : "   - None listed",
        "   Questions for VSO:",
        questions.join("\n"),
      ].join("\n");
    })
    .join("\n\n");
  const documents = state.conditions.flatMap(documentsToGather);

  return [
    "ClaimNCO VSO Prep Summary",
    "",
    `Stage: ${stageLabel(state.stage)}`,
    `Intent to File: ${state.basics.intentToFile}`,
    `VA.gov access: ${state.basics.vaGovAccess}`,
    `VSO search area / selected option: ${state.vso.searchLocation || "Not listed"} / ${state.vso.savedOption || "None selected"}`,
    "",
    "Conditions to discuss",
    conditionText,
    "",
    "Documents to gather",
    ...(documents.length ? documents.map((item) => `- ${item}`) : ["- No document gaps listed yet"]),
    "",
    "Questions for VSO",
    ...vsoQuestions().map((question, index) => `${index + 1}. ${question}`),
    "",
    "Official/help reminders",
    "This summary is for organization only. ClaimNCO is not VA, a VSO, an attorney, or an accredited representative.",
    "Use official VA sources and accredited help for unclear, complex, or time-sensitive cases.",
  ].join("\n");
}

function summaryFileName() {
  const date = new Date().toISOString().slice(0, 10);
  return `claimnco-vso-prep-summary-${date}.txt`;
}

function downloadSummary() {
  const blob = new Blob([prepSummaryText()], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = summaryFileName();
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  showToast("Summary text file created.");
}

function printSummary() {
  document.body.classList.add("print-summary");
  window.print();
  setTimeout(() => document.body.classList.remove("print-summary"), 500);
  showToast("Print dialog opened.");
}

async function copyReviewerFeedback() {
  try {
    await navigator.clipboard.writeText(reviewerFeedbackText());
    showToast("Reviewer questions copied.");
  } catch {
    showToast("Copy is unavailable. Reviewer questions are still on screen.");
  }
}

function renderSummary() {
  const stats = packetStats();

  return `
    <div class="screen-stack">
      <div class="hero-block">
        <h2>Bring this to your VSO.</h2>
        <p>ClaimNCO does not represent you before VA. This summary is meant to help you show up organized for a VSO or accredited representative.</p>
      </div>

      <section class="info-panel packet-snapshot">
        <h3>Packet snapshot</h3>
        <div class="stat-grid">
          <div class="stat-tile">
            <span>${stats.conditions}</span>
            <small>conditions</small>
          </div>
          <div class="stat-tile">
            <span>${stats.have}</span>
            <small>evidence areas marked have</small>
          </div>
          <div class="stat-tile">
            <span>${stats.needsReview}</span>
            <small>evidence gaps or not sure</small>
          </div>
          <div class="stat-tile">
            <span>${stats.questions}</span>
            <small>VSO questions</small>
          </div>
        </div>
      </section>

      <pre class="summary-output" id="summaryOutput">${escapeHtml(prepSummaryText())}</pre>

      <div class="notice">
        ${icon("file-down")}
        <p><strong>Local actions only</strong>You can copy, download a plain text file, or print from this device. ClaimNCO still has no account, backend, email, or VA submission.</p>
      </div>

      <section class="info-panel">
        <h3>Official links</h3>
        <div class="resource-list">
          ${renderInlineResources()}
        </div>
      </section>

      <div class="actions">
        <button class="button primary full" type="button" data-copy-summary>${icon("copy")} Copy summary</button>
        <button class="button secondary full" type="button" data-open-reviewer-guide>${icon("clipboard-check")} Open reviewer guide</button>
        <button class="button secondary full" type="button" data-download-summary>${icon("download")} Download text summary</button>
        <button class="button secondary full" type="button" data-print-summary>${icon("printer")} Print summary</button>
        <button class="button secondary full" type="button" data-screen-jump="6">${icon("user-search")} Back to VSO help</button>
        <button class="button ghost full danger-action" type="button" data-reset-prototype>
          ${icon(state.resetArmed ? "triangle-alert" : "rotate-ccw")}
          ${state.resetArmed ? "Confirm reset sample data" : "Start a new fake test"}
        </button>
      </div>

      ${renderBottomNav("Summary")}
    </div>
  `;
}

function renderAskNcoActions(scenario) {
  return scenario.actions
    .map((action) => {
      if (action.url) {
        return `
          <a class="button secondary" href="${escapeHtml(action.url)}" target="_blank" rel="noreferrer">
            ${icon(action.icon)} ${escapeHtml(action.label)}
          </a>
        `;
      }

      if (action.screen === 3 && action.icon === "plus") {
        return `
          <button class="button secondary" type="button" data-add-condition>
            ${icon(action.icon)} ${escapeHtml(action.label)}
          </button>
        `;
      }

      return `
        <button class="button secondary" type="button" data-screen-jump="${action.screen}">
          ${icon(action.icon)} ${escapeHtml(action.label)}
        </button>
      `;
    })
    .join("");
}

function renderAskNcoAnswer(scenario) {
  return `
    <div class="ask-answer-card">
      <div class="answer-section">
        <h4>Plain answer</h4>
        <p>${escapeHtml(scenario.plain)}</p>
      </div>

      <div class="answer-section">
        <h4>Why it matters</h4>
        <p>${escapeHtml(scenario.why)}</p>
      </div>

      <div class="answer-section">
        <h4>Next step</h4>
        <p>${escapeHtml(scenario.next)}</p>
      </div>

      <div class="answer-section">
        <h4>What to check</h4>
        <ul class="plain-list compact">
          ${scenario.checks.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </div>

      <div class="notice">
        ${icon("user-search")}
        <p><strong>Ask a VSO</strong>${escapeHtml(scenario.vso)}</p>
      </div>

      ${
        scenario.routing
          ? `
            <div class="notice warning">
              ${icon("triangle-alert")}
              <p><strong>Routing note</strong>${escapeHtml(scenario.routing)}</p>
            </div>
          `
          : ""
      }

      <div class="source-chip">
        ${icon("book-open")}
        <a href="${escapeHtml(scenario.sourceUrl)}" target="_blank" rel="noreferrer">${escapeHtml(scenario.sourceLabel)}</a>
      </div>

      <div class="answer-section">
        <h4>Helpful actions</h4>
        <div class="action-row">
          ${renderAskNcoActions(scenario)}
        </div>
      </div>
    </div>
  `;
}

function renderAskNcoComingSoon() {
  return `
    <div class="ask-answer-card">
      <div class="answer-section">
        <h4>Prototype answer coming soon</h4>
        <p>This choice is not built out yet. For testing, use the official VA resources and bring unclear or time-sensitive questions to a VSO or VA-accredited representative.</p>
      </div>

      <div class="notice warning">
        ${icon("shield-alert")}
        <p><strong>Safety boundary</strong>This prototype does not provide legal guidance, diagnosis or treatment direction, VA percentage estimates, filing outcomes, or official VA decisions.</p>
      </div>

      <div class="action-row">
        <button class="button secondary" type="button" data-ask-reset>${icon("rotate-ccw")} Start over</button>
        <button class="button secondary" type="button" data-screen-jump="6">${icon("user-search")} Find accredited help</button>
      </div>
    </div>
  `;
}

function renderAskNcoChoiceButtons() {
  return askNcoEntryOptions
    .map(
      (option) => `
        <button class="assistant-choice" type="button" data-ask-scenario="${option.scenarioId}">
          <span>${option.labelHtml}</span>
          ${icon("chevron-right")}
        </button>
      `,
    )
    .join("");
}

function renderAskNcoPanel() {
  if (!askNcoPanel) return;

  const isOpen = state.askNco.open;
  askNcoBackdrop.hidden = !isOpen;
  askNcoPanel.classList.toggle("open", isOpen);
  askNcoPanel.setAttribute("aria-hidden", isOpen ? "false" : "true");
  document.body.classList.toggle("assistant-open", isOpen);

  if (!isOpen) {
    askNcoContent.innerHTML = "";
    hydrateIcons();
    return;
  }

  const hasScenarioChoice = Boolean(state.askNco.scenarioId);
  const scenario = askNcoScenarios.find((item) => item.id === state.askNco.scenarioId);
  askNcoContent.innerHTML = `
    <div class="assistant-stack">
      <div class="assistant-prompt">
        ${icon("message-circle-question")}
        <div>
          <h3>Let&rsquo;s get you squared away. Where are you in the VA claim process?</h3>
          <p>This is guided prototype help with prepared answers, not a live AI chat yet.</p>
        </div>
      </div>

      <div class="notice">
        ${icon("shield-check")}
        <p><strong>Safety boundary</strong>Ask NCO explains common situations and points to official sources. It is not VA, a law office, a medical provider, or an accredited representative.</p>
      </div>

      ${
        hasScenarioChoice
          ? `
            <div class="assistant-selected">
              <div>
                <span class="tag neutral">${escapeHtml(scenario?.category || "Prototype")}</span>
                <h3>${escapeHtml(scenario?.title || "This answer is not built yet.")}</h3>
              </div>
              <button class="button ghost" type="button" data-ask-reset>${icon("rotate-ccw")} Start over</button>
            </div>
            ${scenario ? renderAskNcoAnswer(scenario) : renderAskNcoComingSoon()}
          `
          : `
            <div class="assistant-options" aria-label="Ask NCO starting choices">
              ${renderAskNcoChoiceButtons()}
            </div>
          `
      }
    </div>
  `;
  askNcoContent.scrollTop = 0;
  hydrateIcons();
}

function renderBottomNav(active) {
  const items = [
    ["Journey", "map", 5],
    ["Conditions", "clipboard-list", 3],
    ["Evidence", "folder-check", 4],
    ["VSO", "user-search", 6],
    ["Summary", "file-text", 7],
  ];
  return `
    <nav class="bottom-nav" aria-label="Prototype navigation">
      ${items
        .map(
          ([label, iconName, target]) => `
            <button class="nav-button ${active === label ? "active" : ""}" type="button" data-screen-jump="${target}">
              ${icon(iconName)}
              <span>${label}</span>
            </button>
          `,
        )
        .join("")}
    </nav>
  `;
}

function stageLabel(value) {
  return {
    "not-started": "Not started",
    intent: "Started application or Intent to File",
    gathering: "Gathering evidence",
    submitted: "Submitted claim",
    decision: "Got a decision",
    unsure: "Not sure",
  }[value] || "Gathering evidence";
}

function render() {
  updateShell();
  renderMiniMap();

  if (state.editingCondition) {
    screenEl.innerHTML = renderConditionEditor(state.editingCondition === "new" ? null : currentCondition());
  } else if (state.editingEvidenceItem) {
    screenEl.innerHTML = renderEvidenceItemEditor();
  } else if (state.reviewerGuide) {
    screenEl.innerHTML = renderReviewerGuide();
  } else if (state.pathwayMode) {
    screenEl.innerHTML = renderStageBranch();
  } else {
    screenEl.innerHTML = [
      renderWelcome,
      renderStage,
      renderBasics,
      renderConditions,
      renderEvidence,
      renderReadiness,
      renderVsoHelp,
      renderSummary,
    ][state.screen]();
  }

  renderInlineFeedback();
  hydrateIcons();
  renderAskNcoPanel();
}

function closeAskNco() {
  state.askNco.open = false;
  state.askNco.scenarioId = null;
  renderAskNcoPanel();
  askNcoButton.focus();
}

function openResources() {
  drawerBackdrop.hidden = false;
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
  closeResourcesButton.focus();
}

function closeResources() {
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
  drawerBackdrop.hidden = true;
  resourcesButton.focus();
}

function showToast(message) {
  const existing = document.querySelector(".toast");
  if (existing) existing.remove();
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.setAttribute("role", "status");
  toast.setAttribute("aria-live", "polite");
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 4500);
}

function saveBasics(form) {
  for (const key of Object.keys(state.basics)) {
    const selected = form.querySelector(`input[name="${key}"]:checked`);
    if (selected) state.basics[key] = selected.value;
  }
}

function saveCondition(form) {
  const formData = new FormData(form);
  const id = form.dataset.conditionId;
  const isNew = form.dataset.new === "true";
  const condition = isNew
    ? {
        id,
        evidence: {
          currentCondition: "Not sure",
          serviceEvent: "Not sure",
          nexusLink: "Need to ask VSO",
          severityImpact: "Not sure",
          treatmentHistory: "Not sure",
          layBuddy: "Not sure",
        },
        evidenceItems: [],
        vsoQuestions: [],
      }
    : state.conditions.find((item) => item.id === id);

  condition.name = formData.get("name") || "Untitled condition";
  condition.currentCondition = formData.get("currentCondition") || "";
  condition.diagnosisStatus = formData.get("diagnosisStatus") || condition.diagnosisStatus || "Not sure";
  condition.serviceEvent = formData.get("serviceEvent") || "";
  condition.connectionTheory = formData.get("connectionTheory") || "";
  condition.severityImpact = formData.get("severityImpact") || "";
  condition.vsoQuestions = String(formData.get("vsoQuestions") || "")
    .split("\n")
    .map((question) => question.trim())
    .filter(Boolean);

  if (isNew) {
    state.conditions.push(condition);
  }

  state.selectedConditionId = condition.id;
  state.editingCondition = null;
  setFeedback(isNew ? "Condition added." : "Condition saved.");
  render();
  showToast(isNew ? "Condition added." : "Condition saved.");
}

function saveEvidence(form) {
  const condition = state.conditions.find((item) => item.id === form.dataset.conditionId);
  if (!condition) return;

  for (const key of Object.keys(condition.evidence)) {
    const selected = form.querySelector(`input[name="${key}"]:checked`);
    if (selected) condition.evidence[key] = selected.value;
  }
  setFeedback("Evidence status saved. This will appear in your summary.");
  render();
  showToast("Evidence status saved. This will appear in your summary.");
}

function saveEvidenceChange(input) {
  const form = input.closest("[data-evidence-form]");
  const condition = form ? state.conditions.find((item) => item.id === form.dataset.conditionId) : null;
  if (!condition) return;

  condition.evidence[input.name] = input.value;
  setFeedback("Evidence status saved. This will appear in your summary.");
  render();
  showToast("Evidence status saved. This will appear in your summary.");
}

function saveEvidenceItem(form) {
  const condition = state.conditions.find((item) => item.id === form.dataset.conditionId);
  if (!condition) return;
  const formData = new FormData(form);
  condition.evidenceItems = evidenceItemsFor(condition);
  condition.evidenceItems.push({
    title: formData.get("title") || "Untitled evidence item",
    location: formData.get("location") || "",
    status: formData.get("status") || "Not sure",
    supports: formData.getAll("supports"),
    notes: formData.get("notes") || "",
  });
  state.editingEvidenceItem = false;
  setFeedback("Evidence item saved. No document uploaded.");
  render();
  showToast("Evidence item saved. No document uploaded.");
}

function saveVsoSearch(form) {
  const formData = new FormData(form);
  state.vso.searchLocation = String(formData.get("searchLocation") || "").trim();
  setFeedback(state.vso.searchLocation ? "Search area set for summary." : "Search area cleared.");
  showToast(state.vso.searchLocation ? "Search area set for summary." : "Search area cleared.");
  render();
}

function saveVisibleVsoSearchDraft() {
  const input = screenEl.querySelector("#vsoLocation");
  const visibleValue = input ? input.value.trim() : "";
  if (!visibleValue || visibleValue === state.vso.searchLocation) {
    return false;
  }

  state.vso.searchLocation = visibleValue;
  setFeedback("Search area set for summary.");
  return true;
}

function generateVsoSummary() {
  const savedDraft = saveVisibleVsoSearchDraft();
  setScreen(7);
  showToast(savedDraft ? "Search area saved and summary generated." : "VSO prep summary generated.");
}

function requestPrototypeReset() {
  if (!state.resetArmed) {
    state.resetArmed = true;
    setFeedback("Reset needs one more tap. Your current fake test is still here.");
    render();
    showToast("Tap Confirm reset sample data to reset.");
    return;
  }

  resetPrototype();
}

function openConditionEditor() {
  state.askNco.open = false;
  state.askNco.scenarioId = null;
  state.pathwayMode = null;
  state.reviewerGuide = false;
  state.resetArmed = false;
  state.editingEvidenceItem = false;
  state.screen = 3;
  state.editingCondition = "new";
  render();
  screenEl.scrollTop = 0;
}

function openReviewerGuide() {
  state.askNco.open = false;
  state.askNco.scenarioId = null;
  state.pathwayMode = null;
  state.editingCondition = null;
  state.editingEvidenceItem = false;
  state.reviewerGuide = true;
  render();
  screenEl.scrollTop = 0;
  showToast("Reviewer guide opened.");
}

function closeReviewerGuide() {
  state.reviewerGuide = false;
  render();
  screenEl.scrollTop = 0;
}

document.addEventListener("click", async (event) => {
  const target = event.target.closest("button, a");
  if (!target) return;

  if (target.matches("[data-save-evidence-next]")) {
    const form = target.closest("[data-evidence-form]");
    if (form) {
      saveEvidence(form);
    }
    setScreen(5);
  } else if (target.matches("[data-generate-summary]")) {
    generateVsoSummary();
  } else if (target.matches("[data-stage-continue]")) {
    continueFromStage();
  } else if (target.matches("[data-next]")) {
    nextScreen();
  } else if (target.matches("[data-clear-pathway]")) {
    state.pathwayMode = null;
    render();
    screenEl.scrollTop = 0;
  } else if (target.matches("[data-open-ask-nco]")) {
    openAskNco(target.dataset.askOpenScenario || null);
  } else if (target.matches("[data-close-ask-nco]")) {
    closeAskNco();
  } else if (target.matches("[data-ask-scenario]")) {
    state.askNco.scenarioId = target.dataset.askScenario;
    renderAskNcoPanel();
  } else if (target.matches("[data-ask-reset]")) {
    state.askNco.scenarioId = null;
    renderAskNcoPanel();
  } else if (target.matches("[data-open-resources]")) {
    openResources();
  } else if (target.matches("[data-open-reviewer-guide]")) {
    openReviewerGuide();
  } else if (target.matches("[data-close-reviewer-guide]")) {
    closeReviewerGuide();
  } else if (target.matches("[data-reviewer-start]")) {
    state.reviewerGuide = false;
    setScreen(0);
    showToast("Reviewer walk-through ready.");
  } else if (target.matches("[data-reviewer-summary]")) {
    state.reviewerGuide = false;
    setScreen(7);
    showToast("Sample summary opened.");
  } else if (target.matches("[data-copy-reviewer-feedback]")) {
    await copyReviewerFeedback();
  } else if (target.matches("[data-add-condition]")) {
    openConditionEditor();
  } else if (target.matches("[data-edit-condition]")) {
    state.selectedConditionId = target.dataset.editCondition;
    state.editingCondition = "existing";
    render();
  } else if (target.matches("[data-evidence-condition]")) {
    state.selectedConditionId = target.dataset.evidenceCondition;
    setScreen(4);
  } else if (target.matches("[data-select-condition]")) {
    state.selectedConditionId = target.dataset.selectCondition;
    render();
  } else if (target.matches("[data-add-evidence-item]")) {
    state.editingEvidenceItem = true;
    render();
  } else if (target.matches("[data-cancel-edit]")) {
    state.editingCondition = null;
    render();
  } else if (target.matches("[data-cancel-evidence-item]")) {
    state.editingEvidenceItem = false;
    render();
  } else if (target.matches("[data-screen-jump]")) {
    const targetScreen = Number(target.dataset.screenJump);
    state.editingCondition = null;
    state.editingEvidenceItem = false;
    state.pathwayMode = null;
    state.reviewerGuide = false;
    setScreen(targetScreen);
  } else if (target.matches("[data-copy-summary]")) {
    try {
      await navigator.clipboard.writeText(prepSummaryText());
      showToast("Summary copied");
    } catch {
      showToast("Copy is unavailable in this browser. Summary is still on screen.");
    }
  } else if (target.matches("[data-download-summary]")) {
    downloadSummary();
  } else if (target.matches("[data-print-summary]")) {
    printSummary();
  } else if (target.matches("[data-reset-prototype]")) {
    requestPrototypeReset();
  } else if (target.matches("[data-save-vso]")) {
    state.vso.savedOption = target.dataset.saveVso;
    setFeedback(`${state.vso.savedOption} selected for VSO prep summary.`);
    render();
    showToast(`${state.vso.savedOption} added to VSO prep summary.`);
  }
});

document.addEventListener("change", (event) => {
  if (event.target.matches('input[name="stage"]')) {
    state.stage = event.target.value;
  }

  if (event.target.matches("input[type='radio']") && event.target.closest("[data-evidence-form]")) {
    saveEvidenceChange(event.target);
  }
});

document.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;
  if (form.matches("[data-condition-form]")) {
    saveCondition(form);
  } else if (form.matches("[data-evidence-form]")) {
    saveEvidence(form);
  } else if (form.matches("[data-evidence-item-form]")) {
    saveEvidenceItem(form);
  } else if (form.matches("[data-vso-form]")) {
    saveVsoSearch(form);
  } else if (form.closest(".form-grid")) {
    saveBasics(form);
  }
});

screenEl.addEventListener("change", (event) => {
  const form = event.target.closest(".form-grid");
  if (form && state.screen === 2) {
    saveBasics(form);
    render();
  }
});

backButton.addEventListener("click", previousScreen);
askNcoButton.addEventListener("click", () => openAskNco());
resourcesButton.addEventListener("click", openResources);
closeResourcesButton.addEventListener("click", closeResources);
drawerBackdrop.addEventListener("click", closeResources);
closeAskNcoButton.addEventListener("click", closeAskNco);
askNcoBackdrop.addEventListener("click", closeAskNco);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && state.askNco.open) {
    closeAskNco();
    return;
  }

  if (event.key === "Escape" && drawer.classList.contains("open")) {
    closeResources();
  }
});

miniMap.addEventListener("click", (event) => {
  const button = event.target.closest("[data-screen]");
  if (!button) return;
  state.editingCondition = null;
  state.editingEvidenceItem = false;
  state.pathwayMode = null;
  const targetScreen = Number(button.dataset.screen);
  setScreen(targetScreen);
});

renderResources();
render();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  });
}
