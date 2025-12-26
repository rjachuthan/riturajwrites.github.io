---
title: Curriculam - NLP To Agentic AI
description: Curriculum to learn Advanced NLP to Agentic AI
tags:
  - 🗺️MOC
  - llms
  - ai
  - data/analytics
  - 🌿budding
date: "[[2025-08-04]]"
backlink:
  - "[[Agentic AI]]"
  - "[[llm|LLM]]"
  - "[[nlp|Natural Language Processing]]"
---

# Phase 1: Advanced [[nlp|NLP]] Foundations (4-6 weeks)
## 1	Modern [[nlp|NLP]] Architecture Fundamentals

Understanding the mathematical and architectural foundations that underpin all modern language models.

- Attention Mechanisms and Multi-head Attention
- Positional Encoding Strategies
- Layer Normalization vs Batch Normalization in NLP
- Gradient Flow in Deep Language Models

### 1.1	Essential Papers
- [[Attention is All You Need]] (Vaswani et al., 2017) - The Foundational transformer paper.
- [[Layer Normalization]] (Ba et al., 2016) - Critical for understanding training stability
- [[Fixing Initialization]] (Zhang et al., 2019) - Advanced Initialization techniques

### 1.2	Books and Chapters
- "Natural Language Processing with Transfomers" by Tunstall et al. - Chapters 1-3
- "[[deep learning|Deep Learning]]" by Goodfellow et al. Chapter 12 (Applications)

## 2	Embedding and Representation Learning

Deep understanding of how semantic meaning in encoded numerically, crucial for all downstream applications.

- Contexualized vs static embeddings
- Subword tokenization strategies (BPE, SentencePiece, WordPiece)
- Embedding space geometry and semantic relationships
- Cross-lingual embedding alignment

### 2.1	Essential Papers
 - [[BERT: Pre-training of Deep Bidirectional Transformers]] (Delvin et al., 2018)
 - [[Sentence-BERT: Sentence Embeddings using Siamese BERT-Networks]] (Reimers & Gurevych, 2019)
 - [[SimCSE: Simple Contrastive Leaning of Sentence Embeddings]] (Gao et al., 2022)
 - [[E5: Text Embeddings by Weakly-Supervised Contrastive Pre-Training]] (Wang et al., 2022)

### 2.2	Books and Chapters
- "Speech and Language Processing" by Jurafsky & Martin - Chapter 6 (Vector Semantics)

---

# Phase 2: [[transformer|Transformer]] Architecture Deep Dive (3-4 Weeks)

## 3	Encoder-Only Models (BERT Family)

Understanding bidirectional context modeling and masked language modeling objectives.

- Masked Language Modeling (MLM) vs Next Sentence Prediction (NSP)
- BERT variants: RoBERTa, ALBERT, DeBERTa, DistilBERT
- Fine-tuning strategies and task-specific heads
- Probing studies and interpretability

### 3.1	Essential Papers
- [[RoBERTa: A Robustly Optimized BERT Pretraining Approach]] (Liu et al., 2019)
- [[ALBERT: A Lite BERT for Self-Supervised Learning]] (Lan et al., 2019)
- [[DeBERTa: Decoding-enhanced BERT with Disentangled Attention]] (He et al., 2020)
- [[What Does BERT Look at?]] (Clark et al., 2019) - Interpretability

### 3.2	Books and Chapter
- "Natural Language Processing with Transformers" - Chapters 4-5

### 3.3	Decoder-Only Models (GPT Family)

Foundation for understanding [[generative ai]] and autoregressive language modeling.

- Autoregressive generation and sampling strategies
- Scaling laws and emergent abilities
- In-context learning mechanisms
- Architecture modifications for generation

### 3.4	Essential Papers
- [[Language Models are Unsupervised Multitask Learners]] (Radford et al., 2019) - GPT 2
- [[Language Models are Few-Shot Learners]] (Brown et al., 2020) - GPT 3
- [[Training Language Models to follow instructions with Human Feedback]] (Ouyang et al., 2022) - [[InstructGPT]]
- [[Scaling Laws for Neural Language Models]] (Kaplan et al., 2020)

# Phase 3: Advanced Training Techniques (4-5 weeks)

## 4	Pre-Training and Self-Supervised Learning

Understanding how large language models acquire their foundational capabilities through [[machine learning]] techniques.

