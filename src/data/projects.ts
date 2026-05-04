export type Project = {
  title: string;
  slug: string;
  bucket: "Research code" | "AI / data demos" | "Casual webapps" | "Open source / GitHub";
  status: "live" | "active" | "idea" | "archive";
  description: string;
  tags: string[];
  links: { demo?: string; code?: string; paper?: string };
};

export const projects: Project[] = [
  {
    title: "Longitudinal Predictive Conformal Inference",
    slug: "lpci",
    bucket: "Research code",
    status: "archive",
    description: "Reference code for conformal prediction over longitudinal data.",
    tags: ["conformal prediction", "uncertainty", "research code"],
    links: { code: "https://github.com/EconAIorg/LPCI", paper: "https://arxiv.org/abs/2310.02863" }
  },
  {
    title: "Badminton Match List Generator",
    slug: "badminton-match-list-generator",
    bucket: "Casual webapps",
    status: "idea",
    description: "A small webapp for creating accessible match lists, rotations, or doubles pairings for a badminton club.",
    tags: ["side project", "club tools", "webapp"],
    links: {}
  },
  {
    title: "Governed LLM Agent Notes",
    slug: "governed-llm-agent-notes",
    bucket: "AI / data demos",
    status: "idea",
    description: "A public notebook-style explainer for thinking about agent usefulness, risk, and deployability in finance.",
    tags: ["LLMs", "agents", "finance"],
    links: {}
  }
];
