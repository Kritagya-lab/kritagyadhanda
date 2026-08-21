/* =============================================================================
   YOUR WEBSITE CONTENT  —  EDIT THIS FILE ONLY
   -----------------------------------------------------------------------------
   Everything on your website is controlled from this single file.
   To update your site, just change the text inside the quotes " ... ".
   You do NOT need to touch any HTML or CSS.

   TIPS
   - Keep the quotes and commas exactly where they are.
   - To add a new paper, copy one { ... } block and paste it in the list.
   - To hide a whole section, set its "enabled" value to false.
   - Links: if you don't have one yet, leave it as "" (empty) to hide it.
   ============================================================================= */

const SITE = {

  /* ---------------------------------------------------------------------------
     1. BASIC IDENTITY  (shows in the header and browser tab)
     --------------------------------------------------------------------------- */
  name: "Kritagya Dhanda",
  title: "PhD Candidate in Economics",            // e.g. "Assistant Professor of Economics"
  affiliation: "",
  // A short line of extra roles/affiliations (optional, leave "" to hide):
  affiliationExtra: "Department of Economics",
  // Text shown in the browser tab (usually your name):
  browserTitle: "Kritagya Dhanda",
  // Optional headshot. Put an image in the images/ folder and set the name here,
  // e.g. "images/headshot.jpg". Leave "" to show your initials instead.
  photo: "main/images/headshot.jpg",

  // Optional FULL-PAGE BACKGROUND PHOTO that covers the whole website.
  // Save your photo in the images/ folder and put its name here,
  // e.g. "images/background.jpg". Leave "" for a plain background.
  // Content sits on a soft frosted-glass panel so text stays readable.
  background: "",



  /* ---------------------------------------------------------------------------
     2. ABOUT / BIO
     Write in full sentences. You can use several sentences; each string in the
     list below becomes its own paragraph.
     --------------------------------------------------------------------------- */
  about: {
    enabled: true,
    paragraphs: [
      "I am a PhD candidate in the Department of Economics at McMaster University. My research lies at the intersection of education, labour and health, with a focus on how policies shape health outcomes, economic opportunity and welfare."
    ]
  },

  /* ---------------------------------------------------------------------------
     3. RESEARCH FIELDS  (short tags shown as pills)
     --------------------------------------------------------------------------- */
  fields: {
    enabled: true,
    heading: "Research Fields",
    items: [
      "Applied Microeconomics",
      "Health Economics",
      "Labour Economics",
    ]
  },

  /* ---------------------------------------------------------------------------
     4. WORKING PAPERS
     Copy a { ... } block to add more. Order them newest-first.
     - authors: list your coauthors; put your own name to have it shown in bold.
     - links: add as many as you like. Leave any out that don't apply.
     --------------------------------------------------------------------------- */
  workingPapers: {
    enabled: true,
    heading: "Working Papers",
    items: [
      {
        titleText: "The Effect of Tuition Subsidies on Post-Secondary Enrollment: Evidence from Ontario's 30% Tuition Grant",
        badge: "Job Market Paper",              // e.g. "Job Market Paper", "R&R at ...", or "" for none
        authors: ["Kritagya Dhanda"],
        year: "2026",
        abstract: "This paper estimates the effect of tuition subsidies on post-secondary enrollment, identifies the channels through which subsidies operate, and evaluates their welfare implications. I exploit the introduction of Ontario's 30\% Tuition Grant (OTG) in 2012, which provides up to \$1,680  (\$780) annually to income-eligible students enrolled in university (college), using a triple-difference design that leverages variation in parental income, province of residence, and program rollout. Linked administrative tax and post-secondary records for 1.5-generation immigrant children permit direct observation of parental resources and enrollment decisions. Eligibility for the grant increased enrollment by 3 percentage points. The response is concentrated among students whose parents hold little to no capital income, consistent with binding liquidity constraints. I embed the estimated enrollment elasticity in a two-period sufficient-statistics framework to decompose the welfare gain into a liquidity benefit and a fiscal externality. I find that an additional dollar of grant spending raises social welfare by \$1.32, with the fiscal externality from the expanded tax base as the dominant channel.",
        links: [
          { label: "PDF", url: "" },
          { label: "Slides", url: "" },
          { label: "Appendix", url: "" }
        ]
      },
      {
        titleText: "Evaluation of Family Planning Policy in India Using Synthetic Control Methods",
        badge: "",
        authors: ["Kritagya Dhanda"],
        year: "2024",
        abstract: "Publicly funded family planning services have a considerable influence on the fertility decisions of women and, consequently maternal and child health. In November, 2016 an expansive family planning program was launched in 145 districts in seven provinces of India that had previously shown high fertility rates. The program featured (i) increase access to a range of contraceptives, (ii) monetary incentives for beneficiaries who adopt family planning methods, and (iii) information dissemination using mobile vans covering all blocks of a district. This paper documents the effects of this family planning program on a broad set of maternal and child outcomes. I use the generalized synthetic control method to estimate the average treatment effect on the treated districts utilizing administrative data from Health Management Information System of India aggregated to the district level for periods 2009-19. The estimates suggest that the program increased deliveries by 4.6, institutional deliveries of infants by 3.9 and infants weighed at birth by 3.2 per one thousand women of reproductive age. New cases of pregnant women with hypertension decreased by 2 per one thousand women of reproductive age. Heterogeneous treatment effects suggest that the program decreased the fraction of infants born with low-birth-weight in districts with high initial economic activity and increased it in districts with low initial economic activity. ",
        links: [
          { label: "PDF", url: "" }
        ]
      }
    ]
  },

  /* ---------------------------------------------------------------------------
     5. PUBLICATIONS
     ---------------------------------------------------------------------------*/ 
  publications: {
    enabled: false,
    heading: "Publications",
    items: [
      {
        titleText: "Title of a Published Paper",
        authors: ["Kritagya Dhanda", "Coauthor Name"],
        journal: "Journal Name",
        year: "2024",
        volume: "Vol. XX, No. X, pp. XXX–XXX",     // optional, leave "" to hide
        links: [
          { label: "Published Version", url: "" },
          { label: "Working Paper", url: "" }
        ]
      }
    ]
  },
    
  /* ---------------------------------------------------------------------------
     6. WORK IN PROGRESS  (just titles + optional coauthors)
     --------------------------------------------------------------------------- */
  workInProgress: {
    enabled: false,
    heading: "Work in Progress",
    items: [
      { titleText: "Title of an ongoing project", authors: ["Kritagya Dhanda", "Coauthor Name"] },
      { titleText: "Another project in early stages", authors: ["Kritagya Dhanda"] }
    ]
  },

  /* ---------------------------------------------------------------------------
     7. TEACHING
     --------------------------------------------------------------------------- */
  teaching: {
    enabled: true,
    heading: "Teaching",
    intro: "Courses I have taught or assisted with at McMaster University.",
    items: [
      { role: "Instructor", course: "ECON 2Z03: Intermediate Microeconomics", term: "Fall 2025" }
      /*{ role: "Teaching Assistant", course: "ECON XXX: Course Name", term: "2023–2025" }*/
    ]
  },

  /* ---------------------------------------------------------------------------
     8. CV
     Put your CV PDF in the files/ folder and set the file name below,
     e.g. "files/Kritagya_Dhanda_CV.pdf". Leave "" to hide the CV button.
     --------------------------------------------------------------------------- */
  cv: {
    enabled: true,
    heading: "Curriculum Vitae",
    file: "files/CV.pdf",
    note: "Last updated: December 2025"
  },

  /* ---------------------------------------------------------------------------
     9. CONTACT
     --------------------------------------------------------------------------- */
  contact: {
    enabled: true,
    heading: "Contact",
    email: "dhandak@mcmaster.ca",                 // <-- replace with your real email
    office: "Kenneth Taylor Hall (KTH), Room 706",
    address: [
      "Department of Economics",
      "McMaster University",
      "1280 Main Street West",
      "Hamilton, Ontario, Canada  L8S 4M4"
    ]
  },

  /* ---------------------------------------------------------------------------
     10. EXTERNAL LINKS  (icons in the header & footer)
     Leave any url as "" to hide that link.
     --------------------------------------------------------------------------- */
  links: {
    googleScholar: "",
    cv: "files/CV.pdf",
    email: "dhandak@mcmaster.ca",
    linkedin: "",
    twitter: "",
    github: "",
    ssrn: ""
  }
};
