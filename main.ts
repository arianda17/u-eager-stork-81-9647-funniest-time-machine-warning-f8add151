import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const entry = "NOTICE: Grandfather paradox voids your birth certificate. Retroactively.";

const outputDir = "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, entry + "\n", "utf-8");
console.log(`Entry written (${entry.length} chars): ${entry}`);