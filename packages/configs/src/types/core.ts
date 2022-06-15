import type { InputOption, ModuleFormat } from "rollup";

export type ESLBExtension =
  | ".mjs"
  | ".js"
  | ".jsx"
  | ".json"
  | ".sass"
  | ".scss"
  | ".ts"
  | ".tsx"
  | ".vue";

export type ESLBFormats = ModuleFormat | ModuleFormat[];

export type ESLBInputOption = { [entryAlias: string]: string };

export type ESLBRInputOption = InputOption;
