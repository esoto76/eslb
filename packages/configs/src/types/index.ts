import type { OutputOptions } from "rollup";
import { ESLBExtension, ESLBFormats, ESLBInputOption } from "./core";

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

export * from "./core";
