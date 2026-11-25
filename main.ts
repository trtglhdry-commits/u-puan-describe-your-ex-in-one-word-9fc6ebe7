// Describe Your Ex in One Word — make.fun entry (program/v1, Node 22, stdlib only).
// Writes a single word describing an ex to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Deterministic: no randomness, no network, no clock, no environment input.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "placeholder";

// Runtime guard: the gate requires 1–111 chars, a single word, not only
// whitespace. Fail loudly instead of shipping an invalid entry.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 111 ||
  /\s/.test(ENTRY) ||
  ENTRY.trim().length === 0
) {
  throw new Error(`entry violates the one-word gate: ${JSON.stringify(ENTRY)}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
