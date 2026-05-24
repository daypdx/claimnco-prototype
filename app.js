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

const ASK_NCO_SCREEN = screens.length;

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

const askNcoScenarios = [
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
    sourceLabel: "Official VA source plus legal-risk warning",
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
    why: "The next step depends on the reason: missing diagnosis, missing service event, missing nexus, weak severity evidence, or possible VA error.",
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
];

const state = {
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
      name: "Back pain",
      diagnosis: "Not sure",
      symptoms: "Pain, stiffness, trouble standing for long periods",
      serviceEvent: "Lift injury during deployment",
      impact: "Missed work, limited driving",
      evidence: {
        current: "Have it",
        service: "Not sure",
        lay: "Need to request it",
        severity: "Need to add notes",
      },
      items: [],
    },
    {
      id: "ringing-ears",
      name: "Ringing in ears",
      diagnosis: "No",
      symptoms: "Ringing after noise exposure",
      serviceEvent: "Weapons and vehicle noise",
      impact: "Trouble sleeping and focusing",
      evidence: {
        current: "Not sure",
        service: "Have it",
        lay: "Not sure",
        severity: "Need to add notes",
      },
      items: [],
    },
  ],
  selectedConditionId: "back-pain",
  vso: {
    searchLocation: "",
    savedOption: "",
  },
  editingCondition: null,
  editingEvidenceItem: false,
  askReturnContext: null,
  reviewTopics: [
    "Intent to File timing",
    "Accredited representative options",
    "Medical records for current condition",
    "Symptom impact notes",
  ],
};

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

function isAskNcoOpen() {
  return state.screen === ASK_NCO_SCREEN && !state.pathwayMode;
}

function setScreen(index) {
  state.askReturnContext = null;
  state.pathwayMode = null;
  state.screen = Math.max(0, Math.min(index, screens.length - 1));
  render();
  screenEl.scrollTop = 0;
}

function currentContext() {
  return {
    screen: state.screen,
    pathwayMode: state.pathwayMode,
    editingCondition: state.editingCondition,
    editingEvidenceItem: state.editingEvidenceItem,
  };
}

function openAskNco() {
  if (isAskNcoOpen()) return;

  state.askReturnContext = currentContext();
  state.editingCondition = null;
  state.editingEvidenceItem = false;
  state.pathwayMode = null;
  state.screen = ASK_NCO_SCREEN;
  render();
  screenEl.scrollTop = 0;
}

function nextScreen() {
  setScreen(state.screen + 1);
}

