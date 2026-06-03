export type PracticeContent = {
  slug: string;
  title: string;
  metaDescription: string;
  lead: string;
  whenToCall: string[];
  process: { heading: string; body: string }[];
  caseResult: { caseType: string; body: string; geo: string };
  relatedResources: { title: string; href: string }[];
};

export const PRACTICE_CONTENT: Record<string, PracticeContent> = {
  "iep-disputes": {
    slug: "iep-disputes",
    title: "IEP Disputes & Advocacy",
    metaDescription:
      "Representing California parents when the school district has denied an evaluation, refused services, or proposed an IEP that does not meet the child's needs.",
    lead:
      "An Individualized Education Program (IEP) is a legally enforceable document. When the school district refuses to evaluate your child, will not offer the services your child needs, or proposes a plan that misses the mark, you have rights under federal law. The first job is to put those rights into writing.",
    whenToCall: [
      "The district has refused your request for a special-education evaluation, or you believe its evaluation was inadequate.",
      "The IEP team has rejected services your child clearly needs — speech therapy, occupational therapy, behavioral support, a one-to-one aide, an out-of-district placement.",
      "Goals in the proposed IEP are vague, repeated from last year, or not measurable.",
      "You feel pressured to sign an IEP at the meeting before you have had time to review it.",
    ],
    process: [
      {
        heading: "1. Records review",
        body: "We collect and review the student's full education record — IEPs, assessments, work samples, discipline records — to understand what the district has done and what has been missing.",
      },
      {
        heading: "2. Strategy and demand",
        body: "We identify the specific legal failures and put them in a written demand to the district. Most matters move significantly once the district sees a clear, written legal position.",
      },
      {
        heading: "3. Mediation or due process",
        body: "If the district does not respond meaningfully, we file for mediation or a due-process hearing under IDEA. We negotiate from a documented record, not from frustration.",
      },
      {
        heading: "4. Implementation oversight",
        body: "Winning a settlement or order is not the end. We follow up to make sure the services the district agreed to actually appear in the classroom.",
      },
    ],
    caseResult: {
      caseType: "IEP Denial — Elementary",
      body: "Represented a family after the district denied a special-education evaluation for three consecutive school years despite documented learning differences. Following a written demand and mediation, the district agreed to a full evaluation, an appropriate IEP, and compensatory services.",
      geo: "Alameda County · 2020–2022",
    },
    relatedResources: [
      { title: "What belongs in your child's IEP", href: "/know-your-rights#iep-basics" },
      { title: "Requesting an evaluation in writing", href: "/know-your-rights" },
    ],
  },
  "due-process": {
    slug: "due-process",
    title: "Due Process Hearings",
    metaDescription:
      "California due-process hearings under IDEA. LONHA represents parents through filing, mediation, hearing, and post-decision enforcement.",
    lead:
      "A due-process hearing is a formal legal proceeding before an administrative law judge of the California Office of Administrative Hearings. It is the mechanism IDEA provides when parents and a district cannot agree about evaluation, eligibility, placement, or services. The deadlines are short, the evidence is detailed, and the stakes for your child are real.",
    whenToCall: [
      "Mediation has not produced a resolution and the matter is moving toward a formal hearing.",
      "The district has filed a due-process complaint against you and you need representation.",
      "You are within the IDEA statute of limitations and considering whether to file.",
      "A prior settlement or IEP is not being implemented and you want to enforce it.",
    ],
    process: [
      { heading: "1. Pre-filing assessment", body: "We evaluate whether the case meets IDEA's standards and what relief is realistically available." },
      { heading: "2. Filing the complaint", body: "We draft and file the due-process complaint with the California Office of Administrative Hearings." },
      { heading: "3. Resolution session and mediation", body: "IDEA requires a resolution session within 15 days. Many cases settle here. Where they do not, mediation often follows." },
      { heading: "4. Hearing preparation", body: "Witness preparation, document exhibits, expert reports, and a clear theory of the case." },
      { heading: "5. Hearing and decision", body: "We present the case to the administrative law judge and pursue the remedies your child is entitled to under federal law." },
    ],
    caseResult: {
      caseType: "Due Process — Middle School",
      body: "Filed for due process after the district refused to fund an appropriate non-public school placement. The matter settled before testimony, with the district agreeing to placement and compensatory educational services.",
      geo: "Kern County · 2021",
    },
    relatedResources: [
      { title: "The due-process timeline, from filing to hearing", href: "/know-your-rights#due-process-timeline" },
      { title: "When mediation makes sense, and when it does not", href: "/know-your-rights" },
    ],
  },
  "discipline-expulsion": {
    slug: "discipline-expulsion",
    title: "Discipline & Expulsion",
    metaDescription:
      "Manifestation determinations, suspension challenges, and expulsion defense for California students with disabilities.",
    lead:
      "Federal law gives students with disabilities specific protections in school discipline. When a district suspends or expels a child whose behavior is related to their disability — known or suspected — the legal posture changes immediately. These cases move on a short clock and require immediate attention.",
    whenToCall: [
      "Your child has been suspended for more than ten cumulative school days in a year.",
      "An expulsion hearing is scheduled and your child has an IEP, a 504 plan, or a suspected disability.",
      "The district has called a manifestation-determination review and you are not sure what to expect.",
      "Your child has been involuntarily transferred to a different school or program as a discipline measure.",
    ],
    process: [
      { heading: "1. Immediate stay", body: "We assess whether your child is entitled to remain in their current placement under IDEA's 'stay put' provision while the matter is resolved." },
      { heading: "2. Manifestation determination", body: "We attend or challenge the manifestation-determination review and ensure the legal standard is applied correctly." },
      { heading: "3. Expulsion hearing", body: "We represent your child at the expulsion hearing, where the procedural rules are different from a courtroom but the consequences for your child are real." },
      { heading: "4. Reinstatement and appeal", body: "If the result is wrong, we pursue appeal at the district, county, and state level — and into court when warranted." },
    ],
    caseResult: {
      caseType: "Expulsion Defense — High School",
      body: "Represented a student facing expulsion for conduct directly related to an unidentified disability. The manifestation-determination review was reopened, the expulsion was withdrawn, and the district funded an independent evaluation that led to an appropriate IEP.",
      geo: "Los Angeles County · 2023",
    },
    relatedResources: [
      { title: "Manifestation determinations in plain language", href: "/know-your-rights" },
      { title: "Your child's right to stay-put", href: "/know-your-rights" },
    ],
  },
  "section-504": {
    slug: "section-504",
    title: "Section 504 & Discrimination",
    metaDescription:
      "Section 504 of the Rehabilitation Act and Title II of the ADA protect California students whose disabilities affect a major life activity, including students who do not qualify for an IEP.",
    lead:
      "Section 504 of the Rehabilitation Act and Title II of the Americans with Disabilities Act prohibit disability discrimination by any public school that receives federal funding. Some students qualify for accommodations under Section 504 who do not meet IDEA's narrower eligibility standards. Some claims — exclusion from extracurriculars, denial of accommodations, retaliation — live entirely in Section 504 and Title II.",
    whenToCall: [
      "Your child has a 504 plan that the district is not following.",
      "Your child has been excluded from a class, program, or activity because of a disability.",
      "The district has retaliated against you or your child after you raised a disability-rights concern.",
      "Your child has a medical condition or chronic illness affecting school participation and the district has refused accommodations.",
    ],
    process: [
      { heading: "1. Eligibility and plan review", body: "We analyze whether your child qualifies under Section 504 and whether the existing plan meets the legal standard." },
      { heading: "2. Internal complaint", body: "Section 504 requires districts to maintain a grievance procedure. We use it where it is likely to produce results." },
      { heading: "3. Office for Civil Rights complaint", body: "Where appropriate, we file with the U.S. Department of Education Office for Civil Rights, which can investigate and order corrective action." },
      { heading: "4. Federal litigation", body: "Section 504 and Title II claims can be brought in federal court. We pursue litigation when the remedies require it." },
    ],
    caseResult: {
      caseType: "Section 504 — Discrimination",
      body: "Represented a student excluded from a school program because of a documented disability. A Section 504 complaint and OCR involvement led to reinstatement and a written non-discrimination commitment from the district.",
      geo: "Alameda County · 2022",
    },
    relatedResources: [
      { title: "Is your child a 504 or an IEP student?", href: "/know-your-rights" },
      { title: "How OCR complaints work", href: "/know-your-rights" },
    ],
  },
};

export const PRACTICE_SLUGS = Object.keys(PRACTICE_CONTENT);
