export type Job = {
  slug: string;
  title: string;
  type: string;
  employmentType: "INTERN" | "FULL_TIME";
  datePosted: string;
  summary: string;
  introduction: string;
  work: string[];
  fit: string[];
};

// Keep each listing and its structured data in sync. All roles are remote and
// currently open to applicants based in Bangladesh.
export const jobs: Job[] = [
  {
    slug: "full-stack-web-app-developer-intern",
    title: "Full-Stack Web App Developer Intern",
    type: "Internship",
    employmentType: "INTERN",
    datePosted: "2026-10-12",
    summary: "Build small, useful web applications from a clear problem through a working release.",
    introduction: "Work closely with the people shaping Paperfrogs products. You will turn scoped ideas into working interfaces, APIs, and deployable applications, then improve them from real feedback.",
    work: [
      "Build responsive interfaces and the services behind them.",
      "Translate a rough brief into a focused first release.",
      "Test the important paths, fix rough edges, and document decisions.",
      "Work in public or private repositories with clear reviews and handoffs.",
    ],
    fit: [
      "You have built and deployed at least one web application, personal or professional.",
      "You are comfortable with JavaScript or TypeScript and can work across frontend and backend code.",
      "You can explain tradeoffs, ask precise questions, and finish what you start.",
    ],
  },
  {
    slug: "platform-engineer",
    title: "Platform Engineer",
    type: "Full time",
    employmentType: "FULL_TIME",
    datePosted: "2026-10-12",
    summary: "Design dependable services and tooling for products that need to keep working as they grow.",
    introduction: "Paperfrogs builds infrastructure where reliability and understandable interfaces matter. This role works across service design, deployment, and the tooling that makes a small team effective.",
    work: [
      "Design and ship APIs, background services, and operational tooling.",
      "Make failure paths observable and recovery practical.",
      "Improve deployment, testing, and documentation as products mature.",
    ],
    fit: [
      "You have shipped and maintained production software.",
      "You can reason about data, interfaces, and reliability across a system.",
      "You communicate design choices clearly in writing and code.",
    ],
  },
  {
    slug: "developer-tools-engineer",
    title: "Developer Tools Engineer",
    type: "Full time",
    employmentType: "FULL_TIME",
    datePosted: "2026-10-12",
    summary: "Make sharp, dependable tools for people who build software.",
    introduction: "From BurnLink CLI to new product ideas, our developer tools should feel direct and reliable. You will shape the details that make a tool useful day after day.",
    work: [
      "Build command-line tools, libraries, and developer-facing interfaces.",
      "Write documentation and examples that make the first run straightforward.",
      "Listen to user friction and improve the product around it.",
    ],
    fit: [
      "You have shipped a CLI, library, API, or other developer-facing product.",
      "You care about clear errors, stable interfaces, and useful documentation.",
      "You can work independently and share progress clearly in a remote team.",
    ],
  },
  {
    slug: "security-engineer",
    title: "Security Engineer",
    type: "Full time",
    employmentType: "FULL_TIME",
    datePosted: "2026-10-12",
    summary: "Review the systems behind secure sharing, provenance, and trustworthy developer tools.",
    introduction: "Security work at Paperfrogs is part of product design, not a final checklist. You will help teams make defensible decisions as products move from research into everyday use.",
    work: [
      "Review designs and implementations for realistic threats and failure modes.",
      "Build tests and tools that make security assumptions visible.",
      "Work with engineers on secure defaults, incident readiness, and clear documentation.",
    ],
    fit: [
      "You have hands-on experience reviewing or building security-sensitive software.",
      "You can explain a risk precisely and propose a practical way to reduce it.",
      "You are comfortable working with product engineers from early design through release.",
    ],
  },
  {
    slug: "product-designer",
    title: "Product Designer",
    type: "Full time",
    employmentType: "FULL_TIME",
    datePosted: "2026-10-12",
    summary: "Shape clear interfaces for technical products, from first use to daily workflow.",
    introduction: "Our products serve people doing serious work. You will translate complex tools into understandable flows while keeping the distinct character of each product intact.",
    work: [
      "Map user journeys and turn product questions into prototypes and shipped interfaces.",
      "Work with engineers on responsive details, states, accessibility, and implementation quality.",
      "Improve existing flows using feedback from the people who use them.",
    ],
    fit: [
      "You have designed and shipped digital products, with work you can walk us through.",
      "You can make complex information feel clear without hiding important detail.",
      "You enjoy working closely with engineering and care how designs behave in code.",
    ],
  },
  {
    slug: "content-and-communications-manager",
    title: "Content & Communications Manager",
    type: "Full time",
    employmentType: "FULL_TIME",
    datePosted: "2026-10-12",
    summary: "Own the editorial voice and content operations across Paperfrogs and its products.",
    introduction: "Paperfrogs has several distinct branches and products. You will make the work understandable to developers, partners, and future teammates through clear writing and a consistent publishing rhythm.",
    work: [
      "Plan and maintain content across Paperfrogs HQ, Paperfrogs/open, Paperfrogs.dev, Paperfrogs Labs, paperfrogs Mind, and Paperfrogs Inside.",
      "Write and edit product pages, launch notes, updates, case studies, and social posts with the people doing the work.",
      "Maintain an editorial calendar, review accuracy before publishing, and keep older content current.",
      "Coordinate with founders, engineers, and designers so each release has useful documentation and a clear story.",
    ],
    fit: [
      "You have a portfolio of clear, published work across more than one format or channel.",
      "You can interview technical people and explain their work without flattening the details.",
      "You are organized enough to manage content across several products and careful enough to check facts.",
    ],
  },
];
