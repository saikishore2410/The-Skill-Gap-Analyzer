# The Skill-Gap Analyzer

A client-side resume and job-description skill-gap analyzer.

## What it does

- Compares resume text with a target job description.
- Extracts and matches technical/professional skills.
- Calculates a match score.
- Highlights critical, recommended, and matched skills.
- Generates tailored resume bullet suggestions.
- Runs entirely in the browser; resume/job text is not sent to a backend by the current implementation.

## Tech stack

- HTML5
- JavaScript
- Vite
- Tailwind CSS

## Local development

```bash
npm install
npm run dev
```

Open the Vite URL shown in the terminal.

## Validation and production build

```bash
npm install
npm test
npm run lint
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Deployment

GitHub Actions runs the smoke test, TypeScript validation, and production build on pushes and pull requests. A separate GitHub Pages workflow repeats the smoke test and build, then deploys the `dist/` artifact when GitHub Pages is configured to use GitHub Actions.

## Security note

Do not commit API keys or other secrets. The current production UI is client-side and does not require a server secret for its core keyword-analysis functionality.
