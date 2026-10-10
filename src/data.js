const asset = (path) => import.meta.env.BASE_URL + path.replace(/^\//, "");
export const profile = {
  name: "Vaishali Sunepwar",
  roles: [
  "Aspiring AI/ML Engineer",
  "Computer Vision Enthusiast",
  "Full-Stack Developer",
  "Curious Builder",
  "Lifelong Learner",
],
  location: "Pune, India",
  email: "sunepwar.vaishali@gmail.com",
  github: "https://github.com/111-Vaishali",
  linkedin: "https://www.linkedin.com/in/vaishali-sunepwar",
  summary:
    "AI/ML student and full-stack developer who learns by building. I ship fast across hackathons, contribute to open-source, and I'm most at home where computer vision, NLP, and clean frontend engineering meet.",
  tagline: "detecting patterns in data, and pixels in interfaces.",
};

export const skills = [
  {
    group: "Languages",
    tag: "core.stack",
    items: ["Python", "JavaScript", "TypeScript", "HTML", "CSS", "SQL"],
  },
  {
    group: "AI / ML",
    tag: "model.zoo",
    items: [
      "Supervised Learning",
      "Classification",
      "Regression",
      "Clustering",
      "Computer Vision",
      "Model Evaluation",
    ],
  },
  {
    group: "ML Libraries",
    tag: "import *",
    items: [
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "OpenCV",
      "Matplotlib",
      "Seaborn",
      "TensorFlow (learning)",
    ],
  },
  {
    group: "Full-Stack",
    tag: "runtime.web",
    items: [
      "React.js",
      "Node.js",
      "Express.js",
      "Flask",
      "MongoDB",
      "RESTful APIs",
      "Socket.IO",
      "JWT Auth",
    ],
  },
  {
    group: "Tools",
    tag: "toolbelt",
    items: ["Git", "GitHub", "Vercel", "Render", "VS Code", "Jupyter Notebook"],
  },
];

export const projects = [
  {
    id: "localmart",
    title: "LocalMart",
    subtitle: "Grocery E-Commerce Platform",
    tag: "web-app · full-stack",
    confidence: "0.94",
    image: asset("/projects/localmart.jpg"),
    imageAlt: "LocalMart grocery storefront with cart",
    description:
      "Full-stack e-commerce platform with product browsing, cart, wishlist, and order management. Backend built with Node.js, Express, and MongoDB, secured with JWT auth and role-based access control.",
    stack: ["React 19", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind"],
    github: "https://github.com/111-Vaishali/Prodigy_FS_3",
    live: null,
  },
  {
    id: "chatsphere",
    title: "ChatSphere",
    subtitle: "Real-Time Chat App",
    tag: "web-app · realtime",
    confidence: "0.92",
    image: asset("/projects/chatsphere.jpg"),
    imageAlt: "ChatSphere chat app on desktop and mobile",
    description:
      "A WhatsApp-inspired messaging app with live chat, typing indicators, and read receipts over Socket.IO. JWT auth with refresh tokens, group chat management, and media sharing via Multer & Cloudinary.",
    stack: ["React", "Express.js", "Socket.IO", "MongoDB", "JWT", "Cloudinary"],
    github: "https://github.com/111-Vaishali/Prodigy_FS_4",
    live: null,
  },
  {
    id: "ppevision",
    title: "PPEVision",
    subtitle: "AI Worker Safety & PPE Compliance Monitoring",
    tag: "computer-vision · yolo",
    confidence: "0.96",
    image: asset("/projects/ppevision.jpg"),
    imageAlt: "PPEVision dashboard flagging missing PPE on a worksite",
    description:
      "Detects helmets, vests, gloves, boots and goggles on workers and flags PPE violations as SAFE or VIOLATION. A YOLO11s model trained on the Construction-PPE dataset (11 classes) serves bounding boxes and confidence scores through a FastAPI backend to a React dashboard with image upload.",
    stack: ["YOLO11s", "Ultralytics", "PyTorch", "OpenCV", "FastAPI", "React"],
    github: "https://github.com/111-Vaishali/PPEVision",
    live: null,
  },
  {
    id: "greenery-detection",
    title: "Greenery Detection",
    subtitle: "Computer Vision & ML Pipeline",
    tag: "computer-vision",
    confidence: "0.97",
    image: asset("/projects/greenery-detection.jpg"),
    imageAlt: "Vegetation detection and ML pipeline dashboard",
    description:
      "A CV pipeline using OpenCV HSV color-space thresholding to detect and quantify vegetation coverage from location images. KNN and SVM classifiers compared and validated with Stratified K-Fold Cross Validation.",
    stack: ["Python", "OpenCV", "Scikit-learn", "KNN", "SVM"],
    github: "https://github.com/111-Vaishali/Greenary_Detection",
    live: null,
  },
  {
    id: "whatsapp-analyzer",
    title: "WhatsApp Chat Analyzer",
    subtitle: "Data Analytics Web App",
    tag: "data-viz · flask",
    confidence: "0.90",
    image: asset("/projects/whatsapp-analyzer.jpg"),
    imageAlt: "WhatsApp chat analytics dashboard",
    description:
      "A Flask app that parses exported WhatsApp chats into data-driven insights — user-wise activity, timelines, emoji stats, and word clouds. Deployed on Render.",
    stack: ["Python", "Flask", "Pandas", "Matplotlib", "Seaborn"],
    github: "https://github.com/111-Vaishali/WhatsApp-Chat-Analyzer",
    live: null,
  },
  {
    id: "credithealth",
    title: "CreditHealth",
    subtitle: "Fintech Simulation Platform",
    tag: "hackathon · fintech",
    confidence: "0.89",
    image: asset("/projects/credithealth.jpg"),
    imageAlt: "CreditHealth credit simulation dashboard",
    description:
      "Built and deployed with a 4-member team at DevHack, IIT Dharwad — simulating credit score, loan eligibility, and EMI planning to make personal finance concepts tangible.",
    stack: ["React", "Vite"],
    github: "https://github.com/111-Vaishali/HM058_HackMatrix",
    live: null,
  },
];

export const experience = [
  {
    role: "Open-Source Contributor",
    org: "GSSoC 2026",
    period: "2026",
    tag: "Next.js · React · TypeScript",
    points: [
      "Contributing to SahiDawa, a community-driven civic-tech platform for medicine verification, as part of GirlScript Summer of Code.",
      "Shipped a merged PR (#920) adding recent-search-history chips with localStorage persistence, improving repeat-search UX for low-bandwidth users.",
    ],
  },
  {
    role: "Campus Ambassador",
    org: "IIT Delhi",
    period: "2025 – 2026",
    tag: "Outreach · Event Promotion",
    points: [
      "Represented IIT Delhi on campus, promoting events, workshops, and technical initiatives to the student community.",
    ],
  },
  {
    role: "Hackathon Participant",
    org: "10+ hackathons, national & online",
    period: "2025",
    tag: "React · Vite · Full-Stack",
    points: [
      "Built and deployed CreditHealth, a fintech simulation platform, as part of a 4-member team.",
      "Rank 2 (round 2) at DevHack, IIT Dharwad · Rank 18 at Aurora 2.0 · Semifinalist at Rift'26.",
    ],
  },
];

export const education = {
  school: "Pimpri Chinchwad College of Engineering (PCCOE), Pune",
  degree: "B.Tech in Computer Science & Engineering (AI & ML)",
  period: "2024 – 2028",
  note: "Currently in 3rd year",
};

export const extras = [
  "NPTEL Certification — Database Management Systems (IIT/NPTEL, proctored exam, 2024–25)",
  "Scholarship Holder — Foundation of Excellence (2024–Present)",
  "AiMSA Club Member, PCCOE (2024–Present)",
];

export const certificates = [
  {
    title: "RIFT '26 Hackathon — Semi-Finalist",
    issuer: "Institute of Innovation, Physics Wallah",
    date: "Feb 2026",
    image: "/certificates/rift26.jpg",
    description:
      "Reached the semi-finals of RIFT '26 as part of Team The Infinity Loops, standing out among 500+ competing teams.",
  },
  {
    title: "Aurora 2.0 — Beyond The Horizon",
    issuer: "IIT Dharwad · Parsec 6.0",
    date: "2025",
    image: "/certificates/aurora2-0.jpg",
    description:
      "Ranked 18th with an idea tackling illegal mining detection, competing as Team The Infinity Loops.",
  },
  {
    title: "Database Management Systems (DBMS)",
    issuer: "NPTEL · IIT Kharagpur",
    date: "Jan–Mar 2026",
    image: "/certificates/nptel-dbms.jpg",
    description:
      "Completed the 8-week proctored NPTEL course on DBMS, covering relational design, transactions, and query optimization.",
  },
];
