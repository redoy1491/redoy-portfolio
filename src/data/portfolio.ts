export type ProjectCategory =
  | "All"
  | "AI & ML"
  | "Software & GUI"
  | "Systems & Networking";

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: Exclude<ProjectCategory, "All">;
  summary: string;
  architectureFlow: string[];
  highlights: string[];
  stack: string[];
  githubUrl: string;
  demoUrl?: string;
  metrics?: { label: string; value: string }[];
  featured?: boolean;
}

export interface ResearchItem {
  id: string;
  title: string;
  period: string;
  domain: string;
  summary: string;
  tags: string[];
}

export interface TechCategory {
  id: string;
  title: string;
  subtitle: string;
  items: { name: string }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  grade: string;
  focus: string;
}

export const PROFILE = {
  name: "Ashraful Islam Redoy",
  shortName: "Redoy",
  headline: "Medical AI Researcher · Final-Year CSE Student",
  university: "Daffodil International University",
  department: "Computer Science & Engineering",
  yearLabel: "4th Year (Final Year) CSE · July 2023 – Present",
  cgpa: "3.88",
  cgpaScale: "4.00",
  location: "Narsingdi, Dhaka, Bangladesh",
  shortLocation: "Dhaka, Bangladesh",
  emailPrimary: "redoy2305101178@diu.edu.bd",
  emailPersonal: "redoy1491@gmail.com",
  phone: "+880 1972201095",
  phoneHref: "tel:+8801972201095",
  avatarUrl: "/images/avatar.jpg",
  cvUrl: "/Redoy_CV.pdf",
  videoResumeEmbedUrl: "https://www.youtube.com/embed/aaE62oMUvp4",
  videoResumeWatchUrl: "https://www.youtube.com/watch?v=aaE62oMUvp4",
  summary:
    "Medical AI researcher and final-year CSE undergraduate at Daffodil International University—focused on machine learning, deep learning, computer vision, and building reliable technology-driven solutions.",
  goal: "To apply research-driven AI, machine learning, and software engineering to build reliable and practical solutions for real-world challenges.",
  quotes: {
    top: "Building thoughtful, human-centered technology—one purposeful step at a time.",
    bottom:
      "Keep striving for success, and remember that every failure is a step toward greater experience.",
  },
  socials: {
    github: "https://github.com/redoy1491",
    linkedin: "https://www.linkedin.com/in/redoy1491/?originalSubdomain=bd",
    facebook: "https://www.facebook.com/redoy1491",
    instagram: "https://www.instagram.com/redoy1491",
  },
};

export const EXPERIENCE = [
  {
    role: "Medical AI Researcher",
    organization: "Daffodil International University · DIU NLP Lab",
    period: "2025 – Present",
    points: [
      "Conducting academic research in clinical prediction, public health machine learning, and medical imaging.",
      "Applying Python, PyTorch, Scikit-learn, OpenCV, and Explainable AI (XAI) across real-world healthcare datasets.",
      "Co-authoring peer-reviewed manuscripts currently under review at BMC Public Health and Scientific Reports.",
    ],
  },
  {
    role: "Teaching & Academic Instruction",
    organization: "Private Tutoring & Coaching Center",
    period: "Ongoing",
    points: [
      "Experienced in one-on-one private tutoring and structured classroom instruction at a coaching center.",
      "Simplifying complex technical and analytical concepts for diverse student groups.",
    ],
  },
];

export const RESEARCH_WORKS: ResearchItem[] = [
  {
    id: "child-stunting-wasting-bmc",
    title:
      "Spatial and cross-round evaluation of machine-learning classification of childhood stunting and wasting using demographic and household survey data in Bangladesh",
    period: "BMC Public Health — Under review",
    domain: "Public Health AI",
    summary:
      "Evaluates spatial generalization and cross-round robustness of machine learning classifiers for childhood stunting and wasting using Bangladesh DHS data.",
    tags: ["BMC Public Health", "Spatial ML", "Cross-Round Eval"],
  },
  {
    id: "icu-mortality-scientific-reports",
    title:
      "Availability-aware evaluation of a tree-anchored neural residual for intensive care mortality prediction under recording delay and temporal shift",
    period: "Scientific Reports — Under review",
    domain: "Clinical ML",
    summary:
      "Investigates availability-aware tree-anchored neural residual modeling for ICU mortality prediction under clinical recording delays and temporal distribution shifts.",
    tags: ["Scientific Reports", "Neural Residual", "Temporal Shift"],
  },
];

