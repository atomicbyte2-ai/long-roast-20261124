import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Long Roast — one single-line roast, written byte-for-byte to entry.txt.
// No trailing newline: the file must contain exactly the line, nothing else.
const line =
  "I asked an AI to roast your code and it took a coffee break, filed for overtime, and is still stuck on your variable names.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