- Masked language modeling objectives
- Contrastive learning in NLP
- Curriculum learning and data ordering
- Multi-task pre-training

### 4.1	Essential Papers
- [[ELECTRA: Pre-training Text Encoders as Discriminators Rather Than Generators]] (Clark et al., 2020)
- [[T5: Text-to-Text Transfer Transformer]] (Raffel et al., 2019)
- [[PaLM: Scaling Language Modeling with Autoregressive Blank Infilling]] (Du et al., 2021)
- [[GLM: General Langugage Model Pretraining with Autoregressive Blank Infilling]] (Du et al., 2021)

## 5	Fine-tuning and Alignment

Converting raw language models into helpful, harmless, and honest AI systems.

- Supervised fine-tuning (SFT)
- Reinforcement Learning from Human Feedback (RLHF)
- Direct Preference Optimization (DPO)
- Constitutional AI Approach

### 5.1	Essential Papers
- [[Training Language Models to follow instructions with human feedback]] (Ouyang et al., 2022)
- [[Constitutional AI: Harmlessness from AI Feedback]] (Bai et al., 2022)
- [[Direct Preference Optimization]] (Rafailov et al., 2023)
- [[Self-Instruct: Aligning Langugage Model with Self Generated Instructions]] (Wang et al., 2022)

### 5.2	Books & Chapters
- "Natural Language Processing with Transformers" - Chapter 7-9

# Phase 4: Modern Architecture Innovations (3-4 weeks)

## 6	[[mixture of experts|Mixture-of-Experts]] (MoE)

Understanding how to scale model capacity without proportional compute increases.

- Sparse expert routing mechanisms
- Load Balancing and expert utilization
- Switch Transformer and GLaM architectures
- Training instabilities and solutions

### 6.1	Essential Papers
- [[Switch Transformers: Scaling to Trillion Parameters Models]] (Fedus et al., 2021)
- [[GLaM: Efficient Scaling of Language Models with Mixture-of-Experts]] (Du et al., 2021)
- [[PaLM-2 Technical Report]] (Anil et al., 2023)
- [[Mixture-of-Experts Meets Instruction Tuning]] (Shen et al., 2023)

## 7	Long Context and Efficiency

Handling longer sequences efficiently for complex reasoning tasks.

- Linear attention mechanisms
- Sliding window attention
- Memory-efficient transformers
- Retrieval-augmented approaches

### 7.1	Essential Papers
- [[Longformer: The Long-Document Transformer]] (Beltagy et al., 2020)
- [[Big Bird: Transformers for Longer Sequences]] (Zaheer et al., 2020)
- [[FlashAttention: Fast and Memory-Efficient Exact Attention]] (Dao et al., 2022)
- [[Ring Attention with Blockwise Transformers]] (Liu et al., 2023)

# Phase 5: Reasoning and Advanced Capabilities (4-5 Weeks)

## 8	Chain-of-Thought and Reasoning

Understanding how language models can perform complex multi-step reasoning.

- Chain-of-thought prompting mechanisms
- Tree of thoughts and graph-based reasoning
- Mathematical and logical reasoning capabilities
- Reasoning verification and self-correction

