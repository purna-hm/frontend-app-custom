export interface NavItem {
  label: string;
  href: string;
  isNew?: boolean;
  children?: NavItem[];
}

export const topNavItems: NavItem[] = [
  { label: "International Admission", href: "/admissions/international" },
  { label: "MyUni Virtual Tour", href: "/virtual-tour" },
  { label: "Admissions Open 2026", href: "/admissions", },
  { label: "Exam Notice", href: "/academics/examination" },
  { label: "Incubation Center", href: "/about/incubation" },
  { label: "Career", href: "/career" },
  { label: "Contact Us", href: "/contact" },
  { label: "Login", href: "/login" },
];

export const mainNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About MyUni",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Why Join MyUni University", href: "/about/why-join" },
      { label: "Chancellor Corner", href: "/about/chancellor" },
      { label: "Exclusive Advisory Board", href: "/about/advisory-board" },
      { label: "Governing Board", href: "/about/governing-board" },
      { label: "Awards & Recognition", href: "/about/awards" },
      { label: "The Leadership", href: "/about/leadership" },
      { label: "Pedagogy", href: "/about/pedagogy" },
      { label: "MyUni Extension", href: "/about/extension", isNew: true },
      { label: "Experiential Learning", href: "/about/experiential-learning", isNew: true },
      { label: "Incubation", href: "/about/incubation", isNew: true },
    ],
  },
  {
    label: "Admission",
    href: "/admissions",
    children: [
      { label: "Admission Procedure", href: "/admissions/procedure" },
      { label: "Online Application & Enquiry", href: "/admissions/apply" },
      { label: "Information Brochure", href: "/admissions/brochure" },
      { label: "Provisional Admission Fee", href: "/admissions/fee" },
      { label: "Admission Offices", href: "/admissions/offices" },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    children: [
      { label: "— Academics —", href: "#", },
      { label: "Examination Notice", href: "/academics/examination" },
      { label: "Academic Model", href: "/academics/academic-model" },
      { label: "Academic Calendar", href: "/academics/calendar" },
      { label: "Unique Approach of Learning", href: "/academics/approach" },
      { label: "Certifications (VAC)", href: "/academics/certifications" },
      { label: "AICTE-Idea Lab", href: "/academics/aicte-lab" },
      { label: "— Institutes —", href: "#" },
      { label: "Institute of Advance Computing", href: "/institutes/advance-computing" },
      { label: "Institute of Architecture", href: "/institutes/architecture" },
      { label: "Institute of Agriculture Sciences", href: "/institutes/agriculture" },
      { label: "Institute of Arts, Humanities", href: "/institutes/arts-humanities" },
      { label: "Institute of Commerce", href: "/institutes/commerce" },
      { label: "Institute of Computer Application", href: "/institutes/computer-application" },
      { label: "Institute of Design", href: "/institutes/design" },
      { label: "Institute of Engineering & Technology", href: "/institutes/engineering" },
      { label: "Institute of Journalism & Mass Communication", href: "/institutes/journalism" },
      { label: "Institute of Management Studies", href: "/institutes/management" },
      { label: "Institute of Sciences", href: "/institutes/sciences" },
      { label: "Institute of Law & Legal Studies", href: "/institutes/law" },
      { label: "Institute of Pharmaceutical Sciences", href: "/institutes/pharmaceutical" },
      { label: "Institute of Pharmacy", href: "/institutes/pharmacy" },
      { label: "Institute of Performing Arts", href: "/institutes/performing-arts" },
      { label: "Centre for Liberal & Advanced Studies", href: "/institutes/liberal-advanced" },
    ],
  },
  {
    label: "T&P",
    href: "/tp",
    children: [],
  },
  {
    label: "PhD",
    href: "/phd",
    children: [
      { label: "Ph.D. Overview", href: "/phd" },
      { label: "Ph.D. Ordinance", href: "/phd/ordinance" },
      { label: "Syllabus PhD Entrance Exam", href: "/phd/syllabus" },
      { label: "Course Work Scheme & Syllabus", href: "/phd/course-work" },
      { label: "Time Table For Course Work", href: "/phd/time-table" },
      { label: "PhD Submission Format", href: "/phd/submission" },
    ],
  },
  {
    label: "Research",
    href: "/research",
    children: [
      { label: "R&D Overview", href: "/research" },
      { label: "Patents & Copyrights", href: "/research/patents" },
      { label: "Publications", href: "/research/publications" },
      { label: "Books", href: "/research/books" },
      { label: "Research Lab", href: "/research/labs" },
      { label: "All Events", href: "/research/events" },
      { label: "Consultancy", href: "/research/consultancy" },
    ],
  },
  {
    label: "SAGE Life",
    href: "/sage-life",
    children: [
      { label: "Life@MyUni", href: "/sage-life" },
      { label: "MyUni Sports", href: "/sage-life/sports" },
      { label: "MyUni Library", href: "/sage-life/library" },
      { label: "Alumni", href: "/sage-life/alumni" },
      { label: "Events", href: "/sage-life/events" },
      { label: "MyUni Times", href: "/sage-life/times" },
      { label: "Print Media", href: "/sage-life/media" },
      { label: "Blogs", href: "/sage-life/blogs" },
    ],
  },
  {
    label: "Ranking",
    href: "/rankings",
    children: [
      { label: "About IQAC", href: "/rankings" },
      { label: "Composition of IQAC", href: "/rankings/composition" },
      { label: "NIRF Ranking", href: "/rankings/nirf" },
      { label: "NAAC AQAR", href: "/rankings/naac-aqar" },
      { label: "NAAC A+ Accredited University", href: "/rankings/naac-accreditation" },
      { label: "Affiliations & Accreditations", href: "/rankings/affiliations" },
    ],
  },
];
