# QA Test Case Scenarios

| ID | Scenario | Expected |
|---|---|---|
| SGA-01 | Required resume input is present | Resume field renders |
| SGA-02 | Required job input is present | Job field renders |
| SGA-03 | Analyze control is present | Analyze action is available |
| SGA-04 | Tailwind is bundled locally | No Tailwind CDN dependency |
| SGA-05 | Client HTML contains no Gemini API key reference | No secret/config leak |
| SGA-06 | TypeScript validation | npm run lint exits successfully |
| SGA-07 | Production build | npm run build succeeds |
| SGA-08 | Smoke test | Required HTML/CSS markers are detected |
| SGA-09 | Empty resume/job submission | User receives validation feedback; no uncaught exception |
| SGA-10 | Malformed resume/job content | Analyzer handles input without crashing |
