export type ProjectCategory =
  | "All"
  | "AI & ML"
  | "Software & GUI"
  | "Core CS & DSA"
  | "Systems & Hardware";

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
  headline: "Undergraduate Researcher (Medical AI) · Final Year CSE Student",
  university: "Daffodil International University",
  department: "Computer Science & Engineering",
  yearLabel: "4th Year (Final Year) CSE · July 2023 – Present",
  cgpa: "3.87",
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
    "Final-year Computer Science & Engineering undergraduate at Daffodil International University and Medical AI Researcher—focused on Machine Learning, Computer Vision, and engineering reliable software for real-world impact.",
  goal: "To advance as an AI/ML Engineer and Researcher—developing explainable, reliable healthcare AI and practical software systems that make real-world impact.",
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
    role: "Undergraduate Researcher — Medical Artificial Intelligence",
    organization: "Daffodil International University",
    period: "2025 – Present",
    points: [
      "Developing machine learning and deep learning models for healthcare prediction and medical imaging research.",
      "Working with multimodal clinical, EHR, MRI, genetic, and ophthalmic imaging datasets.",
      "Applying Python, PyTorch, TensorFlow, Scikit-learn, Pandas, NumPy, and explainable AI techniques.",
    ],
  },
];

export const RESEARCH_WORKS: ResearchItem[] = [
  {
    id: "icu-readmission-ehr",
    title: "ICU Readmission Prediction Using Electronic Health Records",
    period: "2025 – Present",
    domain: "Clinical ML",
    summary:
      "Developing ML models using MIMIC-IV EHR data for 30-day readmission prediction, including feature engineering, temporal patient-level splitting, imbalance handling, and explainable modeling.",
    tags: ["MIMIC-IV", "Temporal Split", "Explainable AI"],
  },
  {
    id: "child-stunting-wasting",
    title: "Child Stunting and Wasting Prediction in Bangladesh",
    period: "2025 – Present",
    domain: "Public Health AI",
    summary:
      "Exploring machine learning approaches for child malnutrition prediction using Bangladesh DHS survey and geospatial information.",
    tags: ["Bangladesh DHS", "Geospatial ML", "Tabular ML"],
  },
];

