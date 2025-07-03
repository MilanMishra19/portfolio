export const socials = [
    { 
        name:"Linkedin",
        href:""
    },
    {
        name:"Slack",
        href:""
    },
    {
        name:"Github",
        href:""
    }
];

export const projects = [
  {
    id: 1,
    name: "HealSync AI",
    description:
      "A Healthcare management web-app that utilises AI capabilities for insight generation as well as faster appointment scheduling.",
    href: "",
    image: "/datovis (2).jpeg",
    bgImage: "/health.png",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "Flask" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "MongoDB" },
      { id: 5, name: "Tailwind CSS" },
    ],
  },
  {
    id: 2,
    name: "Datovis",
    description:
      "A NLP based query data visualisation system built with a custom DSL compiler to transform NL into computer language. Provides a semantic layer for all sorts of data.",
    href: "",
    image: "/datovis (1).jpeg",
    bgImage: "/data.png",
    frameworks: [
      { id: 1, name: "Python" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Databases" },
      { id: 4, name: "Apache resources"},
      { id: 5, name: "YAML"},
      { id: 6, name: "Github Actions"},
      { id: 7, name: "Docker" },
    ],
  },
  {
    id: 3,
    name: "FinOps",
    description:
      "A system designed to analyze real-time financial transactions, using rules and/or machine learning, to detect and flag suspicious activities like fraud or money laundering for immediate investigation. It ensures regulatory compliance and protects against financial crime.",
    href: "",
    image: "/finops.jpeg",
    bgImage: "/wealth.png",
    frameworks: [
      { id: 1, name: "Apache kafka" },
      { id: 2, name: "Java SpringBoot" },
      { id: 3, name: "Next.js" },
    ],
  },
  {
    id: 4,
    name: "Foodaayz",
    description:
      "A MERN stack food redistribution system, built meticulously to help the needy while utilising unnecessary food wastage.",
    href: "",
    image: "/foodaayz.jpeg",
    bgImage: "/hunger.png",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "PostgreSQL" },
      { id: 3, name: "SpringBoot" },
      { id: 4, name: "AWS" },
    ],
  },
  {
    id: 5,
    name: "Ausboard AI",
    description:
      "A lightning-fast core component of an exchange that instantly matches buy and sell orders based on price-time priority, crucial for high-frequency trading where every microsecond counts",
    href: "",
    image: "/ausboard.jpeg",
    bgImage: "/justice.png",
    frameworks: [
      { id: 1, name: "C++" },
      { id: 2, name: "Streamlit" },
      { id: 3, name: "React.js " },
    ],
  },
];

export const servicesData = [
  {
    title: "Full Stack Engineering.",
    description:
      "From idea to deployment, I build fast, scalable, and maintainable web solutions with robust backend logic and intuitive user experiences. Whether it's an MVP or enterprise-grade system, I ensure performance, security, and clean architecture.",
    items: [
      {
        title: "Frontend Architecture",
        description: "(React, Next.js, TailwindCSS, Responsive UI/UX)",
      },
      {
        title: "Backend Development",
        description: "(Node.js, Express, REST/GraphQL APIs, Auth, Flask, Django)",
      },
      {
        title: "Database Design",
        description: "(MongoDB, PostgreSQL, Redis, Optimization)",
      },
    ],
  },
  {
    title: "AI & Machine Learning.",
    description:
      "I transform data into actionable intelligence through end-to-end ML solutions—from preprocessing to production-ready models. Whether it’s predictive analytics or AI-powered assistants, I bridge innovation with impact.",
    items: [
      {
        title: "Model Development",
        description: "(Regression, Classification, NLP, Vision Models, Random Forrest)",
      },
      {
        title: "MLOps & Deployment",
        description: "(Model Serving, FastAPI, Docker, Streamlit)",
      },
      {
        title: "AI Integrations",
        description: "(Chatbots, Recommender Systems, OpenAI APIs)",
      },
    ],
  },
  {
    title: "Data Engineering.",
    description:
      "Reliable data fuels great decisions. I design and implement modern data pipelines that ensure your data is clean, consistent, and accessible across all systems—ready for analysis, AI, or real-time dashboards.",
    items: [
      {
        title: "ETL/ELT Pipelines",
        description: "(Airflow, Kafka, Pandas, SQL Transformation, Normalization)",
      },
      {
        title: "Data Warehousing",
        description: "(BigQuery, Snowflake, Redshift, Data Modeling)",
      },
      {
        title: "Streaming & Automation",
        description: "(Real-Time Ingestion, Cron Jobs, API Triggers)",
      },
    ],
  },
];
export const experiences = [
  {
    title: "Investor Relations Analyst Intern",
    company_name: "Helse Medical Sciences Pvt Ltd.",
    icon: '/helse.png',
    iconBg: "#383E56",
    date: "November 2024 - February 2025",
    points: [
      "Generated PowerBI dashboards providing valuable insights from data collected.",
      "My role involved working closely with the CEO and Board of Directors contributing to data-driven strategic decision making process.",
      "Additionally I have conducted a comprehensive research on potential investors to support company's growth and investment strategies.",
    ],
  },
  {
    title: "Full Stack Developer(Freelance)",
    company_name: "Chaiwaai",
    icon: '/chaiwaai.png',
    iconBg: "#E6DEDD",
    date: "January 2025 - February 2025",
    points: [
      "Designed and developed a fully functional teashop website using React+Vite,HTML,CSS and Figma achieving 40% faster load times.",
      "Integrated EmailJS for real time customer queries and deployed on AWS Amplify with Amazon S3 for custom domain hosting and 99.9% uptime",
    ],
  },
  {
    title: "Project Team Lead",
    company_name: "Datoway Technologies",
    icon: '/datoway.png',
    iconBg: "#383E56",
    date: "January 2025 - Present",
    points: [
      "Led 5+ members across Frontend,Backend,AI/ML and Data teams. Accelerated delivery by 30% via fragile workflow.",
      "Arhitected a dynamic ELT pipeline integrating postgreSQL,MongoDB and CSV/JSON inputs,enabling real time data transformation to BCNF improving query speed by 70%.",
      "Developed a custom DSL compiler reducing manual mapping by 70% for semantic model queries",
    ],
  },
];
export const media = [
  { name: "GitHub", icon: "mdi:github", url: "https://github.com/MilanMishra19" },
  { name: "LinkedIn", icon: "mdi:linkedin", url: "https://linkedin.com/in/milan-mishra683" },
];