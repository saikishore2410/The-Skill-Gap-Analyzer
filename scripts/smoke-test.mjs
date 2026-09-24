import { readFile } from 'node:fs/promises';

const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');

const required = [
  '<!DOCTYPE html>',
  '<title>The Skill-Gap Analyzer</title>',
  'id="resumeInput"',
  'id="jobInput"',
  'id="btnAnalyze"',
  'auditResumeMatch',
  '</html>',
];

for (const marker of required) {
  if (!html.includes(marker)) {
    throw new Error(`Missing required application marker: ${marker}`);
  }
}

if (html.includes('GEMINI_API_KEY')) {
  throw new Error('Client bundle must not contain a Gemini API key reference.');
}

console.log('Skill-Gap Analyzer smoke test passed.');
