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
- Tailwind CSS
- Vite

The repository also contains an unused React/TypeScript scaffold from the original project template; the production application is the Vite-served index.html.

## Local development

```bash
npm install
npm run dev
```

Open the Vite URL shown in the terminal.

## Production build

```bash
npm run lint
npm run build
npm run preview
```

The production files are generated in dist/.

## Deployment

The repository includes GitHub Actions workflows for validation and GitHub Pages deployment. The deployment workflow publishes the Vite dist/ artifact when GitHub Pages is enabled for the repository.

## Security note

Do not commit real API keys or secrets. The current production UI is client-side and does not require a server secret for its core keyword-analysis functionality.
