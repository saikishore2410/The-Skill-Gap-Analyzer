import { readFile } from 'node:fs/promises';

const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');

const required = [
  '<!DOCTYPE html>',
  '<title>The Skill-Gap Analyzer</title>',
  'id="resumeInput"',
  'id="jobInput"',
  'id="btnAnalyze"',
  'auditResumeMatch',
  '<link rel="stylesheet" href="./src/styles.css">',
  '@import "tailwindcss";',
  '</html>',
];

for (const marker of required) {
  if (!html.includes(marker)) {
    throw new Error(`Missing required application marker: ${marker}`);
  }
}

if (html.includes('https://cdn.tailwindcss.com') || html.includes('tailwind.config')) {
  throw new Error('Production HTML must not depend on the Tailwind CDN.');
}

if (html.includes('GEMINI_API_KEY')) {
  throw new Error('Client bundle must not contain a Gemini API key reference.');
}

console.log('Skill-Gap Analyzer smoke test passed.');
