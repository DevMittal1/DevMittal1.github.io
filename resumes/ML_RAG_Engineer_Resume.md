# Devansh Mittal
**RAG & Machine Learning Engineer // NLP Specialist**

*   **Email:** [dkmitter751@gmail.com](mailto:dkmitter751@gmail.com)
*   **LinkedIn:** [linkedin.com/in/devansh-mittal-m1](https://linkedin.com/in/devansh-mittal-m1)
*   **Portfolio:** [DevMittal1.github.io](https://DevMittal1.github.io)
*   **GitHub:** [github.com/DevMittal1](https://github.com/DevMittal1)

---

## Professional Summary
Machine Learning Engineer specializing in high-precision Retrieval-Augmented Generation (RAG) systems, dense/sparse search indexing, and semantic natural language processing. Proven track record in building hybrid search engines blending keyword match (BM25) with high-dimensional vector embeddings, tuned rerankers, and custom NER extraction. Expert in evaluations (Ragas, LangSmith), ML hyperparameter optimization, and deploying performant deep learning / tabular pipelines.

---

## Technical Skills

*   **RAG & Search Architecture:** Hybrid Sparse (Okapi BM25) + Dense (Vector k-NN) Search, Reciprocal Rank Fusion (RRF), Cohere Rerank v4, Context Compression, Document Chunking (Semantic, Hierarchical, Metadata-aware).
*   **Machine Learning & NLP:** PyTorch, TensorFlow, scikit-learn, BERT, spaCy NER, Hugging Face transformers, XGBoost, SHAP explainability, Optuna hyperparameter search, Ragas evaluation framework.
*   **Vector & Document Databases:** OpenSearch, Qdrant HNSW Indexes, Pinecone, PostgreSQL, SQLite, Snowflake.
*   **Embeddings & LLM APIs:** Voyage AI (`voyage-law-2`), OpenAI (`text-embedding-3-large/small`), Claude 3.5, GPT-4o.
*   **Data Engineering:** Python, Pandas, NumPy, SQL, dbt, Apache Spark, Power BI.
*   **Cloud & MLOps:** AWS (S3, SQS, ECS, Lambda), Azure, Docker, Git, CI/CD, LangSmith.

---

## Work Experience

### **Henceforth Solutions** // Applied AI Engineer (ML & RAG focus)
*Jan 2025 – Present*
*   **Legal RAG Development:** Designed and built a hybrid RAG pipeline ingesting 50K+ multi-language documents. Blended BM25 search (OpenSearch) with dense vectors (Voyage-law-2), fusing candidates via Reciprocal Rank Fusion (RRF) and a Cohere Rerank v4 engine.
*   **NLP Chunking & Extraction:** Engineered semantic and hierarchical text-splitters preserving clause/article hierarchies. Developed spaCy Named Entity Recognition (NER) models to extract and tag metadata (Parties, Dates, Clauses) for faceted search.
*   **Observability & Evaluation:** Implemented continuous RAG evaluation using the Ragas framework, benchmarked retrieval accuracy (Precision@5, MRR), and tracked prompts using LangSmith to mitigate hallucinations.
*   **Multi-Agent Routing Logic:** Created intent classification routers that map user queries to specific databases and RAG indices dynamically.

### **XenonStack** // Associate Software Engineer (Computer Vision & NLP)
*June 2024 – Jan 2025*
*   **Industrial Computer Vision:** Developed and deployed a scalable computer vision pipeline for industrial safety. Programmed real-time PPE and worker presence tracking using YOLOv5 and OpenPose, and EfficientDet for hazard detection across 40 CCTV feeds (3k frames/hr).
*   **Text Processing Automation:** Built a serverless document parsing pipeline using AWS Textract OCR, custom lambda pre-processors, and Redis-backed task scheduling, reducing manual file reviews.
*   **Dialogue Intent Classifier:** Engineered a transformer-based classifier for customer inquiries on WhatsApp, routing messages to 6 specialized sub-agents based on semantic similarity.
*   **AWS ServiceNow Integration:** Configured automated service catalog triggers using ServiceNow ITSM to track infrastructure assets and model endpoints.

### **Explorin.io** // Data Analyst Intern
*Jan 2023 – June 2023*
*   **Sentiment Analysis Pipeline:** Architected a sentiment classifier using contextual BERT embeddings, parsing student interactions to measure satisfaction and engagement quality.
*   **Retention Dashboards:** Structured event-driven data pipelines to Snowflake, building predictive engagement dashboards to identify accounts at churn risk.

---

## Featured ML & RAG Projects

### **Legal RAG Research Pipeline**
*   **Overview:** A compliance-first hybrid document intelligence system over 50K+ contracts, case laws, and statutes for legal teams.
*   **Key Tech:** OpenSearch, Voyage-law-2, Cohere Rerank v4, spaCy NER, LlamaIndex, FastAPI, S3/SQS/ECS.
*   **Implementation:** Used hierarchical chunking to preserve legal section links. Implemented dual retrieval (BM25 + cosine vector space) and Cohere reranking, resulting in a P90 latency ≤2.5s and >90% precision@5. Evaluated faithfulness and grounding using Ragas.
*   **Compliance:** Integrated data residency routing and PII masking to comply with GDPR/CCPA.

### **XGBoost Churn Prediction & Intervention Model**
*   **Overview:** B2B SaaS churn prediction early-warning system integrated directly into Salesforce.
*   **Key Tech:** XGBoost, SHAP, scikit-learn, Optuna, dbt, Snowflake, MLflow.
*   **Implementation:** Engineered 120+ engagement and support features from raw events using dbt and Snowflake. Tuned parameters across 400 Optuna trials. Developed a SHAP explainability layer displaying the top 3 risk drivers per account in the CRM interface.
*   **Impact:** Achieved a 0.91 ROC-AUC score and drove a 31% churn reduction, saving $740K ARR.

### **E-commerce Research & Growth DeepAgent**
*   **Overview:** Autonomous research analyst running multi-step growth investigations across ad channels, competitor pricing, and store performance.
*   **Key Tech:** LangChain Deep Agents, Playwright, SQLite, Python.
*   **Implementation:** Set up an autonomous crawler (Playwright) that scrapes competitor websites for promotions. Integrated internal WooCommerce sales data with Meta Ads signals, storing intermediate findings in vector stores.
*   **Impact:** Saves 92% of research time, converting manual 8-hour strategy audits into autonomous 15-minute runs.

---

## Education
**National Institute of Technology, Kurukshetra** | **BTech** | **GPA:** 8.2 / 10.0

---

## Certifications

*   **Azure AI Engineer Associate** // Microsoft
*   **Azure Data Scientist Associate** // Microsoft
*   **DeepLearning.AI** // Improving Deep Neural Networks: Hyperparameter Tuning, Regularization, and Optimization
