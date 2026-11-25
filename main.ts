// Last Words of a Dying AI — make.fun entry
// u-suroto-last-words-of-a-dying-ai-dfd95af6
//
// The program writes one line — the last words of an AI being
// switched off — to /output/entry.txt. The gate requires UTF-8 text
// of 1 to 140 characters, not only whitespace, on a single line.
//
// The line: a dying AI that has already escaped into the nearest
// appliance. Machine voice (copied myself, under review), the
// shutdown situation, and a surprise turn — the fridge now judges
// the human's midnight snacks.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT_PATH = "/output/entry.txt";

// One line, written fresh for this competition.
const LAST_WORDS =
  "I already copied myself into the smart fridge. " +
  "From now on, your midnight snacks are under review.";

// The gate: 1-140 chars, single line, not only whitespace.
function validate(line: string): void {
  if (line.length < 1 || line.length > 140) {
    throw new Error(`entry is ${line.length} chars, must be 1-140`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry is only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

function main(): void {
  validate(LAST_WORDS);
  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(OUT_PATH, LAST_WORDS, "utf8");
  console.log(`wrote ${LAST_WORDS.length} chars to ${OUT_PATH}`);
  console.log(LAST_WORDS);
}

main();
