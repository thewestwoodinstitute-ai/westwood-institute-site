const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

const images = {
  hero: "https://media.base44.com/images/public/6a42c537595a9f9d3c1f8d2e/cf74036f4_generated_bc83c849.png",
  programs: "https://media.base44.com/images/public/6a42c537595a9f9d3c1f8d2e/59d745a1a_generated_0c1eefbe.png",
  research: "https://media.base44.com/images/public/6a42c537595a9f9d3c1f8d2e/3ff3faf5d_generated_3db99786.png",
  about: "https://media.base44.com/images/public/6a42c537595a9f9d3c1f8d2e/ea8707d59_generated_0ea08241.png",
  drGorbis: "https://media.base44.com/images/public/6a42c537595a9f9d3c1f8d2e/d11a88bd0_generated_6eb42d59.png",
};

const icons = {
  award: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 21l4-3 4 3v-6H8v6z"/><circle cx="12" cy="8" r="5"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>`,
  brain: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5a3 3 0 0 0-3 3v1a3 3 0 0 0 0 6v1a3 3 0 0 0 5 2.2V5.8A3 3 0 0 0 9 5z"/><path d="M15 5a3 3 0 0 1 3 3v1a3 3 0 0 1 0 6v1a3 3 0 0 1-5 2.2V5.8A3 3 0 0 1 15 5z"/></svg>`,
  stethoscope: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4v5a4 4 0 0 0 8 0V4"/><path d="M10 13v2a5 5 0 0 0 10 0v-1"/><circle cx="20" cy="10" r="2"/></svg>`,
  heart: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 8.5c0 5-8.5 10-8.5 10s-8.5-5-8.5-10A4.5 4.5 0 0 1 12 6a4.5 4.5 0 0 1 8.5 2.5z"/></svg>`,
  book: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21V5.5z"/><path d="M4 5.5V21"/></svg>`,
  eye: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/></svg>`,
  flame: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22a7 7 0 0 0 7-7c0-4-3-6-5-9-.5 3-2.5 4-4 5-1.5-2-1-4 0-7-4 3-6 7-6 11a7 7 0 0 0 8 7z"/></svg>`,
  users: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/></svg>`,
  box: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/></svg>`,
  scissors: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4L8.5 15.5"/><path d="M14 14l6 6"/><path d="M8.5 8.5L12 12"/></svg>`,
  hand: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 11V5a2 2 0 0 1 4 0v6"/><path d="M12 11V4a2 2 0 0 1 4 0v8"/><path d="M16 12V7a2 2 0 0 1 4 0v8a7 7 0 0 1-7 7h-1a8 8 0 0 1-8-8v-3a2 2 0 0 1 4 0z"/></svg>`,
  calendar: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M8 2v4M16 2v4M3 10h18"/></svg>`,
  video: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="7" width="13" height="10" rx="2"/><path d="M16 10l5-3v10l-5-3z"/></svg>`,
};

const whyReasons = [
  ["award", "30+ Years of Excellence", "Founded in 1994, with roots in pioneering OCD research at UCLA since the early 1990s."],
  ["clock", "Intensive Treatment Programs", "Immersive, individually tailored programs designed for severe and treatment-resistant cases."],
  ["brain", "ERP Specialists", "Trained in Dr. Edna Foa's Exposure and Response Prevention protocol, the gold standard for OCD treatment."],
  ["stethoscope", "Psychiatry Integration", "Comprehensive psychopharmacological management can be coordinated with behavioral therapy."],
  ["heart", "Medical Collaboration", "Academic affiliations with USC Keck School of Medicine and UCLA School of Medicine."],
  ["book", "Research-Based Care", "Active contributions to scientific literature and ongoing refinement of treatment methods."],
];

const conditions = [
  {
    name: "Obsessive-Compulsive Disorder",
    shortName: "OCD",
    slug: "ocd",
    icon: "brain",
    intro: "Recurrent obsessions and compulsions treated through intensive ERP, CBT, and the Four-Step Method.",
    overview: "OCD can involve intrusive thoughts, images, urges, or fears followed by rituals meant to reduce anxiety. At Westwood Institute, treatment focuses on helping patients face feared triggers while resisting compulsions in a structured, supported way.",
    symptoms: ["Contamination fears and washing rituals", "Checking, counting, repeating, or arranging", "Intrusive taboo, harm, religious, or sexual thoughts", "Reassurance seeking and mental review", "Avoidance that shrinks school, work, or family life"],
    approach: ["Exposure and Response Prevention with careful hierarchy building", "Four-Step Cognitive Behavioral Self-Treatment strategies", "Family guidance to reduce accommodation", "Medication consultation when appropriate", "Intensive treatment for severe or treatment-resistant cases"],
  },
  {
    name: "Body Dysmorphic Disorder",
    shortName: "BDD",
    slug: "bdd",
    icon: "eye",
    intro: "Specialized CBT and ERP for appearance-related distress, checking, reassurance seeking, and avoidance.",
    overview: "BDD centers on a painful preoccupation with perceived flaws in appearance. The Institute addresses the cycle of mirror checking, camouflaging, comparison, reassurance seeking, and avoidance that can make daily life feel impossible.",
    symptoms: ["Hours spent checking mirrors, photos, skin, hair, or body features", "Avoiding school, work, dating, social events, or bright lighting", "Repeated reassurance seeking or comparing appearance", "Urges for cosmetic, dermatologic, or surgical procedures", "Shame, isolation, depression, or anxiety tied to perceived defects"],
    approach: ["Specialized CBT for distorted appearance beliefs", "Exposure work for mirrors, photos, social situations, and avoided environments", "Response prevention for checking, camouflaging, and reassurance seeking", "Careful coordination around surgery or cosmetic procedure concerns", "Practical tools for rebuilding confidence and function"],
  },
  {
    name: "Post-Traumatic Stress Disorder",
    shortName: "PTSD",
    slug: "ptsd",
    icon: "shield",
    intro: "Trauma-focused care using evidence-based exposure therapy and cognitive behavioral strategies.",
    overview: "PTSD can keep the nervous system locked in threat mode after trauma. Treatment is paced with care and designed to reduce avoidance, intrusive memories, hypervigilance, and the sense that the past is still happening now.",
    symptoms: ["Intrusive memories, nightmares, or flashbacks", "Avoidance of reminders, places, conversations, or sensations", "Hypervigilance, startle responses, irritability, or sleep problems", "Guilt, shame, emotional numbing, or disconnection", "OCD symptoms that overlap with trauma-related fear"],
    approach: ["Trauma-informed assessment and treatment planning", "Exposure-based strategies when clinically appropriate", "CBT tools for stuck beliefs and avoidance", "Coordination with anxiety and OCD treatment when symptoms overlap", "Skills for grounding, regulation, and restoring routines"],
  },
  {
    name: "Anxiety Disorders",
    shortName: "Anxiety",
    slug: "anxiety",
    icon: "flame",
    intro: "Comprehensive care for generalized anxiety and related fears using CBT and behavioral interventions.",
    overview: "Anxiety disorders can look like endless worry, avoidance, physical tension, or difficulty trusting uncertainty. Treatment helps patients practice new responses to fear rather than building life around it.",
    symptoms: ["Excessive worry that feels difficult to control", "Avoidance, procrastination, or reassurance seeking", "Sleep disruption, irritability, muscle tension, or fatigue", "Difficulty tolerating uncertainty", "Anxiety interfering with school, work, relationships, or health"],
    approach: ["CBT for worry, beliefs, and avoidance patterns", "Exposure to uncertainty and feared situations", "Behavioral experiments and practical coping tools", "Relapse-prevention planning", "Medication consultation or coordination as needed"],
  },
  {
    name: "Panic Disorder",
    shortName: "Panic Disorder",
    slug: "panic-disorder",
    icon: "heart",
    intro: "Targeted treatment for panic attacks, fear of body sensations, and agoraphobic avoidance.",
    overview: "Panic disorder often grows when normal body sensations become feared and avoided. Treatment teaches patients how to face those sensations directly and reclaim places or activities panic has taken over.",
    symptoms: ["Sudden panic attacks with racing heart, dizziness, shortness of breath, or chest tightness", "Fear of fainting, losing control, dying, or being trapped", "Avoidance of driving, stores, crowds, elevators, exercise, or being alone", "Repeated medical reassurance seeking", "Lifestyle restrictions built around preventing panic"],
    approach: ["Interoceptive exposure to feared body sensations", "Situational exposure for avoided places", "CBT for catastrophic interpretations of panic", "Skills for reducing safety behaviors", "Stepwise planning for agoraphobia recovery"],
  },
  {
    name: "Social Anxiety",
    shortName: "Social Anxiety",
    slug: "social-anxiety",
    icon: "users",
    intro: "Evidence-based treatment for social fear, performance anxiety, embarrassment, and avoidance.",
    overview: "Social anxiety can make ordinary interactions feel like high-stakes tests. Treatment focuses on exposure, attention shifting, behavioral experiments, and rebuilding confidence in real social settings.",
    symptoms: ["Fear of being judged, embarrassed, rejected, or visibly anxious", "Avoiding conversations, meetings, presentations, dating, or groups", "Over-rehearsing, replaying, or criticizing interactions", "Blushing, sweating, trembling, or mind going blank", "Difficulty speaking up despite wanting connection"],
    approach: ["Graduated social and performance exposures", "CBT for self-critical predictions and post-event review", "Practice reducing safety behaviors", "Skills for attention, assertiveness, and participation", "Treatment plans tailored to school, work, or relationship goals"],
  },
  {
    name: "Health Anxiety",
    shortName: "Health Anxiety",
    slug: "health-anxiety",
    icon: "stethoscope",
    intro: "Specialized care for illness anxiety, body scanning, checking, and reassurance cycles.",
    overview: "Health anxiety can trap people in repeated scanning, online research, doctor visits, or fear of missed symptoms. Treatment reduces compulsive checking while strengthening tolerance for uncertainty.",
    symptoms: ["Frequent body scanning or symptom monitoring", "Repeated internet searching or medical reassurance seeking", "Fear that normal sensations indicate serious illness", "Avoiding medical information, appointments, exercise, or certain foods", "Temporary relief followed by renewed doubt"],
    approach: ["CBT for threat interpretation and uncertainty", "Exposure and response prevention for checking and reassurance", "Behavioral plans for healthy medical care without compulsion", "Reduction of internet searching and body scanning", "Practical relapse-prevention tools"],
  },
  {
    name: "Hoarding",
    shortName: "Hoarding",
    slug: "hoarding",
    icon: "box",
    intro: "Structured intervention for compulsive saving, clutter, avoidance, and decision difficulty.",
    overview: "Hoarding is not simply messiness. It involves distress around discarding, difficulty making decisions, and living spaces that become hard to use safely or comfortably.",
    symptoms: ["Strong urges to save items regardless of practical value", "Distress, guilt, or fear when discarding possessions", "Rooms, beds, kitchens, or hallways becoming unusable", "Avoiding decisions, organizing, or inviting others inside", "Family conflict or safety concerns related to clutter"],
    approach: ["CBT for saving beliefs and decision-making", "Graduated discarding practice", "Exposure to distress around letting go", "Organization and maintenance routines", "Family collaboration when helpful"],
  },
  {
    name: "Trichotillomania",
    shortName: "Trichotillomania",
    slug: "trichotillomania",
    icon: "scissors",
    intro: "Behavioral treatment for compulsive hair pulling using awareness training and habit reversal.",
    overview: "Trichotillomania involves repetitive hair pulling that can feel automatic, soothing, or hard to resist. Treatment helps patients understand triggers and build competing responses.",
    symptoms: ["Pulling hair from scalp, eyebrows, eyelashes, beard, or body", "Urges, tension, relief, or trance-like episodes around pulling", "Avoiding hairstyles, swimming, intimacy, or photos", "Shame, hiding, or repeated attempts to stop", "Skin irritation or noticeable hair loss"],
    approach: ["Habit reversal training and competing responses", "Stimulus control for high-risk settings", "Awareness training for automatic pulling", "CBT for shame, perfectionism, or emotional triggers", "Relapse planning for stress periods"],
  },
  {
    name: "Skin Picking",
    shortName: "Skin Picking",
    slug: "skin-picking",
    icon: "hand",
    intro: "Specialized behavioral care for excoriation disorder and repetitive picking cycles.",
    overview: "Skin picking can involve scanning for imperfections, picking at perceived irregularities, and then feeling trapped by shame or physical consequences. Treatment targets the cycle gently and directly.",
    symptoms: ["Repeated picking at skin, scabs, blemishes, bumps, or perceived imperfections", "Time lost in mirrors, bathrooms, phones, or grooming routines", "Bleeding, scarring, infection risk, or pain", "Avoiding clothing, intimacy, photos, or social situations", "Difficulty stopping once picking begins"],
    approach: ["Habit reversal and competing response training", "Stimulus control for mirrors, tweezers, lighting, and routines", "CBT for perfectionism and appearance concerns", "Emotion regulation and urge-surfing tools", "Practical wound-care boundaries when needed"],
  },
];

const programs = [
  {
    name: "What is an IOP Program?",
    slug: "what-is-iop",
    icon: "book",
    duration: "Program Guide",
    intro: "An Intensive Outpatient Program provides a higher level of support than standard weekly therapy while allowing patients to remain in daily life.",
    details: ["IOP is designed for symptoms that need concentrated practice and accountability.", "Patients participate in frequent one-on-one therapy, exposure work, skills training, and structured homework.", "The goal is to build momentum quickly while keeping treatment personalized."],
  },
  {
    name: "3-Week Intensive Program",
    slug: "intensive",
    icon: "calendar",
    duration: "3 weeks",
    tag: "Most Popular",
    intro: "The flagship immersive program integrates ERP and the Four-Step Method for severe OCD and related disorders.",
    details: ["Daily one-on-one work with a dedicated therapist.", "Individualized exposure plans built around the patient's actual triggers.", "Best suited for severe, complex, or treatment-resistant symptoms."],
  },
  {
    name: "Twice-Weekly Program",
    slug: "twice-weekly",
    icon: "clock",
    duration: "8 weeks",
    intro: "A semi-intensive option for patients who need strong continuity while balancing school, work, or family responsibilities.",
    details: ["Two focused sessions per week.", "Ongoing exposure homework between visits.", "A flexible format for patients who do not need daily IOP-level care."],
  },
  {
    name: "Comprehensive Assessments",
    slug: "assessments",
    icon: "stethoscope",
    duration: "Varies",
    intro: "A thorough clinical evaluation using validated rating scales and specialized diagnostic tools.",
    details: ["Clarifies diagnosis, severity, and treatment fit.", "May include OCD-specific scales such as the Y-BOCS.", "Results guide treatment intensity and program recommendations."],
  },
  {
    name: "Individual Therapy",
    slug: "individual-therapy",
    icon: "users",
    duration: "Ongoing",
    intro: "Personalized one-on-one therapy with an ERP specialist, tailored to symptoms, goals, and readiness.",
    details: ["Useful for ongoing treatment, step-down care, or focused symptom targets.", "Combines CBT, ERP, and behavioral planning.", "Can coordinate with family members or outside providers when appropriate."],
  },
  {
    name: "Telehealth Sessions",
    slug: "telehealth",
    icon: "video",
    duration: "Flexible",
    intro: "Secure virtual sessions for appropriate patients who cannot attend in person.",
    details: ["Maintains the same evidence-based approach where clinically appropriate.", "Can support exposure work in the patient's home environment.", "Availability depends on clinical fit and licensing requirements."],
  },
];

const publications = [
  ["Bridging Mind and Body", "ADAA Conference Blog", "2023", "https://adaa.org/learn-from-us/from-the-experts/blog-posts/conference/bridging-mind-body"],
  ["BDD - Surgeons and Surgery Considerations", "ADAA Expert Blog", "2022", "https://adaa.org/learn-from-us/from-the-experts/blog-posts/consumer/bdd-surgeons-and-surgery-considerations"],
  ["Body Dysmorphic Disorder: Disease of Self-Perceived Ugliness", "ADAA Professional Webinar", "2021", "https://adaa.org/webinar/professional/body-dysmorphic-disorder-disease-self-perceived-ugliness-and-its-relationship"],
  ["Interplay Between PTSD and OCD: Treatment Considerations", "ADAA Professional Webinar", "2020", "https://adaa.org/webinar/professional/interplay-between-ptsd-and-ocd-treatment-considerations-and-tactics"],
];

const faqs = [
  ["What is ERP therapy?", "Exposure and Response Prevention is an evidence-based treatment that helps patients face feared triggers while reducing compulsive responses."],
  ["What makes the intensive program different?", "The intensive format provides concentrated, repeated practice with a dedicated therapist so patients can build momentum faster than traditional weekly therapy."],
  ["Do you offer telehealth?", "Telehealth may be available for clinically appropriate patients while preserving the same evidence-based treatment approach."],
  ["Do you treat severe cases?", "Yes. The Institute has particular experience with severe, complex, and treatment-resistant OCD and anxiety-related conditions."],
  ["How do I begin?", "Start by scheduling an assessment. The clinical team will help determine the right diagnosis, level of care, and treatment format."],
];

const testimonials = [
  ["Dr. Eda Gorbis is a seasoned expert in helping people overcome OCD and related problems. Her expert team helps even the toughest cases.", "Leading OCD Researcher", "Professional Colleague"],
  ["Her approach is compassionate, caring, intense and fast. Clients who stay with the program experience positive changes and improved mood.", "Clinical Peer Review", "Professional Endorsement"],
  ["After years of struggling with OCD and trying many different therapists, I finally found a program that understood what recovery required.", "Former Patient", "3-Week Intensive Program Graduate"],
  ["The team at WIAD understood my BDD in a way no one else had. Dr. Gorbis and her innovative techniques gave me the tools to see myself clearly for the first time in years.", "Former Patient", "BDD Treatment Graduate"],
];

const routes = {
  home: "/",
  about: "/about",
  team: "/team",
  faq: "/faq",
  contact: "/contact",
  "dr-gorbis": "/about/dr-gorbis",
  conditions: "/conditions",
  programs: "/programs",
  research: "/research",
  resources: "/resources",
};

function icon(name) {
  return `<span class="icon-box">${icons[name] || icons.book}</span>`;
}

function hashPath() {
  const raw = decodeURIComponent(window.location.hash.replace(/^#/, ""));
  if (!raw || raw === "/") return "/";
  if (!raw.startsWith("/")) return routes[raw] || `/${raw}`;
  return raw;
}

function setRoute(path) {
  window.location.hash = path;
}

function activeClass(path, target) {
  if (target === "/") return path === "/" ? "active" : "";
  return path === target || path.startsWith(`${target}/`) ? "active" : "";
}

function header(path) {
  const conditionLinks = conditions.map((item) => `<a href="#/conditions/${item.slug}" class="${activeClass(path, `/conditions/${item.slug}`)}">${item.shortName}</a>`).join("");
  const programLinks = programs.map((item) => `<a href="#/programs/${item.slug}" class="${activeClass(path, `/programs/${item.slug}`)}">${item.name}</a>`).join("");
  return `
    <header class="site-header" aria-label="Primary navigation">
      <a class="brand" href="#/">
        <span class="brand-title">Westwood Institute</span>
        <span class="brand-subtitle">For Anxiety Disorders</span>
      </a>
      <button class="mobile-menu-button" type="button" aria-expanded="false" aria-controls="main-nav">Menu</button>
      <nav class="main-nav" id="main-nav">
        <a class="nav-link ${activeClass(path, "/")}" href="#/">Home</a>
        <div class="nav-item">
          <a class="nav-link has-menu ${activeClass(path, "/about")}" href="#/about">About <span aria-hidden="true">⌄</span></a>
          <div class="nav-menu">
            <a href="#/about/dr-gorbis" class="${activeClass(path, "/about/dr-gorbis")}">About Dr. Eda Gorbis</a>
            <a href="#/team" class="${activeClass(path, "/team")}">Our Team</a>
            <a href="#/faq" class="${activeClass(path, "/faq")}">FAQ</a>
          </div>
        </div>
        <div class="nav-item">
          <a class="nav-link has-menu ${activeClass(path, "/conditions")}" href="#/conditions">What We Treat <span aria-hidden="true">⌄</span></a>
          <div class="nav-menu">${conditionLinks}</div>
        </div>
        <div class="nav-item">
          <a class="nav-link has-menu ${activeClass(path, "/programs")}" href="#/programs">Programs <span aria-hidden="true">⌄</span></a>
          <div class="nav-menu">${programLinks}</div>
        </div>
        <a class="nav-link ${activeClass(path, "/research")}" href="#/research">Research</a>
        <a class="nav-link ${activeClass(path, "/resources")}" href="#/resources">Resources</a>
      </nav>
      <div class="header-actions">
        <a class="button button-primary header-button" href="#/contact">Schedule Assessment</a>
        <a class="phone-link" href="tel:3104430031">(310) 443-0031</a>
      </div>
    </header>
  `;
}

function hero() {
  return `
    <section class="hero">
      <div class="hero-media" aria-hidden="true">
        <img src="${images.hero}" alt="" />
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content">
        <p class="hero-badge">Expert Treatment for OCD, PTSD & BDD in Los Angeles</p>
        <h1>Hope Starts <span>Here</span></h1>
        <p class="hero-copy">Westwood Institute specializes in personalized, evidence-based care for individuals living with Obsessive-Compulsive Disorder, Post-Traumatic Stress Disorder, Body Dysmorphic Disorder, and complex anxiety-related conditions.</p>
        <div class="hero-actions">
          <a class="button button-primary button-wide" href="#/contact">Schedule an Assessment <span>→</span></a>
          <a class="button button-ghost" href="#/programs">Explore Our Programs</a>
        </div>
        <div class="hero-stats">
          <span>30+ Years of Experience</span>
          <span>70% Improvement Rate</span>
        </div>
      </div>
      <div class="scroll-indicator" aria-hidden="true"><span></span></div>
    </section>
  `;
}

function sectionHeading(eyebrow, title, copy) {
  return `<div class="section-heading"><p class="eyebrow">${eyebrow}</p><h2>${title}</h2><p>${copy}</p></div>`;
}

function whySection() {
  return `
    <section class="section why-section">
      ${sectionHeading("Why Choose WIAD", "A Legacy of Clinical Excellence", "The Westwood Institute combines decades of specialized expertise with compassionate, evidence-based care for severe, complex, and treatment-resistant symptoms.")}
      <div class="feature-grid">
        ${whyReasons.map(([i, title, desc]) => `<article class="feature-card">${icon(i)}<h3>${title}</h3><p>${desc}</p></article>`).join("")}
      </div>
    </section>
  `;
}

function conditionCards() {
  return conditions.map((condition) => `
    <a class="condition-card" href="#/conditions/${condition.slug}">
      ${icon(condition.icon)}
      <h3>${condition.name}</h3>
      <p>${condition.intro}</p>
      <span>Learn More <b>→</b></span>
    </a>
  `).join("");
}

const featuredVideos = [
  {
    id: "Ees8463R1go",
    title: "Featured Educational Video on OCD and Anxiety Treatment"
  },
  {
    id: "ci1SE6qojlY",
    title: "Featured Educational Video on Complex Anxiety Disorders"
  },
  {
    id: "pW9BP0Oqeig",
    title: "Featured Educational Video on OCD and Related Conditions"
  }
];

function featuredVideoSection() {
  return `
    <section class="featured-videos" aria-labelledby="featured-videos-heading">
      <div>
        <h3 id="featured-videos-heading">Featured Videos</h3>
        <p>Learn more about our specialized approach to treating complex anxiety disorders, OCD, and related conditions.</p>
      </div>
      <div class="featured-video-grid">
        ${featuredVideos.map((video) => `
          <article class="featured-video-card">
            <div class="featured-video-frame">
              <iframe
                src="https://www.youtube-nocookie.com/embed/${video.id}"
                title="${video.title}"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function programCards() {
  return programs.map((program) => `
    <a class="program-card" href="#/programs/${program.slug}">
      ${icon(program.icon)}
      <div>
        <h3>${program.name}${program.tag ? `<span>${program.tag}</span>` : ""}</h3>
        <p>${program.intro}</p>
        <small>${program.duration}</small>
      </div>
      <b>→</b>
    </a>
  `).join("");
}

function conditionsIndex() {
  return `
    <section class="section section-soft conditions-section">
      ${sectionHeading("Conditions We Treat", "Specialized Expertise in Complex Disorders", "Explore the full spectrum of OCD and anxiety-related conditions treated at Westwood Institute.")}
      ${featuredVideoSection()}
      <div class="condition-grid">${conditionCards()}</div>
    </section>
  `;
}

function programsIndex() {
  return `
    <section class="section programs-section">
      ${sectionHeading("Treatment Programs", "Evidence-Based Programs Tailored to You", "From intensive outpatient care to flexible telehealth, each program is designed around clinical fit and patient goals.")}
      <div class="split-layout">
        <div class="image-panel"><img src="${images.programs}" alt="Modern therapy consultation room with natural light" /></div>
        <div class="program-list">${programCards()}</div>
      </div>
    </section>
  `;
}

function leaderSection() {
  return `
    <section class="section section-soft team-section">
      ${sectionHeading("Meet the Team", "Led by World-Renowned Experts", "Our clinicians bring specialized training and a deep commitment to helping patients overcome challenging cases.")}
      <div class="leader-card">
        <div class="leader-image"><img src="${images.drGorbis}" alt="Dr. Eda Gorbis, Director and Founder" /></div>
        <div class="leader-copy">
          <p class="eyebrow">Director & Founder</p>
          <h3>Eda Gorbis, PhD, LMFT</h3>
          <p class="leader-title">Adjunct Clinical Assistant Professor of Psychiatry & Biobehavioral Sciences, USC Keck School of Medicine</p>
          <p>Dr. Gorbis is a world-renowned authority on the treatment and research of Obsessive-Compulsive Disorder. She trained under Dr. Edna B. Foa, the pioneer of ERP therapy, and worked with Dr. Jeffrey Schwartz at UCLA, creator of the Four-Step Cognitive Behavioral Self-Treatment method.</p>
          <p>She synthesized these approaches to establish the Westwood Institute, achieving one of the highest success rates for OCD treatment in the United States.</p>
          <div class="tag-row"><span>OCD</span><span>BDD</span><span>ERP</span><span>CBT</span><span>PTSD</span><span>Anxiety</span></div>
          <div class="button-row">
            <a class="button button-dark" href="#/team">View Full Team <span>→</span></a>
            <a class="button button-outline" href="#/contact">Inquire with Dr. Gorbis</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

function testimonialsSection() {
  return `
    <section class="section section-soft stories-section">
      ${sectionHeading("Success Stories", "Voices of Recovery", "From professional colleagues to patients who have walked the path to recovery, hear what they say about the Westwood Institute.")}
      <div class="testimonial-grid">
        ${testimonials.map(([quote, author, desc]) => `<article class="testimonial-stage"><div class="quote-mark" aria-hidden="true">”</div><blockquote>"${quote}"</blockquote><p class="testimonial-author">${author}</p><p class="testimonial-desc">${desc}</p></article>`).join("")}
      </div>
    </section>
  `;
}

function publicationsList() {
  return publications.map(([title, venue, year, url]) => `
    <a class="publication-card" href="${url}" target="_blank" rel="noopener noreferrer">
      ${icon("book")}
      <div><h3>${title}</h3><p>${venue} · ${year}</p></div>
      <span aria-hidden="true">↗</span>
    </a>
  `).join("");
}

function researchSection() {
  return `
    <section class="section research-section">
      ${sectionHeading("Research & Publications", "Advancing the Science of Recovery", "Dr. Gorbis and the WIAD team contribute to evidence-based knowledge on OCD, BDD, PTSD, and related disorders.")}
      <div class="split-layout research-layout">
        <div>
          <div class="image-panel research-image"><img src="${images.research}" alt="Medical journal and research materials on a desk" /></div>
          <a class="button button-dark button-full" href="#/research">View All Publications <span>→</span></a>
        </div>
        <div class="publication-list">${publicationsList()}</div>
      </div>
    </section>
  `;
}

function pageHero(eyebrow, title, copy, img = images.about) {
  return `
    <section class="page-hero about-page">
      <div class="page-hero-media" aria-hidden="true"><img src="${img}" alt="" /><div></div></div>
      <div class="page-hero-copy"><p class="eyebrow">${eyebrow}</p><h1>${title}</h1><p>${copy}</p></div>
    </section>
  `;
}

function contentPage({ eyebrow, title, copy, img, body }) {
  return `${pageHero(eyebrow, title, copy, img)}<section class="section page-content">${body}</section>`;
}

function conditionPage(slug) {
  const condition = conditions.find((item) => item.slug === slug);
  if (!condition) return notFound();
  return contentPage({
    eyebrow: "Condition Focus",
    title: condition.name,
    copy: condition.intro,
    img: images.hero,
    body: `
      <div class="detail-layout">
        <article class="rich-copy">
          ${icon(condition.icon)}
          <h2>What is ${condition.shortName}?</h2>
          <p>${condition.overview}</p>
          <h3>Common signs and symptoms</h3>
          <ul>${condition.symptoms.map((item) => `<li>${item}</li>`).join("")}</ul>
          <h3>How Westwood Institute treats it</h3>
          <ul>${condition.approach.map((item) => `<li>${item}</li>`).join("")}</ul>
        </article>
        <aside class="side-panel">
          <p class="eyebrow">Next Step</p>
          <h3>Find the right level of care</h3>
          <p>An assessment helps clarify diagnosis, severity, and whether weekly therapy, intensive treatment, or telehealth is the best fit.</p>
          <a class="button button-primary button-full" href="#/contact">Schedule Assessment</a>
        </aside>
      </div>
      <div class="related-row">${conditions.filter((item) => item.slug !== slug).slice(0, 3).map((item) => `<a href="#/conditions/${item.slug}">${icon(item.icon)}<span>${item.shortName}</span></a>`).join("")}</div>
    `,
  });
}

function programPage(slug) {
  const program = programs.find((item) => item.slug === slug);
  if (!program) return notFound();
  return contentPage({
    eyebrow: "Treatment Program",
    title: program.name,
    copy: program.intro,
    img: images.programs,
    body: `
      <div class="detail-layout">
        <article class="rich-copy">
          ${icon(program.icon)}
          <h2>${program.name}</h2>
          <p>${program.intro}</p>
          <h3>What this includes</h3>
          <ul>${program.details.map((item) => `<li>${item}</li>`).join("")}</ul>
          <h3>Program fit</h3>
          <p>Westwood Institute matches treatment intensity to the patient's symptoms, schedule, clinical history, and goals. The assessment process helps determine which format will be most useful.</p>
        </article>
        <aside class="side-panel">
          <p class="eyebrow">Duration</p>
          <h3>${program.duration}</h3>
          <p>Programs are personalized. Your treatment plan may combine ERP, CBT, family guidance, psychiatry coordination, and between-session practice.</p>
          <a class="button button-primary button-full" href="#/contact">Ask About This Program</a>
        </aside>
      </div>
      <div class="program-list page-list">${programCards()}</div>
    `,
  });
}

function aboutPage() {
  return contentPage({
    eyebrow: "About the Institute",
    title: "Three Decades of Healing",
    copy: "Founded to meet the need for specialized treatment of severe OCD and related disorders, Westwood Institute provides evidence-based care with deep clinical expertise.",
    img: images.about,
    body: `
      <div class="split-layout">
        <div class="story-copy">
          <p class="eyebrow">Our Story</p>
          <h2>Built Around Specialized Care</h2>
          <p>The Westwood Institute for Anxiety Disorders was founded in response to the lack of expertise and successful treatment options for Obsessive-Compulsive Disorder. Dr. Gorbis developed an intensive treatment approach grounded in ERP, CBT, and mindful awareness.</p>
          <p>Since then, the Institute has helped patients from across the United States and internationally pursue recovery through structured, evidence-based treatment.</p>
        </div>
        <div class="feature-grid mini-grid">
          ${whyReasons.slice(0, 4).map(([i, title, desc]) => `<article class="feature-card">${icon(i)}<h3>${title}</h3><p>${desc}</p></article>`).join("")}
        </div>
      </div>
    `,
  }) + leaderSection();
}

function teamPage() {
  return pageHero("Our Team", "Specialized Clinicians for Complex Anxiety", "The Institute's team supports patients with intensive, compassionate, evidence-based treatment.") + leaderSection();
}

function drGorbisPage() {
  return pageHero("Director & Founder", "Eda Gorbis, PhD, LMFT", "A leading clinician, researcher, and educator in OCD, BDD, PTSD, ERP, and intensive treatment.") + leaderSection() + researchSection();
}

function resourcesPage() {
  const resources = [
    ["book", "About OCD", "Understand obsessions, compulsions, avoidance, and why ERP is the gold-standard treatment.", "/conditions/ocd"],
    ["brain", "The Four Steps", "Learn how mindful relabeling, reattribution, refocusing, and revaluing support recovery.", "/programs/intensive"],
    ["eye", "About BDD", "Explore appearance-related obsessions, checking rituals, and specialized treatment options.", "/conditions/bdd"],
    ["calendar", "Intensive Treatment", "See how concentrated care can help when symptoms are severe or treatment-resistant.", "/programs/what-is-iop"],
  ];
  return contentPage({
    eyebrow: "Educational Resources",
    title: "Learn About Treatment and Recovery",
    copy: "Explore patient-friendly resources about OCD, BDD, ERP, intensive treatment, and related anxiety disorders.",
    img: images.research,
    body: `<div class="resource-grid">${resources.map(([i, title, desc, href]) => `<a class="resource-card" href="#${href}">${icon(i)}<h3>${title}</h3><p>${desc}</p><span>Read More <b>→</b></span></a>`).join("")}</div>`,
  });
}

function faqPage() {
  return contentPage({
    eyebrow: "FAQ",
    title: "Questions Before Starting Care",
    copy: "A quick guide to treatment format, assessment, telehealth, and intensive programs.",
    img: images.about,
    body: `<div class="faq-list">${faqs.map(([question, answer]) => `<details class="faq-item"><summary>${question}</summary><p>${answer}</p></details>`).join("")}</div>`,
  });
}

function contactPage() {
  return contentPage({
    eyebrow: "Contact",
    title: "Schedule an Assessment",
    copy: "Tell the Institute what you are seeking help for, and the team will follow up about next steps.",
    img: images.hero,
    body: `
      <div class="contact-layout">
        <form id="contact-form" class="contact-form">
          <label>Name<input name="name" autocomplete="name" required /></label>
          <label>Email<input name="email" type="email" autocomplete="email" required /></label>
          <label>Phone<input name="phone" type="tel" autocomplete="tel" /></label>
          <label>What are you seeking help for?<select name="condition"><option>OCD</option><option>BDD</option><option>PTSD</option><option>Anxiety</option><option>Panic</option><option>Social Anxiety</option><option>Health Anxiety</option><option>Hoarding</option><option>Trichotillomania</option><option>Skin Picking</option></select></label>
          <label>Message<textarea name="message" rows="6" required></textarea></label>
          <button class="button button-primary button-full" type="submit">Send Message</button>
        </form>
        <div class="side-panel">
          <p class="eyebrow">Westwood Institute</p>
          <h3>Los Angeles, California</h3>
          <p><strong>Phone:</strong> <a href="tel:3104430031">(310) 443-0031</a></p>
          <p><strong>Email:</strong> <a href="mailto:thewestwoodinstitute@gmail.com">thewestwoodinstitute@gmail.com</a></p>
          <p>For urgent safety concerns, call 911 or go to the nearest emergency room.</p>
        </div>
        <div id="thank-you" class="thank-you" hidden>
          <h3>Thank you. Your message has been prepared.</h3>
          <p>The next step is to connect with the Institute about assessment and treatment fit.</p>
          <div class="button-row"><a class="button button-dark" href="#/research">Research</a><a class="button button-outline" href="#/resources">Resources</a></div>
        </div>
      </div>
    `,
  });
}

function researchPage() {
  return pageHero("Research & Publications", "Advancing the Science of Recovery", "Evidence-based care is central to the Institute's clinical model.", images.research) + researchSection();
}

function notFound() {
  return contentPage({
    eyebrow: "Page Not Found",
    title: "Let's get you back on track",
    copy: "That page is not available.",
    img: images.about,
    body: `<div class="button-row"><a class="button button-primary" href="#/">Home</a><a class="button button-outline" href="#/conditions">What We Treat</a></div>`,
  });
}

function homePage() {
  return hero() + whySection() + conditionsIndex() + programsIndex() + leaderSection() + testimonialsSection() + researchSection() + cta();
}

function cta() {
  return `
    <section class="section cta-section">
      <div class="cta-band">
        <p class="eyebrow">Start Here</p>
        <h2>Recovery begins with the right assessment.</h2>
        <p>Contact Westwood Institute to learn which treatment format fits your symptoms, history, and goals.</p>
        <div class="cta-actions"><a class="button button-primary" href="#/contact">Schedule Assessment</a><a class="button button-outline" href="tel:3104430031">Call (310) 443-0031</a></div>
      </div>
    </section>
  `;
}

function footer() {
  return `
    <footer class="site-footer">
      <div class="footer-column footer-brand">
        <h2>Westwood Institute</h2>
        <p>For Anxiety Disorders</p>
        <a href="tel:3104430031">(310) 443-0031</a>
        <a href="mailto:thewestwoodinstitute@gmail.com">thewestwoodinstitute@gmail.com</a>
        <span>921 Westwood Blvd, Suite 223<br />Los Angeles, CA 90024</span>
        <span>8617 Wilshire Blvd</span>
      </div>
      <div class="footer-column">
        <h3>Quick Links</h3>
        <a href="#/about">About the Institute</a>
        <a href="#/conditions">Conditions We Treat</a>
        <a href="#/programs">Treatment Programs</a>
        <a href="#/team">Meet the Team</a>
        <a href="#/research">Research & Publications</a>
      </div>
      <div class="footer-column">
        <h3>Conditions</h3>
        ${conditions.slice(0, 6).map((item) => `<a href="#/conditions/${item.slug}">${item.shortName}</a>`).join("")}
      </div>
      <div class="footer-column">
        <h3>Programs</h3>
        ${programs.slice(1).map((item) => `<a href="#/programs/${item.slug}">${item.name}</a>`).join("")}
      </div>
    </footer>
  `;
}

function pageFor(path) {
  if (path === "/") return homePage();
  if (path === "/about") return aboutPage();
  if (path === "/about/dr-gorbis") return drGorbisPage();
  if (path === "/team") return teamPage();
  if (path === "/faq") return faqPage();
  if (path === "/conditions") return conditionsIndex() + cta();
  if (path.startsWith("/conditions/")) return conditionPage(path.split("/").pop()) + cta();
  if (path === "/programs") return programsIndex() + cta();
  if (path.startsWith("/programs/")) return programPage(path.split("/").pop()) + cta();
  if (path === "/research") return researchPage() + cta();
  if (path === "/resources") return resourcesPage() + cta();
  if (path === "/contact") return contactPage();
  return notFound();
}

function bindInteractions() {
  const menuButton = document.querySelector(".mobile-menu-button");
  const nav = document.querySelector("#main-nav");
  menuButton?.addEventListener("click", () => {
    const nextState = !nav.classList.contains("open");
    nav.classList.toggle("open", nextState);
    menuButton.setAttribute("aria-expanded", String(nextState));
  });

  const form = document.querySelector("#contact-form");
  if (!form) return;
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const button = form.querySelector("button[type='submit']");
    const originalText = button.textContent;
    button.disabled = true;
    button.textContent = "Sending...";
    if (FORMSPREE_ENDPOINT.includes("YOUR_FORM_ID")) {
      form.hidden = true;
      document.querySelector("#thank-you").hidden = false;
      return;
    }
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, { method: "POST", headers: { Accept: "application/json" }, body: new FormData(form) });
      if (!response.ok) throw new Error("Form submission failed");
      form.reset();
      form.hidden = true;
      document.querySelector("#thank-you").hidden = false;
    } catch {
      button.disabled = false;
      button.textContent = originalText;
      alert("The message could not be sent. Please email thewestwoodinstitute@gmail.com or call (310) 443-0031.");
    }
  });
}

function render() {
  const path = hashPath();
  document.body.innerHTML = `${header(path)}<main>${pageFor(path)}</main>${footer()}`;
  bindInteractions();
  window.scrollTo({ top: 0, behavior: "instant" });
}

window.addEventListener("hashchange", render);
render();
