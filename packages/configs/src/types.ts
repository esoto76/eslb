import type { InputOption, ModuleFormat, OutputOptions } from "rollup";

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

export type ESLBOutputOptions = Partial<
  Omit<
    OutputOptions,
    "dynamicImportFunction" | "namespaceToStringTag" | "preferConst"
  >
>;

export interface ESLBuildOptions {
  bDir: string;
  extensions: string[];
  entryFileName: string;
  formats: ESLBFormats;
  input: ESLBInputOption;
  modFileExt: ESLBExtension;
  modFileName: string;
  output: ESLBOutputOptions;
}
