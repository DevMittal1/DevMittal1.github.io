import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================================================
  // 1. MOBILE NAV MENU TOGGLE
  // ==========================================================================
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('open');
      navLinks.classList.toggle('open');
    });

    // Close menu when clicking nav links
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  // ==========================================================================
  // 2. LIVE TELEMETRY LOG STREAM (HERO TERMINAL)
  // ==========================================================================
  const terminal = document.getElementById('log-terminal');
  const simulatedLogs = [
    { type: 'info', text: 'Initializing FastEmbed synchronization loop...' },
    { type: 'info', text: 'Listening to PostgreSQL CDC write-ahead logs on "documents"' },
    { type: 'info', text: 'Ingesting pending batch sync tasks (count=14)' },
    { type: 'success', text: 'Vector chunk embeddings calculated via BGE-M3 [1024-dim]' },
    { type: 'success', text: 'Successfully indexed 48 nodes in Qdrant Vector DB' },
    { type: 'warning', text: 'Latency Warning: Ingestion pipeline execution time exceeded 350ms (actual=390ms)' },
    { type: 'info', text: 'Triggering validation loop: Ragas faithfulness index = 0.941' },
    { type: 'success', text: 'Evaluation Assertions PASSED. Grounding verified.' },
    { type: 'info', text: 'Worker state: IDLE. Re-pooling in 5000ms...' },
    { type: 'info', text: 'Poller wake-up. CDC records captured: count=2' },
    { type: 'info', text: 'Parsing slide ranges for document ID [doc_usr_283]' },
    { type: 'success', text: 'Parent-child document hierarchies mapped cleanly.' },
    { type: 'success', text: 'Re-indexing complete. Average query latency = 168ms.' }
  ];

  let logIndex = 7; // Start after default HTML logs

  function formatTimestamp() {
    const now = new Date();
    const pad = (n) => String(n).padStart(2, '0');
    return `${now.getFullYear()}-${pad(now.getMonth()+1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  }

  function appendLog() {
    if (!terminal) return;

    const log = simulatedLogs[logIndex % simulatedLogs.length];
    const line = document.createElement('div');
    line.className = `log-line text-${log.type}`;
    line.innerHTML = `[${formatTimestamp()}] ${log.text}`;
    
    terminal.appendChild(line);
    terminal.scrollTop = terminal.scrollHeight;
    
    // Maintain max logs to prevent memory leaks
    if (terminal.childNodes.length > 25) {
      terminal.removeChild(terminal.firstChild);
    }
    
    logIndex++;
    
    // Vary timing to look realistic
    const nextTimeout = Math.random() * 2500 + 1500;
    setTimeout(appendLog, nextTimeout);
  }

  // Start log stream after initial delay
  setTimeout(appendLog, 3000);


  // ==========================================================================
  // 3. INTERACTIVE ARCHITECTURE DIAGRAM MAP CONTROLLER
  // ==========================================================================
  const svgEl = document.querySelector('.architecture-svg');
  const tabs = document.querySelectorAll('.selector-tab');
  const contextNodeName = document.getElementById('context-node-name');
  const contextNodeDesc = document.getElementById('context-node-desc');
  const spec1 = document.getElementById('spec-1');
  const spec2 = document.getElementById('spec-2');

  // Node specifications data mapping
  const nodeData = {
    'node-ingest': {
      name: 'Component: CDC-Driven Document Ingestion',
      desc: 'Monitors transaction logs of relational databases (PostgreSQL CDC) to catch document state mutations. Spawns isolated sync tasks asynchronously, ensuring indexing layers never block core write paths.',
      s1: 'Mode: Async Broker',
      s2: 'Batch size: 100 max'
    },
    'node-vector': {
      name: 'Component: Dense Vector Store (Qdrant)',
      desc: 'Stores chunk-level vector embeddings. Employs a custom HNSW index configuration optimized for fast cosine distance matching, achieving search latencies under 180ms across thousands of documents.',
      s1: 'Dimensions: 1024-dim',
      s2: 'Index: Hybrid HNSW'
    },
    'node-rerank': {
      name: 'Component: Dense Cross-Encoder Reranker',
      desc: 'Executes a second-stage reranking operation using high-speed transformer indices. Evaluates search result arrays against queries in context, filtering out semantic outliers and narrowing LLM context inputs.',
      s1: 'Model: Cohere V3',
      s2: 'Top_K: 5 Candidates'
    },
    'node-llm': {
      name: 'Component: Grounded LLM Synthesis',
      desc: 'Synthesizes verified legal arguments based strictly on reranked source nodes. Configured with rigorous structured schema outputs containing precise paragraph and subsection citation links.',
      s1: 'Engine: Claude 3.5 Sonnet',
      s2: 'Temp: 0.0 (Strict)'
    },
    'node-eval': {
      name: 'Component: Automated Ragas Evaluation Guardrails',
      desc: 'Continuous real-time compliance assertion framework checking response metrics: faithfulness, citation recall, and answer relevance. Flagged anomalies trigger prompt fallbacks or queue manual engineering audits.',
      s1: 'Metric: Faithfulness',
      s2: 'Threshold: &gt;0.92'
    }
  };

  // Tab Filtering Selectors
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      const filter = tab.getAttribute('data-flow');
      
      // Reset svg filters
      svgEl.className.baseVal = 'architecture-svg';
      
      if (filter === 'ingestion') {
        svgEl.classList.add('flow-filter-ingestion');
      } else if (filter === 'retrieval') {
        svgEl.classList.add('flow-filter-retrieval');
      }
    });
  });

  // Node Hover Tooltips
  const nodes = document.querySelectorAll('.node-group');
  nodes.forEach(node => {
    node.addEventListener('mouseenter', () => {
      const id = node.id;
      const data = nodeData[id];
      if (!data) return;

      contextNodeName.textContent = data.name;
      contextNodeDesc.textContent = data.desc;
      spec1.innerHTML = data.s1;
      spec2.innerHTML = data.s2;
      
      // Pulse animation highlight
      node.querySelector('.node-inner').setAttribute('stroke-width', '2.5');
    });

    node.addEventListener('mouseleave', () => {
      node.querySelector('.node-inner').setAttribute('stroke-width', '1.5');
    });
  });


  // ==========================================================================
  // 4. STRUCTURED OBSERVABILITY console LOG (DEPTH CARD 1)
  // ==========================================================================
  const consoleEl = document.getElementById('depth-console-log');
  const traceLogs = [
    '&gt; init trace [doc_id=0912]',
    '&gt; cosine_similarity = 0.892 (MATCH)',
    '&gt; rerank score = 0.941 (PROCEED)',
    '&gt; context: loaded 4 vector nodes',
    '&gt; system prompt compiled [tokens=1240]',
    '&gt; Claude 3.5 call [latency=1140ms]',
    '&gt; output generated [tokens=340]',
    '&gt; citation validation checking...',
    '&gt; verified citation [doc_0912#L14-25]',
    '&gt; response assertion = 100% GROUNDED',
    '&gt; trace closed [session_ok=true]'
  ];

  let traceIdx = 3;

  function runTraceStream() {
    if (!consoleEl) return;

    const log = traceLogs[traceIdx % traceLogs.length];
    const line = document.createElement('div');
    line.className = 'console-line';
    line.innerHTML = log;
    
    consoleEl.appendChild(line);
    consoleEl.scrollTop = consoleEl.scrollHeight;

    if (consoleEl.childNodes.length > 5) {
      consoleEl.removeChild(consoleEl.firstChild);
    }

    traceIdx++;
    setTimeout(runTraceStream, Math.random() * 2000 + 1000);
  }

  setTimeout(runTraceStream, 2000);


  // ==========================================================================
  // 5. RADIAL MOUSE SPOTLIGHT (CARD GLOW EFFECTS)
  // ==========================================================================
  const depthCards = document.querySelectorAll('.depth-card');
  depthCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });


  // ==========================================================================
  // 6. JSON TERMINAL CONTACT FORM HANDLER
  // ==========================================================================
  const form = document.getElementById('contact-form');
  const responseScreen = document.getElementById('terminal-response');
  const statusIndicator = document.getElementById('form-status-indicator');
  const submitBtn = document.querySelector('.btn-submit-terminal');
  
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name-input').value;
      const email = document.getElementById('email-input').value;
      const interest = document.getElementById('interest-input').value;
      
      // Toggle loading status
      submitBtn.classList.add('loading');
      submitBtn.disabled = true;
      statusIndicator.textContent = '100 CONTINUE';
      statusIndicator.style.backgroundColor = 'rgba(251, 191, 36, 0.15)';
      statusIndicator.style.color = '#fbbf24';

      // Simulate network request latencies
      setTimeout(() => {
        // Hydrate response screen
        document.getElementById('resp-name').textContent = name;
        document.getElementById('resp-interest').textContent = `"${interest}"`;

        // Switch screens
        form.classList.add('hidden');
        responseScreen.classList.remove('hidden');
        
        // Complete status indicators
        statusIndicator.textContent = '202 ACCEPTED';
        statusIndicator.style.backgroundColor = 'rgba(34, 197, 94, 0.15)';
        statusIndicator.style.color = '#22c55e';
        
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
      }, 1800);
    });
  }

  // Reset form screen
  const resetBtn = document.getElementById('btn-reset-form');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      form.reset();
      responseScreen.classList.add('hidden');
      form.classList.remove('hidden');
      
      statusIndicator.textContent = '200 OK';
      statusIndicator.style.backgroundColor = 'rgba(34, 197, 94, 0.15)';
      statusIndicator.style.color = '#22c55e';
    });
  }
});