export const TECH_STACK: TechCategory[] = [
  {
    id: "languages",
    title: "Programming",
    subtitle: "Core languages & algorithmic foundations",
    items: [
      { name: "Python" },
      { name: "Java" },
      { name: "C" },
      { name: "C++" },
      { name: "SQL" },
    ],
  },
  {
    id: "ml-ds",
    title: "AI, ML & Data",
    subtitle: "Frameworks & scientific visualization",
    items: [
      { name: "PyTorch" },
      { name: "Scikit-learn" },
      { name: "Matplotlib" },
      { name: "Explainable AI (XAI)" },
      { name: "Data Analysis" },
    ],
  },
  {
    id: "cv-methods",
    title: "Computer Vision & ML Methods",
    subtitle: "Deep learning & predictive modeling",
    items: [
      { name: "CNNs & Computer Vision" },
      { name: "OpenCV & Medical Imaging" },
      { name: "Regression & Classification" },
      { name: "Feature Selection" },
      { name: "Clustering" },
    ],
  },
  {
    id: "tools",
    title: "Databases & Dev Tools",
    subtitle: "Data storage, version control & IDEs",
    items: [
      { name: "MySQL" },
      { name: "Git & GitHub" },
      { name: "VS Code & Android Studio" },
      { name: "IntelliJ IDEA & NetBeans" },
      { name: "Cisco Packet Tracer" },
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "bonik-bondhu-finsphere",
    title: "Bonik Bondhu — AI-Powered SME Capital Engine",
    subtitle: "International AI Builders Congress 2026 · FinSphere AI · Finalist",
    category: "AI & ML",
    featured: true,
    summary:
      "Built a bilingual SME AI platform for cash flow forecasts, loan optimization, risk analysis, and financial advisory.",
    architectureFlow: [
      "Bilingual SME Input",
      "Cash Flow Forecasting",
      "Risk & Loan Optimization",
      "AI Financial Advisory",
    ],
    highlights: [
      "Finalist at International AI Builders Congress 2026 (FinSphere AI track).",
      "Provides bilingual (Bangla/English) financial advisory tailored for small and medium enterprises.",
      "Combines cash flow forecasting, loan optimization, and automated risk analysis.",
    ],
    stack: ["Bilingual AI", "FinTech", "Forecasting", "Risk Analysis"],
    githubUrl: "https://github.com/redoy1491",
  },
  {
    id: "academic-performance-ml",
    title: "AI-Based Academic Performance Prediction",
    subtitle: "Machine Learning · Feature Engineering & Regression",
    category: "AI & ML",
    featured: true,
    summary:
      "Built a regression model with structured feature engineering to predict student academic performance.",
    architectureFlow: [
      "Student Data",
      "Feature Engineering",
      "Regression Modeling",
      "Score Prediction",
    ],
    highlights: [
      "Engineered predictive features from educational and demographic attributes.",
      "Evaluated regression models in Python and Scikit-learn for reliable forecasting.",
    ],
    stack: ["Python", "Scikit-learn", "Regression"],
    githubUrl: "https://github.com/redoy1491",
  },
  {
    id: "library-management-gui",
    title: "Library Management System",
    subtitle: "Desktop Application · Java Swing & MySQL",
    category: "Software & GUI",
    featured: true,
    summary:
      "Developed a database-driven desktop application for library operations with real-time CRUD operations.",
    architectureFlow: [
      "Java Swing UI",
      "Application Logic",
      "JDBC Connector",
      "MySQL Database",
    ],
    highlights: [
      "Real-time CRUD operations for book inventory, member records, and issue/return logs.",
      "Integrated MySQL relational database cleanly via JDBC.",
    ],
    stack: ["Java", "Java Swing", "MySQL", "JDBC"],
    githubUrl:
      "https://github.com/redoy1491/Library-Management-System-GUI-Project-Java-Swing-MySQL",
  },
  {
    id: "hybrid-network-routing",
    title: "Cisco Hybrid Network Project",
    subtitle: "Cisco Packet Tracer Simulation",
    category: "Systems & Networking",
    summary:
      "Designed a multi-subnet network topology integrating dynamic (OSPF, RIP) and static routing protocols.",
    architectureFlow: [
      "LAN Subnets",
      "RIP Edge Routers",
      "OSPF Core",
      "Static Routing",
    ],
    highlights: [
      "Configured RIP, OSPF, and static routing protocols across interconnected routers.",
      "Verified IPv4 subnetting and end-to-end packet connectivity in Cisco Packet Tracer.",
    ],
    stack: ["Cisco Packet Tracer", "OSPF", "RIP", "Static Routing"],
    githubUrl: "https://github.com/redoy1491",
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Daffodil International University, Dhaka",
    period: "July 2023 – Present (Expected 2027)",
    grade: "CGPA: 3.88 / 4.00",
    focus: "Focus on Machine Learning, Medical AI, Computer Vision & Software Engineering",
  },
  {
    degree: "Higher Secondary Certificate (HSC) — Science",
    institution: "Narsingdi Government College",
    period: "2021",
    grade: "GPA: 5.00 / 5.00",
    focus: "Science Group — Strong foundation in Mathematics & Science",
  },
  {
    degree: "Secondary School Certificate (SSC) — Science",
    institution: "Satirpara K.K. Institution School & College",
    period: "2019",
    grade: "GPA: 5.00 / 5.00",
    focus: "Science Group — Perfect academic score",
  },
];

export const ACHIEVEMENTS = [
  {
    title: "Dean’s Award (Spring 2024)",
    org: "Daffodil International University",
    detail: "Recognized for academic excellence in the Department of CSE.",
  },
  {
    title: "Finalist — DIU Unlock the Algorithm Programming Contest",
    org: "Competitive Programming",
    detail: "Reached the finals solving algorithmic and data structure problems.",
  },
  {
    title: "Finalist — DIU Takeoff Programming Contest",
    org: "Competitive Programming",
    detail: "Finalist in university-wide competitive programming contest.",
  },
];

export const CERTIFICATIONS = [
  {
    title: "Machine Learning with Python",
    issuer: "National Cyber Security Agency (NCSA)",
  },
  {
    title: "Future in Code: AI & Machine Learning with Python",
    issuer: "Creative IT Institute, in collaboration with DIU NLP & ML Research Lab",
  },
  {
    title: "Basic Computer Course",
    issuer: "Government Youth Development Department, Bangladesh",
  },
];

export const CLUBS_AND_ACTIVITIES = [
  "DIU NLP Lab",
  "DIU Computer Programming Club",
  "DIU Voluntary Service Club",
];

export const LANGUAGES_SPOKEN = [
  { name: "Bengali", level: "Native" },
  { name: "English", level: "Professional" },
];
