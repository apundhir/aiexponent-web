export interface Tool {
  slug: string
  name: string
  repo: string
  description: string
  longDescription: string
  installCommand: string
  tier: 'tier-1' | 'tier-2' | 'tier-3'
  tierLabel: string
  category: 'developer' | 'assessment'
  euAiActArticle: string
  euAiActLabel: string
  euAiActDescription: string
  docsPath: string
  language: 'python' | 'typescript' | 'docker'
  sortOrder: number
  limitations: string[]
  features: string[]
}

export const TOOLS: Tool[] = [
  {
    slug: 'license-compliance-checker',
    name: 'License Compliance Checker',
    repo: 'aiexponenthq/license-compliance-checker',
    description: 'Open source AI model license scanning for GPAI compliance.',
    longDescription: 'To our knowledge, the first open source tool specifically designed for scanning AI model licenses against EU AI Act Article 53 GPAI transparency requirements. Scans model repositories and identifies licensing conflicts.',
    installCommand: 'pip install license-compliance-checker',
    tier: 'tier-1',
    tierLabel: 'Flagship',
    category: 'developer',
    euAiActArticle: 'Article 53',
    euAiActLabel: 'GPAI Compliance',
    euAiActDescription: 'Addresses GPAI model transparency obligations under the EU AI Act.',
    docsPath: '/docs/license-compliance-checker',
    language: 'python',
    sortOrder: 1,
    limitations: [
      'Currently supports Hugging Face model card format only; other model registries are not yet scanned.',
      'Does not parse nested SPDX license expressions or composite licenses.',
      'License database is updated manually; no automated sync with SPDX registry.',
      'Binary model files are not inspected — only metadata and documentation are scanned.',
    ],
    features: [
      'Scans AI model repositories for license metadata',
      'Maps licenses against EU AI Act Article 53 GPAI transparency requirements',
      'Supports Hugging Face model cards and standard license files',
      'Generates compliance reports in JSON and Markdown formats',
      'CLI interface for CI/CD integration',
      'Apache 2.0 licensed',
    ],
  },
  {
    slug: 'agentic-document-analyser',
    name: 'Agentic Document Analyser',
    repo: 'aiexponenthq/agentic-document-analyser',
    description: 'Production-ready multi-agent document analysis pipeline.',
    longDescription: 'A multi-agent pipeline for document analysis and risk management. Designed to support AI risk management system requirements under Article 9 of the EU AI Act.',
    installCommand: 'docker compose up',
    tier: 'tier-1',
    tierLabel: 'Flagship',
    category: 'developer',
    euAiActArticle: 'Article 9',
    euAiActLabel: 'Risk Management',
    euAiActDescription: 'Supports risk management system documentation requirements.',
    docsPath: '/docs/agentic-document-analyser',
    language: 'docker',
    sortOrder: 2,
    limitations: [
      'Requires Docker Compose; no standalone pip package available.',
      'Agent orchestration is sequential — no parallel agent execution yet.',
      'Document parsing supports PDF, DOCX, and plain text only; spreadsheets and images are not processed.',
      'Memory usage scales linearly with document size; large documents (>50MB) may require additional RAM.',
    ],
    features: [
      'Multi-agent pipeline for document analysis',
      'Automated risk identification and categorisation',
      'Supports PDF, DOCX, and plain text documents',
      'Configurable agent roles and analysis depth',
      'Structured output in JSON format',
      'Docker Compose deployment for reproducibility',
    ],
  },
  {
    slug: 'rag-benchmarking',
    name: 'RAG Benchmarking',
    repo: 'aiexponenthq/rag-benchmarking',
    description: 'Systematic RAG evaluation framework for accuracy testing.',
    longDescription: 'A systematic framework for evaluating Retrieval-Augmented Generation systems. Measures accuracy, relevance, and faithfulness against configurable benchmarks.',
    installCommand: 'pip install rag-benchmarking',
    tier: 'tier-2',
    tierLabel: 'Core',
    category: 'developer',
    euAiActArticle: 'Article 15',
    euAiActLabel: 'Accuracy Requirements',
    euAiActDescription: 'Helps meet accuracy documentation and testing requirements.',
    docsPath: '/docs/rag-benchmarking',
    language: 'python',
    sortOrder: 3,
    limitations: [
      'Benchmark datasets are English-only; no multilingual evaluation support.',
      'Custom dataset integration requires manual formatting to the expected schema.',
      'Does not benchmark latency or throughput — focuses on accuracy metrics only.',
      'Evaluation metrics are limited to faithfulness, relevance, and answer correctness.',
    ],
    features: [
      'Systematic evaluation of RAG pipelines',
      'Measures faithfulness, relevance, and answer correctness',
      'Configurable benchmark datasets',
      'Comparison reports across multiple RAG configurations',
      'CLI and Python API interfaces',
      'Exportable results in CSV and JSON',
    ],
  },
]

export const SIGIL = {
  name: 'Sigil',
  description: 'Real-time policy enforcement for AI agents.',
  longDescription: 'Commercial AI agent governance platform. Audit logging, compliance reporting against EU AI Act and NIST AI RMF, team-level visibility dashboard.',
  productUrl: '/products#sigil',
  marketingUrl: '/products#sigil',
  tier: 'flagship-product' as const,
  euAiActArticles: 'Articles 9, 53+',
  euAiActLabel: 'Full Governance',
  pricing: {
    free: { price: '0', currency: 'GBP', agents: 3, label: 'Free' },
    pro: { price: '49', currency: 'GBP', agents: 25, label: 'Pro' },
    team: { price: '149', currency: 'GBP', agents: 100, label: 'Team' },
    enterprise: { price: 'Custom', currency: 'GBP', agents: 'Unlimited', label: 'Enterprise' },
  },
}

export const DEVELOPER_TOOLS = TOOLS.filter((t) => t.category === 'developer')