### 8.1	Essential Papers
- [[Chain-of-Thought Prompting Elicits Reasoning in Large Language Models]] (Wei et al., 2022)
- [[Tree of Thoughts: Deliberate Problem Solving with Large Language Models]] (Yao et al., 2023)
- [[Self-Consistency Improves Chain of Thought Reasoning]] (Wang et al., 2022)
- [[Let's Verify Step by Step]] (Lightman et al., 2023)

## 9	Advanced Reasoning Models

Understanding specialized architectures for complex reasoning tasks.

- QwQ model architecture and easoning capabilities
- Process supervision vs outcome supervision
- Multi-step reasoning verification
- Reasoning model evaluation metrics

### 9.1	Essential Papers
- [[Process Supervision for Reliable Reasoning]] (Uesato et al., 2022)
- [[STaR: Bootstapping Reasoning with Reasoning]] (Zelikman et al., 2022)
- [[Solving Quantitative Reasoning Problems with Language Models]] (Lewkowycz et al., 2022)

# Phase 6: Multimodal and Specialized Models (3-4 weeks)

## 10	Vision-Language Models

Understanding how language models integrate with other modalities.

- Vision transformer integration
- Cross-modal attention mechanisms
- Multimodal pre-training objectives
- Visual reasoning capabilities

### 10.1	Essential Papers
- [[CLIP: Learning Transferable Visual Representations]] (Radford et al., 2021)
- [[BLIP: Bootstrapping Language-Image Pre-training]] (Li et al., 2022)
- [[GPT-4V(ision) System Card]] (OpenAI, 2023)
- [[LLaVA: Large Language and Vision Assistant]] (Liu et al., 2023)

## 11	Code Generation and Programming

Foundation for understanding agentic coding systems.

- Code representation and tokenization
- Program synthesis and code completion
- Code understanding and debugging
- Multi-language code generation

### 11.1	Essential Papers
- [[Codex: Evaluating Large Language Models Trained on Code]] (Chen et al., 2021)
- [[CodeT5: Identifier-aware Unified Pre-Trained Encoder-Decoder Models]] (Wang et al., 2021)
- [[InCoder: A Generative Model for Code Infilling and Synthesis]] (Fried et al., 2022)
- [[CodeLlama: Open Foundation Models for Code]] (Roziere et al., 2023)

### 11.2	Books and Chapters
- "The Pragmatic Programmer" by Hunt & Thomas - Chapters on [[programming]] code generation principles

# Phase 7: Agentic [[ai|AI]] and Workflows (5-6 weeks)

## 12	[[ai|AI]] Agent Fundamentals

Understanding how language models can be extended into autonomous reasoning systems.

- Agent architectures and planning algorithms
- Tool use and API integration
- Memory systems and state management
- Multi-agent coordination

### 12.1	Essential Papers
- [[ReAct: Synergizing Reasoning and Acting in Language Models]] (Yao et al., 2022)
- [[Toolformer: Language Models Can Teach Themselves to Use Tools]] (Schick et al., 2023)
- [[AutoGPT: An Autonomous GPT-4 Experiment]] (Richards et al., 2023)
- [[Reflexion: Language Agents with Verbal Reinforcement Learning]] (Shinn et al., 2023)

## 13	Advanced Agentic Patterns

Mastering complex multi-step autonomous reasoning and execution.

- Planning and execution frameworks
- Self-reflection and error correction
- Multi-Modal agent capabilities
- Agent evaluation and benchmarking

### 13.1	Essential papers
- [[Plan and Solve Prompting: Improving Zero-Shot Chain-of-Thought Reasoning]] (wang et al., 2023)
- [[HuggingGPT: Solving AI tasks with ChatGPT and its Friends]] (Shen et al., 2023)
- [[Cognitive Architectures for Language Agents]] (Sumers et al., 2023)
- [[WebGPT: Browser-assited question-answering with human feedback]] (Nakano et al., 2021)

## 14	Agentic Coding Systems

Understanding how AI can autonomously write, debug, and maintain complex codebases.

- Code planning and architecture generation
- Automated testing and debugging
- Code review and refactoring agents
- Multi-file project management

### 14.1	Essential Papers
- [[SWE-bench: Can Language Models Resolve Real-World GitHub Issues?]] (Jimenez et al., 2023)
- [[CodeActAgent: An Agent for Unified Code Generation, Editing and Execution]] (Wang et al., 2024)
- [[Aider: AI-Powered Coding in Your Terminal]] - Technical documentation
- [[Devin: The First AI Software Engineer]] - Technical reports

### 14.2	Books and Chapters
- "Clean Code" by Robert Martin - Chapters 1-5 (Essential for understanding code quality)
- "Design Patterns" by Gang of Four - Key patterns for agent architecture

# Phase 8: Cutting-Edge Models and Applications (4-5 weeks)

## 15	State-of-the-Art Language Models

Understanding the latest developments in [[ai]] foundation models.

- GPT-4 and beyond capabilities
- Claude's constitutional training approach
- Qwen model family and multilingual capabilities
- Gemini and multimodal integration

### 15.1	Essential Papers
- [[GPT-4 Technical Report]] (OpenAI, 2023)
- [[Claude's Constitutional AI: Harmlessness from AI Feedback]] (Anthropic, 2022)
- [[Qwen Technical Report]] (Bai et al., 2023)
- [[Gemini: A Family of Highly Capable Multimodal Models]] (Google, 2023)

## 16	Evaluation and Benchmarking

Understanding how to measure and compare advanced AI capabilities.

- Reasoning benchmarks (GSM8K, MATH, etc.)
- Code generation evaluation
- Agent capability assessment
- Safety and alignment evaluation

### 16.1	Essential Papers
- [[Beyond the Imitation Game: Quantifying and extrapolating the capabilities of language models]] - BIG-bench (Srivastava et al., 2022)
- [[HumanEval: Evaluating Large Language Models Trained on Code]] (Chen et al., 2021)
- [[HellaSwag: Can a Machine Really Finish Your Sentence?]] (Zellers et al., 2019)
- [[TruthfulQA: Measuring How Models Mimic Human Falsehoods]] (Lin et al., 2021)

## 17	Production Systems

### 17.1	Books & Resources
- "Designing [[machine learning|Machine Learning]] Systems" by Chip Huyen - Chapters 7-11
- "Building [[llm|LLM]] Applications for Production" - Practical guides
- Hugging Face Transformers documentation - Advanced sections

# Recommended Reading Order Priority

## 18	Tier 1 (Must Read First)
1. "Attention Is All You Need" - Foundation
2. "BERT: Pre-training of Deep Bidirectional Transformers"
3. "Language Models are Few-Shot Learners" (GPT-3)
4. "Chain-of-Thought Prompting Elicits Reasoning"

## 19	Tier 2 (Core Advanced Topics)
5. "Training language models to follow instructions with human feedback"
6. "Constitutional AI: Harmlessness from AI Feedback"
7. "ReAct: Synergizing Reasoning and Acting in Language Models"
8. "Switch Transformer: Scaling to Trillion Parameter Models"

## 20	Tier 3 (Cutting-Edge Applications)
9. Model-specific technical reports (GPT-4, Claude, Qwen)
10. Recent agentic coding papers
11. Latest reasoning and evaluation papers

# Phase 5A: Enhanced Reasoning & Advanced Alignment (6-7 weeks)

## 21	Test-Time Reasoning & Inference Scaling

Understanding how models improve reasoning dynamically at test time without requiring retraining.

- Test-time compute scaling (o1-style reasoning)
- Process supervision vs outcome supervision
- Verification and self-correction mechanisms
- Multi-step reasoning chain verification

### 21.1	Essential Papers
- [[DeepSeek-R1: Redefining the Landscape of Reasoning Models]] (DeepSeek, 2025)
- [[Learning to Reason without External Rewards]] (ArXiv, 2025)
- [[Reinforcement Learning with Verifiable Rewards]] (ArXiv, 2025)
- [[Programming by Backprop: LLMs Acquire Reusable Algorithmic Abstractions]] (ArXiv, 2025)

## 22	Advanced RLHF & Alignment Techniques

Enhanced understanding of cutting-edge alignment and safety methods.

- RLTHF (Targeted Human Feedback) - 2025 advancement
- Direct Preference Optimization (DPO) vs RLHF comparison
- Constitutional AI deep dive
- Mechanistic interpretability (SAEs, activation patching)
- AI Safety via debate and amplification

### 22.1	Essential Papers
- [[RLTHF: Targeted Human Feedback for LLM Alignment]] (2025)
- [[Direct Preference Optimization: Your Language Model is Secretly a Reward Model]] (Rafailov et al., 2023)
- [[Constitutional AI: Harmlessness from AI Feedback]] (Anthropic, 2022) - Deep dive
- [[Sparse Autoencoders Find Highly Interpretable Features]] (Cunningham et al., 2023)
- [[AI Safety via Debate]] (Irving et al., 2018)

### 22.2	Books and Chapters
- [[Reinforcement Learning from Human Feedback]] (Nathan Lambert, 2025) - Complete book
- "AI Safety: An Introduction" (2024) - Chapters 1-4
- "The Alignment Problem" by Brian Christian - Chapters 3-6

# Phase 7A: Enhanced Agentic Systems (6-7 weeks)

## 23	Multi-Agent Orchestration & Advanced Frameworks

Understanding enterprise-grade agent orchestration and collaboration patterns.

- Multi-agent orchestration patterns (Microsoft AutoGen, LangGraph)
- Agent memory architectures (episodic, semantic, procedural)
- Tool-calling and function routing advanced patterns
- Agent workflow management and state persistence

### 23.1	Essential Papers
- [[Microsoft AutoGen: Multi-Agent Conversation Framework]] (Wu et al., 2023)
- [[LangGraph: Multi-Agent Workflows with State Management]] (LangChain, 2024)
- [[Agent Laboratory: Framework for Autonomous Research]] (Schmidgall et al., 2025)
- [[API-Calling Agents vs Browsing Agents: Hybrid Approaches]] (ArXiv, 2025)

### 23.2	Framework Documentation
- Microsoft AutoGen technical documentation
- LangGraph advanced patterns guide
- CrewAI orchestration patterns
- Multi-agent evaluation frameworks

## 24	Agent Evaluation & Benchmarking

Advanced methods for evaluating agent capabilities and performance.

- SWE-bench and coding agent evaluation
- AgentBench comprehensive assessment
- Multi-agent collaboration metrics
- Safety and alignment evaluation for agents

### 24.1	Essential Papers
- [[SWE-bench: Can Language Models Resolve Real-World GitHub Issues?]] (Jimenez et al., 2023)
- [[AgentBench: Evaluating LLMs as Agents]] (Liu et al., 2023)
- [[Evaluating Multi-Agent Collaboration]] (Chan et al., 2024)
- [[Safety Evaluation for AI Agents]] (Anthropic, 2024)

# Phase 9A: Production & Enterprise Deployment (4-5 weeks)

## 25	[[mlops|Production Systems]] & Model Serving

Understanding how to deploy and scale [[ai]] systems in production environments using [[cloud computing]].

- Model serving and inference optimization
- Load balancing and auto-scaling strategies
- Cost optimization and resource management
- Monitoring and [[observability]] frameworks

### 25.1	Essential Topics
- Model quantization and compression techniques
- [[distributed computing|Distributed inference]] and model parallelism
- Edge deployment and mobile optimization
- Real-time performance monitoring

### 25.2	Books and Resources
- "Designing [[machine learning|Machine Learning]] Systems" by Chip Huyen - Chapters 7-11 (Complete)
- "Building [[llm|LLM]] Applications for Production" - Advanced deployment patterns
- "[[machine learning|Machine Learning]] Engineering" by Andriy Burkov - Chapters 8-10

## 26	Enterprise [[ai|AI]] Governance & Safety

Understanding compliance, [[data governance]], and safety frameworks for enterprise [[ai|AI]].

- Enterprise [[ai|AI]] governance frameworks
- Red-teaming and adversarial testing methodologies
- Compliance and regulatory considerations
- Bias detection and mitigation strategies

### 26.1	Essential Papers
- [[Red Teaming Language Models to Reduce Harms]] (Ganguli et al., 2022)
- [[Enterprise AI Governance Frameworks]] (Microsoft, 2024)
- [[Bias and Fairness in Large Language Models]] (Blodgett et al., 2023)
- [[NIST AI Risk Management Framework]] (NIST, 2023)

### 26.2	Regulatory Resources
- EU AI Act compliance guidelines
- NIST AI Risk Management Framework documentation
- Industry-specific AI governance standards

# Enhanced Assessment Checkpoints

## 27	Phase 1-2 Checkpoint: Foundation Mastery
- [ ] Explain attention mechanisms mathematically
- [ ] Compare BERT vs GPT architectures
- [ ] Implement basic [[transformer]] components
- [ ] **NEW:** Implement test-time reasoning chain

## 28	Phase 3-4 Checkpoint: Training Understanding
- [ ] Design a pre-training curriculum
- [ ] Explain RLHF vs DPO tradeoffs
- [ ] Analyze MoE routing strategies
- [ ] **NEW:** Implement RLTHF-style selective feedback

## 29	Phase 5-6 Checkpoint: Advanced Capabilities
- [ ] Implement chain-of-thought prompting
- [ ] Build a multimodal demo
- [ ] Create code generation system
- [ ] **NEW:** Build test-time reasoning system

## 30	Phase 7-8 Checkpoint: Agentic Mastery
- [ ] Design autonomous agent architecture
- [ ] Build end-to-end agentic workflow
- [ ] Evaluate and benchmark agent performance
- [ ] **NEW:** Implement multi-agent orchestration system

## 31	Phase 9 Checkpoint: Production Readiness
- [ ] Deploy scalable [[mlops|model serving]] infrastructure
- [ ] Implement comprehensive monitoring and [[observability]]
- [ ] Design enterprise [[data governance|governance]] framework
- [ ] Execute red-teaming and safety evaluation

# Enhanced Success Metrics
- [ ] Can explain any modern [[llm|LLM]] architecture in detail
- [ ] Can implement [[transformer]] components from scratch
- [ ] Can design and build agentic workflows
- [ ] Can evaluate and benchmark [[ai|AI]] systems
- [ ] Can create production-ready [[ai|AI]] applications
- [ ] **NEW:** Can implement test-time reasoning systems
- [ ] **NEW:** Can design multi-agent orchestration frameworks
- [ ] **NEW:** Can deploy enterprise-grade [[ai|AI]] governance

**Updated Timeline**: 8-10 months for complete mastery with 15-20 hours/week commitment

# Enhanced Reading Priority (Updated 2025)

## 32	Tier 1 (Must Read First - Foundations)
1. "Attention Is All You Need" - Foundation
2. "BERT: Pre-training of Deep Bidirectional Transformers"
3. "Language Models are Few-Shot Learners" (GPT-3)
4. "Chain-of-Thought Prompting Elicits Reasoning"
5. **NEW:** "DeepSeek-R1: Redefining the Landscape of Reasoning Models"

## 33	Tier 2 (Core Advanced Topics - 2025 Focus)
6. "Training language models to follow instructions with human feedback"
7. "Constitutional AI: Harmlessness from AI Feedback"
8. "ReAct: Synergizing Reasoning and Acting in Language Models"
9. "Switch Transformer: Scaling to Trillion Parameter Models"
10. **NEW:** "RLTHF: Targeted Human Feedback for LLM Alignment"
11. **NEW:** "Direct Preference Optimization"

## 34	Tier 3 (Cutting-Edge Applications - 2025 Updates)
12. Model-specific technical reports (GPT-4, Claude, Qwen, DeepSeek-R1)
13. Recent agentic coding papers (SWE-bench, Agent Laboratory)
14. Latest reasoning and evaluation papers
15. **NEW:** Multi-agent orchestration frameworks (AutoGen, LangGraph)
16. **NEW:** Production deployment and governance papers

## 35	Tier 4 (Specialized Advanced Topics)
17. Mechanistic interpretability papers (SAEs, activation patching)
18. Enterprise AI governance and safety frameworks
19. Advanced benchmarking and evaluation methodologies
20. Cutting-edge architectural innovations (MoE advances, long-context)

---

## 36	Hands-On Implementation (Updated with 2025 Projects)

Core Implementation Projects:

- Build a [[transformer]] from scratch ([[python|PyTorch]])
- Fine-tune BERT for custom classification
- Implement chain-of-thought reasoning
- Create a simple coding agent
- Build a RAG system with embeddings
- Implement [[mixture of experts]] layer
- **NEW:** Build test-time reasoning system with verification
- **NEW:** Create multi-agent orchestration framework
- **NEW:** Implement DPO vs RLHF comparison system
- **NEW:** Build production monitoring dashboard with [[observability]]
- **NEW:** Create enterprise [[data governance|governance]] compliance checker

# Phase 3A: Advanced Retrieval & Knowledge Systems (5-6 weeks)

## 19	Foundations & Evolution of Retrieval Systems

Understanding how retrieval systems evolved from simple RAG to agentic and hybrid architectures.

- Traditional RAG limitations (context loss, hallucinations, chunking issues)
- Evolution to Advanced RAG, Self-RAG, and Hybrid RAG
- Reflection tokens: ISREL, ISUP
- Agentic systems: planning, reflection, reasoning loops

### 19.1	Essential Papers
- [[Retrieval-Augmented Generation for Large Language Models: A Survey]] (Gao et al., 2023)
- [[Enhancing Retrieval-Augmented Generation: A Study of Best Practices]] (ArXiv, 2025)
- [[Self-RAG: Learning to Retrieve, Generate, and Critique]] (2024)

## 20	GraphRAG and Knowledge Graph Integration

Master knowledge graphs and multi-hop reasoning for RAG.

- GraphRAG fundamentals: GPT-4 based entity extraction, Leiden clustering
- Hierarchical levels (C0–C3) for abstraction
- Microsoft's implementation and real-world GraphRAG in manufacturing
- Query-focused summarization

### 20.1	Essential Papers
- [[From Local to Global: A GraphRAG Approach to Query-Focused Summarization]] (Microsoft, 2024)
- [[KAG: Boosting LLMs in Professional Domains via Knowledge-Augmented Generation]] (2024)
- [[Retrieval-Augmented Generation with Graphs (GraphRAG)]] (ArXiv, 2025)
- [[Document GraphRAG: Knowledge Graph Enhanced Retrieval]] (Manufacturing Domain, 2025)

### 20.2	Tools & Frameworks
- Neo4j for knowledge graphs
- Microsoft GraphRAG SDK
- PyKnowledge for graph construction
- LightRAG implementation

## 21	Hybrid, Adaptive & Self-Reflective Retrieval

Design RAG systems that adjust to query complexity and combine dense/sparse retrieval.

- Hybrid search: BM25 + Dense + Full-text
- Adaptive RAG: routing by query complexity
- Self-RAG: reflection tokens, retrieval-critique loops
- Contrastive RAG: enhanced representation learning

### 21.1	Essential Papers
- [[Adaptive-RAG: Learning to Adapt Retrieval-Augmented Large Language Models]] (KAIST, 2024)
- [[Contrastive In-Context Learning RAG]] (ArXiv, 2025)
- [[Self-RAG: Learning to Retrieve, Generate, and Critique through Self-Reflection]] (2024)

## 22	Specialized RAG Architectures

Dive into specialized RAG systems for domains, long-contexts, and semantic accuracy.

- LongRAG for document-scale retrieval
- Domain-specific systems: Golden-Retriever
- Contrastive and Contextual Semantic RAG
- Self-RAG for quality control

### 22.1	Essential Papers
- [[Long RAG: Enhanced Processing of Lengthy Documents]] (2025)
- [[Golden-Retriever: Advanced RAG for Industrial Knowledge Bases]] (2025)
- [[Contrastive Learning in RAG Systems]] (2025)

## 23	Multi-Modal & Cross-Modal Retrieval Systems

Integrate vision, audio, text, and video in RAG pipelines.

- Multi-modal RAG (Gemini 2.0, Meta LLaMA 4, Qwen 2.5 Omni)
- Vision-language (CLIP, BLIP-2, Alpha-CLIP)
- Audio-text modeling (WhisBERT, EEG-audio fusion)
- Cross-modal reasoning and long-context understanding

### 23.1	Essential Papers
- [[Multi-Modal RAG: Beyond Text Retrieval]] (2024)
- [[Thinker-Talker Architectures in Qwen]] (2025)
- [[RAPTOR: Recursive Abstractive Processing for Tree-Organized Retrieval]] (ICLR, 2024)

## 24	Temporal and Causal Reasoning in Retrieval

Learn to build time-aware systems for historical and predictive tasks.

- TimeR⁴: Retrieve-Rewrite-Retrieve-Rerank
- Graphiti: bi-temporal graphs + De Bruijn GNN
- Temporal embeddings: RotateQVS
- Chain of History: LLM-guided temporal completion

### 24.1	Essential Papers
- [[TimeR⁴: Temporal Retrieval Framework]] (2025)
- [[Graphiti: Real-Time Temporal Knowledge Graphs]] (2024)
- [[Chain of History: LLM-guided Temporal Completion]] (2025)

## 25	Hierarchical Knowledge Processing Architectures

Implement multi-tier, pyramid-based, and structured models for retrieval.

- PolyRAG: 3-layer hierarchy (ontology, KG, raw chunks)
- Hierarchical Lexical Graphs (HLG)
- StatementGraphRAG and TopicGraphRAG
- HSNN: Structured modular indexing and computation sharing

### 25.1	Essential Papers
- [[Knowledge Pyramid Construction (PolyRAG)]] (2025)
- [[Hierarchical Structured Neural Networks (HSNN)]] (2025)
- [[StatementGraphRAG: Advanced Graph-Based Retrieval]] (2024)

## 26	Continual Learning & Self-Improving Systems

Build systems that learn from feedback and adapt over time.

- Reinforcement learning-based retrieval: LeReT
- Multi-Teaching-Assistant KD: MTA4DPR
- Continual learning: CLEVER with adaptive product quantization
- Self-improving retrieval mechanisms

### 26.1	Essential Papers
- [[LeReT: Learning to Retrieve by Trying]] (2025)
- [[CLEVER: Continual Learning in Evolving Retrieval]] (2025)
- [[MTA4DPR: Multi-Teaching-Assistant Knowledge Distillation]] (2024)

## 27	Federated, Cross-Domain & Cross-Lingual Systems

Build scalable, privacy-aware, and multilingual retrieval systems.

- BGE M3-Embedding: 100+ language support
- CDR-VAE: Cross-domain variational autoencoders
- FRAG: Federated RAG with homomorphic encryption
- Multiplicative caching strategies

### 27.1	Essential Papers
- [[FRAG: Federated Retrieval-Augmented Generation]] (2024)
- [[CDR-VAE: Cross-Domain Retrieval]] (2025)
- [[BGE M3-Embedding: Multilingual Retrieval]] (2024)

## 28	Real-Time & Event-Driven Retrieval Systems

Engineer real-time streaming architectures for low-latency inference.

- Apache Flink 2.0, Kappa Architecture
- Hot-warm-cold tiered storage
- Event-driven pipelines with LLMs
- Real-time IoT, fraud detection, trading systems

### 28.1	Essential Papers
- [[Real-Time Event Retrieval with Apache Flink]] (2025)
- [[Event-Driven RAG Architectures]] (2024)
- [[Low-Latency Retrieval Systems]] (2025)

### 28.2	Tools & Frameworks
- Apache Flink for real-time processing
- Apache Kafka for event streaming
- LangGraph for workflow orchestration
- Redis for caching layers

## 29	Evaluation, Optimization, and Production Deployment

Move from POCs to real-world scalable RAG systems.

- Evaluation metrics: comprehensiveness, diversity, faithfulness
- Cost/latency optimization strategies
- Cross-encoder reranking, contextual compression
- Production deployment patterns

### 29.1	Essential Papers
- [[RAGAS: Automated Evaluation of Retrieval Augmented Generation]] (2024)
- [[Production-Grade RAG: Scaling Retrieval Systems]] (2025)
- [[Cost-Effective RAG Optimization Strategies]] (2025)

### 29.2	Tools & Frameworks
- RAGAS for evaluation framework
- LangSmith for RAG monitoring
- TruLens for RAG evaluation
- Weights & Biases for experiment tracking
- LangChain, Haystack, LlamaIndex for deployment

---

# Phase 3A Assessment Checkpoints

## Module 19-21 Checkpoint: Advanced RAG Foundations
- [ ] Implement Self-RAG with reflection mechanisms
- [ ] Build GraphRAG system with knowledge graphs
- [ ] Create hybrid retrieval combining dense + sparse methods

## Module 22-24 Checkpoint: Specialized Systems
- [ ] Deploy LongRAG for document processing
- [ ] Implement multi-modal RAG with vision + text
- [ ] Build temporal reasoning system with time-aware retrieval

## Module 25-27 Checkpoint: Advanced Architectures
- [ ] Create hierarchical knowledge processing system
- [ ] Implement continual learning RAG with feedback loops
- [ ] Deploy federated RAG with privacy preservation

## Module 28-29 Checkpoint: Production Systems
- [ ] Build real-time event-driven retrieval pipeline
- [ ] Implement comprehensive evaluation framework
- [ ] Deploy production-ready RAG with monitoring

# Phase 3A Capstone Projects

Create 5 real-world implementations demonstrating complete mastery:

## Project 1: Agentic GraphRAG System
- Query decomposition and multi-hop reasoning
- Feedback loops and self-correction mechanisms
- Integration with knowledge graphs

## Project 2: Multi-Modal Adaptive RAG
- Support for video, image, audio + text
- Cross-modal retrieval and reasoning
- Dynamic adaptation to query complexity

## Project 3: Real-Time Event Retrieval Pipeline
- Apache Flink/Kafka integration
- Self-correcting RAG mechanisms
- Low-latency streaming architecture

## Project 4: Domain-Specific LongRAG
- Finance or healthcare document processing
- Hierarchical understanding and summarization
- Domain expertise integration

## Project 5: Federated Privacy-RAG
- Encrypted search across private datasets
- Homomorphic encryption implementation
- Cross-organization knowledge sharing

**Phase 3A Timeline**: 5-6 weeks intensive study with 15-20 hours/week commitment