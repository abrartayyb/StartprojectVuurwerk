import { fileURLToPath } from "url";
import path from "path";
import { defaults, rules } from "@hboictcloud/eslint-plugin";
import { rules as assignmentRules } from "@hboictcloud/eslint-plugin-programmingassignments";
import globals from "globals";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
    // Ignores
    {
        ignores: ["eslint.config.mjs"],
    },
    // Defaults
    ...defaults,
    {
        languageOptions: {
            globals: {
                ...globals.browser,
            },
            parserOptions: {
                project: "./tsconfig.json",
                tsconfigRootDir: __dirname,
            },
        },
    },
    // Rules
    ...rules,
    ...assignmentRules,
];
