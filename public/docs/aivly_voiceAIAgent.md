## 03 / Voice AI

# Real-Time Voice AI Agent — Salon Reception and Booking Automation

### Bilingual voice assistant for salons in France and the USA

### Handles calls, booking, rescheduling, FAQs, service lookup, stylist availability, and human handoff

**Twilio Voice** • **LiveKit Agents** • **Gemini 3.1 Flash Live Preview** • **LangChain** • **Tool Calling** • **Web Search** • **FastAPI** • **Middleware** • **Structured Outputs**

---

## Problem

Salons receive a high volume of repetitive phone calls: opening hours, pricing, service menus, appointment booking, rescheduling, cancellations, stylist availability, location details, and product questions. Those calls are time-sensitive, and a missed call often becomes a missed booking.

The goal was to build a real-time voice agent that could answer in French and English, use live web knowledge when needed, and hand off to a human receptionist whenever the request became sensitive or ambiguous.

---

## Solution

Built a real-time salon voice agent using a telephony-to-realtime architecture.

Twilio Media Streams exposes raw call audio over WebSockets, which makes phone conversations available to a backend in near real time. Twilio also documents `<Stream>` for streaming live call audio to a WebSocket server and for sending audio back into a call. 

LiveKit Agents provides the voice-agent runtime layer, including the STT-LLM-TTS pipeline, turn detection, interruption handling, and LLM orchestration. LiveKit also supports tool use for extending the agent with external systems and long-running background work. 

For the model layer, Gemini 3.1 Flash Live Preview is the current low-latency audio-to-audio model for real-time dialogue and voice-first AI applications. Google also documents the Live API for streaming audio, image, and text interaction. 

LangChain was used for tool calling, structured outputs, and middleware-driven control. LangChain documents tools as callable functions for external actions, structured outputs for schema-constrained responses, and middleware for logging, retries, fallbacks, rate limits, prompt transforms, and PII detection. 

---

## My Role

Designed and built the full real-time agent stack.

Owned:

* Twilio call streaming integration.
* LiveKit voice-agent orchestration.
* Gemini 3.1 Flash Live Preview integration.
* LangChain tool-calling layer.
* Salon knowledge search.
* Booking and scheduling workflows.
* Human handoff logic.
* Middleware for guardrails, retries, and redaction.
* FastAPI backend and deployment flow.

---

## Architecture

```text
Twilio Call
   ↓
Media Streams WebSocket
   ↓
LiveKit Agent Runtime
   ↓
Gemini 3.1 Flash Live Preview
   ↓
LangChain Tool Calling
   ├─ Salon Knowledge Search
   ├─ Booking / Reschedule Tools
   ├─ Stylist Availability
   ├─ Pricing / Service Lookup
   └─ Human Handoff
   ↓
Streaming Voice Response
```

Twilio provides the realtime audio transport, LiveKit provides the voice-agent runtime and tool use, Gemini 3.1 Flash Live Preview provides the low-latency dialogue model, and LangChain provides the tool and middleware layer. 

---

## Real-Time Flow

The agent was designed to handle the full call lifecycle:

1. answer the call
2. detect turn boundaries using voice activity and interruption handling
3. transcribe the caller in real time
4. classify intent
5. call the right tool
6. search salon knowledge when needed
7. return a streamed voice response
8. hand off to a human when the request is outside policy or confidence thresholds

LiveKit Agents documents turn detection, interruptions, and the STT-LLM-TTS pipeline as core voice-agent capabilities. Twilio Media Streams documents WebSocket audio streaming for real-time call processing. 

---

## Tools

The agent used LangChain tool calling for actions that required real-world data or side effects. LangChain documents tools as callable functions with defined inputs and outputs, and its structured-output support makes the final response machine-safe for downstream systems.

Typical tools included:

* salon FAQ and policy search
* opening hours lookup
* service menu lookup
* stylist availability
* booking creation
* booking rescheduling
* cancellation support
* web search for current public information
* human transfer

---

## Middleware

Middleware was used to make the agent safe and production-ready.

LangChain documents built-in middleware for common production concerns, and custom middleware hooks for shaping behavior before and after model calls. That includes prompt transformation, logging, retries, fallback handling, formatting, and guardrails.

Implemented middleware patterns:

* input validation
* PII redaction
* tool-call gating
* retry on transient failure
* fallback to human
* structured response enforcement
* latency control
* rate limiting
* audit logging

---

## Knowledge Layer

The agent used live web search and a salon knowledge base so answers could stay current.

This covered:

* service prices
* promotions
* opening hours
* holiday changes
* salon policies
* product FAQs
* booking rules
* city-specific branch information

The system was built so knowledge could be retrieved dynamically instead of hard-coding answers into prompts.

---

## Why This Stack

Twilio Media Streams is the telephony ingress point because it exposes raw audio over WebSockets for real-time applications. LiveKit Agents is the voice runtime because it explicitly supports voice AI workflows, tool use, and real-time pipelines. Gemini 3.1 Flash Live Preview is the low-latency dialogue model because Google documents it as optimized for real-time voice-first interaction. LangChain is the orchestration layer because its tools, structured outputs, and middleware are designed for controlled external action.

---

## Results

The system was built to:

* answer routine salon questions instantly
* handle booking workflows over the phone
* support French and English conversations
* keep responses grounded in live knowledge
* escalate edge cases to humans
* maintain low-latency voice interaction