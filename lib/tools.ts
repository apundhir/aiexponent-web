export interface BenchmarkResult {
  metric: string
  score: number
  label: string
}

export interface Tool {
  slug: string
  name: string
  repo: string
  description: string
  longDescription: string
  installCommand: string
  quickStartCode?: string          // Extended code example beyond pip install
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
  benchmarkResults?: BenchmarkResult[]  // Real measured scores
  releaseVersion?: string               // Latest tagged version e.g. "v1.0.0-rc1"
  pypiPackage?: string                  // PyPI package name if published
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
    description: 'Framework-agnostic evaluation harness for RAG and agentic AI systems.',
    longDescription: 'Plug in any RAG system — LangChain, LlamaIndex, or custom — and benchmark it against classic and agentic-era metrics. Faithfulness, answer relevancy, retrieval precision, and four agentic metrics for multi-step agents. Measured faithfulness of 0.958 on the 50-sample golden dataset.',
    installCommand: 'pip install rag-benchmarking',
    tier: 'tier-1',
    tierLabel: 'Flagship',
    category: 'developer',
    euAiActArticle: 'Article 15',
    euAiActLabel: 'Accuracy Requirements',
    euAiActDescription: 'Provides systematic accuracy testing and documentation for high-risk AI systems under Article 15.',
    docsPath: '/docs/rag-benchmarking',
    language: 'python',
    sortOrder: 3,
    quickStartCode: `from app.sdk.client import RagEval

client = RagEval(api_url="http://localhost:5001", api_key="your-key")

# Works with LangChain
result = my_chain.invoke({"query": "What is RAG?"})
sample = RagEval.from_langchain(result)

# Or any dict with question / contexts / answer
sample = {
    "question": "What is RAG?",
    "contexts": ["RAG stands for Retrieval-Augmented Generation."],
    "answer": "RAG combines retrieval with LLM generation.",
}

report = client.evaluate([sample], metrics=["faithfulness", "answer_relevancy"])
print(report["metrics"])
# {"faithfulness": 0.95, "answer_relevancy": 0.81}`,
    limitations: [
      'Benchmark datasets are English-only; no multilingual evaluation support.',
      'Custom dataset integration requires manual formatting to the expected JSONL schema.',
      'Accuracy metrics only — latency and throughput are not measured.',
      'LLM-as-judge metrics depend on the configured judge model quality.',
      'Rate limiting is in-memory and resets on server restart.',
    ],
    features: [
      'Framework-agnostic — works with LangChain, LlamaIndex, or any custom RAG system',
      'Classic metrics: faithfulness, answer relevancy, context precision/recall',
      'Retrieval metrics: Precision@K, Recall@K, MRR, NDCG',
      'Agentic metrics: agent faithfulness, tool call accuracy, source attribution, retrieval necessity',
      'REST API + Python SDK with LangChain and LlamaIndex adapters',
      'Run history with comparison across configurations',
    ],
    benchmarkResults: [
      { metric: 'faithfulness', score: 0.958, label: 'Excellent' },
      { metric: 'answer_relevancy', score: 0.810, label: 'Good' },
    ],
    releaseVersion: 'v1.0.0-rc1',
    pypiPackage: 'rag-benchmarking',
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
