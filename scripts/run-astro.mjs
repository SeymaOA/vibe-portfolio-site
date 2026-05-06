/**
 * Run Astro CLI from repo root with `web/` as the project directory.
 * Avoids nested `npm` calls (broken on Windows when npm.ps1 / PATH is restricted).
 */
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.join(__dirname, '..');
const webRoot = path.join(repoRoot, 'web');
const astroCli = path.join(repoRoot, 'node_modules', 'astro', 'astro.js');

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('Usage: node scripts/run-astro.mjs <dev|build|preview> [...flags]');
  process.exit(1);
}

const result = spawnSync(process.execPath, [astroCli, ...args], {
  cwd: webRoot,
  stdio: 'inherit',
  env: process.env,
});

process.exit(result.status ?? 1);
