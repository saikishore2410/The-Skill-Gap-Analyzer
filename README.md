# 🎯 The Skill-Gap Analyzer & AI Career Coach

A premium, single-file, highly responsive web application designed to help job seekers instantly audit their resumes against any target job description. The application computes keyword matches entirely client-side, visualizes missing skill sets, and integrates an on-demand **AI Career Coach** powered directly by the **Google Gemini API**.

---

## ✨ Features

* **Dual-Column Context Input:** Easily paste your raw resume text side-by-side with the target job description.
* **Instant Match Engine:** Intuitively filters out common language stop-words to parse, isolate, and cross-reference core technical frameworks, methodologies, and tools.
* **Dynamic Visual Dashboard:** Features a polished, responsive SVG Match Score ring along with color-coded badges classifying *Critical Missing Skills* (Ruby Red) and *Recommended Skills* (Deep Amber).
* **AI Bullet Point Generator:** Outputs three metric-driven, actionable resume bullets tailored specifically to fill the identified gaps.
* **Integrated Gemini Chatbot:** Features an in-browser AI Career Coach that understands your specific gap analysis. Ask it to draft cover letters, rewrite summaries, or conduct practice interview questions.
* **Private & Secure:** Your data is kept safe. The system saves your Google Gemini API key inside your browser's local storage (`localStorage`)—no external servers or backend databases required.
* **100% Fluidly Responsive:** Uses advanced Tailwind CSS layouts that transition seamlessly from multi-panel desktop workflows to stacked vertical layouts on tablets and mobile devices.

---

## 🛠️ Tech Stack & Architecture

* **Frontend Framework:** Vanilla HTML5 & Modern ES6 JavaScript.
* **Styling Layer:** Tailwind CSS (via official CDN) utilizing micro-interactions, responsive grids, and clean glassmorphic components.
* **AI Model Engine:** `@google/generative-ai` library running the high-speed `gemini-2.5-flash` model directly inside the client browser.

---

## 🚀 Quick Start / Local Installation

Because this project is built entirely on a serverless, single-file schema, getting it running locally takes less than 30 seconds:

1. **Clone or Download the Repository:**
   ```bash
   git clone https://github.com
   cd skill-gap-analyzer
   ```

2. **Launch the Application:**
   Simply open the `index.html` (or `analyzer.html`) file directly inside any modern web browser (Chrome, Safari, Firefox, Edge). No `npm install`, node modules, or local servers required!

3. **Configure Your Engine:**
   * Go to the [Google AI Studio Console](https://google.com) to claim a free developer API key.
   * Paste your key into the collapsible security settings bar at the top of the app and click **Save Key**.
   * Fill out the inputs, hit **Analyze Match**, and start vibe-coding your way to a stronger resume!