export const TECH_STACK: TechCategory[] = [
  {
    id: "languages",
    title: "Programming & Databases",
    subtitle: "Core languages and relational data storage",
    items: [
      { name: "Python" },
      { name: "Java" },
      { name: "C / C++" },
      { name: "SQL" },
      { name: "MySQL" },
    ],
  },
  {
    id: "ml-ds",
    title: "Machine Learning & Data",
    subtitle: "Deep learning frameworks & scientific computing",
    items: [
      { name: "PyTorch" },
      { name: "TensorFlow" },
      { name: "Scikit-learn" },
      { name: "Pandas & NumPy" },
      { name: "Matplotlib" },
    ],
  },
  {
    id: "cv-methods",
    title: "DL, CV & ML Methods",
    subtitle: "Research & predictive modeling techniques",
    items: [
      { name: "CNNs & Computer Vision" },
      { name: "Medical Imaging & OpenCV" },
      { name: "Regression & Classification" },
      { name: "Feature Selection & Clustering" },
      { name: "Explainable AI (XAI)" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Version Control",
    subtitle: "IDEs, experimentation & network simulation",
    items: [
      { name: "Git & GitHub" },
      { name: "Google Colab" },
      { name: "VS Code" },
      { name: "IntelliJ & NetBeans" },
      { name: "Cisco Packet Tracer & MATLAB" },
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "academic-performance-ml",
    title: "AI-Based Academic Performance Prediction",
    subtitle: "Machine Learning · Feature Engineering & Regression",
    category: "AI & ML",
    featured: true,
    summary:
      "Built a machine learning model to predict student academic performance using educational and demographic features, applying structured feature engineering and regression techniques.",
    architectureFlow: [
      "Educational & Demographic Data",
      "Feature Engineering",
      "Regression Modeling",
      "Performance Prediction",
    ],
    highlights: [
      "Engineered predictive features from student academic and demographic attributes.",
      "Trained and evaluated regression models to forecast academic outcomes.",
      "Structured pipeline in Python for reproducible preprocessing and analysis.",
    ],
    stack: ["Python", "Scikit-learn", "Pandas", "Regression"],
    githubUrl: "https://github.com/redoy1491",
  },
  {
    id: "library-management-gui",
    title: "Library Management System",
    subtitle: "Desktop Application · Java Swing & MySQL",
    category: "Software & GUI",
    featured: true,
    summary:
      "Developed a Java Swing desktop application for library operations including book inventory, member registration, and borrowing/return with MySQL integrated via JDBC for CRUD operations.",
    architectureFlow: [
      "Java Swing UI",
      "Validation & Controller",
      "JDBC Connector",
      "MySQL Database",
    ],
    highlights: [
      "Real-time CRUD operations for book inventory, members, and issue/return workflows.",
      "Integrated MySQL relational database cleanly through JDBC.",
      "Built a structured desktop interface for efficient daily library management.",
    ],
    stack: ["Java", "Java Swing", "MySQL", "JDBC"],
    githubUrl:
      "https://github.com/redoy1491/Library-Management-System-GUI-Project-Java-Swing-MySQL",
  },
  {
    id: "shopping-mall-management",
    title: "Shopping Mall Management System",
    subtitle: "Java OOP & Console Interface",
    category: "Software & GUI",
    summary:
      "Developed a Java OOP management application (King's Mart) for organizing shopping mall operations, employee records, payroll, and store data.",
    architectureFlow: [
      "Console Menu CLI",
      "OOP Domain Models",
      "Payroll & Store Logic",
      "Record Output",
    ],
    highlights: [
      "Applies core OOP pillars: Encapsulation, Inheritance, and Polymorphism.",
      "Modular classes separating employee roles, store records, and payroll computation.",
    ],
    stack: ["Java", "OOP", "Console I/O"],
    githubUrl:
      "https://github.com/redoy1491/King-s-Mart-E-Shopping-Management-System",
  },
  {
    id: "restaurant-management-dsa",
    title: "Restaurant Management System",
    subtitle: "C/C++ Data Structures & Algorithms",
    category: "Core CS & DSA",
    summary:
      "Developed a console-based management system (Foodie Manager) for handling restaurant-related operations and customer order records using Linked List, Stack, and Queue.",
    architectureFlow: [
      "Order Intake",
      "Queue (FIFO Dispatch)",
      "Linked List Records",
      "Stack History",
    ],
    highlights: [
      "Dynamic memory handling with Linked Lists instead of fixed arrays.",
      "FIFO Queue modeling kitchen dispatch and Stack for action tracking.",
    ],
    stack: ["C / C++", "Linked List", "Queue", "Stack"],
    githubUrl:
      "https://github.com/redoy1491/Foodie-Manager-Project-in-C-Using-Data-Structure-Linked-List-",
  },
  {
    id: "phonebook-management-c",
    title: "Phonebook Management System",
    subtitle: "C Structs & Persistent File Handling",
    category: "Core CS & DSA",
    summary:
      "Developed an application in C for storing, searching, updating, and managing contact information with Linked Lists and persistent file handling.",
    architectureFlow: [
      "CLI Input",
      "C Struct & Linked List",
      "Search & Update",
      "File I/O Storage",
    ],
    highlights: [
      "Supports adding, searching, updating, and deleting structured contact records.",
      "Persists contact data cleanly across sessions using C File I/O.",
    ],
    stack: ["C", "File I/O", "Linked List", "Structs"],
    githubUrl:
      "https://github.com/redoy1491/Phonebook-Management-System-Data-Structure-mini-project-linked-list-file-handling",
  },
  {
    id: "hybrid-network-routing",
    title: "Cisco Network Project",
    subtitle: "Cisco Packet Tracer Simulation",
    category: "Systems & Hardware",
    summary:
      "Designed and configured a networking topology using Cisco Packet Tracer to demonstrate hybrid routing (RIP, OSPF, static routes) and multi-subnet connectivity.",
    architectureFlow: [
      "LAN Subnets",
      "RIP Edge Routers",
      "OSPF Core",
      "Static Routing",
    ],
    highlights: [
      "Configured RIP, OSPF, and static routing protocols across interconnected routers.",
      "Verified IPv4 subnetting and end-to-end packet connectivity.",
    ],
    stack: ["Cisco Packet Tracer", "OSPF", "RIP", "Static Routing"],
    githubUrl: "https://github.com/redoy1491",
  },
  {
    id: "water-level-indicator",
    title: "Water Level Indicator",
    subtitle: "Electronics & Semiconductor Hardware",
    category: "Systems & Hardware",
    summary:
      "Designed an academic hardware circuit using BJT transistors and diodes for monitoring water levels and indicating different threshold stages with LEDs.",
    architectureFlow: [
      "Tank Probes",
      "BJT Switching Stage",
      "Diode Logic",
      "LED Level Display",
    ],
    highlights: [
      "Uses BJT transistors as electronic switches without microcontroller overhead.",
      "Clear multi-level LED visual alerts for water tank thresholds.",
    ],
    stack: ["BJT Transistors", "Diodes", "LEDs", "Circuit Design"],
    githubUrl: "https://github.com/redoy1491",
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Daffodil International University",
    period: "July 2023 – Present",
    grade: "CGPA: 3.87 out of 4.00",
    focus: "Focus on Machine Learning, Medical AI, Data Science & Software Engineering",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Narsingdi Government College",
    period: "2021",
    grade: "GPA: 5.00 out of 5.00",
    focus: "Science Group — Strong foundation in Mathematics & Science",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Satirpara K.K. Institution School & College",
    period: "2019",
    grade: "GPA: 5.00 out of 5.00",
    focus: "Science Group — Perfect academic score",
  },
];

export const ACHIEVEMENTS = [
  {
    title: "Dean’s Award — Spring 2024",
    org: "Daffodil International University",
    detail: "Recognized for outstanding academic standing in Computer Science & Engineering.",
  },
  {
    title: "DIU Takeoff & Unlock The Algorithm Contests",
    org: "Competitive Programming Participant",
    detail: "Active participant solving algorithmic and data structure challenges.",
  },
  {
    title: "Basic Computer Course",
    org: "Government Youth Development Department, Bangladesh",
    detail: "Completed foundational computing and productivity training.",
  },
];

export const CERTIFICATIONS = [
  {
    title: "Computer Vision & Deep Learning for Medical Data Analysis",
    issuer: "Health Informatics Research Lab, DIU",
  },
  {
    title: "Basic Computer Course",
    issuer: "Government Youth Development Department, Bangladesh",
  },
];

export const CLUBS_AND_ACTIVITIES = [
  "DIU Computer Programming Club",
  "DIU Data Science Club",
  "DIU Voluntary Service Club",
  "Career Development Center (CDC)",
];

export const LANGUAGES_SPOKEN = [
  { name: "Bengali", level: "Native" },
  { name: "English", level: "Professional" },
];
