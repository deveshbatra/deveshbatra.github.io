export type Paper = {
  title: string;
  year: number;
  type: string;
  venue: string;
  authors: string[];
  summary: string;
  tags: string[];
  links: {
    paper?: string;
    pdf?: string;
    doi?: string;
    code?: string;
    workshop?: string;
    thesis?: string;
    slides?: string;
  };
  featured?: boolean;
};

export const papers: Paper[] = [
  {
    title: "Operationalising LLMs for Compliance-Critical Letter Writing in Financial Services",
    year: 2025,
    type: "Workshop paper",
    venue: "NeurIPS 2025 Workshop on Generative AI in Finance",
    authors: ["Devesh Batra", "Alexandros Anatolakis", "John Hartley", "Jude King", "Greig A Cowan", "Raad Khraishi"],
    summary: "A production-focused paper on LLM-assisted drafting for compliance-critical financial-services letters.",
    tags: ["LLMs", "Finance", "Responsible AI", "Production AI"],
    links: { workshop: "https://sites.google.com/view/neurips-25-gen-ai-in-finance/accepted-papers" },
    featured: true
  },
  {
    title: "A Review of LLM Agent Applications in Finance and Banking",
    year: 2025,
    type: "SSRN preprint",
    venue: "SSRN",
    authors: ["Devesh Batra", "Conor Hamill", "John Hartley", "Ramin Okhrati", "Dale Seddon", "Harvey Miller", "Raad Khraishi", "Greig Cowan"],
    summary: "A survey of LLM agent applications in finance and banking, organised around simulation, acting, analysis, and advising.",
    tags: ["LLMs", "Agents", "Finance", "Banking"],
    links: { paper: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5381584" },
    featured: true
  },
  {
    title: "How Personality Traits Shape LLM Risk-Taking Behaviour",
    year: 2025,
    type: "Conference paper",
    venue: "Findings of ACL 2025",
    authors: ["John Hartley", "Conor Brian Hamill", "Dale Seddon", "Devesh Batra", "Ramin Okhrati", "Raad Khraishi"],
    summary: "Studies how LLM personality traits relate to risk propensity using Cumulative Prospect Theory and Big Five framing.",
    tags: ["LLMs", "Risk", "Behaviour", "Finance"],
    links: { paper: "https://aclanthology.org/2025.findings-acl.1085/", doi: "https://doi.org/10.18653/v1/2025.findings-acl.1085" },
    featured: true
  },
  {
    title: "Obscured but Not Erased: Evaluating Nationality Bias in LLMs via Name-Based Bias Benchmarks",
    year: 2025,
    type: "arXiv preprint",
    venue: "arXiv",
    authors: ["Giulio Pelosio", "Devesh Batra", "Noemie Bovey", "Robert Hankache", "Cristovao Iglesias", "Greig Cowan", "Raad Khraishi"],
    summary: "Evaluates latent nationality bias in LLMs when explicit demographic labels are replaced by culturally indicative names.",
    tags: ["LLMs", "Bias", "Evaluation", "Responsible AI"],
    links: { paper: "https://arxiv.org/abs/2507.16989", doi: "https://doi.org/10.48550/arXiv.2507.16989" },
    featured: true
  },
  {
    title: "Conformal Predictions for Longitudinal Data",
    year: 2023,
    type: "arXiv preprint",
    venue: "arXiv",
    authors: ["Devesh Batra", "Salvatore Mercuri", "Raad Khraishi"],
    summary: "Introduces Longitudinal Predictive Conformal Inference for finite-width prediction intervals with longitudinal and cross-sectional coverage goals.",
    tags: ["Conformal Prediction", "Uncertainty", "Time Series", "Finance"],
    links: { paper: "https://arxiv.org/abs/2310.02863", code: "https://github.com/EconAIorg/LPCI", doi: "https://doi.org/10.48550/arXiv.2310.02863" },
    featured: true
  },
  {
    title: "An Introduction to Machine Unlearning",
    year: 2022,
    type: "arXiv preprint",
    venue: "arXiv",
    authors: ["Salvatore Mercuri", "Raad Khraishi", "Ramin Okhrati", "Devesh Batra", "Conor Hamill", "Taha Ghasempour", "Andrew Nowlan"],
    summary: "A survey-style introduction to machine unlearning, covering definitions, algorithms, evaluation, and implementation challenges.",
    tags: ["Machine Unlearning", "Privacy", "Responsible AI"],
    links: { paper: "https://arxiv.org/abs/2209.00939", doi: "https://doi.org/10.48550/arXiv.2209.00939" }
  },
  {
    title: "Interference effects from machine learning matched confusable object pairs in memory assessment tasks",
    year: 2022,
    type: "DPhil thesis",
    venue: "University of Oxford / Oxford University Research Archive",
    authors: ["Devesh Batra"],
    summary: "Oxford DPhil thesis on machine-learning-matched confusable object pairs in memory assessment tasks for early detection of neurodegeneration.",
    tags: ["Machine Learning", "Healthcare", "Digital Biomarkers", "Computer Vision"],
    links: { thesis: "https://ora.ox.ac.uk/objects/uuid:b83a1212-d366-4c6e-8c1c-e4af273c9719", doi: "https://doi.org/10.5287/ora-4rp1yvyp5" }
  }
];

export const paperTags = Array.from(new Set(papers.flatMap((paper) => paper.tags))).sort();
export const paperYears = Array.from(new Set(papers.map((paper) => paper.year))).sort((a, b) => b - a);
