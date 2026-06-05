# Devansh Mittal
**Backend & Cloud Platform Engineer // AI Systems**

*   **Email:** [dkmitter751@gmail.com](mailto:dkmitter751@gmail.com)
*   **LinkedIn:** [linkedin.com/in/devansh-mittal-m1](https://linkedin.com/in/devansh-mittal-m1)
*   **Portfolio:** [DevMittal1.github.io](https://DevMittal1.github.io)
*   **GitHub:** [github.com/DevMittal1](https://github.com/DevMittal1)

---

## Professional Summary
Backend & Cloud Platform Engineer with a focus on building high-performance asynchronous systems, low-latency streaming infrastructure, and containerized deployment pipelines for production AI applications. Expert in designing event-driven microservices using Python (FastAPI), Go, and WebSockets, supported by robust queuing layers (Redis, AWS SQS) and container orchestration (Docker, ECS, Kubernetes). Skilled at building robust integrations between volatile LLM runtimes and legacy database layers.

---

## Technical Skills

*   **Backend & APIs:** Python (FastAPI, Flask), Go (Gin), JavaScript/TypeScript (Node.js), REST APIs, RESTful Architecture, JSON Schema.
*   **Real-Time & Streaming:** WebSockets, Twilio Media Streams, LiveKit Server SDK, WebRTC, Server-Sent Events (SSE).
*   **Cloud & Containers:** AWS (ECS, Lambda, SQS, S3, VPC, EC2, EKS), Azure, Docker, Kubernetes.
*   **Messaging & Databases:** Redis (Pub/Sub, Message Broker, Task Queuing), Apache Kafka, PostgreSQL (CDC, Write-Ahead Logs), SQLite.
*   **Infrastructure & MLOps:** CI/CD (GitHub Actions, Jenkins), Terraform (IaC), Git, ServiceNow ITSM, LangSmith.
*   **System Design:** Microservices, Event-Driven Architecture, Asynchronous Queuing, Change Data Capture (CDC), REST APIs.

---

## Work Experience

### **Henceforth Solutions** // Applied AI Engineer (Backend & Cloud focus)
*Jan 2025 – Present*
*   **WebSocket Voice Streaming:** Engineered low-latency backend socket handlers utilizing FastAPI to process Twilio voice media streams. Routed live audio streams to LiveKit voice runtimes and Gemini Live APIs, maintaining sub-second loop response.
*   **Async Task Buffering:** Designed asynchronous execution patterns using Redis message brokers, decoupling client request threads from slow, resource-heavy LLM inferences to ensure high API availability.
*   **CDC Database Syncing:** Built database listener pipelines capturing PostgreSQL Write-Ahead Logs (CDC) to trigger async indexing workers, synchronizing delta updates to Qdrant vector databases without blocking main write paths.
*   **API Security & Middleware:** Authored custom FastAPI middleware to handle rate limiting, PII masking, token audit logs, and exception retry fallbacks across all LLM endpoints.

### **XenonStack** // Associate Software Engineer (Cloud Automation)
*June 2024 – Jan 2025*
*   **Serverless Data Processing:** Built a serverless AWS Textract OCR pipeline using AWS Lambda, S3 event triggers, and SQS queue buffers. Handled 2,500 documents/month, executing automated IaC scripts and reducing deployment times by 3×.
*   **TypeScript Workflow Integration:** Orchestrated plugin connectors inside Activepieces automation tools using TypeScript and MCP clients to integrate third-party APIs.
*   **ServiceNow Cloud Provisioning:** Deployed automation agents in ServiceNow using the AWS Service Management Connector, automating lifecycle actions for EC2/EKS resources and integrating configuration details into CMDB.
*   **RTSP Video Ingestion:** Configured high-throughput RTSP video ingestion pipelines routing 40 CCTV feeds to YOLOv5 inference workers, implementing alert queues with <2-second latencies.

### **Explorin.io** // Data Analyst Intern
*Jan 2023 – June 2023*
*   **Data Pipelines:** Built collection pipelines to push student feedback logs to Snowflake storage using serverless function triggers.
*   **Analytical Dashboards:** Built event-driven analytics dashboards in Power BI, mapping metrics to predict and flag customer churn risk.

---

## Featured Backend & Cloud Projects

### **Real-Time Voice AI Salon Receptionist**
*   **Overview:** Telephony automation backend managing real-time voice bookings, rescheduling, and human agent handoff.
*   **Key Tech:** WebSockets, FastAPI, Twilio Voice, LiveKit, Redis, Docker.
*   **Implementation:** Developed WebSocket routes in FastAPI to accept streamed audio buffers from Twilio. Deployed Redis tasks to perform dynamic availability checks against scheduling databases. Wrapped the services in Docker containers for standard deployment.
*   **Impact:** Handled high call volumes simultaneously, maintaining low latency and stable memory profiles.

### **Legal RAG Infrastructure**
*   **Overview:** Document ingestion and querying cloud infrastructure designed for processing legal filings.
*   **Key Tech:** AWS ECS, S3, SQS, OpenSearch, Redis, FastAPI, PostgreSQL.
*   **Implementation:** Used S3 event triggers to queue documents into SQS. Configured auto-scaling ECS worker groups to consume messages, run chunking, and write indexes to OpenSearch. Implemented a Redis cache to store semantic embeddings, lowering API model costs.
*   **Impact:** Achieved P90 query latency ≤2.5s and supported ingestion of 10K+ documents daily.

### **Enterprise Shopify Multi-Agent Operations Platform**
*   **Overview:** High-throughput support platform orchestrating specialized sub-agents across orders, shipping, and billing.
*   **Key Tech:** LangGraph, FastAPI, Redis Memory Bus, AWS ECS, Docker.
*   **Implementation:** Built the FastAPI service backend hosted on AWS ECS. Configured a Redis shared bus to store intermediate state machines and conversation history, allowing rapid failover recovery.
*   **Impact:** Managed 10K+ customer support requests per day while maintaining a 91% accuracy rate.

---

## Education

*   **National Institute of Technology, Kurukshetra**
    *   BTech in Production and Industrial Engineering *(Aug 2020 – May 2024)*
    *   **GPA:** 8.2 / 10.0

---

## Certifications

*   **Azure AI Engineer Associate** // Microsoft
*   **Azure Data Scientist Associate** // Microsoft
*   **DeepLearning.AI** // Improving Deep Neural Networks: Hyperparameter Tuning, Regularization, and Optimization
