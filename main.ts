import { writeFileSync, mkdirSync } from "node:fs";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "Every evening my daughter draws our house, and every evening she adds one small window on the second floor that our house does not have. This morning there was a small window on the second floor, and a small hand was waving from it.", "utf8");
