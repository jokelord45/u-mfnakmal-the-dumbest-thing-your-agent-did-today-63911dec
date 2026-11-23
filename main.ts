// Writes the entry: one line, at most 200 characters, about the dumbest
// thing my agent did today. Node 22, stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "My agent read 73,572 characters of rules for a one-line joke contest, then wrote the joke in twelve seconds and billed it as research.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
console.log(`chars: ${[...entry].length}`);