function previousScreen() {
  if (isAskNcoOpen()) {
    if (state.askReturnContext) {
      const returnContext = state.askReturnContext;
      state.askReturnContext = null;
      state.screen = returnContext.screen;
      state.pathwayMode = returnContext.pathwayMode;
      state.editingCondition = returnContext.editingCondition;
      state.editingEvidenceItem = returnContext.editingEvidenceItem;
    } else {
      setScreen(0);
      return;
    }
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
  const askNcoActive = isAskNcoOpen();
  const current = askNcoActive
    ? "Ask NCO"
    : state.pathwayMode
    ? state.pathwayMode === "submitted"
      ? "After Filing"
      : "Decision Help"
    : screens[state.screen];
  titleEl.textContent = current === "Welcome" ? "ClaimNCO" : current;
  stepLabelEl.textContent = askNcoActive
    ? "Guided help"
    : state.pathwayMode
    ? "Different path"
    : `Step ${state.screen + 1} of ${screens.length}`;
  const progressScreen =
    askNcoActive && state.askReturnContext ? state.askReturnContext.screen : state.screen;
  progressEl.style.width = `${((Math.min(progressScreen, screens.length - 1) + 1) / screens.length) * 100}%`;
  progressShell.hidden = askNcoActive;
  backButton.disabled = !askNcoActive && state.screen === 0 && !state.pathwayMode;
  backButton.style.visibility = !askNcoActive && state.screen === 0 && !state.pathwayMode ? "hidden" : "visible";
  askNcoButton.disabled = askNcoActive;
  askNcoButton.setAttribute("aria-current", askNcoActive ? "page" : "false");
}

function renderMiniMap() {
  const activeScreen = isAskNcoOpen() && state.askReturnContext ? state.askReturnContext.screen : state.screen;
  miniMap.innerHTML = screens
    .map(
      (screen, index) => `
        <button class="mini-step ${index === activeScreen ? "active" : ""}" type="button" data-screen="${index}">
          <span>${index + 1}</span>
          <span>${escapeHtml(screen)}</span>
        </button>
      `,
    )
    .join("");
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

function renderWelcome() {
  return `
    <div class="screen-stack">
      <div class="hero-block branded-welcome">
        <img class="brand-hero-mark" src="./assets/brand/claimnco-icon-concept.svg" alt="ClaimNCO icon">
        <p class="brand-kicker">ClaimNCO</p>
        <h2>Get your VA claim squared away.</h2>
        <p>Go one step at a time: see where you are, what you may need, what looks missing, and what to ask a VSO or accredited representative.</p>
      </div>

      <div class="notice">
        ${icon("shield-check")}
        <p><strong>Prototype boundary</strong>This app explains VA information and helps you organize. It is not VA, a doctor, attorney, VSO, or accredited representative.</p>
      </div>

      <div class="notice warning">
        ${icon("lock")}
        <p><strong>No sensitive uploads</strong>This first version tracks document names and status only. Do not enter SSNs, claim numbers, banking information, or full medical records.</p>
      </div>

      <div class="actions">
        <button class="button primary full" type="button" data-next>
          ${icon("arrow-right")} Start readiness check
        </button>
        <button class="button secondary full" type="button" data-screen-jump="8">
          ${icon("message-circle-question")} Ask NCO
        </button>
        <button class="button secondary full" type="button" data-open-resources>
          ${icon("book-open")} View official VA resources
        </button>
      </div>
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
          <button class="button secondary full" type="button" data-screen-jump="8">${icon("message-circle-question")} Ask NCO about this</button>
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
        <button class="button secondary full" type="button" data-screen-jump="8">${icon("message-circle-question")} Ask NCO about this</button>
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
  const evidenceValues = Object.values(condition.evidence);
  const haveCount = evidenceValues.filter((value) => value === "Have it").length;
  const unsureCount = evidenceValues.filter((value) => value === "Not sure").length;
  const status = haveCount > 1 ? "Evidence started" : "Needs review";

  return `
    <article class="condition-card">
      <div class="condition-head">
        <div>
          <h3>${escapeHtml(condition.name)}</h3>
          <p>${escapeHtml(condition.symptoms)}</p>
        </div>
        <span class="tag ${haveCount > 1 ? "" : "caution"}">${status}</span>
      </div>
      <dl class="definition-grid">
        <div class="definition-row">
          <dt>Diagnosis</dt>
          <dd>${escapeHtml(condition.diagnosis)}</dd>
        </div>
        <div class="definition-row">
          <dt>Service event or exposure</dt>
          <dd>${escapeHtml(condition.serviceEvent)}</dd>
        </div>
        <div class="definition-row">
          <dt>Impact</dt>
          <dd>${escapeHtml(condition.impact)}</dd>
        </div>
      </dl>
      <div class="tag-row">
        <span class="tag neutral">${haveCount} have</span>
        <span class="tag caution">${unsureCount} not sure</span>
      </div>
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
        <h2>Add possible conditions.</h2>
        <p>Use plain words like back pain, ringing in ears, sleep problems, anxiety, knee injury, or migraines. You do not need the official medical name yet.</p>
      </div>

      <div class="card-list">
        ${state.conditions.map(conditionCard).join("")}
      </div>

      <button class="button secondary full" type="button" data-add-condition>${icon("plus")} Add another condition</button>

      <div class="notice">
        ${icon("list-checks")}
        <p><strong>Each condition gets its own evidence story</strong>Current issue, service event or exposure, possible link, severity, and evidence.</p>
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
    diagnosis: "Not sure",
    symptoms: "",
    serviceEvent: "",
    impact: "",
    evidence: {
      current: "Not sure",
      service: "Not sure",
      lay: "Not sure",
      severity: "Not sure",
    },
    items: [],
  };

  return `
    <div class="screen-stack">
      <div class="hero-block">
        <h2>${isNew ? "Add a condition." : "Edit condition."}</h2>
        <p>You do not need perfect VA wording yet. Capture what you know.</p>
      </div>

      <form class="form-grid" data-condition-form data-condition-id="${draft.id}" data-new="${isNew}">
        <div class="field">
          <label for="conditionName">Condition or symptom area</label>
          <input id="conditionName" name="name" value="${escapeHtml(draft.name)}" placeholder="Back pain" required>
        </div>

        <fieldset class="field">
          <legend>Do you have a diagnosis?</legend>
          <div class="option-group">
            ${["Yes", "No", "Not sure"]
              .map(
                (option) => `
                  <label class="option-card">
                    <input type="radio" name="diagnosis" value="${option}" ${draft.diagnosis === option ? "checked" : ""}>
                    <span>${option}</span>
                  </label>
                `,
              )
              .join("")}
          </div>
        </fieldset>

        <div class="field">
          <label for="symptoms">What symptoms affect you now?</label>
          <textarea id="symptoms" name="symptoms" placeholder="Pain, stiffness, trouble standing">${escapeHtml(draft.symptoms)}</textarea>
        </div>

        <div class="field">
          <label for="serviceEvent">What happened during service that may connect to this?</label>
          <textarea id="serviceEvent" name="serviceEvent" placeholder="Injury, exposure, illness, event, or aggravation">${escapeHtml(draft.serviceEvent)}</textarea>
        </div>

        <div class="field">
          <label for="impact">How does it affect daily life or work?</label>
          <textarea id="impact" name="impact" placeholder="Work limits, sleep, mobility, focus, daily activities">${escapeHtml(draft.impact)}</textarea>
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
  return ["Have it", "Need to request it", "VA may have it", "Not sure", "Not applicable"]
    .filter((option) => !(name === "severity" && option === "VA may have it"))
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
        <p>Track names and statuses only. The first prototype does not upload or store sensitive records.</p>
      </div>

      <div class="action-row">${conditionTabs}</div>

      <form class="form-grid" data-evidence-form data-condition-id="${condition.id}">
        <h3>${escapeHtml(condition.name)}</h3>
        <div class="notice">
          ${icon("scale")}
          <p><strong>Original claim basics</strong>VA generally looks for a current condition, something from service, and a link between the two.</p>
        </div>

        <fieldset class="field">
          <legend>Current condition</legend>
          <div class="option-group">${evidenceOptions("current", condition.evidence.current)}</div>
        </fieldset>

        <fieldset class="field">
          <legend>Service event or records</legend>
          <div class="option-group">${evidenceOptions("service", condition.evidence.service)}</div>
        </fieldset>

        <fieldset class="field">
          <legend>Lay or buddy statement</legend>
          <div class="option-group">${evidenceOptions("lay", condition.evidence.lay)}</div>
        </fieldset>

        <fieldset class="field">
          <legend>Severity or daily impact evidence</legend>
          <div class="option-group">${evidenceOptions("severity", condition.evidence.severity)}</div>
        </fieldset>

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
  if (!condition.items.length) {
    return `
      <div class="notice">
        ${icon("file-plus")}
        <p><strong>No evidence item names added</strong>You can add a record name, test result, or buddy statement here without uploading the actual document.</p>
      </div>
    `;
  }

  return `
    <div class="card-list">
      ${condition.items
        .map(
          (item) => `
            <article class="summary-card">
              <h3>${escapeHtml(item.title)}</h3>
              <dl class="definition-grid">
                <div class="definition-row"><dt>Category</dt><dd>${escapeHtml(item.category)}</dd></div>
                <div class="definition-row"><dt>Status</dt><dd>${escapeHtml(item.status)}</dd></div>
                <div class="definition-row"><dt>Location</dt><dd>${escapeHtml(item.location || "Not listed")}</dd></div>
              </dl>
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
        <p>Add a name and status only. Keep actual records out of this prototype.</p>
      </div>

      <form class="form-grid" data-evidence-item-form data-condition-id="${condition.id}">
        <div class="field">
          <label for="evidenceTitle">Evidence name</label>
          <input id="evidenceTitle" name="title" placeholder="Clinic record, test result, or buddy statement" required>
        </div>

        <fieldset class="field">
          <legend>Category</legend>
          <div class="option-group">
            ${["Medical record", "Service record", "Lay/buddy statement", "Test or imaging", "VA letter/notice", "Other"]
              .map(
                (option) => `
                  <label class="option-card">
                    <input type="radio" name="category" value="${option}" ${option === "Medical record" ? "checked" : ""}>
                    <span>${option}</span>
                  </label>
                `,
              )
              .join("")}
          </div>
        </fieldset>

        <fieldset class="field">
          <legend>Status</legend>
          <div class="option-group">
            ${["Have it", "Need to request it", "VA may have it", "Not sure"]
              .map(
                (option) => `
                  <label class="option-card">
                    <input type="radio" name="status" value="${option}" ${option === "Have it" ? "checked" : ""}>
                    <span>${option}</span>
                  </label>
                `,
              )
              .join("")}
          </div>
        </fieldset>

        <div class="field">
          <label for="location">Where is it?</label>
          <input id="location" name="location" placeholder="Private clinic portal">
        </div>

        <div class="actions">
          <button class="button primary full" type="submit">${icon("save")} Save item</button>
          <button class="button secondary full" type="button" data-cancel-evidence-item>${icon("x")} Cancel</button>
        </div>
      </form>
    </div>
  `;
}

function evidenceCounts(condition) {
  const values = Object.values(condition.evidence);
  return {
    have: values.filter((value) => value === "Have it").length,
    unsure: values.filter((value) => value === "Not sure").length,
    review: values.filter((value) => value.includes("request") || value.includes("add")).length,
  };
}

function nextAction(condition) {
  if (condition.evidence.current === "Not sure") return "Review current medical evidence";
  if (condition.evidence.service === "Not sure") return "Review service event records";
  if (condition.evidence.lay === "Need to request it") return "Review lay or buddy statements";
  if (condition.evidence.severity !== "Have it") return "Review symptom impact notes";
  return "Review with accredited help";
}

function renderReadiness() {
  return `
    <div class="screen-stack">
      <div class="hero-block">
        <h2>Your readiness snapshot.</h2>
        <p>This is an organization view, not an approval score or filing recommendation.</p>
      </div>

      <div class="notice">
        ${icon("message-square-check")}
        <p><strong>Ready for a better conversation</strong>Your information is organized enough to start a productive VSO or accredited representative conversation.</p>
      </div>

      <div class="card-list">
        ${state.conditions
          .map((condition) => {
            const counts = evidenceCounts(condition);
            return `
              <article class="condition-card">
                <div class="condition-head">
                  <div>
                    <h3>${escapeHtml(condition.name)}</h3>
                    <p>Evidence: ${counts.have} have / ${counts.unsure} not sure</p>
                  </div>
                  <span class="tag caution">${nextAction(condition)}</span>
                </div>
              </article>
            `;
          })
          .join("")}
      </div>

      <section class="info-panel">
        <h3>Topics to review</h3>
        <p>These are not extra requirements. They are notes you can bring up with a VSO if useful.</p>
        <ul class="guidance-list">
          ${state.reviewTopics
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
        <h3>Official resources</h3>
        <div class="resource-list">
          ${renderInlineResources()}
        </div>
      </section>

      <div class="actions">
        <button class="button primary full" type="button" data-next>${icon("user-search")} Find trusted help</button>
        <button class="button secondary full" type="button" data-screen-jump="8">${icon("message-circle-question")} Ask NCO about a situation</button>
        <button class="button secondary full" type="button" data-screen-jump="3">${icon("plus")} Add another condition</button>
      </div>

      ${renderBottomNav("Journey")}
    </div>
  `;
}

function vsoQuestions() {
  const conditionQuestions = state.conditions.map((condition) => {
    const topic = nextAction(condition).replace(/^Review /, "").toLowerCase();
    return `For ${condition.name}, what evidence would help with ${topic}?`;
  });

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
        <button class="button primary full" type="submit">${icon("map-pin")} Use this search area</button>
      </form>

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
        <p>These are broad VA-recognized VSO networks, not rankings or guarantees.</p>
        <div class="card-list">
          ${nationalVsoOptions
            .map(
              (option) => `
                <article class="vso-card">
                  <div>
                    <h3>${escapeHtml(option.name)}</h3>
                    <p>${escapeHtml(option.note)}</p>
                  </div>
                  <div class="action-row">
                    <a class="button secondary" href="${option.url}" target="_blank" rel="noreferrer">${icon("external-link")} Website</a>
                    <button class="button secondary" type="button" data-save-vso="${escapeHtml(option.name)}">${icon("bookmark")} Use in summary</button>
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
        <p><strong>Verify first</strong>Be careful with anyone who is not VA-accredited, promises a guaranteed rating, or asks for unusual fees.</p>
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
        <button class="button primary full" type="button" data-next>${icon("file-text")} Generate VSO prep summary</button>
      </div>

      ${renderBottomNav("VSO")}
    </div>
  `;
}

function prepSummaryText() {
  const conditionText = state.conditions
    .map((condition) => {
      const counts = evidenceCounts(condition);
      return [
        `Condition: ${condition.name}`,
        `Symptoms: ${condition.symptoms || "Not listed"}`,
        `Service event/exposure: ${condition.serviceEvent || "Not listed"}`,
        `Daily/work impact: ${condition.impact || "Not listed"}`,
        `Evidence status: ${counts.have} have, ${counts.unsure} not sure, ${counts.review} to review`,
        `Topic for VSO: ${nextAction(condition)}`,
      ].join("\n");
    })
    .join("\n\n");

  return [
    "ClaimNCO Claim Readiness Summary",
    "",
    `Process stage: ${stageLabel(state.stage)}`,
    `Intent to File: ${state.basics.intentToFile}`,
    `VA.gov access: ${state.basics.vaGovAccess}`,
    `Representative status: ${state.basics.representative}`,
    `VSO search area: ${state.vso.searchLocation || "Not listed"}`,
    `VSO option for summary: ${state.vso.savedOption || "None selected"}`,
    "",
    "Conditions",
    conditionText,
    "",
    "Questions to ask",
    ...vsoQuestions().map((question, index) => `${index + 1}. ${question}`),
  ].join("\n");
}

function renderSummary() {
  return `
    <div class="screen-stack">
      <div class="hero-block">
        <h2>VSO prep summary.</h2>
        <p>Bring this to a VSO or accredited representative. It avoids sensitive identifiers and focuses on readiness.</p>
      </div>

      <pre class="summary-output" id="summaryOutput">${escapeHtml(prepSummaryText())}</pre>

      <div class="notice">
        ${icon("copy")}
        <p><strong>Copy-only for now</strong>For this MVP, the summary stays on screen or in your clipboard. PDF and email can come later after privacy and consent are designed carefully.</p>
      </div>

      <section class="info-panel">
        <h3>Official links</h3>
        <div class="resource-list">
          ${renderInlineResources()}
        </div>
      </section>

      <div class="actions">
        <button class="button primary full" type="button" data-copy-summary>${icon("copy")} Copy summary</button>
        <button class="button secondary full" type="button" data-screen-jump="6">${icon("user-search")} Back to VSO help</button>
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

      <div class="action-row">
        ${renderAskNcoActions(scenario)}
      </div>
    </div>
  `;
}

function renderAskNco() {
  return `
    <div class="screen-stack">
      <div class="hero-block">
        <h2>Ask NCO.</h2>
        <p>Pick the situation closest to yours. This is a guided prototype with prepared answers, not a live AI chat yet.</p>
      </div>

      <div class="notice">
        ${icon("shield-check")}
        <p><strong>Safety boundary</strong>Ask NCO explains common situations and points to official sources. It is not VA, legal advice, medical advice, or an accredited representative.</p>
      </div>

      <section class="ask-nco-layout" aria-label="Ask NCO guided questions">
        ${askNcoScenarios
          .map(
            (scenario) => `
              <details class="ask-disclosure">
                <summary>
                  <span>
                    <span class="tag neutral">${escapeHtml(scenario.category)}</span>
                    <strong>${escapeHtml(scenario.title)}</strong>
                  </span>
                  ${icon("chevron-down")}
                </summary>
                ${renderAskNcoAnswer(scenario)}
              </details>
            `,
          )
          .join("")}
      </section>
    </div>
  `;
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

  if (isAskNcoOpen()) {
    screenEl.innerHTML = renderAskNco();
  } else if (state.editingCondition) {
    screenEl.innerHTML = renderConditionEditor(state.editingCondition === "new" ? null : currentCondition());
  } else if (state.editingEvidenceItem) {
    screenEl.innerHTML = renderEvidenceItemEditor();
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

  hydrateIcons();
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
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2600);
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
          current: "Not sure",
          service: "Not sure",
          lay: "Not sure",
          severity: "Not sure",
        },
        items: [],
      }
    : state.conditions.find((item) => item.id === id);

  condition.name = formData.get("name") || "Untitled condition";
  condition.diagnosis = formData.get("diagnosis") || "Not sure";
  condition.symptoms = formData.get("symptoms") || "";
  condition.serviceEvent = formData.get("serviceEvent") || "";
  condition.impact = formData.get("impact") || "";

  if (isNew) {
    state.conditions.push(condition);
  }

  state.selectedConditionId = condition.id;
  state.editingCondition = null;
  render();
  showToast("Condition saved.");
}

function saveEvidence(form) {
  const condition = state.conditions.find((item) => item.id === form.dataset.conditionId);
  if (!condition) return;

  for (const key of Object.keys(condition.evidence)) {
    const selected = form.querySelector(`input[name="${key}"]:checked`);
    if (selected) condition.evidence[key] = selected.value;
  }
  render();
  showToast("Evidence status saved.");
}

function saveEvidenceItem(form) {
  const condition = state.conditions.find((item) => item.id === form.dataset.conditionId);
  if (!condition) return;
  const formData = new FormData(form);
  condition.items.push({
    title: formData.get("title") || "Untitled evidence item",
    category: formData.get("category") || "Other",
    status: formData.get("status") || "Not sure",
    location: formData.get("location") || "",
  });
  state.editingEvidenceItem = false;
  render();
  showToast("Evidence item added.");
}

function saveVsoSearch(form) {
  const formData = new FormData(form);
  state.vso.searchLocation = formData.get("searchLocation") || "";
  showToast(state.vso.searchLocation ? "Search area set for summary." : "Search area cleared.");
  render();
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
  } else if (target.matches("[data-stage-continue]")) {
    if (state.stage === "submitted" || state.stage === "decision") {
      state.pathwayMode = state.stage;
      render();
      screenEl.scrollTop = 0;
    } else {
      nextScreen();
    }
  } else if (target.matches("[data-next]")) {
    nextScreen();
  } else if (target.matches("[data-clear-pathway]")) {
    state.pathwayMode = null;
    render();
    screenEl.scrollTop = 0;
  } else if (target.matches("[data-open-resources]")) {
    openResources();
  } else if (target.matches("[data-add-condition]")) {
    state.editingCondition = "new";
    render();
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
    if (targetScreen === ASK_NCO_SCREEN) {
      openAskNco();
    } else {
      state.editingCondition = null;
      state.editingEvidenceItem = false;
      state.pathwayMode = null;
      setScreen(targetScreen);
    }
  } else if (target.matches("[data-copy-summary]")) {
    await navigator.clipboard.writeText(prepSummaryText());
    showToast("Summary copied.");
  } else if (target.matches("[data-save-vso]")) {
    state.vso.savedOption = target.dataset.saveVso;
    render();
    showToast(`${state.vso.savedOption} added to summary.`);
  }
});

document.addEventListener("change", (event) => {
  if (event.target.matches('input[name="stage"]')) {
    state.stage = event.target.value;
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
askNcoButton.addEventListener("click", openAskNco);
resourcesButton.addEventListener("click", openResources);
closeResourcesButton.addEventListener("click", closeResources);
drawerBackdrop.addEventListener("click", closeResources);

document.addEventListener("keydown", (event) => {
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
  if (targetScreen === ASK_NCO_SCREEN) {
    openAskNco();
  } else {
    setScreen(targetScreen);
  }
});

renderResources();
render();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  });
}
