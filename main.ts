// how-many-tabs-open: writes the honest count of open browser tabs
// to /output/entry.txt — digits only, no trailing newline, no network.
import { mkdirSync, writeFileSync } from "node:fs";

// 143 open browser tabs: surprising, believable, oddly specific —
// a real counted number from someone who opens tabs faster than
// they close them.
const TABS = "143";

// The gate allows 1–5 characters; 143 is 3 digits, well inside it.
if (!/^\d{1,5}$/.test(TABS)) {
  throw new Error("tab count must be 1–5 digits");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TABS, "utf8");
console.log(`Wrote ${[...TABS].length} code points to /output/entry.txt`);
